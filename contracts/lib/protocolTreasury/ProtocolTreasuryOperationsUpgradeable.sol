// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {AccessControlUpgradeable} from "../access/AccessControlUpgradeable.sol";
import {RoleConstantsUpgradeable} from "../access/RoleConstantsUpgradeable.sol";

// TODO implement protocol fee distribution for actors
// actor fee distributon address - DONE
// add protocol settings (numerator) for the actor earnings
// change payment resolver to split the fees

// TODO implement vesting creation of Neat tokens
// TODO implement Neat staking
// TODO implement signing and pre-approving mechanism prior to withdrawals, multisig

contract ProtocolTreasuryOperationsUpgradeable is
    AccessControlUpgradeable,
    RoleConstantsUpgradeable
{
    /**
     * @dev Retrieves the balance of the protocol treasury.
     */
    function _getBalance() internal view returns (uint256 contractBalance) {
        return address(this).balance;
    }

    /**
     * @dev Withdraws Ether from this contract. Only available to a
     *      Protocol Treasurer.
     * @param withdrawalAddress - The target address of the withdrawal.
     */
    function _withdraw(
        address payable withdrawalAddress,
        uint256 withdrawalAmount
    ) internal {
        require(
            withdrawalAddress != address(0),
            "ProtocolTreasuryOperationsUpgradeable::_withdraw: withdrawal address can not be 0."
        );
        require(
            withdrawalAmount <= _getBalance(),
            "ProtocolTreasuryOperationsUpgradeable::_withdraw: incorrect withdrawal amount."
        );

        //slither-disable-next-line arbitrary-send
        bool sent = withdrawalAddress.send(withdrawalAmount);
        require(
            sent,
            "ProtocolTreasuryOperationsUpgradeable::_withdraw: failed to withdraw."
        );
    }
}
