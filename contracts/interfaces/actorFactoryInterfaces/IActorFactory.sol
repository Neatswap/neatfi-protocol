// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

/**
 * @title IActorFactory
 * @author NeatFi
 * @notice Interface to the {ActorFactory} contract.
 */
interface IActorFactory {
    /**
     * @notice Requests an actor key for a specific actor.
     * @dev The address must be a contract address.
     * @param actorAddress - The address of an Actor contract.
     */
    function requestActorKey(address actorAddress) external;

    /**
     * @notice Requests the actor key for a specific Actor.
     * @dev Anyone can get the actor key fro any address
     *      that has an actor key. It is not a security vulnerability,
     *      since actor key - message sender pair is validated, and
     *      the storage layer, on its turn, verifies the actor key for
     *      the given message sender and an Order asset.
     * @return actorKey - The actor key for the address.
     */
    function getActorKey(address actor)
        external
        view
        returns (bytes32 actorKey);
}
