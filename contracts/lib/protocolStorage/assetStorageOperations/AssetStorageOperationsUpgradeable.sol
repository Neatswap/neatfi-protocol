// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {AssetMappingsUpgradeable} from "../assetStorage/AssetMappingsUpgradeable.sol";
import {AssetTypehasheConstantsUpgradeable} from "../assetStorage/AssetTypehasheConstantsUpgradeable.sol";
import {AssetStorageSettingsUpgradeable} from "../assetStorage/AssetStorageSettingsUpgradeable.sol";
import {AccessControlUpgradeable} from "../../access/AccessControlUpgradeable.sol";
import {RoleConstantsUpgradeable} from "../../access/RoleConstantsUpgradeable.sol";
import {AddressVerifier} from "../../helpers/AddressVerifier.sol";
import {LimitsVerifier} from "../../helpers/LimitsVerifier.sol";

contract AssetStorageOperationsUpgradeable is 
  RoleConstantsUpgradeable,
  AssetStorageSettingsUpgradeable, 
  AssetTypehasheConstantsUpgradeable, 
  AssetMappingsUpgradeable,
  AddressVerifier,
  LimitsVerifier, 
  AccessControlUpgradeable
   {
    //TODO make comments like this
    /**
     * @dev Internal pure function to derive required EIP-712 typehashes and
     *      other hashes during contract creation.
     *
     * @return nameHash                  The hash of the name of the contract.
     * @return versionHash               The hash of the version string of the
     *                                   contract.
     * @return eip712DomainTypehash      The primary EIP-712 domain typehash.
     * @return offerItemTypehash         The EIP-712 typehash for OfferItem
     *                                   types.
     * @return considerationItemTypehash The EIP-712 typehash for
     *                                   ConsiderationItem types.
     * @return orderTypehash             The EIP-712 typehash for Order types.
     */

  /// Regulates the maximum number of unique tokens in an Order.
  /// @dev only available to the current Protocol managers.
  /// @param newMaxTokenNumber - new maxTokenNumber.
  function setMaxTokenNumber(uint256 newMaxTokenNumber) external onlyRole(PROTOCOL_ADMIN){
    maxTokenNumber = newMaxTokenNumber;
  }

  /// Hashes a single Token asset.
  /// @dev internal helper function.
  /// @param token - Token asset struct.
  /// @return bytes32 single Token hash.
  function _hashSingleToken(Token memory token) internal returns (bytes32) {
    bytes32 singleTokenHash = keccak256(
      abi.encode(
        TOKEN_TYPEHASH,
        token.tokenContract,
        token.tokenId,
        token.amount,
        token.tokenType
      )
    );

    /// Mapping the token hash to the Token struct.
    tokenInfo[singleTokenHash] = token;

    return singleTokenHash;
  }

  /// Hashes a batch of Token assets.
  /// @param tokens - array of Token assets.
  /// @return array of bytes32 Token hashes.
  function _hashTokens(Token[] memory tokens)
    internal
    returns (bytes32[] memory)
  {
    bytes32[] memory tokenHashes = new bytes32[](tokens.length);

    for (uint256 i = 0; i < tokens.length; i++) {
      require(isValidContractAddress(tokens[i].tokenContract), 
      "AssetStorageOperations:_tokenHash: one of the Token contracts in the batch does not exist.");

      tokenHashes[i] = _hashSingleToken(
        Token(
          tokens[i].tokenContract,
          tokens[i].tokenId,
          tokens[i].amount,
          tokens[i].tokenType
        )
      );
    }

    return tokenHashes;
  }

  /// Hashes an Order.
  /// @param order - Order struct.
  /// @return bytes32 Order hash.
  function _hashOrder(Order memory order) internal pure returns (bytes32) {
    return
      keccak256(
        abi.encode(
          ORDER_TYPEHASH,
          order.tokenHashes,
          order.maker,
          order.orderType,
          order.listingTime,
          order.expirationTime,
          order.startPrice,
          order.endPrice,
          order.salt,
          order.status
        )
      );
  }

  /// Makes and order.
  /// @return Order hash.
  function _makeOrder(
    Token[] calldata tokens,
    address payable maker,
    AssetOrderType orderType,
    uint256 listingTime,
    uint256 expirationTime,
    uint256 startPrice,
    uint256 endPrice,
    uint256 salt,
    bytes32 actorKey
  ) internal returns (bytes32) {
    require(
      tokens.length >= 1 && tokens.length <= maxTokenNumber,
      "AssetStorageOperations::_makeOrder: asset number increases the maximum allowed.");

    bytes32[] memory tokenHashes = _hashTokens(tokens);

    Order memory o = Order(
      tokenHashes,
      maker,
      orderType,
      listingTime,
      expirationTime,
      startPrice,
      endPrice,
      salt,
      AssetOrderStatus.OPEN,
      actorKey
    );

    bytes32 hash = _hashOrder(o);
    orderInfo[hash] = o;

    emit OrderCreated(o, hash);

    return hash;
  }

  /// Verifies Order parameters.
  /// @param orderHash - Order struct hash.
  /// @return bool check result.
  function _isValidOrder(bytes32 orderHash) internal returns (bool) {
    Order storage order = orderInfo[orderHash];

    /// Order must be ready for operations.
    if (block.timestamp < order.listingTime) {
      return false;
    }

    /// Order must be OPEN.
    if (order.status != AssetOrderStatus.OPEN) {
      return false;
    }

    /// Order must not be EXPIRED.
    if (block.timestamp > order.expirationTime) {
      order.status = AssetOrderStatus.EXPIRED;
      emit OrderStatusChanged(order);
      return false;
    }

    return true;
  }

  function _isValidOwner(bytes32 orderHash, address payable maker) internal view returns (bool) {
    Order storage order = orderInfo[orderHash];
    if (maker != order.maker) {
      return false;
    }
    
    return true;
  }

  function _getOrder(bytes32 orderHash) internal view returns(Order storage) {
    Order storage order = orderInfo[orderHash];

    return order;
  }

  function _getOrderMaker(bytes32 orderHash) internal view returns(address payable maker) {
    Order storage order = orderInfo[orderHash];

    return order.maker;
  }

  function _getToken(bytes32 tokenHash) internal view returns(Token storage) {
    Token storage token = tokenInfo[tokenHash];

    return token;
  }

  function _changeOrderStartPrice(bytes32 orderHash, uint256 newStartPrice)
   internal
   isWithinLimits(newStartPrice)
    {
    Order storage order = orderInfo[orderHash];

    order.startPrice = newStartPrice;
    
    emit OrderStartPriceChanged(order);
  }

  function _changeOrderEndPrice(bytes32 orderHash, uint256 newEndPrice)
   internal
   isWithinLimits(newEndPrice)
    {
    Order storage order = orderInfo[orderHash];

    order.endPrice = newEndPrice;
    
    emit OrderEndPriceChanged(order);
  }

  function _changeOrderStatus(bytes32 orderHash, AssetOrderStatus newStatus) internal {
    Order storage order = orderInfo[orderHash];

    order.status = newStatus;

    emit OrderStatusChanged(order);
  }

  function _changeOrderExpirationTime(bytes32 orderHash, uint256 newExpirationTime) internal {
    Order storage order = orderInfo[orderHash];

    order.expirationTime = newExpirationTime;

    emit OrderExpirationTimeChanged(order);
  }

  function __AssetStorageOperations_init() internal initializer {
    __RoleConstants_init();
    __AssetEnums_init();
    __AssetStorageSettings_init();
    __AssetTypehasheConstants_init();
    __AssetMappings_init();
    __AccessControl_init();
  }
}