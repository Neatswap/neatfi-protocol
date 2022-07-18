// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {AccessControlUpgradeable} from "../access/AccessControlUpgradeable.sol";
import {RoleConstantsUpgradeable} from "../access/RoleConstantsUpgradeable.sol";
import {LimitsVerifier} from "../helpers/LimitsVerifier.sol";
import {UUPSUpgradeable} from "../proxy/UUPSUpgradeable.sol";

/**
 * @title ProtocolSettingsV1
 * @author NeatFi
 * @notice This contract implements the external facing functionality
 *         for the Protocol Settings contract of NeatFi.
 */
contract ProtocolSettingsV1 is
    UUPSUpgradeable,
    RoleConstantsUpgradeable,
    AccessControlUpgradeable,
    LimitsVerifier
{
    string internal name;
    string internal currentVersion;

    // Protocol fee numerator for ENGLISH_AUCTION
    uint256 public englishAuctionProtocolFeeNumerator;

    // Protocol fee numerator for DUTCH_AUCTION
    uint256 public dutchAuctionProtocolFeeNumerator;

    // Protocol fee numerator for SELL
    uint256 public sellProtocolFee;

    // Protocol fee for SWAP creation
    uint256 public swapProtocolFee;

    /**
     * @dev An internal function to set a new englishAuctionFeeNumerator.
     * @param newEnglishAuctionProtocolFeeNumerator - new englishAuctionFeeNumerator.
     */
    function _setEnglishAuctionProtocolFeeNumerator(
        uint256 newEnglishAuctionProtocolFeeNumerator
    ) internal {
        englishAuctionProtocolFeeNumerator = newEnglishAuctionProtocolFeeNumerator;
    }

    /**
     * @dev An internal function to set a new dutchAuctionProtocolFeeNumerator.
     * @param newDutchAuctionProtocolFeeNumerator - new dutchAuctionFeeNumerator.
     */
    function _setDutchAuctionProtocolFeeNumerator(
        uint256 newDutchAuctionProtocolFeeNumerator
    ) internal {
        dutchAuctionProtocolFeeNumerator = newDutchAuctionProtocolFeeNumerator;
    }

    /**
     * @dev An internal function to set a new swapProtocolFee.
     * @param newSwapProtocolFee - new simpleSwapProtocolFee.
     */
    function _setSwapProtocolFee(uint256 newSwapProtocolFee)
        internal
        isWithinLimits(newSwapProtocolFee)
    {
        swapProtocolFee = newSwapProtocolFee;
    }

    /**
     * @dev An internal function to set a new sellProtocolFee.
     * @param newSellProtocolFee - new simpleSellProtocolFee.
     */
    function _setSellProtocolFee(uint256 newSellProtocolFee)
        internal
        isWithinLimits(newSellProtocolFee)
    {
        sellProtocolFee = newSellProtocolFee;
    }

    /**
     * @dev Sets the version for the current implementation of this contract.
     */
    function _setVersion(string memory newVersion)
        internal
        onlyRole(PROTOCOL_ADMIN)
    {
        currentVersion = newVersion;
    }

    function getEnglishAuctionProtocolFeeNumerator()
        external
        view
        returns (uint256 englishAuctionFeeNumerator)
    {
        return englishAuctionProtocolFeeNumerator;
    }

    function getDutchAuctionProtocolFeeNumerator()
        external
        view
        returns (uint256 dutchAuctionFeeNumerator)
    {
        return dutchAuctionProtocolFeeNumerator;
    }

    function getSellProtocolFeeNumerator() external view returns (uint256) {
        return sellProtocolFee;
    }

    function getSwapProtocolFee() external view returns (uint256) {
        return swapProtocolFee;
    }

    /**
     * @dev An external function to set a new newEnglishAuctionProtocolFeeNumerator.
     * @param newEnglishAuctionProtocolFeeNumerator - new englishAuctionFeeNumerator.
     */
    function setEnglishAuctionProtocolFeeNumerator(
        uint256 newEnglishAuctionProtocolFeeNumerator
    ) external onlyRole(PROTOCOL_ADMIN) {
        _setEnglishAuctionProtocolFeeNumerator(
            newEnglishAuctionProtocolFeeNumerator
        );
    }

    /**
     * @dev An external function to set a new newDutchAuctionProtocolFeeNumerator.
     * @param newDutchAuctionProtocolFeeNumerator - new dutchAuctionFeeNumerator.
     */
    function setDutchAuctionProtocolFeeNumerator(
        uint256 newDutchAuctionProtocolFeeNumerator
    ) external onlyRole(PROTOCOL_ADMIN) {
        _setDutchAuctionProtocolFeeNumerator(
            newDutchAuctionProtocolFeeNumerator
        );
    }

    /**
     * @dev An external function to set a new setSwapProtocolFee.
     * @param newSwapProtocolFee - new newSwapProtocolFee.
     */
    function setSwapProtocolFee(uint256 newSwapProtocolFee)
        external
        onlyRole(PROTOCOL_ADMIN)
        isWithinLimits(newSwapProtocolFee)
    {
        _setSwapProtocolFee(newSwapProtocolFee);
    }

    /**
     * @dev An external function to set a new setSellProtocolFee.
     * @param newSellProtocolFee - new newSellProtocolFee.
     */
    function setSellProtocolFee(uint256 newSellProtocolFee)
        external
        onlyRole(PROTOCOL_ADMIN)
        isWithinLimits(newSellProtocolFee)
    {
        _setSellProtocolFee(newSellProtocolFee);
    }

    /** Initializers */

    function _authorizeUpgrade(address newImplementation)
        internal
        override
        onlyRole(PROTOCOL_ADMIN)
    {}

    function initialize(
        uint256 newSwapProtocolFeeValue,
        uint256 newSellProtocolFeeValue,
        uint256 newDutchAuctionProtocolFeeNumeratorValue,
        uint256 newEnglishAuctionProtocolFeeNumeratorValue
    ) public initializer onlyProxy {
        __UUPSUpgradeable_init();
        __RoleConstants_init();
        __AccessControl_init();

        _setSwapProtocolFee(newSwapProtocolFeeValue);
        _setSellProtocolFee(newSellProtocolFeeValue);
        _setEnglishAuctionProtocolFeeNumerator(
            newDutchAuctionProtocolFeeNumeratorValue
        );
        _setDutchAuctionProtocolFeeNumerator(
            newEnglishAuctionProtocolFeeNumeratorValue
        );

        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
        name = "NeatFi Payments Transfer Resolver";
        _setVersion("1.0.0");
    }
}
