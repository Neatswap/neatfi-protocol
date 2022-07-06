// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {AssetStructsUpgradeable} from "./AssetStructsUpgradeable.sol";
import {Initializable} from "../../utils/Initializable.sol";

contract AssetEventsUpgradeable is Initializable, AssetStructsUpgradeable {
  /// Fired when an Order is made.
  event OrderCreated(Order order, bytes32 hash);

  /// Fired when an Order status is changed.
  event OrderStatusChanged(Order order);

  /// Fired when an Order start price is changed.
  event OrderStartPriceChanged(Order order);

  /// Fired when an Order end price is changed.
  event OrderEndPriceChanged(Order order);

  event OrderExpirationTimeChanged(Order order);

  /* Initializers */

  function __AssetEvents_init() internal initializer {
    __AssetStructs_init_unchained();
    __AssetEvents_init_unchained();
  }

  function __AssetEvents_init_unchained() internal initializer {}
}
