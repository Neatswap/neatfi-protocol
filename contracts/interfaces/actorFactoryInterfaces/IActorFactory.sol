// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

interface IActorFactory {
  function requestActorKey(address actorAddress) external;

  function approveAndGenerateActorKey(address actorAddress) external returns(bytes32 actorKey);

  function activateActor(address actorAddress) external;

  function inactivateActor(address actorAddress) external;

  function getActorKey(address actor) external view returns (bytes32 actorKey);
}