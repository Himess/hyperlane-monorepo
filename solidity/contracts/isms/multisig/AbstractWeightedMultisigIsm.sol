// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity >=0.8.0;

// ============ External Imports ============
import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

// ============ Internal Imports ============
import {IInterchainSecurityModule} from "../../interfaces/IInterchainSecurityModule.sol";
import {IWeightedMultisigIsm} from "../../interfaces/isms/IWeightedMultisigIsm.sol";
import {Message} from "../../libs/Message.sol";
import {MerkleLib} from "../../libs/Merkle.sol";

/**
 * @title WeightedMultisigIsm
 * @notice Manages per-domain m-of-n Validator sets with stake weights that are used to verify
 * interchain messages.
 * @dev See ./AbstractMerkleRootWeightedIsm.sol and ./AbstractMessageIdWeightedIsm.sol
 * for concrete implementations of `digest` and `signatureAt`.
 * @dev See ./StaticWeightedIsm.sol for concrete implementations.
 */
abstract contract AbstractWeightedMultisigIsm is IWeightedMultisigIsm {
    // ============ Constants ============
    uint96 public constant BASIS_POINTS = 10000;

    // ============ State Variables ============
    ValidatorInfo[] public validators;
    uint96 public thresholdWeight;

    // ============ Events ============
    event ValidatorSetUpdated(
        ValidatorInfo[] newValidators,
        uint96 newThresholdWeight
    );

    /**
     * @notice Returns the set of validators responsible for verifying _message
     * and the number of signatures required
     * @dev Can change based on the content of _message
     * @dev Signatures provided to `verify` must be consistent with validator ordering
     * @param _message Hyperlane formatted interchain message
     * @return validators The array of validator addresses
     * @return threshold The number of validator signatures needed
     */
    function validatorsAndThresholdWeight(
        bytes calldata _message
    ) public view virtual returns (ValidatorInfo[] memory, uint96) {
        return (validators, thresholdWeight);
    }

    function updateValidatorSet(
        ValidatorInfo[] calldata _newValidators,
        uint96 _newThresholdWeight
    ) external {
        require(_newValidators.length > 0, "Validator set cannot be empty");
        require(
            _newThresholdWeight > 0 && _newThresholdWeight <= BASIS_POINTS,
            "Invalid threshold weight"
        );

        uint96 totalWeight = 0;
        for (uint256 i = 0; i < _newValidators.length; i++) {
            require(
                _newValidators[i].signingKey != address(0),
                "Invalid validator address"
            );
            require(
                _newValidators[i].weight > 0,
                "Validator weight must be positive"
            );
            totalWeight += _newValidators[i].weight;
        }
        require(
            totalWeight == BASIS_POINTS,
            "Total weight must equal BASIS_POINTS"
        );

        delete validators;
        for (uint256 i = 0; i < _newValidators.length; i++) {
            validators.push(_newValidators[i]);
        }
        thresholdWeight = _newThresholdWeight;

        emit ValidatorSetUpdated(_newValidators, _newThresholdWeight);
    }

    /**
     * @notice Returns the digest to be used for signature verification.
     * @param _metadata ABI encoded module metadata
     * @param _message Formatted Hyperlane message (see Message.sol).
     * @return digest The digest to be signed by validators
     */
    function digest(
        bytes calldata _metadata,
        bytes calldata _message
    ) internal view virtual returns (bytes32);

    /**
     * @notice Returns the signature at a given index from the metadata.
     * @param _metadata ABI encoded module metadata
     * @param _index The index of the signature to return
     * @return signature Packed encoding of signature (65 bytes)
     */
    function signatureAt(
        bytes calldata _metadata,
        uint256 _index
    ) internal pure virtual returns (bytes calldata);

    // ============ Public Functions ============

    /**
     * @notice Requires that m-of-n validators verify a merkle root,
     * and verifies a merkle proof of `_message` against that root.
     * @dev Optimization relies on the caller sorting signatures in the same order as validators.
     * @dev Employs https://www.geeksforgeeks.org/two-pointers-technique/ to minimize gas usage.
     * @param _metadata ABI encoded module metadata
     * @param _message Formatted Hyperlane message (see Message.sol).
     */
    function verify(
        bytes calldata _metadata,
        bytes calldata _message
    ) public view returns (bool) {
        bytes32 _digest = digest(_metadata, _message);
        (
            ValidatorInfo[] memory _validators,
            uint96 _thresholdWeight
        ) = validatorsAndThresholdWeight(_message);
        require(
            _thresholdWeight > 0 && _thresholdWeight <= BASIS_POINTS,
            "Invalid threshold weight"
        );

        uint256 _validatorCount = _validators.length;
        uint256 _validatorIndex = 0;
        uint96 _totalWeight = 0;

        // Assumes that signatures are ordered by validator
        for (
            uint256 i = 0;
            _totalWeight < _thresholdWeight && i < _validatorCount;
            ++i
        ) {
            address _signer = ECDSA.recover(_digest, signatureAt(_metadata, i));
            // Loop through remaining validators until we find a match
            while (
                _validatorIndex < _validatorCount &&
                _signer != _validators[_validatorIndex].signingKey
            ) {
                ++_validatorIndex;
            }
            // Fail if we never found a match
            require(_validatorIndex < _validatorCount, "Invalid signer");

            // Add the weight of the current validator
            _totalWeight += _validators[_validatorIndex].weight;
            ++_validatorIndex;
        }
        require(
            _totalWeight >= _thresholdWeight,
            "Insufficient validator weight"
        );
        return true;
    }
}