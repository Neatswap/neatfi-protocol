// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {INeatFiProtocolStorage} from "../../../interfaces/storageInterfaces/INeatFiProtocolStorage.sol";
import {IAssetTransfer} from "../../../interfaces/assetTransferInterfaces/IAssetTransfer.sol";
import {AssetStructsUpgradeable} from "../../protocolStorage/assetStorage/AssetStructsUpgradeable.sol";
import {AssetEnumsUpgradeable} from "../../protocolStorage/assetStorage/AssetEnumsUpgradeable.sol";
import {AssetAuctionStorageUpgradeable} from "./AssetAuctionStorageUpgradeable.sol";
import {AssetAuctionEventsUpgradeable} from "./AssetAuctionEventsUpgradeable.sol";
import {AccessControlUpgradeable} from "../../access/AccessControlUpgradeable.sol";
import {RoleConstantsUpgradeable} from "../../access/RoleConstantsUpgradeable.sol";

contract AssetAuctionOperationsUpgradeable is
  AssetEnumsUpgradeable,
  AssetStructsUpgradeable,
  AssetAuctionStorageUpgradeable, 
  AssetAuctionEventsUpgradeable, 
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

  /// Changes the price of an Order.
  /// @dev only for Dutch auction.
  /// @param orderHash - Order hash.
  /// @param newPrice - the new price of the Order.
  function _decreaseDucthAuctionPrice(
    address maker, 
    bytes32 orderHash, 
    uint256 newPrice
    ) internal {
    require(INeatFiProtocolStorage(neatFiProtocolStorage).isValidOwner(orderHash, maker), 
    "AssetAuctionOperationsUpgradeable::_decreaseDucthAuctionPrice: ownership check failed."
    );

    require(INeatFiProtocolStorage(neatFiProtocolStorage).isValidOrder(orderHash), 
    "AssetAuctionOperationsUpgradeable::_decreaseDucthAuctionPrice: invalid order."
    );

    Order memory order = INeatFiProtocolStorage(neatFiProtocolStorage).getOrder(orderHash);

    require(
      order.orderType == AssetOrderType.DUTCH_AUCTION,
      "AssetAuctionOperationsUpgradeable::_decreaseDucthAuctionPrice: wrong order type."
    );

    require(
      newPrice < order.endPrice, 
      "AssetAuctionOperationsUpgradeable::_decreaseDucthAuctionPrice: price can only be decreased."
      );

    INeatFiProtocolStorage(neatFiProtocolStorage).changeOrderEndPrice(orderHash, newPrice);
  }

  function _increaseEnglishAuctionPrice(
    address maker, 
    bytes32 orderHash, 
    uint256 newPrice
  ) internal {
    require(INeatFiProtocolStorage(neatFiProtocolStorage).isValidOwner(orderHash, maker), 
    "AssetAuctionOperationsUpgradeable::_increaseEnglishAuctionPrice: ownership check failed."
    );

    require(INeatFiProtocolStorage(neatFiProtocolStorage).isValidOrder(orderHash), 
    "AssetAuctionOperationsUpgradeable::_increaseEnglishAuctionPrice: invalid order."
    );

    Order memory order = INeatFiProtocolStorage(neatFiProtocolStorage).getOrder(orderHash);

    require(
      order.orderType == AssetOrderType.ENGLISH_AUCTION,
      "AssetAuctionOperationsUpgradeable::_increaseEnglishAuctionPrice: wrong order type."
    );

    require(
      newPrice > order.endPrice, 
      "AssetAuctionOperationsUpgradeable::_increaseEnglishAuctionPrice: price can only be increased."
      );

    INeatFiProtocolStorage(neatFiProtocolStorage).changeOrderEndPrice(orderHash, newPrice);
  }

  /// Places a bid to be paid in Ether at the Order filling.
  /// @dev only for ENGLISH_AUCTION.
  /// @param orderHash - Order hash.
  /// @param bidValue - new bid value.
  function _bidForEnglishAuction(
    address bidder, 
    bytes32 orderHash, 
    uint256 bidValue
  ) internal {
    require(INeatFiProtocolStorage(neatFiProtocolStorage).isValidOrder(orderHash), 
    "AssetAuctionOperationsUpgradeable::_bidForEnglishAuction: invalid order."
    );

    Order memory order = INeatFiProtocolStorage(neatFiProtocolStorage).getOrder(orderHash);

    require(
      order.orderType == AssetOrderType.ENGLISH_AUCTION,
      "AssetAuctionOperationsUpgradeable::_bidForEnglishAuction: wWrong order type."
    );

    require(
      bidValue > order.endPrice,
      "AssetAuctionOperations::_bidForEnglishAuction: invalid bid value."
    );

    INeatFiProtocolStorage(neatFiProtocolStorage).changeOrderEndPrice(orderHash, bidValue);

    lastBidderForOrder[orderHash] = bidder;

    if (block.timestamp < order.expirationTime - 300) {
      INeatFiProtocolStorage(neatFiProtocolStorage).changeOrderExpirationTime(orderHash, order.expirationTime + 300);
    }

    emit EnglishAuctionBid(bidder, orderHash, bidValue);
  }

  /// Places a bid to be paid in Ether at the Order filling.
  /// @dev only for ENGLISH_AUCTION.
  /// @param orderHash - Order hash.
  /// @param bidValue - new bid value.
  function _bidForDutchAuction(
    address bidder, 
    bytes32 orderHash, 
    uint256 bidValue
  ) internal {
    require(INeatFiProtocolStorage(neatFiProtocolStorage).isValidOrder(orderHash), 
    "AssetAuctionOperationsUpgradeable::_bidForEnglishAuction: invalid order."
    );

    Order memory order = INeatFiProtocolStorage(neatFiProtocolStorage).getOrder(orderHash);

    require(
      order.orderType == AssetOrderType.DUTCH_AUCTION,
      "AssetAuctionOperationsUpgradeable::_bidForEnglishAuction: wWrong order type."
    );

    require(
      bidValue == order.endPrice,
      "AssetAuctionOperations::_bidForEnglishAuction: invalid bid value."
    );

    INeatFiProtocolStorage(neatFiProtocolStorage).changeOrderEndPrice(orderHash, bidValue);

    lastBidderForOrder[orderHash] = bidder;

    if (block.timestamp < order.expirationTime - 300) {
      INeatFiProtocolStorage(neatFiProtocolStorage).changeOrderExpirationTime(orderHash, order.expirationTime + 300);
    }

    emit DutchAuctionBid(bidder, orderHash, bidValue);
  }

  /// Maker approves the last bidder.
  /// @dev only for AUCTION.
  /// @param orderHash - Order struct hash.
  /// @param maker - Order maker
  function _approveLastBid(address maker, bytes32 orderHash) internal {
    require(INeatFiProtocolStorage(neatFiProtocolStorage).isValidOrder(orderHash), 
    "AssetAuctionOperations::_approveLastBid: invalid order."
    );

    require(INeatFiProtocolStorage(neatFiProtocolStorage).isValidOwner(orderHash, maker), 
    "AssetAuctionOperations::_approveLastBid: ownership check failed."
    );

    Order memory order = INeatFiProtocolStorage(neatFiProtocolStorage).getOrder(orderHash);

    require(
      order.orderType == AssetOrderType.ENGLISH_AUCTION ||
      order.orderType == AssetOrderType.DUTCH_AUCTION,
      "Wrong order type"
    );

    address bidder = lastBidderForOrder[orderHash];

    INeatFiProtocolStorage(neatFiProtocolStorage).changeOrderStatus(orderHash, AssetOrderStatus.PROCESSING);

    emit LastBidApproved(orderHash, bidder);
  }

  /// Claims an AUCTION Order.
  /// @dev the bider must be approved by the Order maker.
  /// @param orderHash - Order struct hash.
  /// @param bidder - adddress of the last bidder - the claimant.
  function _claimAuction(address bidder, bytes32 orderHash, bytes calldata data) internal {
    Order memory order = INeatFiProtocolStorage(neatFiProtocolStorage).getOrder(orderHash);

    require(
      lastBidderForOrder[orderHash] == bidder,
      "AssetAuctionOperations::_claimAuction: claimant is not the last approved bidder of this auction."
    );

    require(
      order.status == AssetOrderStatus.PROCESSING,
      "AssetAuctionOperations::_claimAuction: order is not in processing."
    );

    INeatFiProtocolStorage(neatFiProtocolStorage).changeOrderStatus(orderHash, AssetOrderStatus.CLOSED);
    
    IAssetTransfer(assetTransfer).transferResolver(order, order.maker, bidder, data);

    emit AuctionClaimed(orderHash, bidder);
  }

  function __AssetAuctionOperations_init() internal initializer {
    __AssetStructs_init();
    __AssetEnums_init();
    __AssetAuctionStorage_init();
    __AssetAuctionEvents_init(); 
    __RoleConstants_init();
    __AccessControl_init();
  }
}