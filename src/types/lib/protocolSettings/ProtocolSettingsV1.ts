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
} from "../../common";

export interface ProtocolSettingsV1Interface extends utils.Interface {
  functions: {
    "AUTHORIZED_OPERATOR()": FunctionFragment;
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "PROTOCOL_ADMIN()": FunctionFragment;
    "PROTOCOL_TREASURER()": FunctionFragment;
    "actorEarningsNumerator()": FunctionFragment;
    "dutchAuctionProtocolFeeNumerator()": FunctionFragment;
    "englishAuctionProtocolFeeNumerator()": FunctionFragment;
    "getActorEarningsNumerator()": FunctionFragment;
    "getDutchAuctionProtocolFeeNumerator()": FunctionFragment;
    "getEnglishAuctionProtocolFeeNumerator()": FunctionFragment;
    "getProtocolFeeDistributionNumerator()": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "getSellProtocolFeeNumerator()": FunctionFragment;
    "getSwapProtocolFee()": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "initialize(uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
    "protocolFeeDistributionNumerator()": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "sellProtocolFee()": FunctionFragment;
    "setDutchAuctionProtocolFeeNumerator(uint256)": FunctionFragment;
    "setEnglishAuctionProtocolFeeNumerator(uint256)": FunctionFragment;
    "setSellProtocolFee(uint256)": FunctionFragment;
    "setSwapProtocolFee(uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "swapProtocolFee()": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "AUTHORIZED_OPERATOR"
      | "DEFAULT_ADMIN_ROLE"
      | "PROTOCOL_ADMIN"
      | "PROTOCOL_TREASURER"
      | "actorEarningsNumerator"
      | "dutchAuctionProtocolFeeNumerator"
      | "englishAuctionProtocolFeeNumerator"
      | "getActorEarningsNumerator"
      | "getDutchAuctionProtocolFeeNumerator"
      | "getEnglishAuctionProtocolFeeNumerator"
      | "getProtocolFeeDistributionNumerator"
      | "getRoleAdmin"
      | "getSellProtocolFeeNumerator"
      | "getSwapProtocolFee"
      | "grantRole"
      | "hasRole"
      | "initialize"
      | "protocolFeeDistributionNumerator"
      | "renounceRole"
      | "revokeRole"
      | "sellProtocolFee"
      | "setDutchAuctionProtocolFeeNumerator"
      | "setEnglishAuctionProtocolFeeNumerator"
      | "setSellProtocolFee"
      | "setSwapProtocolFee"
      | "supportsInterface"
      | "swapProtocolFee"
      | "upgradeTo"
      | "upgradeToAndCall"
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
    functionFragment: "PROTOCOL_ADMIN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PROTOCOL_TREASURER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "actorEarningsNumerator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "dutchAuctionProtocolFeeNumerator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "englishAuctionProtocolFeeNumerator",
    values?: undefined
  ): string;
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
    functionFragment: "getRoleAdmin",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSellProtocolFeeNumerator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSwapProtocolFee",
    values?: undefined
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
    functionFragment: "initialize",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "protocolFeeDistributionNumerator",
    values?: undefined
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
    functionFragment: "sellProtocolFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setDutchAuctionProtocolFeeNumerator",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setEnglishAuctionProtocolFeeNumerator",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setSellProtocolFee",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setSwapProtocolFee",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "swapProtocolFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeTo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
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
    functionFragment: "PROTOCOL_ADMIN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PROTOCOL_TREASURER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "actorEarningsNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dutchAuctionProtocolFeeNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "englishAuctionProtocolFeeNumerator",
    data: BytesLike
  ): Result;
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
    functionFragment: "getRoleAdmin",
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
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "protocolFeeDistributionNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sellProtocolFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDutchAuctionProtocolFeeNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEnglishAuctionProtocolFeeNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSellProtocolFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSwapProtocolFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapProtocolFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;

  events: {
    "AdminChanged(address,address)": EventFragment;
    "BeaconUpgraded(address)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export interface AdminChangedEventObject {
  previousAdmin: string;
  newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<
  [string, string],
  AdminChangedEventObject
>;

export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;

export interface BeaconUpgradedEventObject {
  beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<
  [string],
  BeaconUpgradedEventObject
>;

export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;

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

export interface UpgradedEventObject {
  implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface ProtocolSettingsV1 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ProtocolSettingsV1Interface;

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

    PROTOCOL_ADMIN(overrides?: CallOverrides): Promise<[string]>;

    PROTOCOL_TREASURER(overrides?: CallOverrides): Promise<[string]>;

    actorEarningsNumerator(overrides?: CallOverrides): Promise<[BigNumber]>;

    dutchAuctionProtocolFeeNumerator(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    englishAuctionProtocolFeeNumerator(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getActorEarningsNumerator(overrides?: CallOverrides): Promise<[BigNumber]>;

    getDutchAuctionProtocolFeeNumerator(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { dutchAuctionFeeNumerator: BigNumber }>;

    getEnglishAuctionProtocolFeeNumerator(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { englishAuctionFeeNumerator: BigNumber }>;

    getProtocolFeeDistributionNumerator(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getSellProtocolFeeNumerator(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSwapProtocolFee(overrides?: CallOverrides): Promise<[BigNumber]>;

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

    initialize(
      newSwapProtocolFeeValue: PromiseOrValue<BigNumberish>,
      newSellProtocolFeeValue: PromiseOrValue<BigNumberish>,
      newDutchAuctionProtocolFeeNumeratorValue: PromiseOrValue<BigNumberish>,
      newEnglishAuctionProtocolFeeNumeratorValue: PromiseOrValue<BigNumberish>,
      newActorEarningsNumerator: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    protocolFeeDistributionNumerator(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

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

    sellProtocolFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    setDutchAuctionProtocolFeeNumerator(
      newDutchAuctionProtocolFeeNumerator: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setEnglishAuctionProtocolFeeNumerator(
      newEnglishAuctionProtocolFeeNumerator: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSellProtocolFee(
      newSellProtocolFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSwapProtocolFee(
      newSwapProtocolFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    swapProtocolFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  AUTHORIZED_OPERATOR(overrides?: CallOverrides): Promise<string>;

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  PROTOCOL_ADMIN(overrides?: CallOverrides): Promise<string>;

  PROTOCOL_TREASURER(overrides?: CallOverrides): Promise<string>;

  actorEarningsNumerator(overrides?: CallOverrides): Promise<BigNumber>;

  dutchAuctionProtocolFeeNumerator(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  englishAuctionProtocolFeeNumerator(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

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

  getRoleAdmin(
    role: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  getSellProtocolFeeNumerator(overrides?: CallOverrides): Promise<BigNumber>;

  getSwapProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

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

  initialize(
    newSwapProtocolFeeValue: PromiseOrValue<BigNumberish>,
    newSellProtocolFeeValue: PromiseOrValue<BigNumberish>,
    newDutchAuctionProtocolFeeNumeratorValue: PromiseOrValue<BigNumberish>,
    newEnglishAuctionProtocolFeeNumeratorValue: PromiseOrValue<BigNumberish>,
    newActorEarningsNumerator: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  protocolFeeDistributionNumerator(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

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

  sellProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

  setDutchAuctionProtocolFeeNumerator(
    newDutchAuctionProtocolFeeNumerator: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setEnglishAuctionProtocolFeeNumerator(
    newEnglishAuctionProtocolFeeNumerator: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSellProtocolFee(
    newSellProtocolFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSwapProtocolFee(
    newSwapProtocolFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  swapProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

  upgradeTo(
    newImplementation: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    newImplementation: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    AUTHORIZED_OPERATOR(overrides?: CallOverrides): Promise<string>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    PROTOCOL_ADMIN(overrides?: CallOverrides): Promise<string>;

    PROTOCOL_TREASURER(overrides?: CallOverrides): Promise<string>;

    actorEarningsNumerator(overrides?: CallOverrides): Promise<BigNumber>;

    dutchAuctionProtocolFeeNumerator(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    englishAuctionProtocolFeeNumerator(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    getSellProtocolFeeNumerator(overrides?: CallOverrides): Promise<BigNumber>;

    getSwapProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

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

    initialize(
      newSwapProtocolFeeValue: PromiseOrValue<BigNumberish>,
      newSellProtocolFeeValue: PromiseOrValue<BigNumberish>,
      newDutchAuctionProtocolFeeNumeratorValue: PromiseOrValue<BigNumberish>,
      newEnglishAuctionProtocolFeeNumeratorValue: PromiseOrValue<BigNumberish>,
      newActorEarningsNumerator: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    protocolFeeDistributionNumerator(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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

    sellProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

    setDutchAuctionProtocolFeeNumerator(
      newDutchAuctionProtocolFeeNumerator: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setEnglishAuctionProtocolFeeNumerator(
      newEnglishAuctionProtocolFeeNumerator: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setSellProtocolFee(
      newSellProtocolFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setSwapProtocolFee(
      newSwapProtocolFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    swapProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AdminChanged(address,address)"(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;
    AdminChanged(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;

    "BeaconUpgraded(address)"(
      beacon?: PromiseOrValue<string> | null
    ): BeaconUpgradedEventFilter;
    BeaconUpgraded(
      beacon?: PromiseOrValue<string> | null
    ): BeaconUpgradedEventFilter;

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

    "Upgraded(address)"(
      implementation?: PromiseOrValue<string> | null
    ): UpgradedEventFilter;
    Upgraded(
      implementation?: PromiseOrValue<string> | null
    ): UpgradedEventFilter;
  };

  estimateGas: {
    AUTHORIZED_OPERATOR(overrides?: CallOverrides): Promise<BigNumber>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    PROTOCOL_ADMIN(overrides?: CallOverrides): Promise<BigNumber>;

    PROTOCOL_TREASURER(overrides?: CallOverrides): Promise<BigNumber>;

    actorEarningsNumerator(overrides?: CallOverrides): Promise<BigNumber>;

    dutchAuctionProtocolFeeNumerator(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    englishAuctionProtocolFeeNumerator(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSellProtocolFeeNumerator(overrides?: CallOverrides): Promise<BigNumber>;

    getSwapProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

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

    initialize(
      newSwapProtocolFeeValue: PromiseOrValue<BigNumberish>,
      newSellProtocolFeeValue: PromiseOrValue<BigNumberish>,
      newDutchAuctionProtocolFeeNumeratorValue: PromiseOrValue<BigNumberish>,
      newEnglishAuctionProtocolFeeNumeratorValue: PromiseOrValue<BigNumberish>,
      newActorEarningsNumerator: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    protocolFeeDistributionNumerator(
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

    sellProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

    setDutchAuctionProtocolFeeNumerator(
      newDutchAuctionProtocolFeeNumerator: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setEnglishAuctionProtocolFeeNumerator(
      newEnglishAuctionProtocolFeeNumerator: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSellProtocolFee(
      newSellProtocolFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSwapProtocolFee(
      newSwapProtocolFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    AUTHORIZED_OPERATOR(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    PROTOCOL_ADMIN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PROTOCOL_TREASURER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    actorEarningsNumerator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    dutchAuctionProtocolFeeNumerator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    englishAuctionProtocolFeeNumerator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

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

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSellProtocolFeeNumerator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSwapProtocolFee(
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

    initialize(
      newSwapProtocolFeeValue: PromiseOrValue<BigNumberish>,
      newSellProtocolFeeValue: PromiseOrValue<BigNumberish>,
      newDutchAuctionProtocolFeeNumeratorValue: PromiseOrValue<BigNumberish>,
      newEnglishAuctionProtocolFeeNumeratorValue: PromiseOrValue<BigNumberish>,
      newActorEarningsNumerator: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    protocolFeeDistributionNumerator(
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

    sellProtocolFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setDutchAuctionProtocolFeeNumerator(
      newDutchAuctionProtocolFeeNumerator: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setEnglishAuctionProtocolFeeNumerator(
      newEnglishAuctionProtocolFeeNumerator: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSellProtocolFee(
      newSellProtocolFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSwapProtocolFee(
      newSwapProtocolFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swapProtocolFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
