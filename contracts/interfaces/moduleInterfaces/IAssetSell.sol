// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

interface IAssetSell {
  function buyItNow(
    bytes32 orderHash,
    uint256 purchaseValue,
    address bidder,
    bytes calldata data
  ) external;
}