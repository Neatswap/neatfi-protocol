/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export declare namespace AssetStructsUpgradeable {
  export type OrderStruct = {
    tokenHashes: PromiseOrValue<BytesLike>[];
    maker: PromiseOrValue<string>;
    orderType: PromiseOrValue<BigNumberish>;
    listingTime: PromiseOrValue<BigNumberish>;
    expirationTime: PromiseOrValue<BigNumberish>;
    startPrice: PromiseOrValue<BigNumberish>;
    endPrice: PromiseOrValue<BigNumberish>;
    salt: PromiseOrValue<BytesLike>;
    status: PromiseOrValue<BigNumberish>;
    actorKey: PromiseOrValue<BytesLike>;
  };

  export type OrderStructOutput = [
    string[],
    string,
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    number,
    string
  ] & {
    tokenHashes: string[];
    maker: string;
    orderType: number;
    listingTime: BigNumber;
    expirationTime: BigNumber;
    startPrice: BigNumber;
    endPrice: BigNumber;
    salt: string;
    status: number;
    actorKey: string;
  };
}

export interface AssetMappingsUpgradeableInterface extends utils.Interface {
  functions: {
    "orderInfo(bytes32)": FunctionFragment;
    "tokenInfo(bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "orderInfo" | "tokenInfo"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "orderInfo",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenInfo",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: "orderInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenInfo", data: BytesLike): Result;

  events: {
    "OrderCreated(tuple,bytes32)": EventFragment;
    "OrderEndPriceChanged(tuple)": EventFragment;
    "OrderExpirationTimeChanged(tuple)": EventFragment;
    "OrderStartPriceChanged(tuple)": EventFragment;
    "OrderStatusChanged(tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OrderCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderEndPriceChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderExpirationTimeChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderStartPriceChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderStatusChanged"): EventFragment;
}

export interface OrderCreatedEventObject {
  order: AssetStructsUpgradeable.OrderStructOutput;
  orderHash: string;
}
export type OrderCreatedEvent = TypedEvent<
  [AssetStructsUpgradeable.OrderStructOutput, string],
  OrderCreatedEventObject
>;

export type OrderCreatedEventFilter = TypedEventFilter<OrderCreatedEvent>;

export interface OrderEndPriceChangedEventObject {
  order: AssetStructsUpgradeable.OrderStructOutput;
}
export type OrderEndPriceChangedEvent = TypedEvent<
  [AssetStructsUpgradeable.OrderStructOutput],
  OrderEndPriceChangedEventObject
>;

export type OrderEndPriceChangedEventFilter =
  TypedEventFilter<OrderEndPriceChangedEvent>;

export interface OrderExpirationTimeChangedEventObject {
  order: AssetStructsUpgradeable.OrderStructOutput;
}
export type OrderExpirationTimeChangedEvent = TypedEvent<
  [AssetStructsUpgradeable.OrderStructOutput],
  OrderExpirationTimeChangedEventObject
>;

export type OrderExpirationTimeChangedEventFilter =
  TypedEventFilter<OrderExpirationTimeChangedEvent>;

export interface OrderStartPriceChangedEventObject {
  order: AssetStructsUpgradeable.OrderStructOutput;
}
export type OrderStartPriceChangedEvent = TypedEvent<
  [AssetStructsUpgradeable.OrderStructOutput],
  OrderStartPriceChangedEventObject
>;

export type OrderStartPriceChangedEventFilter =
  TypedEventFilter<OrderStartPriceChangedEvent>;

export interface OrderStatusChangedEventObject {
  order: AssetStructsUpgradeable.OrderStructOutput;
}
export type OrderStatusChangedEvent = TypedEvent<
  [AssetStructsUpgradeable.OrderStructOutput],
  OrderStatusChangedEventObject
>;

export type OrderStatusChangedEventFilter =
  TypedEventFilter<OrderStatusChangedEvent>;

export interface AssetMappingsUpgradeable extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AssetMappingsUpgradeableInterface;

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
    orderInfo(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        number,
        string
      ] & {
        maker: string;
        orderType: number;
        listingTime: BigNumber;
        expirationTime: BigNumber;
        startPrice: BigNumber;
        endPrice: BigNumber;
        salt: string;
        status: number;
        actorKey: string;
      }
    >;

    tokenInfo(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, number] & {
        tokenContract: string;
        tokenId: BigNumber;
        amount: BigNumber;
        tokenType: number;
      }
    >;
  };

  orderInfo(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      number,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string,
      number,
      string
    ] & {
      maker: string;
      orderType: number;
      listingTime: BigNumber;
      expirationTime: BigNumber;
      startPrice: BigNumber;
      endPrice: BigNumber;
      salt: string;
      status: number;
      actorKey: string;
    }
  >;

  tokenInfo(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, number] & {
      tokenContract: string;
      tokenId: BigNumber;
      amount: BigNumber;
      tokenType: number;
    }
  >;

  callStatic: {
    orderInfo(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        number,
        string
      ] & {
        maker: string;
        orderType: number;
        listingTime: BigNumber;
        expirationTime: BigNumber;
        startPrice: BigNumber;
        endPrice: BigNumber;
        salt: string;
        status: number;
        actorKey: string;
      }
    >;

    tokenInfo(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, number] & {
        tokenContract: string;
        tokenId: BigNumber;
        amount: BigNumber;
        tokenType: number;
      }
    >;
  };

  filters: {
    "OrderCreated(tuple,bytes32)"(
      order?: null,
      orderHash?: null
    ): OrderCreatedEventFilter;
    OrderCreated(order?: null, orderHash?: null): OrderCreatedEventFilter;

    "OrderEndPriceChanged(tuple)"(
      order?: null
    ): OrderEndPriceChangedEventFilter;
    OrderEndPriceChanged(order?: null): OrderEndPriceChangedEventFilter;

    "OrderExpirationTimeChanged(tuple)"(
      order?: null
    ): OrderExpirationTimeChangedEventFilter;
    OrderExpirationTimeChanged(
      order?: null
    ): OrderExpirationTimeChangedEventFilter;

    "OrderStartPriceChanged(tuple)"(
      order?: null
    ): OrderStartPriceChangedEventFilter;
    OrderStartPriceChanged(order?: null): OrderStartPriceChangedEventFilter;

    "OrderStatusChanged(tuple)"(order?: null): OrderStatusChangedEventFilter;
    OrderStatusChanged(order?: null): OrderStatusChangedEventFilter;
  };

  estimateGas: {
    orderInfo(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenInfo(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    orderInfo(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenInfo(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
