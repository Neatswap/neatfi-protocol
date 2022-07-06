// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {Initializable} from "../utils/Initializable.sol";
import {ActorFactoryEnumsUpgradeable} from "./ActorFactoryEnumsUpgradeable.sol";

contract ActorFactoryStorageUpgradeable is Initializable, ActorFactoryEnumsUpgradeable {
  struct Actor {
    address actorContract;
    ActorStatus actorStatus;
    bytes32 actorKey;
  }

  mapping(address => Actor) public actorInfo;

  /* Initializers */

  function __ActorFactoryStorage_init() internal initializer {
    __ActorFactoryStorage_init_unchained();
    __ActorFactoryEnums_init();
  }

  function __ActorFactoryStorage_init_unchained() internal initializer {}
}