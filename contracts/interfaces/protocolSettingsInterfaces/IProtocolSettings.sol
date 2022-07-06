// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

interface IProtocolSettings {
  function getEnglishAuctionProtocolFeeNumerator() external view returns(uint256 englishAuctionFeeNumerator);

  function getDutchAuctionProtocolFeeNumerator() external view returns(uint256 dutchAuctionFeeNumerator);

  function getSellProtocolFeeNumerator() external view returns(uint256);

  function getSwapProtocolFee() external view returns(uint256);
}