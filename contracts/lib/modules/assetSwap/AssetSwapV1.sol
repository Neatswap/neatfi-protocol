// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {AssetSwapOperationsUpgradeable} from "./AssetSwapOperationsUpgradeable.sol";
import {UUPSUpgradeable} from "../../proxy/UUPSUpgradeable.sol";

contract AssetSwapV1 is AssetSwapOperationsUpgradeable, UUPSUpgradeable {
  string internal name;
  string internal currentVersion;

  function _setVersion(string memory newVersion) internal 
  onlyRole(PROTOCOL_ADMIN) {
    currentVersion = newVersion;
  }

  function updateNeatFiProtocolStorageAddress(address newNeatFiProtocolStorage) external
  onlyRole(PROTOCOL_ADMIN) {
    _updateNeatFiProtocolStorageAddress(newNeatFiProtocolStorage);
  }

  function updateAssetTransferAddress(address newAssetTransfer) external
  onlyRole(PROTOCOL_ADMIN) {
    _updateAssetTransferAddress(newAssetTransfer);
  }

  function makeBid(
    address bidder,
    Token[] calldata tokens,
    AssetOrderType orderType,
    uint256 listingTime,
    uint256 expirationTime,
    uint256 startPrice,
    uint256 endPrice,
    uint256 salt,
    bytes32 orderHash,
    bytes32 actorKey
  ) external 
  onlyRole(AUTHORIZED_OPERATOR) {
    _makeBid(
      bidder, 
      tokens, 
      orderType, 
      listingTime, 
      expirationTime, 
      startPrice, 
      endPrice, 
      salt, 
      orderHash, 
      actorKey
    );
  }

  function approveAndResolveSwap(
    address maker,
    bytes32 orderHash,
    bytes32 bidHash,
    bytes calldata orderData,
    bytes calldata bidData
  ) external
  onlyRole(AUTHORIZED_OPERATOR) {
    _approveAndResolveSwap(maker, orderHash, bidHash, orderData, bidData);
  }

  function _authorizeUpgrade(address newImplementation) internal override 
  onlyRole(PROTOCOL_ADMIN) {}

  function initialize(
    address neatFiProtocolStorage, 
    address assetTransfer
    ) public initializer {
    __UUPSUpgradeable_init();
    __AssetSwapOperations_init();

    _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
    _updateNeatFiProtocolStorageAddress(neatFiProtocolStorage);
    _updateAssetTransferAddress(assetTransfer);
    name = "NeatFi Asset Swap Module";
    _setVersion("1.0.0");
  }
}
