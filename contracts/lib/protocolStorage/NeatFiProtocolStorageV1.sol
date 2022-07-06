// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

// TODO go file by file and check and update comments

import {AssetStorageOperationsUpgradeable} from "./assetStorageOperations/AssetStorageOperationsUpgradeable.sol";
import {UUPSUpgradeable} from "../proxy/UUPSUpgradeable.sol";

contract NeatFiProtocolStorageV1 is AssetStorageOperationsUpgradeable, UUPSUpgradeable {
  string private name;
  string private currentVersion;

  function _setVersion(string memory newVersion) internal onlyRole(PROTOCOL_ADMIN) {
    currentVersion = newVersion;
  }

  function makeOrder(
    Token[] calldata tokens,
    AssetOrderType orderType,
    address payable maker,
    uint256 listingTime,
    uint256 expirationTime,
    uint256 startPrice,
    uint256 endPrice,
    uint256 salt,
    bytes32 actorKey) external onlyRole(AUTHORIZED_OPERATOR) returns (bytes32 orderHash) {
    orderHash = _makeOrder(
      tokens, 
      maker,
      orderType, 
      listingTime, 
      expirationTime, 
      startPrice, 
      endPrice, 
      salt, 
      actorKey
      );
      
    return orderHash;
  }

  function getOrder(bytes32 orderHash) external view onlyRole(AUTHORIZED_OPERATOR) {
    _getOrder(orderHash);
  }

  function getOrderMaker(bytes32 orderHash) external view onlyRole(AUTHORIZED_OPERATOR) returns(address payable maker) {
    return _getOrderMaker(orderHash);
  }

  function getToken(bytes32 tokenHash) external view onlyRole(AUTHORIZED_OPERATOR) {
    _getToken(tokenHash);
  }

  function isValidOrder(bytes32 orderHash) external onlyRole(AUTHORIZED_OPERATOR) {
    _isValidOrder(orderHash);
  }

  function isValidOwner(bytes32 orderHash, address payable maker) external view onlyRole(AUTHORIZED_OPERATOR) {
    _isValidOwner(orderHash, maker);
  }

  function changeOrderStartPrice(bytes32 orderHash, uint256 newStartPrice) external onlyRole(AUTHORIZED_OPERATOR) {
    _changeOrderStartPrice(orderHash, newStartPrice);
  }

  function changeOrderEndPrice(bytes32 orderHash, uint256 newEndPrice) external onlyRole(AUTHORIZED_OPERATOR) {
    _changeOrderEndPrice(orderHash, newEndPrice);
  }

  function changeOrderStatus(bytes32 orderHash, AssetOrderStatus newStatus) external onlyRole(AUTHORIZED_OPERATOR) {
    _changeOrderStatus(orderHash, newStatus);
  }

  function changeOrderExpirationTime(bytes32 orderHash, uint256 newExpirationTime) external onlyRole(AUTHORIZED_OPERATOR) {
    _changeOrderExpirationTime(orderHash, newExpirationTime);
  }


    /*
   * @dev Sets the address of the new implementation version.
   * @param newImplementation - the new implementation address.
   */
  function _authorizeUpgrade(address newImplementation) internal override onlyRole(PROTOCOL_ADMIN) {}

  function initialize() public initializer {
    __UUPSUpgradeable_init();
    __AssetStorageOperations_init();

    _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
    name = "NeatFi Protocol Storage Layer";
    _setVersion("1.0.0");
  }
}