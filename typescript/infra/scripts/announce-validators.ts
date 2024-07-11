import { assert } from 'console';
import { ethers } from 'ethers';
import { readFileSync } from 'fs';
import * as path from 'path';

import {
  ChainName,
  HTTP_LOCATION_PREFIX,
  S3_LOCATION_PREFIX,
} from '@hyperlane-xyz/sdk';

import { getChains } from '../config/registry.js';
import { InfraS3Validator } from '../src/agents/aws/validator.js';
import { CheckpointSyncerType } from '../src/config/agent/validator.js';
import { isEthereumProtocolChain } from '../src/utils/utils.js';

import {
  getAgentConfig,
  getArgs as getRootArgs,
  withContext,
} from './agent-utils.js';
import { getHyperlaneCore } from './core-utils.js';

function getArgs() {
  return withContext(getRootArgs())
    .describe('chain', 'chain on which to register')
    .choices('chain', getChains())
    .describe(
      'location',
      'location, e.g. "s3://hyperlane-testnet4-sepolia-validator-0/us-east-1" or "https://hyperlane-v3-validator-signatures-everstake-one-arbitrum.s3.us-east-2.amazonaws.com"',
    )
    .string('location')
    .check(({ chain, location }) => {
      if (!!location && !chain) {
        throw new Error('Must set chain when setting location');
      }
      return true;
    }).argv;
}

async function main() {
  const { environment, context, chain, location } = await getArgs();
  const { core, multiProvider } = await getHyperlaneCore(environment);

  const announcements: {
    storageLocation: string;
    announcement: any;
  }[] = [];
  const chains: ChainName[] = [];
  if (location) {
    chains.push(chain!);
    if (
      location.startsWith(S3_LOCATION_PREFIX) ||
      location.startsWith(HTTP_LOCATION_PREFIX)
    ) {
      const validator = await InfraS3Validator.fromStorageLocation(location);
      announcements.push({
        storageLocation: validator.storageLocation(),
        announcement: await validator.getSignedAnnouncement(),
      });
    } else if (location.startsWith('file://')) {
      const announcementFilepath = path.join(
        location.substring(7),
        'announcement.json',
      );
      announcements.push({
        storageLocation: location,
        announcement: JSON.parse(readFileSync(announcementFilepath, 'utf-8')),
      });
    } else {
      throw new Error(`Unknown location type %{location}`);
    }
  } else {
    const agentConfig = getAgentConfig(context, environment);
    if (agentConfig.validators == undefined) {
      console.warn('No validators provided for context');
      return;
    }
    await Promise.all(
      Object.entries(agentConfig.validators.chains)
        .filter(([validatorChain, _]) => {
          // If a chain arg was specified, filter to only that chain
          if (!!chain && chain !== validatorChain) {
            return false;
          }
          return isEthereumProtocolChain(validatorChain);
        })
        .map(async ([validatorChain, validatorChainConfig]) => {
          for (const validatorBaseConfig of validatorChainConfig.validators) {
            if (
              validatorBaseConfig.checkpointSyncer.type ==
              CheckpointSyncerType.S3
            ) {
              const contracts = core.getContracts(validatorChain);
              const localDomain = multiProvider.getDomainId(validatorChain);
              const validator = new InfraS3Validator(
                {
                  localDomain,
                  address: validatorBaseConfig.address,
                  mailbox: contracts.mailbox.address,
                },
                validatorBaseConfig.checkpointSyncer,
              );
              announcements.push({
                storageLocation: validator.storageLocation(),
                announcement: await validator.getSignedAnnouncement(),
              });
              chains.push(validatorChain);
            }
          }
        }),
    );
  }

  for (let i = 0; i < announcements.length; i++) {
    const { storageLocation, announcement } = announcements[i];
    if (!announcement) {
      console.info(`No announcement for storageLocation ${storageLocation}`);
    }
    const chain = chains[i];
    const contracts = core.getContracts(chain);
    const validatorAnnounce = contracts.validatorAnnounce;
    const address = announcement.value.validator;
    const location = announcement.value.storage_location;
    const announcedLocations =
      await validatorAnnounce.getAnnouncedStorageLocations([address]);
    assert(announcedLocations.length == 1);
    const announced = announcedLocations[0].includes(location);
    if (!announced) {
      const signature = ethers.utils.joinSignature(announcement.signature);
      console.log(
        `[${chain}] Announcing ${address} checkpoints at ${location}`,
      );
      await validatorAnnounce.announce(
        address,
        location,
        signature,
        multiProvider.getTransactionOverrides(chain),
      );
    } else {
      console.log(
        `[${chain}] Already announced ${address} checkpoints at ${location}`,
      );
    }
  }
}

main().catch(console.error);
