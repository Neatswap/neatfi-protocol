// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {INeatFiProtocolStorage} from "../../interfaces/storageInterfaces/INeatFiProtocolStorage.sol";
import {IAssetSwap} from "../../interfaces/moduleInterfaces/IAssetSwap.sol";
import {IAssetSell} from "../../interfaces/moduleInterfaces/IAssetSell.sol";
import {IAssetAuction} from "../../interfaces/moduleInterfaces/IAssetAuction.sol";
import {IPaymentsResolver} from "../../interfaces/paymentsResolverInterfaces/IPaymentsResolver.sol";
import {IProtocolSettings} from "../../interfaces/protocolSettingsInterfaces/IProtocolSettings.sol";
import {IActorFactory} from "../../interfaces/actorFactoryInterfaces/IActorFactory.sol";
import {RoleConstantsUpgradeable} from "../access/RoleConstantsUpgradeable.sol";
import {AccessControlUpgradeable} from "../access/AccessControlUpgradeable.sol";
import {AssetEnumsUpgradeable} from "../protocolStorage/assetStorage/AssetEnumsUpgradeable.sol";
import {AssetStructsUpgradeable} from "../protocolStorage/assetStorage/AssetStructsUpgradeable.sol";

contract NeatFiProtocolOperationsUpgradeable is
  RoleConstantsUpgradeable,
  AccessControlUpgradeable,
  AssetEnumsUpgradeable,
  AssetStructsUpgradeable
{
  address public swapModule;
  address public sellModule;
  address public auctionModule;
  address public paymentsResolver;
  address public protocolStorage;
  address public protocolSettings;
  address public actorFactory;

  function _setSwapModule(address newSwapModule) internal {
    swapModule = newSwapModule;
  }

  function _setSellModule(address newSellModule) internal {
    sellModule = newSellModule;
  }

  function _setAuctionModule(address newAuctionModule) internal {
    auctionModule = newAuctionModule;
  }

  function _setPaymentsResolver(address newPaymentsResolver) internal {
    paymentsResolver = newPaymentsResolver;
  }

  function _setProtocolStorage(address newProtocolStorage) internal {
    protocolStorage = newProtocolStorage;
  }

  function _setProtocolSettings(address newProtocolSettings) internal {
    protocolSettings = newProtocolSettings;
  }

  function _setActorFactory(address newActorFactory) internal {
    actorFactory = newActorFactory;
  }

  modifier onlyActor(address actor) {
    require(
      IActorFactory(actorFactory).getActorKey(actor) != 0x0,
      "Caller is not an actor."
    );
    _;
  }

  /* ActorKey functions */

  function _requestActorKey(address actorAddress) internal {
    IActorFactory(actorFactory).requestActorKey(actorAddress);
  }

  function _approveAndGenerateActorKey(address actorAddress) internal 
  returns (bytes32 actorKey) {
    return IActorFactory(actorFactory).approveAndGenerateActorKey(actorAddress);
  }

  function _activateActor(address actorAddress) internal {
    IActorFactory(actorFactory).activateActor(actorAddress);
  }

  function _inActivateActor(address actorAddress) internal {
    IActorFactory(actorFactory).inactivateActor(actorAddress);
  }





  function _getEnglishAuctionProtocolFeeNumerator() internal view returns(uint256 englishAuctionProtocolFee) {
    return IProtocolSettings(protocolSettings).getEnglishAuctionProtocolFeeNumerator();
  }

  function _getDutchAuctionProtocolFeeNumerator() internal view returns(uint256 dutchAuctionProtocolFee) {
    return IProtocolSettings(protocolSettings).getDutchAuctionProtocolFeeNumerator();
  }

  function _getSellProtocolFeeNumerator() internal view returns(uint256 sellProtocolFee) {
    return IProtocolSettings(protocolSettings).getSellProtocolFeeNumerator();
  }

  function _getSwapProtocolFee() internal view returns(uint256 sellProtocolFee) {
    return IProtocolSettings(protocolSettings).getSwapProtocolFee();
  }

  function _makeOrder(
    Token[] calldata tokens,
    AssetOrderType orderType,
    address payable maker,
    uint256 value,
    uint256 listingTime,
    uint256 expirationTime,
    uint256 startPrice,
    uint256 endPrice,
    uint256 salt,
    bytes32 actorKey
    ) internal returns (bytes32 orderHash) {
      if (orderType == AssetOrderType.SWAP) {
        require(value == _getSwapProtocolFee(), "NeatFiV1::makeOrder: wrong value for SWAP protocol fee.");
      } else {
      require(value == 0, "NeatFiV1::makeOrder: value should be 0.");
      }

      //TODO implement transfer of protocol fee to the treasury contract - Phase 2 with the Governance contract

      return INeatFiProtocolStorage(protocolStorage).makeOrder(tokens, orderType, maker, listingTime, expirationTime, startPrice, endPrice, salt, actorKey);
    }

  function _makeBid(
    address bidder,
    Token[] calldata tokens,
    AssetOrderType orderType,
    uint256 listingTime,
    uint256 expirationTime,
    uint256 startPrice,
    uint256 endPrice,
    uint256 salt,
    bytes32 orderHash,
    bytes32 actorKey
  ) internal returns(bytes32 bidHash) {
    return IAssetSwap(swapModule).makeBid(
      bidder, 
      tokens, 
      orderType, 
      listingTime, 
      expirationTime, 
      startPrice, 
      endPrice, 
      salt, 
      orderHash, 
      actorKey
    );
  }
  
  function _approveAndResolveSwap(
    address maker,
    bytes32 orderHash,
    bytes32 bidHash,
    bytes calldata orderData,
    bytes calldata bidData
  ) internal {
    IAssetSwap(swapModule).approveAndResolveSwap(maker, orderHash, bidHash, orderData, bidData);
  }

  function _buyItNow(
    bytes32 orderHash,
    uint256 purchaseValue,
    address bidder,
    bytes calldata data
  ) internal {

    address payable maker = INeatFiProtocolStorage(protocolStorage).getOrderMaker(orderHash);
    
    uint256 makerEarnings = IPaymentsResolver(paymentsResolver).sellFeeResolver(purchaseValue);

    bool sent = maker.send(makerEarnings);
    require(
      sent, 
      "NeatFiProtocolOperationsUpgradeable::_buyItNow: failed to send maker earnings."
    );
    
    IAssetSell(sellModule).buyItNow(orderHash, purchaseValue, bidder, data);
  }

  function _decreaseDucthAuctionPrice(
    address maker, 
    bytes32 orderHash, 
    uint256 newPrice
  ) internal {
    IAssetAuction(auctionModule).decreaseDucthAuctionPrice(maker, orderHash, newPrice);
  }

  function _increaseEnglishAuctionPrice(
    address maker, 
    bytes32 orderHash, 
    uint256 newPrice
  ) internal {
    IAssetAuction(auctionModule).increaseEnglishAuctionPrice(maker, orderHash, newPrice);
  }

  function _bidForEnglishAuction(
    address bidder, 
    bytes32 orderHash, 
    uint256 bidValue
  ) internal {
    IAssetAuction(auctionModule).bidForEnglishAuction(bidder, orderHash, bidValue);
  }

  function _bidForDutchAuction(
    address bidder, 
    bytes32 orderHash, 
    uint256 bidValue
  ) internal {
    IAssetAuction(auctionModule).bidForDutchAuction(bidder, orderHash, bidValue);
  }

  function _approveLastBid(address maker, bytes32 orderHash) internal {
    IAssetAuction(auctionModule).approveLastBid(maker, orderHash);
  }

  function _claimEnglishAuction(
    address bidder,
    bytes32 orderHash, 
    uint256 purchaseValue, 
    bytes calldata data
  ) internal {
    address payable maker = INeatFiProtocolStorage(protocolStorage).getOrderMaker(orderHash);

    uint256 makerEarnings = IPaymentsResolver(paymentsResolver).englishAuctionFeeResolver(purchaseValue);

    bool sent = maker.send(makerEarnings);
    require(
      sent, 
      "NeatFiProtocolOperationsUpgradeable::_claimEnglishAuction: failed to send maker earnings."
      );
    
    IAssetAuction(auctionModule).claimAuction(bidder, orderHash, data);
  }

  function _claimDutchAuction(
    address bidder, 
    bytes32 orderHash,
    uint256 purchaseValue, 
    bytes calldata data
  ) internal {
    address payable maker = INeatFiProtocolStorage(protocolStorage).getOrderMaker(orderHash);

    uint256 makerEarnings = IPaymentsResolver(paymentsResolver).dutchAuctionFeeResolver(purchaseValue);

    bool sent = maker.send(makerEarnings);
    require(
      sent, 
      "NeatFiProtocolOperationsUpgradeable::_claimDutchAuction: failed to send maker earnings."
      );
    
    IAssetAuction(auctionModule).claimAuction(bidder, orderHash, data);
  }

  function _getLastBidderAddress(bytes32 orderHash) internal view {
    IAssetAuction(auctionModule).getLastBidderAddress(orderHash);
  }

  function __NeatFiProtocolOperations_init() internal initializer {
    __AssetStructs_init();
    __AssetEnums_init();
    __RoleConstants_init();
    __AccessControl_init();
  }
}