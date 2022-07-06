// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

interface IPaymentsResolver {
  function englishAuctionFeeResolver(uint256 value) external view returns (uint256 makerEarnings);

  function dutchAuctionFeeResolver(uint256 value) external view returns (uint256 makerEarnings);

  function sellFeeResolver(uint256 value) external view returns (uint256 makerEarnings);

  function swapFeeResolver() external view returns (uint256 feeToBePaid);
}