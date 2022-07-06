// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {AssetSellOperationsUpgradeable} from "./AssetSellOperationsUpgradeable.sol";
import {UUPSUpgradeable} from "../../proxy/UUPSUpgradeable.sol";

contract AssetSellV1 is AssetSellOperationsUpgradeable, UUPSUpgradeable {
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

  function buyItNow(
    bytes32 orderHash,
    uint256 purchaseValue,
    address bidder,
    bytes calldata data
  ) external onlyRole(AUTHORIZED_OPERATOR) {
    _buyItNow(orderHash, purchaseValue, bidder, data);
  }

  function _authorizeUpgrade(address newImplementation) internal override 
  onlyRole(PROTOCOL_ADMIN) {}

  function initialize(
    address neatFiProtocolStorage, 
    address assetTransfer
    ) public initializer {
    __UUPSUpgradeable_init();
    __AssetSellOperations_init();

    _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
    _updateNeatFiProtocolStorageAddress(neatFiProtocolStorage);
    _updateAssetTransferAddress(assetTransfer);
    name = "NeatFi Asset Sell Module";
    _setVersion("1.0.0");
  }
}