/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace AssetStructsUpgradeable {
  export type TokenStruct = {
    tokenContract: PromiseOrValue<string>;
    tokenId: PromiseOrValue<BigNumberish>;
    amount: PromiseOrValue<BigNumberish>;
    tokenType: PromiseOrValue<BigNumberish>;
  };

  export type TokenStructOutput = [string, BigNumber, BigNumber, number] & {
    tokenContract: string;
    tokenId: BigNumber;
    amount: BigNumber;
    tokenType: number;
  };
}

export interface INeatFiInterface extends utils.Interface {
  functions: {
    "approveAndResolveSwap(address,bytes32,bytes32,bytes,bytes)": FunctionFragment;
    "approveLastBid(address,bytes32)": FunctionFragment;
    "bidForDutchAuction(address,bytes32,uint256)": FunctionFragment;
    "bidForEnglishAuction(address,bytes32,uint256)": FunctionFragment;
    "buyItNow(address,bytes32,bytes)": FunctionFragment;
    "cancelOrder(address,bytes32)": FunctionFragment;
    "changeFeeDistributionAddress(address,address)": FunctionFragment;
    "claimDutchAuction(address,bytes32,bytes)": FunctionFragment;
    "claimEnglishAuction(address,bytes32,bytes)": FunctionFragment;
    "decreaseDucthAuctionPrice(address,bytes32,uint256)": FunctionFragment;
    "getFeeDistributionAddress(address)": FunctionFragment;
    "getSwapProtocolFee()": FunctionFragment;
    "increaseEnglishAuctionPrice(address,bytes32,uint256)": FunctionFragment;
    "makeBid((address,uint256,uint256,uint8)[],address,uint256,bytes32,bytes32)": FunctionFragment;
    "makeOrder((address,uint256,uint256,uint8)[],uint8,address,uint256,uint256,uint256,bytes32)": FunctionFragment;
    "requestActorKey(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "approveAndResolveSwap"
      | "approveLastBid"
      | "bidForDutchAuction"
      | "bidForEnglishAuction"
      | "buyItNow"
      | "cancelOrder"
      | "changeFeeDistributionAddress"
      | "claimDutchAuction"
      | "claimEnglishAuction"
      | "decreaseDucthAuctionPrice"
      | "getFeeDistributionAddress"
      | "getSwapProtocolFee"
      | "increaseEnglishAuctionPrice"
      | "makeBid"
      | "makeOrder"
      | "requestActorKey"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "approveAndResolveSwap",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "approveLastBid",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "bidForDutchAuction",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "bidForEnglishAuction",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "buyItNow",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelOrder",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "changeFeeDistributionAddress",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "claimDutchAuction",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "claimEnglishAuction",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseDucthAuctionPrice",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getFeeDistributionAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSwapProtocolFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "increaseEnglishAuctionPrice",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "makeBid",
    values: [
      AssetStructsUpgradeable.TokenStruct[],
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "makeOrder",
    values: [
      AssetStructsUpgradeable.TokenStruct[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "requestActorKey",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "approveAndResolveSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approveLastBid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bidForDutchAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bidForEnglishAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buyItNow", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeFeeDistributionAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimDutchAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimEnglishAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreaseDucthAuctionPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFeeDistributionAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSwapProtocolFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseEnglishAuctionPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "makeBid", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "makeOrder", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "requestActorKey",
    data: BytesLike
  ): Result;

  events: {};
}

export interface INeatFi extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: INeatFiInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    approveAndResolveSwap(
      maker: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      bidHash: PromiseOrValue<BytesLike>,
      orderData: PromiseOrValue<BytesLike>,
      bidData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    approveLastBid(
      maker: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    bidForDutchAuction(
      bidder: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      bidValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    bidForEnglishAuction(
      bidder: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      bidValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    buyItNow(
      buyer: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cancelOrder(
      maker: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    changeFeeDistributionAddress(
      actorAddress: PromiseOrValue<string>,
      newFeeDistributionAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimDutchAuction(
      bidder: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimEnglishAuction(
      bidder: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    decreaseDucthAuctionPrice(
      maker: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      newPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getFeeDistributionAddress(
      actorAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string] & { feeDistributionAddress: string }>;

    getSwapProtocolFee(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { sellProtocolFee: BigNumber }>;

    increaseEnglishAuctionPrice(
      maker: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      newPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    makeBid(
      tokens: AssetStructsUpgradeable.TokenStruct[],
      bidder: PromiseOrValue<string>,
      listingTime: PromiseOrValue<BigNumberish>,
      orderHash: PromiseOrValue<BytesLike>,
      actorKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    makeOrder(
      tokens: AssetStructsUpgradeable.TokenStruct[],
      orderType: PromiseOrValue<BigNumberish>,
      maker: PromiseOrValue<string>,
      listingTime: PromiseOrValue<BigNumberish>,
      expirationTime: PromiseOrValue<BigNumberish>,
      startPrice: PromiseOrValue<BigNumberish>,
      actorKey: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    requestActorKey(
      actorAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  approveAndResolveSwap(
    maker: PromiseOrValue<string>,
    orderHash: PromiseOrValue<BytesLike>,
    bidHash: PromiseOrValue<BytesLike>,
    orderData: PromiseOrValue<BytesLike>,
    bidData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  approveLastBid(
    maker: PromiseOrValue<string>,
    orderHash: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  bidForDutchAuction(
    bidder: PromiseOrValue<string>,
    orderHash: PromiseOrValue<BytesLike>,
    bidValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  bidForEnglishAuction(
    bidder: PromiseOrValue<string>,
    orderHash: PromiseOrValue<BytesLike>,
    bidValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  buyItNow(
    buyer: PromiseOrValue<string>,
    orderHash: PromiseOrValue<BytesLike>,
    data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cancelOrder(
    maker: PromiseOrValue<string>,
    orderHash: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  changeFeeDistributionAddress(
    actorAddress: PromiseOrValue<string>,
    newFeeDistributionAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimDutchAuction(
    bidder: PromiseOrValue<string>,
    orderHash: PromiseOrValue<BytesLike>,
    data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimEnglishAuction(
    bidder: PromiseOrValue<string>,
    orderHash: PromiseOrValue<BytesLike>,
    data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  decreaseDucthAuctionPrice(
    maker: PromiseOrValue<string>,
    orderHash: PromiseOrValue<BytesLike>,
    newPrice: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getFeeDistributionAddress(
    actorAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  getSwapProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

  increaseEnglishAuctionPrice(
    maker: PromiseOrValue<string>,
    orderHash: PromiseOrValue<BytesLike>,
    newPrice: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  makeBid(
    tokens: AssetStructsUpgradeable.TokenStruct[],
    bidder: PromiseOrValue<string>,
    listingTime: PromiseOrValue<BigNumberish>,
    orderHash: PromiseOrValue<BytesLike>,
    actorKey: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  makeOrder(
    tokens: AssetStructsUpgradeable.TokenStruct[],
    orderType: PromiseOrValue<BigNumberish>,
    maker: PromiseOrValue<string>,
    listingTime: PromiseOrValue<BigNumberish>,
    expirationTime: PromiseOrValue<BigNumberish>,
    startPrice: PromiseOrValue<BigNumberish>,
    actorKey: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  requestActorKey(
    actorAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    approveAndResolveSwap(
      maker: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      bidHash: PromiseOrValue<BytesLike>,
      orderData: PromiseOrValue<BytesLike>,
      bidData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    approveLastBid(
      maker: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    bidForDutchAuction(
      bidder: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      bidValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    bidForEnglishAuction(
      bidder: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      bidValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    buyItNow(
      buyer: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelOrder(
      maker: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    changeFeeDistributionAddress(
      actorAddress: PromiseOrValue<string>,
      newFeeDistributionAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    claimDutchAuction(
      bidder: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    claimEnglishAuction(
      bidder: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    decreaseDucthAuctionPrice(
      maker: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      newPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getFeeDistributionAddress(
      actorAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getSwapProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

    increaseEnglishAuctionPrice(
      maker: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      newPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    makeBid(
      tokens: AssetStructsUpgradeable.TokenStruct[],
      bidder: PromiseOrValue<string>,
      listingTime: PromiseOrValue<BigNumberish>,
      orderHash: PromiseOrValue<BytesLike>,
      actorKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    makeOrder(
      tokens: AssetStructsUpgradeable.TokenStruct[],
      orderType: PromiseOrValue<BigNumberish>,
      maker: PromiseOrValue<string>,
      listingTime: PromiseOrValue<BigNumberish>,
      expirationTime: PromiseOrValue<BigNumberish>,
      startPrice: PromiseOrValue<BigNumberish>,
      actorKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    requestActorKey(
      actorAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    approveAndResolveSwap(
      maker: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      bidHash: PromiseOrValue<BytesLike>,
      orderData: PromiseOrValue<BytesLike>,
      bidData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    approveLastBid(
      maker: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    bidForDutchAuction(
      bidder: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      bidValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    bidForEnglishAuction(
      bidder: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      bidValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    buyItNow(
      buyer: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cancelOrder(
      maker: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    changeFeeDistributionAddress(
      actorAddress: PromiseOrValue<string>,
      newFeeDistributionAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimDutchAuction(
      bidder: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimEnglishAuction(
      bidder: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    decreaseDucthAuctionPrice(
      maker: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      newPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getFeeDistributionAddress(
      actorAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSwapProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

    increaseEnglishAuctionPrice(
      maker: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      newPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    makeBid(
      tokens: AssetStructsUpgradeable.TokenStruct[],
      bidder: PromiseOrValue<string>,
      listingTime: PromiseOrValue<BigNumberish>,
      orderHash: PromiseOrValue<BytesLike>,
      actorKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    makeOrder(
      tokens: AssetStructsUpgradeable.TokenStruct[],
      orderType: PromiseOrValue<BigNumberish>,
      maker: PromiseOrValue<string>,
      listingTime: PromiseOrValue<BigNumberish>,
      expirationTime: PromiseOrValue<BigNumberish>,
      startPrice: PromiseOrValue<BigNumberish>,
      actorKey: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    requestActorKey(
      actorAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approveAndResolveSwap(
      maker: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      bidHash: PromiseOrValue<BytesLike>,
      orderData: PromiseOrValue<BytesLike>,
      bidData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    approveLastBid(
      maker: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    bidForDutchAuction(
      bidder: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      bidValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    bidForEnglishAuction(
      bidder: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      bidValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    buyItNow(
      buyer: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cancelOrder(
      maker: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    changeFeeDistributionAddress(
      actorAddress: PromiseOrValue<string>,
      newFeeDistributionAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimDutchAuction(
      bidder: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimEnglishAuction(
      bidder: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    decreaseDucthAuctionPrice(
      maker: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      newPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getFeeDistributionAddress(
      actorAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSwapProtocolFee(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    increaseEnglishAuctionPrice(
      maker: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      newPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    makeBid(
      tokens: AssetStructsUpgradeable.TokenStruct[],
      bidder: PromiseOrValue<string>,
      listingTime: PromiseOrValue<BigNumberish>,
      orderHash: PromiseOrValue<BytesLike>,
      actorKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    makeOrder(
      tokens: AssetStructsUpgradeable.TokenStruct[],
      orderType: PromiseOrValue<BigNumberish>,
      maker: PromiseOrValue<string>,
      listingTime: PromiseOrValue<BigNumberish>,
      expirationTime: PromiseOrValue<BigNumberish>,
      startPrice: PromiseOrValue<BigNumberish>,
      actorKey: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    requestActorKey(
      actorAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
