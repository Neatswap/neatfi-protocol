// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {AccessControlUpgradeable} from "../access/AccessControlUpgradeable.sol";
import {RoleConstantsUpgradeable} from "../access/RoleConstantsUpgradeable.sol";
import {LimitsVerifier} from "../helpers/LimitsVerifier.sol";
import {UUPSUpgradeable} from "../proxy/UUPSUpgradeable.sol";

// TODO make this upgradeable
contract ProtocolSettingsV1 is
  UUPSUpgradeable,
  RoleConstantsUpgradeable, 
  AccessControlUpgradeable,
  LimitsVerifier
{
  string internal name;
  string internal currentVersion;

  function _setVersion(string memory newVersion) internal 
  onlyRole(PROTOCOL_ADMIN) {
    currentVersion = newVersion;
  }
    
  // Protocol fee numerator for ENGLISH_AUCTION
  uint256 public englishAuctionProtocolFeeNumerator;

  // Protocol fee numerator for DUTCH_AUCTION
  uint256 public dutchAuctionProtocolFeeNumerator;

  // Protocol fee numerator for SELL
  uint256 public sellProtocolFee;

  // Protocol fee for SWAP creation
  uint256 public swapProtocolFee;

  function getEnglishAuctionProtocolFeeNumerator() external view returns(uint256 englishAuctionFeeNumerator) {
    return englishAuctionProtocolFeeNumerator;
  }

  function getDutchAuctionProtocolFeeNumerator() external view returns(uint256 dutchAuctionFeeNumerator) {
    return dutchAuctionProtocolFeeNumerator;
  }

  function getSellProtocolFeeNumerator() external view returns(uint256) {
    return sellProtocolFee;
  }

  function getSwapProtocolFee() external view returns(uint256) {
    return swapProtocolFee;
  }

  /// Sets a new englishAuctionFeeNumerator.
  /// @dev only available to the current owner.
  /// @param newEnglishAuctionProtocolFeeNumerator - new englishAuctionFeeNumerator.
  function setEnglishAuctionProtocolFeeNumerator(uint256 newEnglishAuctionProtocolFeeNumerator)
    external
    onlyRole(PROTOCOL_ADMIN)
  {
    englishAuctionProtocolFeeNumerator = newEnglishAuctionProtocolFeeNumerator;
  }

  /// Sets a new dutchAuctionFeeNumerator.
  /// @dev only available to the current owner.
  /// @param newDutchAuctionProtocolFeeNumerator - new dutchAuctionFeeNumerator.
  function setDutchAuctionProtocolFeeNumerator(uint256 newDutchAuctionProtocolFeeNumerator)
    external
    onlyRole(PROTOCOL_ADMIN)
  {
    dutchAuctionProtocolFeeNumerator = newDutchAuctionProtocolFeeNumerator;
  }

  /// Sets a new simpleSwapProtocolFee.
  /// @dev only available to the current owner.
  /// @param newSwapProtocolFee - new simpleSwapProtocolFee.
  function setSwapProtocolFee(uint256 newSwapProtocolFee)
    external
    onlyRole(PROTOCOL_ADMIN)
    isWithinLimits(newSwapProtocolFee)
  {
    swapProtocolFee = newSwapProtocolFee;
  }

  function _authorizeUpgrade(address newImplementation) internal override 
  onlyRole(PROTOCOL_ADMIN) {}

  function initialize() public initializer {
    __UUPSUpgradeable_init();
    __RoleConstants_init();
    __AccessControl_init();

    _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
    name = "NeatFi Payments Transfer Resolver";
    _setVersion("1.0.0");
  }
}