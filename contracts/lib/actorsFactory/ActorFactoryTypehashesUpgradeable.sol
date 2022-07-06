// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {Initializable} from "../utils/Initializable.sol";

contract ActorFactoryTypehashesUpgradeable is Initializable {
  bytes32 constant ACTORKEY_TYPEHASH = keccak256(
    "Actor(address actorAddress, ActorStatus actorStatus, bytes32 actorKey)"
    );

  /* Initializers */

  function __ActorFactoryTypehashes_init() internal initializer {
    __ActorFactoryTypehashes_init_unchained();
  }

  function __ActorFactoryTypehashes_init_unchained() internal initializer {}
}