// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {AssetAuctionOperationsUpgradeable} from "./AssetAuctionOperationsUpgradeable.sol";
import {UUPSUpgradeable} from "../../proxy/UUPSUpgradeable.sol";
//TODO documentation should mention that this works only with ENGLISH_AUCTION and DUTCH_AUCTION ordertypes
// TODO provide docs on how the logic of this module works
// TODO make these upgradeable

contract AssetAuctionV1 is AssetAuctionOperationsUpgradeable, UUPSUpgradeable {
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

  function decreaseDucthAuctionPrice(address maker, bytes32 orderHash, uint256 newPrice) external 
  onlyRole(AUTHORIZED_OPERATOR) {
    _decreaseDucthAuctionPrice(maker, orderHash, newPrice);
  }

  function increaseEnglishAuctionPrice(address maker, bytes32 orderHash, uint256 newPrice) external 
  onlyRole(AUTHORIZED_OPERATOR) {
    _increaseEnglishAuctionPrice(maker, orderHash, newPrice);
  }

  function bidForEnglishAuction(address bidder, bytes32 orderHash, uint256 bidValue) external 
  onlyRole(AUTHORIZED_OPERATOR) {
    _bidForEnglishAuction(bidder, orderHash, bidValue);
  }

  function bidForDutchAuction(
    address bidder, 
    bytes32 orderHash, 
    uint256 bidValue
  ) external onlyRole(AUTHORIZED_OPERATOR) {
    _bidForDutchAuction(bidder, orderHash, bidValue);
  }

  function approveLastBid(address maker, bytes32 orderHash) external 
  onlyRole(AUTHORIZED_OPERATOR) {
    _approveLastBid(maker, orderHash);
  }

  function claimAuction(address bidder, bytes32 orderHash, bytes calldata data) external 
  onlyRole(AUTHORIZED_OPERATOR) {
    _claimAuction(bidder, orderHash, data);
  }

  function getLastBidderAddress(bytes32 orderHash) external view 
  onlyRole(AUTHORIZED_OPERATOR) {
    _getLastBidderAddress(orderHash);
  }

  function _authorizeUpgrade(address newImplementation) internal override 
  onlyRole(PROTOCOL_ADMIN) {}

  function initialize(
    address neatFiProtocolStorage, 
    address assetTransfer
    ) public initializer {
    __UUPSUpgradeable_init();
    __AssetAuctionOperations_init();

    _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
    _updateNeatFiProtocolStorageAddress(neatFiProtocolStorage);
    _updateAssetTransferAddress(assetTransfer);
    name = "NeatFi Asset Auction Module";
    _setVersion("1.0.0");
  }
}