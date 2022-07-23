// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {UUPSUpgradeable} from "../proxy/UUPSUpgradeable.sol";
import {AccessControlUpgradeable} from "../access/AccessControlUpgradeable.sol";
import {RoleConstantsUpgradeable} from "../access/RoleConstantsUpgradeable.sol";

// TODO implement signing and pre-approving mechanism prior to withdrawals

/**
 * @title NeatFiProtocolTreasuryV1
 * @author NeatFi
 * @notice This contract implements the external facing functionality
 *         for the Protocol Treasury contract of NeatFi. This is the contract
 *         that is used to manage the protocol fees.
 */
contract NeatFiProtocolTreasuryV1 is
    UUPSUpgradeable,
    AccessControlUpgradeable,
    RoleConstantsUpgradeable
{
    string internal name;
    string internal currentVersion;

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
        return address(this).balance;
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
        require(
            withdrawalAddress != address(0),
            "NeatFiProtocolTreasuryV1::withdraw: withdrawal address can not be 0."
        );
        require(
            withdrawalAmount <= getBalance(),
            "NeatFiProtocolTreasuryV1::withdraw: incorrect withdrawal amount."
        );

        //slither-disable-next-line arbitrary-send
        bool sent = withdrawalAddress.send(withdrawalAmount);
        require(
            sent,
            "NeatFiProtocolTreasuryV1::withdraw: failed to withdraw."
        );
    }

    /** Initializers */

    function _authorizeUpgrade(address newImplementation)
        internal
        override
        onlyRole(PROTOCOL_ADMIN)
    {}

    function initialize() public initializer onlyProxy {
        __UUPSUpgradeable_init();
        __RoleConstants_init();
        __AccessControl_init();

        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
        name = "NeatFi Treasury Contract";
        _setVersion("1.0.0");
    }
}
