// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

//TODO put the current implementation here, upgradeable

import {INeatFi} from "../../interfaces/INeatFi.sol";
import {UUPSUpgradeable} from "../proxy/UUPSUpgradeable.sol";
import {AccessControlUpgradeable} from "../access/AccessControlUpgradeable.sol";
import {ReentrancyGuardUpgradeable} from "../utils/ReentrancyGuardUpgradeable.sol";
import {AssetStructsUpgradeable} from "../protocolStorage/assetStorage/AssetStructsUpgradeable.sol";
import {AssetEnumsUpgradeable} from "../protocolStorage/assetStorage/AssetEnumsUpgradeable.sol";
import {ContextUpgradeable} from "../utils/ContextUpgradeable.sol";

contract NeatSwapImplementationV1 is 
  ContextUpgradeable ,
  UUPSUpgradeable, 
  AccessControlUpgradeable, 
  ReentrancyGuardUpgradeable
{
  address public neatFiProtocolAddress;

  string public name;
  string public currentVersion;

  function _setVersion(string memory newVersion) internal 
  onlyRole(DEFAULT_ADMIN_ROLE) {
    currentVersion = newVersion;
  }

  // Request NeatFi actor key
  function requestActorKey() public onlyRole(DEFAULT_ADMIN_ROLE) {
    INeatFi(neatFiProtocolAddress).requestActorKey(address(this));
  }

  // Order creation implementation
  function makeOrder(
    AssetStructsUpgradeable.Token[] calldata tokens,
    AssetEnumsUpgradeable.AssetOrderType orderType,
    uint256 listingTime,
    uint256 expirationTime,
    uint256 startPrice,
    uint256 endPrice,
    uint256 salt,
    bytes32 actorKey
  ) public payable returns(bytes32 orderHash) {
    return INeatFi(neatFiProtocolAddress).makeOrder{
      value:msg.value
      }(
      tokens, 
      orderType, 
      payable(_msgSender()), 
      listingTime, 
      expirationTime, 
      startPrice, 
      endPrice, 
      salt, 
      actorKey
    );
  }

  function makeBid(
    AssetStructsUpgradeable.Token[] calldata tokens,
    AssetEnumsUpgradeable.AssetOrderType orderType,
    uint256 listingTime,
    uint256 expirationTime,
    uint256 startPrice,
    uint256 endPrice,
    uint256 salt,
    bytes32 orderHash,
    bytes32 actorKey
  ) public returns(bytes32 bidHash) {
    return INeatFi(neatFiProtocolAddress).makeBid(
      tokens, 
      orderType,
      _msgSender(), 
      listingTime, 
      expirationTime, 
      startPrice, 
      endPrice, 
      salt, 
      orderHash, 
      actorKey
    );
  }

  function approveAndResolveSwap(
    bytes32 orderHash,
    bytes32 bidHash,
    bytes calldata orderData,
    bytes calldata bidData
  ) public {
    INeatFi(neatFiProtocolAddress).approveAndResolveSwap(
      _msgSender(), 
      orderHash, 
      bidHash, 
      orderData, 
      bidData
    );
  }

  function buyItNow(
    bytes32 orderHash,
    bytes calldata data
  ) public payable {
    INeatFi(neatFiProtocolAddress).buyItNow{value:msg.value}(
      _msgSender(), 
      orderHash, 
      data
    );
  }

  function decreaseDucthAuctionPrice(
    bytes32 orderHash, 
    uint256 newPrice
  ) public {
    INeatFi(neatFiProtocolAddress).decreaseDucthAuctionPrice(
      _msgSender(), 
      orderHash, 
      newPrice
    );
  }

  function increaseEnglishAuctionPrice(
    bytes32 orderHash, 
    uint256 newPrice
  ) public {
    INeatFi(neatFiProtocolAddress).increaseEnglishAuctionPrice(
      _msgSender(), 
      orderHash, 
      newPrice
    );
  }

  function bidForEnglishAuction(
    bytes32 orderHash, 
    uint256 bidValue
  ) public {
    INeatFi(neatFiProtocolAddress).bidForEnglishAuction(
      _msgSender(), 
      orderHash, 
      bidValue
    );
  }

  function bidForDutchAuction(
    bytes32 orderHash, 
    uint256 bidValue
  ) public {
    INeatFi(neatFiProtocolAddress).bidForDutchAuction(
      _msgSender(), 
      orderHash, 
      bidValue
    );
  }

  function approveLastBid(
    bytes32 orderHash
  ) public {
    INeatFi(neatFiProtocolAddress).approveLastBid(
      _msgSender(), 
      orderHash
    );
  }

  function claimEnglishAuction(
    bytes32 orderHash, 
    bytes calldata data
  ) public payable {
    INeatFi(neatFiProtocolAddress).claimEnglishAuction(
      _msgSender(), 
      orderHash, 
      data
    );
  }

  function claimDutchAuction(
    bytes32 orderHash, 
    bytes calldata data
  ) public payable {
    INeatFi(neatFiProtocolAddress).claimDutchAuction(
      _msgSender(), 
      orderHash, 
      data
    );
  }

  function _authorizeUpgrade(address newImplementation) internal override 
  onlyRole(DEFAULT_ADMIN_ROLE) {}

  function initialize() public initializer {
    __UUPSUpgradeable_init();
    __AccessControl_init();

    _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
    name = "NeatFi Protocol";
    _setVersion("1.0.0");
  }
}