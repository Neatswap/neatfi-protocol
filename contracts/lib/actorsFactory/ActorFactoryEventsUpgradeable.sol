// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {Initializable} from "../utils/Initializable.sol";

contract ActorFactoryEventsUpgradeable is Initializable {
  event ActorKeyRequested(address actorAddress);

  event ActorKeyCreated(address actorAddress, bytes32 actorKey);

  event ActorActivated(address actorAddress);

  event ActorInactivated(address actorAddress);

  /* Initializers */

  function __ActorFactoryEvents_init() internal initializer {
    __ActorFactoryEvents_init_unchained();
  }

  function __ActorFactoryEvents_init_unchained() internal initializer {}
}