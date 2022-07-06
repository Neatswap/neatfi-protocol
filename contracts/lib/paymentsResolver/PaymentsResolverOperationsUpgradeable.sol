// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {AssetEnumsUpgradeable} from "../protocolStorage/assetStorage/AssetEnumsUpgradeable.sol";
import {IProtocolSettings} from "../../interfaces/protocolSettingsInterfaces/IProtocolSettings.sol";
import {AccessControlUpgradeable} from "../access/AccessControlUpgradeable.sol";
import {RoleConstantsUpgradeable} from "../access/RoleConstantsUpgradeable.sol";

contract PaymentsResolverOperationsUpgradeable is 
  AssetEnumsUpgradeable,
  RoleConstantsUpgradeable,
  AccessControlUpgradeable
{
  address protocolSettings;

  function _setProtocolSettingsAddress(address newProtocolSettings) internal {
    protocolSettings = newProtocolSettings;
  }

  function _englishAuctionFeeResolver(uint256 value) internal view returns (uint256 makerEarnings) {
    return value - ((value * IProtocolSettings(protocolSettings).getEnglishAuctionProtocolFeeNumerator()) / 1000);
  }

  function _dutchAuctionFeeResolver(uint256 value) internal view returns (uint256 makerEarnings) {
    return value - ((value * IProtocolSettings(protocolSettings).getDutchAuctionProtocolFeeNumerator()) / 1000);
  }

  function _sellFeeResolver(uint256 value) internal view returns (uint256 makerEarnings) {
    return value - ((value * IProtocolSettings(protocolSettings).getSellProtocolFeeNumerator()) / 1000);
  }

  function _swapFeeResolver() internal view returns(uint256 feeToBePaid) {
    return IProtocolSettings(protocolSettings).getSwapProtocolFee();
  }







  function __AssetSwapOperations_init() internal initializer {
    __AssetEnums_init();
    __RoleConstants_init();
    __AccessControl_init();
  }
}