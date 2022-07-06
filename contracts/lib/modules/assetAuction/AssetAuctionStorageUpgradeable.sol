// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {Initializable} from "../../utils/Initializable.sol";

contract AssetAuctionStorageUpgradeable is Initializable {
  // mapping orderhash - address
  mapping(bytes32 => address) public lastBidderForOrder;

  function _getLastBidderAddress(bytes32 orderHash) internal view returns(address) {
    return lastBidderForOrder[orderHash];
  }

  function __AssetAuctionStorage_init() internal initializer {
    __AssetAuctionStorage_init_unchained();
  }

  function __AssetAuctionStorage_init_unchained() internal initializer {}
}