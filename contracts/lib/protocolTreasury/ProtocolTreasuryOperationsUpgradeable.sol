// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {AccessControlUpgradeable} from "../access/AccessControlUpgradeable.sol";
import {RoleConstantsUpgradeable} from "../access/RoleConstantsUpgradeable.sol";
import {INeatToken} from "../../interfaces/neatTokenInterfaces/INeatToken.sol";
import {IVestingEscrow} from "../../interfaces/vestingEscrowInterfaces/IVestingEscrow.sol";
import {ReentrancyGuardUpgradeable} from "../utils/ReentrancyGuardUpgradeable.sol";

// TODO implement Neat staking
// TODO implement signing and pre-approving mechanism prior to withdrawals, multisig

contract ProtocolTreasuryOperationsUpgradeable is
    AccessControlUpgradeable,
    RoleConstantsUpgradeable,
    ReentrancyGuardUpgradeable
{
    address public neatTokenAddress;
    address public vestingEscrowAddress;

    /**
     * @dev An internal function to update the address of the
     *      current implementation of the NeatFi vesting escrow contract.
     * @param newVestingEscrow - The address of a new implementation for the
     *                           Vesting Escrow contract.
     */
    function _updateVestingEscrowAddress(address newVestingEscrow) internal {
        vestingEscrowAddress = newVestingEscrow;
    }

    /**
     * @dev Retrieves the balance of the protocol treasury in native tokens
     *      i.e. Eth for Ethereum.
     */
    function _getBalance() internal view returns (uint256 contractBalance) {
        return address(this).balance;
    }

    /**
     * @dev Retrieves the Neat token balance of the Treasury.
     */
    function _getNeatTokenBalance()
        internal
        returns (uint256 neatTokenBalance)
    {
        return INeatToken(neatTokenAddress).balanceOf(address(this));
    }

    /**
     * @dev Vests Neat tokens through the interface of Vesting Escrow contract.
     *      Transfers Neat tokens from the balance of the Treasury to the
     *      Vesting Escrow contract for further management.
     * @param vestee - The address of the vestee. This is not the address
     *                 of the Vesting Escrow contract, but the address of the
     *                 actuall vestee.
     * @param tokenAmount - The amount of Neat tokens to be vested.
     * @param cliffDays - The number of days of the vesting cliff (0 if no cliff).
     * @param initiallyAvailableTokens - The amount of Neat tokens the vestee can claim
     *                                   after the vesting creation.
     * @param periodMonths - The number of vesting months.
     */
    function _vestNeatTokens(
        address vestee,
        uint256 tokenAmount,
        uint256 cliffDays,
        uint256 initiallyAvailableTokens,
        uint256 periodMonths
    ) internal nonReentrant {
        require(
            _getNeatTokenBalance() >= tokenAmount,
            "ProtocolTreasuryOperationsUpgradeable::_vestNeatTokens: not enought Neat tokens in treasury."
        );

        // Transfers Neat tokens from the Treasury to Vesting Escrow.
        INeatToken(neatTokenAddress).transfer(
            vestingEscrowAddress,
            tokenAmount
        );

        // Vests the Neat tokens.
        IVestingEscrow(vestingEscrowAddress).vest(
            vestee,
            tokenAmount,
            cliffDays,
            initiallyAvailableTokens,
            periodMonths
        );
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

    /** Initializers */

    function __ProtocolTreasuryOperations_init(
        address _neatTokenAddress,
        address _vestingEscrowAddress
    ) internal initializer {
        // Can be set only once
        neatTokenAddress = _neatTokenAddress;

        _updateVestingEscrowAddress(_vestingEscrowAddress);

        __RoleConstants_init();
        __AccessControl_init();
        __ReentrancyGuard_init();
    }
}
