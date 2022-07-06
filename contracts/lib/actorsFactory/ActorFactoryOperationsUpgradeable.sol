// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {ActorFactoryStorageUpgradeable} from "./ActorFactoryStorageUpgradeable.sol";
import {ActorFactoryEventsUpgradeable} from "./ActorFactoryEventsUpgradeable.sol";
import {ActorFactoryTypehashesUpgradeable} from "./ActorFactoryTypehashesUpgradeable.sol";
import {RoleConstantsUpgradeable} from "../access/RoleConstantsUpgradeable.sol";
import {AccessControlUpgradeable} from "../access/AccessControlUpgradeable.sol";

contract ActorFactoryOperationsUpgradeable is 
  ActorFactoryStorageUpgradeable,
  ActorFactoryEventsUpgradeable,
  ActorFactoryTypehashesUpgradeable,   
  RoleConstantsUpgradeable,
  AccessControlUpgradeable 
{

  function _requestActorKey(address actorAddress) internal {
    require(
      actorAddress.code.length > 0,
      "ActorFactoryOperationsUpgradeable::_requestActorKey: actor address is not a smart contract."
    );

    Actor memory actor = Actor(
      actorAddress,
      ActorStatus.REQUESTED,
      0x0
    );

    actorInfo[actorAddress] = actor;

    emit ActorKeyRequested(actorAddress);
  }

  function _approveAndGenerateActorKey(address actorAddress) internal returns(bytes32 actorKey) {
    Actor memory actor = actorInfo[actorAddress];

    require(
      actor.actorKey == 0x0,
      "ActorFactoryOperationsUpgradeable::_requestActorKey: actor key already generated."
    );

    actorKey = keccak256(abi.encode(
      ACTORKEY_TYPEHASH,
      actorAddress
    ));

    actor.actorStatus = ActorStatus.ACTIVE;
    actor.actorKey = actorKey;

    emit ActorKeyCreated(actorAddress, actorKey);
     
    return actorKey;
  }

  function _activateActor(address actorAddress) internal {
    Actor memory actor = actorInfo[actorAddress];

    require(
      actor.actorKey != 0x0,
      "ActorFactoryOperationsUpgradeable::_requestActorKey: actor is not approved yet."
    );

    require(
      actor.actorStatus == ActorStatus.INACTIVE,
      "ActorFactoryOperationsUpgradeable::_requestActorKey: actor is already active."
    );

    actor.actorStatus = ActorStatus.ACTIVE;

    emit ActorActivated(actorAddress);
  }

  function _inactivateActor(address actorAddress) internal {
    Actor memory actor = actorInfo[actorAddress];

    require(
      actor.actorKey != 0x0,
      "ActorFactoryOperationsUpgradeable::_requestActorKey: actor is not approved yet."
    );

    require(
      actor.actorStatus == ActorStatus.ACTIVE,
      "ActorFactoryOperationsUpgradeable::_requestActorKey: actor is already inactive."
    );

    actor.actorStatus = ActorStatus.INACTIVE;

    emit ActorInactivated(actorAddress);
  }

  function _getActorKey(address actorAddress) internal view returns(bytes32 actorKey) {
    Actor memory actor = actorInfo[actorAddress];
    return actor.actorKey;
  }

  function __ActorFactoryOperations_init() internal initializer {
    __ActorFactoryStorage_init();
    __ActorFactoryEvents_init();
    __ActorFactoryTypehashes_init();
    __RoleConstants_init();
    __AccessControl_init();
  }
}