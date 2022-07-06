
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {INeatFiProtocolStorage} from "../../../interfaces/storageInterfaces/INeatFiProtocolStorage.sol";
import {IAssetTransfer} from "../../../interfaces/assetTransferInterfaces/IAssetTransfer.sol";
import {AssetStructsUpgradeable} from "../../protocolStorage/assetStorage/AssetStructsUpgradeable.sol";
import {AssetEnumsUpgradeable} from "../../protocolStorage/assetStorage/AssetEnumsUpgradeable.sol";
import {AccessControlUpgradeable} from "../../access/AccessControlUpgradeable.sol";
import {RoleConstantsUpgradeable} from "../../access/RoleConstantsUpgradeable.sol";

contract AssetSellOperationsUpgradeable is
  AssetEnumsUpgradeable,
  AssetStructsUpgradeable,
  RoleConstantsUpgradeable, 
  AccessControlUpgradeable
  {
  address internal neatFiProtocolStorage;
  address internal assetTransfer;

  function _updateNeatFiProtocolStorageAddress(address newNeatFiProtocolStorage) internal {
    neatFiProtocolStorage = newNeatFiProtocolStorage;
  }

  function _updateAssetTransferAddress(address newAssetTransfer) internal {
    assetTransfer = newAssetTransfer;
  }

  /// Instantly buys the Token(s) of the Order for Ether.
  /// @dev only for SELL.
  /// @param orderHash - Order hash.
  function _buyItNow(
    bytes32 orderHash, 
    uint256 purchaseValue, 
    address bidder, 
    bytes calldata data
    ) internal {
    require(!INeatFiProtocolStorage(neatFiProtocolStorage).isValidOwner(orderHash, msg.sender), 
    "AssetSellOperationsUpgradeable::_buyItNow: buyer can not be the order maker."
    );

    require(INeatFiProtocolStorage(neatFiProtocolStorage).isValidOrder(orderHash), 
    "AssetSellOperationsUpgradeable::_buyItNow: invalid order."
    );

    Order memory order = INeatFiProtocolStorage(neatFiProtocolStorage).getOrder(orderHash);

    require(
      order.orderType == AssetOrderType.SELL,
      "AssetSellOperationsUpgradeable::_buyItNow: wrong order type."
      );
    
    require(
      order.endPrice == purchaseValue,
      "AssetSellOperationsUpgradeable::_buyItNow: wrong purchase value."
      );

    INeatFiProtocolStorage(neatFiProtocolStorage).changeOrderStatus(orderHash, AssetOrderStatus.CLOSED);
    IAssetTransfer(assetTransfer).transferResolver(order, order.maker, bidder, data);
  }

  function __AssetSellOperations_init() internal initializer {
    __AssetStructs_init();
    __AssetEnums_init();
    __RoleConstants_init();
    __AccessControl_init();
  }
}