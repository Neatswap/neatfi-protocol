// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {AssetStructsUpgradeable} from "../protocolStorage/assetStorage/AssetStructsUpgradeable.sol";
import {AssetEnumsUpgradeable} from "../protocolStorage/assetStorage/AssetEnumsUpgradeable.sol";
import {IERC20} from "../../interfaces/tokenInterfaces/IERC20.sol";
import {IERC721} from "../../interfaces/tokenInterfaces/IERC721.sol";
import {IERC1155} from "../../interfaces/tokenInterfaces/IERC1155.sol";
import {RoleConstantsUpgradeable} from "../access/RoleConstantsUpgradeable.sol";
import {AccessControlUpgradeable} from "../access/AccessControlUpgradeable.sol";
import {INeatFiProtocolStorage} from "../../interfaces/storageInterfaces/INeatFiProtocolStorage.sol";

contract AssetTransferOperationsUpgradeable is
  AssetEnumsUpgradeable,
  AssetStructsUpgradeable,
  RoleConstantsUpgradeable,
  AccessControlUpgradeable
  {
  address internal neatFiProtocolStorage;

  function _updateNeatFiProtocolStorageAddress(address newNeatFiProtocolStorage) internal {
    neatFiProtocolStorage = newNeatFiProtocolStorage;
  }
  
  /// Resolves ownership transfer of Tokens.
  /// @dev Loops over Tokens of the Order.
  /// @param order - struct Order.
  /// @param from - address From.
  /// @param to - address to.
  function _transferResolver(
    Order memory order,
    address from,
    address to,
    bytes calldata data
  ) internal {
    for (uint256 i = 0; i < order.tokenHashes.length; i++) {
      Token memory token = INeatFiProtocolStorage(neatFiProtocolStorage).getToken(order.tokenHashes[i]);

      if (token.tokenType == TokenType.ERC721) {
        IERC721(token.tokenContract).safeTransferFrom(from, to, token.tokenId, data);
      } else if (token.tokenType == TokenType.ERC1155) {
        IERC1155(token.tokenContract).safeTransferFrom(from, to, token.tokenId, token.amount, data);
      } else if (token.tokenType == TokenType.ERC20) {
        IERC20(token.tokenContract).transferFrom(from, to, token.amount);
      }
    }
  }

  function __AssetTransferOperations_init() internal initializer {
    __AssetStructs_init();
    __AssetEnums_init(); 
    __RoleConstants_init();
    __AccessControl_init();
  }
}