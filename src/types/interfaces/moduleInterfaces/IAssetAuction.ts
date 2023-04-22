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
} from "../../common";

export interface IAssetAuctionInterface extends utils.Interface {
  functions: {
    "approveLastBid(address,bytes32)": FunctionFragment;
    "bidForDutchAuction(address,bytes32,uint256)": FunctionFragment;
    "bidForEnglishAuction(address,bytes32,uint256)": FunctionFragment;
    "claimAuction(address,bytes32,bytes)": FunctionFragment;
    "decreaseDucthAuctionPrice(address,bytes32,uint256)": FunctionFragment;
    "getLastBidderAddress(bytes32)": FunctionFragment;
    "increaseEnglishAuctionPrice(address,bytes32,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "approveLastBid"
      | "bidForDutchAuction"
      | "bidForEnglishAuction"
      | "claimAuction"
      | "decreaseDucthAuctionPrice"
      | "getLastBidderAddress"
      | "increaseEnglishAuctionPrice"
  ): FunctionFragment;

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
    functionFragment: "claimAuction",
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
    functionFragment: "getLastBidderAddress",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseEnglishAuctionPrice",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

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
  decodeFunctionResult(
    functionFragment: "claimAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreaseDucthAuctionPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastBidderAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseEnglishAuctionPrice",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IAssetAuction extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IAssetAuctionInterface;

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

    claimAuction(
      bidder: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    decreaseDucthAuctionPrice(
      maker: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      newPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getLastBidderAddress(
      orderHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string] & { lastBidder: string }>;

    increaseEnglishAuctionPrice(
      maker: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      newPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

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

  claimAuction(
    bidder: PromiseOrValue<string>,
    orderHash: PromiseOrValue<BytesLike>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  decreaseDucthAuctionPrice(
    maker: PromiseOrValue<string>,
    orderHash: PromiseOrValue<BytesLike>,
    newPrice: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getLastBidderAddress(
    orderHash: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  increaseEnglishAuctionPrice(
    maker: PromiseOrValue<string>,
    orderHash: PromiseOrValue<BytesLike>,
    newPrice: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
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

    claimAuction(
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

    getLastBidderAddress(
      orderHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    increaseEnglishAuctionPrice(
      maker: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      newPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
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

    claimAuction(
      bidder: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    decreaseDucthAuctionPrice(
      maker: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      newPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getLastBidderAddress(
      orderHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseEnglishAuctionPrice(
      maker: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      newPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
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

    claimAuction(
      bidder: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    decreaseDucthAuctionPrice(
      maker: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      newPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getLastBidderAddress(
      orderHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    increaseEnglishAuctionPrice(
      maker: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      newPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
