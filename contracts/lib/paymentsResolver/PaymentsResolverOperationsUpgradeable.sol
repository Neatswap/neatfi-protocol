// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {AssetEnumsUpgradeable} from "../protocolStorage/assetStorage/AssetEnumsUpgradeable.sol";
import {IProtocolSettings} from "../../interfaces/protocolSettingsInterfaces/IProtocolSettings.sol";
import {AccessControlUpgradeable} from "../access/AccessControlUpgradeable.sol";
import {RoleConstantsUpgradeable} from "../access/RoleConstantsUpgradeable.sol";

/**
 * @title PaymentsResolverOperationsUpgradeable
 * @author NeatFi
 * @notice This contract holds the operations to resolve payments
 *         to Order makers in native tokens.
 */
contract PaymentsResolverOperationsUpgradeable is
    AssetEnumsUpgradeable,
    RoleConstantsUpgradeable,
    AccessControlUpgradeable
{
    address protocolSettings;

    /**
     * @dev An internal function to update the address of the
     *      current implementation of the NeatFi protocol settings contract.
     */
    function _updateProtocolSettingsAddress(address newProtocolSettings)
        internal
    {
        protocolSettings = newProtocolSettings;
    }

    /**
     * @dev An internal function to calculate Order maker earnings
     *      for an English Auction Order.
     * @param value - The settlement value of the Order.
     * @return makerEarnings - The earnings of the Order maker in
     *         native tokens.
     */
    function _englishAuctionFeeResolver(uint256 value)
        internal
        view
        returns (uint256 makerEarnings)
    {
        return
            value -
            ((value *
                IProtocolSettings(protocolSettings)
                    .getEnglishAuctionProtocolFeeNumerator()) / 1000);
    }

    /**
     * @dev An internal function to calculate Order maker earnings
     *      for a Dutch Auction Order.
     * @param value - The settlement value of the Order.
     * @return makerEarnings - The earnings of the Order maker in
     *         native tokens.
     */
    function _dutchAuctionFeeResolver(uint256 value)
        internal
        view
        returns (uint256 makerEarnings)
    {
        return
            value -
            ((value *
                IProtocolSettings(protocolSettings)
                    .getDutchAuctionProtocolFeeNumerator()) / 1000);
    }

    /**
     * @dev An internal function to calculate Order maker earnings
     *      for a Sell Order.
     * @param value - The settlement value of the Order.
     * @return makerEarnings - The earnings of the Order maker in
     *         native tokens.
     */
    function _sellFeeResolver(uint256 value)
        internal
        view
        returns (uint256 makerEarnings)
    {
        return
            value -
            ((value *
                IProtocolSettings(protocolSettings)
                    .getSellProtocolFeeNumerator()) / 1000);
    }

    /**
     * @dev An internal function to retrieve the protocol fee
     *      for a Swap Order creation.
     * @return feeToBePaid - The protocol fee for Swap Order creation.
     */
    function _swapFeeResolver() internal view returns (uint256 feeToBePaid) {
        return IProtocolSettings(protocolSettings).getSwapProtocolFee();
    }

    /** Initializers */

    function __AssetSwapOperations_init(address newProtocolSettings)
        internal
        initializer
    {
        __AssetEnums_init();
        __RoleConstants_init();
        __AccessControl_init();

        _updateProtocolSettingsAddress(newProtocolSettings);
    }
}
