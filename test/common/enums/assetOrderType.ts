enum AssetOrderType {
  // 0: Sell ERC20/721/1155 tokens for native currency (i.e. Eth, Matic, etc.).
  SELL,
  // 1: English Auction ERC20/721/1155 tokens for native currency (i.e. Eth, Matic, etc.).
  ENGLISH_AUCTION,
  // 2: Dutch Auction ERC20/721/1155 tokens for native currency (i.e. Eth, Matic, etc.).
  DUTCH_AUCTION,
  // 3: Swaps ERC20/721/1155 tokens with other ERC20/721/1155 tokens.
  SWAP,
  // 4: Bids ERC20/721/1155 tokens for a SELL, AUCTION, or SWAP order.
  BID
}

export default AssetOrderType;
