// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {Initializable} from "../../utils/Initializable.sol";

contract AssetSwapStorageUpgradeable is Initializable {
  mapping(bytes32 => bytes32[]) public bidsByOrder;
  
  mapping(bytes32 => bytes32) public swapEscrowParties;

  function __AssetSwapStorage_init() internal initializer {
    __AssetSwapStorage_init_unchained();
  }

  function __AssetSwapStorage_init_unchained() internal initializer {}
}