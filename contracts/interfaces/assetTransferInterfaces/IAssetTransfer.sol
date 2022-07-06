// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {AssetStructsUpgradeable} from "../../lib/protocolStorage/assetStorage/AssetStructsUpgradeable.sol";

interface IAssetTransfer {
  function transferResolver(
    AssetStructsUpgradeable.Order memory order, 
    address from,
    address to,
    bytes calldata data
    ) external;
}