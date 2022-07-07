// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {AssetStructsUpgradeable} from "../../lib/protocolStorage/assetStorage/AssetStructsUpgradeable.sol";
import {AssetEnumsUpgradeable} from "../../lib/protocolStorage/assetStorage/AssetEnumsUpgradeable.sol";

interface INeatFiProtocolStorage {
  function makeOrder(
    AssetStructsUpgradeable.Token[] calldata tokens,
    AssetEnumsUpgradeable.AssetOrderType orderType,
    address maker,
    uint256 listingTime,
    uint256 expirationTime,
    uint256 startPrice,
    uint256 endPrice,
    uint256 salt,
    bytes32 actorKey
    ) external returns (bytes32 orderHash);
  
  function getOrder(bytes32 orderHash) external view returns(AssetStructsUpgradeable.Order memory);

  function getOrderMaker(bytes32 orderHash) external view returns(address payable maker);

  function getToken(bytes32 tokenHash) external view returns(AssetStructsUpgradeable.Token memory);

  function isValidOrder(bytes32 orderHash) external returns(bool);

  function isValidActorKey(bytes32 orderHash, bytes32 actorKey) external view;

  function isValidOwner(bytes32 orderHash, address maker) external view returns(bool);

  function changeOrderStartPrice(bytes32 orderHash, uint256 newStartPrice) external;

  function changeOrderEndPrice(bytes32 orderHash, uint256 newEndPrice) external;

  function changeOrderStatus(bytes32 orderHash, AssetEnumsUpgradeable.AssetOrderStatus newStatus) external;

  function changeOrderExpirationTime(bytes32 orderHash, uint256 newExpirationTime) external;
}