// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {ActorFactoryOperationsUpgradeable} from "./ActorFactoryOperationsUpgradeable.sol";
import {UUPSUpgradeable} from "../proxy/UUPSUpgradeable.sol";

contract ActorFactoryV1 is ActorFactoryOperationsUpgradeable, UUPSUpgradeable {
  string private name;
  string private currentVersion;

  function _setVersion(string memory newVersion) internal 
  onlyRole(PROTOCOL_ADMIN) {
    currentVersion = newVersion;
  }

  function requestActorKey(address actorAddress) external
  onlyRole(AUTHORIZED_OPERATOR) {
    _requestActorKey(actorAddress);
  }

  function approveAndGenerateActorKey(address actorAddress) external
  onlyRole(PROTOCOL_ADMIN)
  returns(bytes32 actorKey)
  {
    return _approveAndGenerateActorKey(actorAddress);
  }

  function activateActor(address actorAddress) external
  onlyRole(PROTOCOL_ADMIN)
  {
    _activateActor(actorAddress);
  }

  function inactivateActor(address actorAddress) external
  onlyRole(PROTOCOL_ADMIN)
  {
    _inactivateActor(actorAddress);
  }

  function getActorKey(address actor) external view 
  onlyRole(AUTHORIZED_OPERATOR)
  returns (bytes32 actorKey) {
    return _getActorKey(actor);
  }

  function _authorizeUpgrade(address newImplementation) internal override onlyRole(PROTOCOL_ADMIN) {}
  
  function initialize() public initializer {
    __UUPSUpgradeable_init();
    __ActorFactoryOperations_init();

    _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
    name = "NeatFi ActorKey Factory";
    _setVersion("1.0.0");
  }
}