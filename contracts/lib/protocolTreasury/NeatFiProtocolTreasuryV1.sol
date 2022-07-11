// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {UUPSUpgradeable} from "../proxy/UUPSUpgradeable.sol";
import {AccessControlUpgradeable} from "../access/AccessControlUpgradeable.sol";
import {RoleConstantsUpgradeable} from "../access/RoleConstantsUpgradeable.sol";

contract NeatFiProtocolTreasuryV1 is
  UUPSUpgradeable,
  AccessControlUpgradeable,
  RoleConstantsUpgradeable
{
  string internal name;
  string internal currentVersion;

  function _setVersion(string memory newVersion) internal 
  onlyRole(PROTOCOL_ADMIN) {
    currentVersion = newVersion;
  }

  function getBalance() public view returns(uint256 contractBalance) {
    return address(this).balance;
  }

  function withdraw(
    address payable withdrawalAddress, 
    uint256 withdrawalAmount
  ) external onlyRole(PROTOCOL_TREASURER) {
    require(
      withdrawalAmount <= getBalance(),
      "NeatFiProtocolTreasuryV1::withdraw: incorrect withdrawal amount."
    );

    bool sent = withdrawalAddress.send(withdrawalAmount);
    require(
      sent, 
      "NeatFiProtocolTreasuryV1::withdraw: failed to withdraw."
    ); 
  }

  function _authorizeUpgrade(address newImplementation) internal override 
  onlyRole(PROTOCOL_ADMIN) {}

  function initialize() public initializer {
    __UUPSUpgradeable_init();
    __RoleConstants_init();
    __AccessControl_init();

    _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
    name = "NeatFi Treasury Contract";
    _setVersion("1.0.0");
  }
}