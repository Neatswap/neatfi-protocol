// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {NeatFiProtocolOperationsUpgradeable} from "./lib/protocolOperations/NeatFiProtocolOperationsUpgradeable.sol";
import {UUPSUpgradeable} from "./lib/proxy/UUPSUpgradeable.sol";
import {ReentrancyGuardUpgradeable} from "./lib/utils/ReentrancyGuardUpgradeable.sol";

// TODO Meaningfully comment all the contracts

// TODO Treasury contract to transfer the fees. Non-upgradeable to hold funds. Phase 2

// TODO TESTS

contract NeatFiV1 is 
  NeatFiProtocolOperationsUpgradeable, 
  UUPSUpgradeable, 
  ReentrancyGuardUpgradeable 
{
  string internal name;
  string internal currentVersion;

  function _setVersion(string memory newVersion) internal 
  onlyRole(PROTOCOL_ADMIN) {
    currentVersion = newVersion;
  }

  function requestActorKey(address actorAddress) external nonReentrant {
    _requestActorKey(actorAddress);
  }

  function makeOrder(
    Token[] calldata tokens,
    AssetOrderType orderType,
    address payable maker,
    uint256 listingTime,
    uint256 expirationTime,
    uint256 startPrice,
    uint256 endPrice,
    uint256 salt,
    bytes32 actorKey
  ) external payable nonReentrant onlyActor(msg.sender) returns(bytes32 orderHash) {
    return _makeOrder(
      tokens, 
      orderType, 
      maker, 
      msg.value, 
      listingTime, 
      expirationTime, 
      startPrice, 
      endPrice, 
      salt, 
      actorKey
    );
  }

  function makeBid(
    Token[] calldata tokens,
    AssetOrderType orderType,
    address bidder,
    uint256 listingTime,
    uint256 expirationTime,
    uint256 startPrice,
    uint256 endPrice,
    uint256 salt,
    bytes32 orderHash,
    bytes32 actorKey
  ) external nonReentrant onlyActor(msg.sender) returns(bytes32 bidHash) {
    return _makeBid(
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

  function cancelOrder(
    address maker,
    bytes32 orderHash
  ) external nonReentrant onlyActor(msg.sender) {
    _cancelOrder(msg.sender, maker, orderHash);
  }

  function approveAndResolveSwap(
    address maker,
    bytes32 orderHash,
    bytes32 bidHash,
    bytes calldata orderData,
    bytes calldata bidData
  ) external nonReentrant onlyActor(msg.sender) {
    _approveAndResolveSwap(msg.sender, maker, orderHash, bidHash, orderData, bidData);
  }

  function buyItNow(
    address buyer,
    bytes32 orderHash,
    bytes calldata data
  ) external payable nonReentrant onlyActor(msg.sender) {
    _buyItNow(msg.sender, orderHash, msg.value, buyer, data);
  }

  function decreaseDucthAuctionPrice(
    address maker,
    bytes32 orderHash, 
    uint256 newPrice
  ) external nonReentrant onlyActor(msg.sender) {
    _decreaseDucthAuctionPrice(msg.sender, maker, orderHash, newPrice);
  }

  function increaseEnglishAuctionPrice(
    address maker,
    bytes32 orderHash, 
    uint256 newPrice
  ) external nonReentrant onlyActor(msg.sender) {
    _increaseEnglishAuctionPrice(msg.sender, maker, orderHash, newPrice);
  }

  function bidForEnglishAuction(
    address bidder,
    bytes32 orderHash, 
    uint256 bidValue
  ) external nonReentrant onlyActor(msg.sender) {
    _bidForEnglishAuction(msg.sender, bidder, orderHash, bidValue);
  }

  function bidForDutchAuction(
    address bidder, 
    bytes32 orderHash, 
    uint256 bidValue
  ) external nonReentrant onlyActor(msg.sender) {
    _bidForDutchAuction(msg.sender, bidder, orderHash, bidValue);
  }

  function approveLastBid(
    address maker, 
    bytes32 orderHash
  ) external nonReentrant onlyActor(msg.sender) {
    _approveLastBid(msg.sender, maker, orderHash);
  }

  function claimEnglishAuction(
    address bidder,
    bytes32 orderHash, 
    bytes calldata data
  ) external payable nonReentrant onlyActor(msg.sender) {
    _claimEnglishAuction(msg.sender, bidder, orderHash, msg.value, data);
  }

  function claimDutchAuction(
    address bidder,
    bytes32 orderHash, 
    bytes calldata data
  ) external payable nonReentrant onlyActor(msg.sender) {
    _claimDutchAuction(msg.sender, bidder, orderHash, msg.value, data);
  }

  function _authorizeUpgrade(address newImplementation) internal override 
  onlyRole(PROTOCOL_ADMIN) {}

  function initialize() public initializer {
    __UUPSUpgradeable_init();
    __NeatFiProtocolOperations_init();

    _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
    name = "NeatFi Protocol";
    _setVersion("1.0.0");
  }
}