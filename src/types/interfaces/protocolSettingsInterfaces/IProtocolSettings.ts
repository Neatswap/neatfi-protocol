/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
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

export interface IProtocolSettingsInterface extends utils.Interface {
  functions: {
    "getActorEarningsNumerator()": FunctionFragment;
    "getDutchAuctionProtocolFeeNumerator()": FunctionFragment;
    "getEnglishAuctionProtocolFeeNumerator()": FunctionFragment;
    "getProtocolFeeDistributionNumerator()": FunctionFragment;
    "getSellProtocolFeeNumerator()": FunctionFragment;
    "getSwapProtocolFee()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getActorEarningsNumerator"
      | "getDutchAuctionProtocolFeeNumerator"
      | "getEnglishAuctionProtocolFeeNumerator"
      | "getProtocolFeeDistributionNumerator"
      | "getSellProtocolFeeNumerator"
      | "getSwapProtocolFee"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getActorEarningsNumerator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDutchAuctionProtocolFeeNumerator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getEnglishAuctionProtocolFeeNumerator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getProtocolFeeDistributionNumerator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSellProtocolFeeNumerator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSwapProtocolFee",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getActorEarningsNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDutchAuctionProtocolFeeNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEnglishAuctionProtocolFeeNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProtocolFeeDistributionNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSellProtocolFeeNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSwapProtocolFee",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IProtocolSettings extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IProtocolSettingsInterface;

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
    getActorEarningsNumerator(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { actorEarningsNumerator: BigNumber }>;

    getDutchAuctionProtocolFeeNumerator(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { dutchAuctionFeeNumerator: BigNumber }>;

    getEnglishAuctionProtocolFeeNumerator(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { englishAuctionFeeNumerator: BigNumber }>;

    getProtocolFeeDistributionNumerator(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { protocolFeeDistributionNumerator: BigNumber }>;

    getSellProtocolFeeNumerator(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { sellProtocolFeeNumerator: BigNumber }>;

    getSwapProtocolFee(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { swapProtocolFee: BigNumber }>;
  };

  getActorEarningsNumerator(overrides?: CallOverrides): Promise<BigNumber>;

  getDutchAuctionProtocolFeeNumerator(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getEnglishAuctionProtocolFeeNumerator(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getProtocolFeeDistributionNumerator(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSellProtocolFeeNumerator(overrides?: CallOverrides): Promise<BigNumber>;

  getSwapProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    getActorEarningsNumerator(overrides?: CallOverrides): Promise<BigNumber>;

    getDutchAuctionProtocolFeeNumerator(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEnglishAuctionProtocolFeeNumerator(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProtocolFeeDistributionNumerator(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSellProtocolFeeNumerator(overrides?: CallOverrides): Promise<BigNumber>;

    getSwapProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getActorEarningsNumerator(overrides?: CallOverrides): Promise<BigNumber>;

    getDutchAuctionProtocolFeeNumerator(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEnglishAuctionProtocolFeeNumerator(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProtocolFeeDistributionNumerator(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSellProtocolFeeNumerator(overrides?: CallOverrides): Promise<BigNumber>;

    getSwapProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getActorEarningsNumerator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDutchAuctionProtocolFeeNumerator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEnglishAuctionProtocolFeeNumerator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProtocolFeeDistributionNumerator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSellProtocolFeeNumerator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSwapProtocolFee(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
