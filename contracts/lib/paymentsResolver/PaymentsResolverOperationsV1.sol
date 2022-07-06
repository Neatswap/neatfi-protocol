// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {PaymentsResolverOperationsUpgradeable} from "./PaymentsResolverOperationsUpgradeable.sol";
import {UUPSUpgradeable} from "../proxy/UUPSUpgradeable.sol";

contract PaymentsResolverOperationsV1 is 
  PaymentsResolverOperationsUpgradeable, 
  UUPSUpgradeable
{
  string internal name;
  string internal currentVersion;

  function _setVersion(string memory newVersion) internal 
  onlyRole(PROTOCOL_ADMIN) {
    currentVersion = newVersion;
  }

  function setProtocolSettingsAddress(address newProtocolAddress) external 
  onlyRole(PROTOCOL_ADMIN) {
    _setProtocolSettingsAddress(newProtocolAddress);
  }

  function englishAuctionFeeResolver(uint256 value) external view returns (uint256 makerEarnings) {
    return _englishAuctionFeeResolver(value);
  }

  function dutchAuctionFeeResolver(uint256 value) external view returns (uint256 makerEarnings) {
    return _dutchAuctionFeeResolver(value);
  }
  
  function sellFeeResolver(uint256 value) internal view returns (uint256 makerEarnings) {
    return _sellFeeResolver(value);
  }

  function swapFeeResolver() external view returns (uint256 feeToBePaid) {
    return _swapFeeResolver();
  }

  function _authorizeUpgrade(address newImplementation) internal override 
  onlyRole(PROTOCOL_ADMIN) {}
 
  function initialize(
    address transferResolver
    ) public initializer {
    __UUPSUpgradeable_init();
    __AssetSwapOperations_init();

    _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
    _setProtocolSettingsAddress(transferResolver);
    name = "NeatFi Payments Resolver";
    _setVersion("1.0.0");
  }
}