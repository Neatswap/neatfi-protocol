// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {INeatFiProtocolStorage} from "../../../interfaces/storageInterfaces/INeatFiProtocolStorage.sol";
import {IAssetTransfer} from "../../../interfaces/assetTransferInterfaces/IAssetTransfer.sol";
import {AssetStructsUpgradeable} from "../../protocolStorage/assetStorage/AssetStructsUpgradeable.sol";
import {AssetEnumsUpgradeable} from "../../protocolStorage/assetStorage/AssetEnumsUpgradeable.sol";
import {AccessControlUpgradeable} from "../../access/AccessControlUpgradeable.sol";
import {RoleConstantsUpgradeable} from "../../access/RoleConstantsUpgradeable.sol";
import {AssetSwapStorageUpgradeable} from "./AssetSwapStorageUpgradeable.sol";
import {AssetSwapEventsUpgradeable} from "./AssetSwapEventsUpgradeable.sol";

contract AssetSwapOperationsUpgradeable is 
  AssetEnumsUpgradeable,
  AssetStructsUpgradeable,
  RoleConstantsUpgradeable, 
  AccessControlUpgradeable,
  AssetSwapEventsUpgradeable,
  AssetSwapStorageUpgradeable 
  {
  address internal neatFiProtocolStorage;
  address internal assetTransfer;

  function _updateNeatFiProtocolStorageAddress(address newNeatFiProtocolStorage) internal {
    neatFiProtocolStorage = newNeatFiProtocolStorage;
  }

  function _updateAssetTransferAddress(address newAssetTransfer) internal {
    assetTransfer = newAssetTransfer;
  }

  /// Makes an Order as a bid for another Order.
  /// @param tokens - array of Token structs.
  /// @param orderType - type of the Order.
  /// @param listingTime - timestamp when the Order becomes OPEN.
  /// @param expirationTime - Order expiration timestamp.
  /// @param startPrice - starting price of the Order, only for SELL and AUCTION.
  /// @param endPrice - price at the moment of Order filling.
  /// @param salt - unique number to make sure there are no similar Order hashes.
  /// @param orderHash - hash of the main Order.
  function _makeBid(
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
  ) internal returns (bytes32 bidHash){
    require(
      INeatFiProtocolStorage(neatFiProtocolStorage).isValidOrder(orderHash), 
      "AssetSwapOperationsUpgradeable::_makeBid: invalid order."
    );

    Order memory order = INeatFiProtocolStorage(neatFiProtocolStorage).getOrder(orderHash);

    require(
      bidder != order.maker, 
      "AssetSwapOperationsUpgradeable::_makeBid: self-bidding is not available."
    );

    bidHash = INeatFiProtocolStorage(neatFiProtocolStorage).makeOrder(
      tokens, 
      orderType,
      bidder,
      listingTime, 
      expirationTime, 
      startPrice, 
      endPrice, 
      salt, 
      actorKey
    );

    bidsByOrder[orderHash].push(bidHash);

    emit BidForOrder(orderHash, bidHash);

    return bidHash;
  }

  /// Maker approves and resolves a SWAP.
  /// @dev swaps the ownership of Order and bid Tokens.
  /// @param orderHash - Order struct.
  /// @param bidHash - bid Order struct.
  function _approveAndResolveSwap(
    address maker,
    bytes32 orderHash,
    bytes32 bidHash,
    bytes calldata orderData,
    bytes calldata bidData
  ) internal {
    require(
      INeatFiProtocolStorage(neatFiProtocolStorage).isValidOrder(orderHash), 
      "AssetSwapOperationsUpgradeable::_approveAndResolveSwap: invalid order."
    );

    require(
      INeatFiProtocolStorage(neatFiProtocolStorage).isValidOwner(orderHash, maker), 
      "AssetSwapOperationsUpgradeable::_approveAndResolveSwap: ownership check failed."
    );

    require(
      INeatFiProtocolStorage(neatFiProtocolStorage).isValidOrder(bidHash), 
      "AssetSwapOperationsUpgradeable::_approveAndResolveSwap: invalid order."
    );

    Order memory order = INeatFiProtocolStorage(neatFiProtocolStorage).getOrder(orderHash);
    Order memory bid = INeatFiProtocolStorage(neatFiProtocolStorage).getOrder(bidHash);
    
    swapEscrowParties[orderHash] = bidHash;

    INeatFiProtocolStorage(neatFiProtocolStorage).changeOrderStatus(orderHash, AssetOrderStatus.CLOSED);
    INeatFiProtocolStorage(neatFiProtocolStorage).changeOrderStatus(bidHash, AssetOrderStatus.CLOSED);

    IAssetTransfer(assetTransfer).transferResolver(order, maker, bid.maker, orderData);
    IAssetTransfer(assetTransfer).transferResolver(bid, bid.maker, maker, bidData);
  }

  function __AssetSwapOperations_init() internal initializer {
    __AssetStructs_init();
    __AssetEnums_init();
    __AssetSwapStorage_init();
    __AssetSwapEvents_init(); 
    __RoleConstants_init();
    __AccessControl_init();
  }


}