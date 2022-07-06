// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {AssetStructsUpgradeable} from "../../lib/protocolStorage/assetStorage/AssetStructsUpgradeable.sol";
import {AssetEnumsUpgradeable} from "../../lib/protocolStorage/assetStorage/AssetEnumsUpgradeable.sol";

interface IAssetSwap {
  function makeBid(
    address bidder,
    AssetStructsUpgradeable.Token[] calldata tokens,
    AssetEnumsUpgradeable.AssetOrderType orderType,
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
}