// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {AssetStructsUpgradeable} from "../lib/protocolStorage/assetStorage/AssetStructsUpgradeable.sol";
import {AssetEnumsUpgradeable} from "../lib/protocolStorage/assetStorage/AssetEnumsUpgradeable.sol";

interface INeatFi {
  function requestActorKey(address actorAddress) external;

  function makeOrder(
    AssetStructsUpgradeable.Token[] calldata tokens,
    AssetEnumsUpgradeable.AssetOrderType orderType,
    address payable maker,
    uint256 listingTime,
    uint256 expirationTime,
    uint256 startPrice,
    uint256 endPrice,
    uint256 salt,
    bytes32 actorKey
  ) external payable returns(bytes32 orderHash);

  function makeBid(
    AssetStructsUpgradeable.Token[] calldata tokens,
    AssetEnumsUpgradeable.AssetOrderType orderType,
    address bidder,
    uint256 listingTime,
    uint256 expirationTime,
    uint256 startPrice,
    uint256 endPrice,
    uint256 salt,
    bytes32 orderHash,
    bytes32 actorKey
  ) external returns(bytes32 bidHash);

  function approveAndResolveSwap(
    address maker,
    bytes32 orderHash,
    bytes32 bidHash,
    bytes calldata orderData,
    bytes calldata bidData
  ) external;

  function buyItNow(
    address buyer,
    bytes32 orderHash,
    bytes calldata data
  ) external payable;

  function decreaseDucthAuctionPrice(
    address maker,
    bytes32 orderHash, 
    uint256 newPrice
  ) external;

  function increaseEnglishAuctionPrice(
    address maker,
    bytes32 orderHash, 
    uint256 newPrice
  ) external;

  function bidForEnglishAuction(
    address bidder,
    bytes32 orderHash, 
    uint256 bidValue
  ) external;

  function bidForDutchAuction(
    address bidder, 
    bytes32 orderHash, 
    uint256 bidValue
  ) external;

  function approveLastBid(
    address maker, 
    bytes32 orderHash
  ) external;

  function claimEnglishAuction(
    address bidder,
    bytes32 orderHash, 
    bytes calldata data
  ) external payable;

  function claimDutchAuction(
    address bidder,
    bytes32 orderHash, 
    bytes calldata data
  ) external payable;
}