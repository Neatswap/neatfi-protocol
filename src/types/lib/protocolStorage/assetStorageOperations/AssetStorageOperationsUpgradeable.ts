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

export interface AssetStorageOperationsUpgradeableInterface
  extends utils.Interface {
  functions: {
    "AUTHORIZED_OPERATOR()": FunctionFragment;
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "ORDER_TYPEHASH()": FunctionFragment;
    "PROTOCOL_ADMIN()": FunctionFragment;
    "PROTOCOL_TREASURER()": FunctionFragment;
    "TOKEN_TYPEHASH()": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "maxTokenNumber()": FunctionFragment;
    "orderInfo(bytes32)": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "tokenInfo(bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "AUTHORIZED_OPERATOR"
      | "DEFAULT_ADMIN_ROLE"
      | "ORDER_TYPEHASH"
      | "PROTOCOL_ADMIN"
      | "PROTOCOL_TREASURER"
      | "TOKEN_TYPEHASH"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "maxTokenNumber"
      | "orderInfo"
      | "renounceRole"
      | "revokeRole"
      | "supportsInterface"
      | "tokenInfo"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "AUTHORIZED_OPERATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ORDER_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PROTOCOL_ADMIN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PROTOCOL_TREASURER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TOKEN_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "maxTokenNumber",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "orderInfo",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenInfo",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "AUTHORIZED_OPERATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ORDER_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PROTOCOL_ADMIN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PROTOCOL_TREASURER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TOKEN_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxTokenNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "orderInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenInfo", data: BytesLike): Result;

  events: {
    "OrderCreated(tuple,bytes32)": EventFragment;
    "OrderEndPriceChanged(tuple)": EventFragment;
    "OrderExpirationTimeChanged(tuple)": EventFragment;
    "OrderStartPriceChanged(tuple)": EventFragment;
    "OrderStatusChanged(tuple)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OrderCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderEndPriceChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderExpirationTimeChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderStartPriceChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderStatusChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
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

export interface RoleAdminChangedEventObject {
  role: string;
  previousAdminRole: string;
  newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  RoleAdminChangedEventObject
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export interface RoleGrantedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  RoleGrantedEventObject
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export interface RoleRevokedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  RoleRevokedEventObject
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export interface AssetStorageOperationsUpgradeable extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AssetStorageOperationsUpgradeableInterface;

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
    AUTHORIZED_OPERATOR(overrides?: CallOverrides): Promise<[string]>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    ORDER_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;

    PROTOCOL_ADMIN(overrides?: CallOverrides): Promise<[string]>;

    PROTOCOL_TREASURER(overrides?: CallOverrides): Promise<[string]>;

    TOKEN_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    maxTokenNumber(overrides?: CallOverrides): Promise<[BigNumber]>;

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

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

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

  AUTHORIZED_OPERATOR(overrides?: CallOverrides): Promise<string>;

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  ORDER_TYPEHASH(overrides?: CallOverrides): Promise<string>;

  PROTOCOL_ADMIN(overrides?: CallOverrides): Promise<string>;

  PROTOCOL_TREASURER(overrides?: CallOverrides): Promise<string>;

  TOKEN_TYPEHASH(overrides?: CallOverrides): Promise<string>;

  getRoleAdmin(
    role: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  grantRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  maxTokenNumber(overrides?: CallOverrides): Promise<BigNumber>;

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

  renounceRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

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
    AUTHORIZED_OPERATOR(overrides?: CallOverrides): Promise<string>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    ORDER_TYPEHASH(overrides?: CallOverrides): Promise<string>;

    PROTOCOL_ADMIN(overrides?: CallOverrides): Promise<string>;

    PROTOCOL_TREASURER(overrides?: CallOverrides): Promise<string>;

    TOKEN_TYPEHASH(overrides?: CallOverrides): Promise<string>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    maxTokenNumber(overrides?: CallOverrides): Promise<BigNumber>;

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

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

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

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter;
  };

  estimateGas: {
    AUTHORIZED_OPERATOR(overrides?: CallOverrides): Promise<BigNumber>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    ORDER_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;

    PROTOCOL_ADMIN(overrides?: CallOverrides): Promise<BigNumber>;

    PROTOCOL_TREASURER(overrides?: CallOverrides): Promise<BigNumber>;

    TOKEN_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxTokenNumber(overrides?: CallOverrides): Promise<BigNumber>;

    orderInfo(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenInfo(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    AUTHORIZED_OPERATOR(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ORDER_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PROTOCOL_ADMIN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PROTOCOL_TREASURER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    TOKEN_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxTokenNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    orderInfo(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenInfo(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
