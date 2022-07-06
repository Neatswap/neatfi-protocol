// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {Initializable} from "../../utils/Initializable.sol";

contract AssetStorageSettingsUpgradeable is Initializable {
  // Controller of maximum numbers of unique Tokens in an Order.
  uint256 public maxTokenNumber;

  /* Initializers */

  function __AssetStorageSettings_init() internal initializer {
    __AssetStorageSettings_init_unchained();
  }

  function __AssetStorageSettings_init_unchained() internal initializer {}
}