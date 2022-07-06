// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {AssetTransferOperationsUpgradeable} from "./AssetTransferOperationsUpgradeable.sol";
import {UUPSUpgradeable} from "../proxy/UUPSUpgradeable.sol";

contract AssetTransferV1 is AssetTransferOperationsUpgradeable, UUPSUpgradeable {
  string private name;
  string private currentVersion;

  function _setVersion(string memory newVersion) internal onlyRole(PROTOCOL_ADMIN) {
    currentVersion = newVersion;
  }

  function updateNeatFiProtocolStorageAddress(address newNeatFiProtocolStorage) external
  onlyRole(PROTOCOL_ADMIN) {
    _updateNeatFiProtocolStorageAddress(newNeatFiProtocolStorage);
  }

  function transferResolver(
    Order memory order, 
    address from,
    address to,
    bytes calldata data
    ) external onlyRole(AUTHORIZED_OPERATOR) {
      _transferResolver(order, from, to, data);
    }
  
  function _authorizeUpgrade(address newImplementation) internal override onlyRole(PROTOCOL_ADMIN) {}
  
  function initialize(address neatFiProtocolStorage) public initializer {
    __UUPSUpgradeable_init();
    __AssetTransferOperations_init();

    _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
    _updateNeatFiProtocolStorageAddress(neatFiProtocolStorage);
    name = "NeatFi Asset Transfer Resolver";
    _setVersion("1.0.0");
  }
}