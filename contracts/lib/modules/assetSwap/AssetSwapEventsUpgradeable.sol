// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {Initializable} from "../../utils/Initializable.sol";

contract AssetSwapEventsUpgradeable is Initializable {
  event BidForOrder(bytes32 orderHash, bytes32 bidHash);

  function __AssetSwapEvents_init() internal initializer {
    __AssetSwapEvents_init_unchained();
  }

  function __AssetSwapEvents_init_unchained() internal initializer {}
}