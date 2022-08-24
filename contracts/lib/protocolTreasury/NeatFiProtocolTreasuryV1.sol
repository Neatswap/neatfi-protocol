// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {UUPSUpgradeable} from "../proxy/UUPSUpgradeable.sol";
import {ProtocolTreasuryOperationsUpgradeable} from "./ProtocolTreasuryOperationsUpgradeable.sol";

/**
 * @title NeatFiProtocolTreasuryV1
 * @author NeatFi
 * @notice This contract implements the external facing functionality
 *         for the Protocol Treasury contract of NeatFi. This is the contract
 *         that is used to manage the protocol fees.
 */
contract NeatFiProtocolTreasuryV1 is
    UUPSUpgradeable,
    ProtocolTreasuryOperationsUpgradeable
{
    string internal name;
    string internal currentVersion;

    /**
     * @dev An internal function to update the address of the
     *      current implementation of the NeatFi vesting escrow contract.
     * @param newVestingEscrow - The address of a new implementation for the
     *                           Vesting Escrow contract.
     */
    function updateVestingEscrowAddress(address newVestingEscrow)
        external
        onlyRole(PROTOCOL_ADMIN)
    {
        _updateVestingEscrowAddress(newVestingEscrow);
    }

    /**
     * @dev Sets the version for the current implementation of this contract.
     */
    function _setVersion(string memory newVersion) internal {
        currentVersion = newVersion;
    }

    /**
     * @dev Retrieves the balance of the protocol treasury.
     */
    function getBalance() public view returns (uint256 contractBalance) {
        return _getBalance();
    }

    /**
     * @dev Retrieves the Neat token balance of the Treasury.
     */
    function getNeatTokenBalance() external returns (uint256 neatTokenBalance) {
        _getNeatTokenBalance();
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
    function vestNeatTokens(
        address vestee,
        uint256 tokenAmount,
        uint256 cliffDays,
        uint256 initiallyAvailableTokens,
        uint256 periodMonths
    ) external onlyRole(PROTOCOL_TREASURER) {
        _vestNeatTokens(
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
    function withdraw(
        address payable withdrawalAddress,
        uint256 withdrawalAmount
    ) external onlyRole(PROTOCOL_TREASURER) {
        _withdraw(withdrawalAddress, withdrawalAmount);
    }

    /** Initializers */

    function _authorizeUpgrade(address newImplementation)
        internal
        override
        onlyRole(PROTOCOL_ADMIN)
    {}

    function initialize(
        address _neatTokenAddress,
        address _vestingEscrowAddress
    ) public initializer onlyProxy {
        __UUPSUpgradeable_init();
        __ProtocolTreasuryOperations_init(
            _neatTokenAddress,
            _vestingEscrowAddress
        );

        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
        name = "NeatFi Treasury Contract";
        _setVersion("1.0.0");
    }
}
