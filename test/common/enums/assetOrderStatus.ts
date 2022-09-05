enum AssetOrderStatus {
  // 0: Order is open for interaction.
  OPEN,
  // 1: Order has accepted Bids and is unavailable for interaction.
  PROCESSING,
  // 2: Order has expired and is unavailable for interaction.
  EXPIRED,
  // 3: Order has been cancelled by the maker.
  CANCELLED,
  // 4: Order was successfully executed and an escrow was formed.
  CLOSED
}

export default AssetOrderStatus;
