// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {Initializable} from "../utils/Initializable.sol";

contract ActorFactoryEnumsUpgradeable is Initializable {
  enum ActorStatus {
    REQUESTED,
    ACTIVE,
    INACTIVE
  }

  /* Initializers */

  function __ActorFactoryEnums_init() internal initializer {
    __ActorFactoryEnums_init_unchained();
  }

  function __ActorFactoryEnums_init_unchained() internal initializer {}
}