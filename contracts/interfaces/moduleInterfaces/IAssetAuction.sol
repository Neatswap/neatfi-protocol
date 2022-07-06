// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

interface IAssetAuction {
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

  function bidForEnglishAuction(address bidder, bytes32 orderHash, uint256 bidValue) external;

  function bidForDutchAuction(address bidder, bytes32 orderHash, uint256 bidValue) external;

  function approveLastBid(address maker, bytes32 orderHash) external;

  function claimAuction(address bidder, bytes32 orderHash, bytes calldata data) external;

  function getLastBidderAddress(bytes32 orderHash) external view;
}