use std::fmt::Debug;

use async_trait::async_trait;
use derive_more::{AsRef, Deref};
use derive_new::new;

use eyre::{Context, Result};
use hyperlane_base::{MultisigCheckpointSyncer, ValidatorWithWeight, Weight};
use hyperlane_core::{unwrap_or_none_result, HyperlaneMessage, H256};
use tracing::{debug, warn};

use crate::msg::metadata::MessageMetadataBuilder;

use super::base::{MetadataToken, MultisigIsmMetadataBuilder, MultisigMetadata};

#[derive(Debug, Clone, Deref, new, AsRef)]
pub struct MessageIdMultisigMetadataBuilder(MessageMetadataBuilder);

#[async_trait]
impl MultisigIsmMetadataBuilder for MessageIdMultisigMetadataBuilder {
    fn token_layout(&self) -> Vec<MetadataToken> {
        vec![
            MetadataToken::CheckpointMerkleTreeHook,
            MetadataToken::CheckpointMerkleRoot,
            MetadataToken::CheckpointIndex,
            MetadataToken::Signatures,
        ]
    }

    async fn fetch_metadata(
        &self,
        validators: &[ValidatorWithWeight],
        threshold_weight: Weight,
        message: &HyperlaneMessage,
        checkpoint_syncer: &MultisigCheckpointSyncer,
    ) -> Result<Option<MultisigMetadata>> {
        let message_id = message.id();

        const CTX: &str = "When fetching MessageIdMultisig metadata";
        let leaf_index = unwrap_or_none_result!(
            self.get_merkle_leaf_id_by_message_id(message_id)
                .await
                .context(CTX)?,
            debug!(
                ?message,
                "No merkle leaf found for message id, must have not been enqueued in the tree"
            )
        );

        // Update the validator latest checkpoint metrics.
        let _ = checkpoint_syncer
            .get_validator_latest_checkpoints_and_update_metrics(
                &validators.iter().map(|vw| vw.validator).collect::<Vec<_>>(),
                self.origin_domain(),
                self.destination_domain(),
            )
            .await;

        let quorum_checkpoint = unwrap_or_none_result!(
            checkpoint_syncer
                .fetch_checkpoint(validators, threshold_weight, leaf_index)
                .await
                .context(CTX)?,
            debug!("No quorum checkpoint found")
        );

        if quorum_checkpoint.checkpoint.message_id != message_id {
            warn!(
                "Quorum checkpoint message id {} does not match message id {}",
                quorum_checkpoint.checkpoint.message_id, message_id
            );
            if quorum_checkpoint.checkpoint.index != leaf_index {
                warn!(
                    "Quorum checkpoint index {} does not match leaf index {}",
                    quorum_checkpoint.checkpoint.index, leaf_index
                );
            }
            return Ok(None);
        }

        Ok(Some(MultisigMetadata::new(
            quorum_checkpoint,
            leaf_index,
            None,
        )))
    }

    // fetches the validators and threshold for the unit variant - each validator has a weight of 1
    async fn ism_validator_requirements(
        &self,
        ism_address: H256,
        message: &HyperlaneMessage,
    ) -> Result<(Vec<ValidatorWithWeight>, Weight)> {
        const CTX: &str = "When fetching MultisigIsm metadata";
        let multisig_ism = self
            .as_ref()
            .build_multisig_ism(ism_address)
            .await
            .context(CTX)?;

        let (validators, threshold) = multisig_ism
            .validators_and_threshold(message)
            .await
            .context(CTX)?;

        let unit_validators: Vec<ValidatorWithWeight> = validators
            .into_iter()
            .map(|v| ValidatorWithWeight::new(v, 1))
            .collect();

        Ok((unit_validators, threshold as Weight))
    }
}
