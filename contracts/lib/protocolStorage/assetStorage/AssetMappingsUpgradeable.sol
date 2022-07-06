// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {AssetEventsUpgradeable} from "./AssetEventsUpgradeable.sol";
import {Initializable} from "../../utils/Initializable.sol";

contract AssetMappingsUpgradeable is Initializable, AssetEventsUpgradeable {
  //TODO keep only storage-related mappings
  // Maps the Order to its hash.
  mapping(bytes32 => Order) public orderInfo;

  // Maps the Token to its hash.
  mapping(bytes32 => Token) public tokenInfo;

  // Maps the hash of the swap offer Order to its corresponding accepted bid Order.
  mapping(bytes32 => bytes32) public escrowParties;

  /* Initializers */

  function __AssetMappings_init() internal initializer {
    __AssetEvents_init_unchained();
    __AssetMappings_init_unchained();
  }

  function __AssetMappings_init_unchained() internal initializer {}
}
