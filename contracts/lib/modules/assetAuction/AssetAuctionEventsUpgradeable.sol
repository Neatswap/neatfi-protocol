// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {Initializable} from "../../utils/Initializable.sol";

contract AssetAuctionEventsUpgradeable is Initializable {
  event EnglishAuctionBid(address bidder, bytes32 orderHash, uint256 bidValue);

  event DutchAuctionBid(address bidder, bytes32 orderHash, uint256 bidValue);

  event LastBidApproved(bytes32 orderHash, address bidder);

  event AuctionClaimed(bytes32 orderHash, address bidder);

  function __AssetAuctionEvents_init() internal initializer {
    __AssetAuctionEvents_init_unchained();
  }

  function __AssetAuctionEvents_init_unchained() internal initializer {}
}