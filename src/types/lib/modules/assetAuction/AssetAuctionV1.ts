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
} from "../../../common";

export interface AssetAuctionV1Interface extends utils.Interface {
  functions: {
    "AUTHORIZED_OPERATOR()": FunctionFragment;
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "PROTOCOL_ADMIN()": FunctionFragment;
    "PROTOCOL_TREASURER()": FunctionFragment;
    "approveLastBid(address,bytes32)": FunctionFragment;
    "bidForDutchAuction(address,bytes32,uint256)": FunctionFragment;
    "bidForEnglishAuction(address,bytes32,uint256)": FunctionFragment;
    "claimAuction(address,bytes32,bytes)": FunctionFragment;
    "decreaseDucthAuctionPrice(address,bytes32,uint256)": FunctionFragment;
    "getLastBidderAddress(bytes32)": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "increaseEnglishAuctionPrice(address,bytes32,uint256)": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "lastBidderForOrder(bytes32)": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "updateAssetTransferAddress(address)": FunctionFragment;
    "updateNeatFiProtocolStorageAddress(address)": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "AUTHORIZED_OPERATOR"
      | "DEFAULT_ADMIN_ROLE"
      | "PROTOCOL_ADMIN"
      | "PROTOCOL_TREASURER"
      | "approveLastBid"
      | "bidForDutchAuction"
      | "bidForEnglishAuction"
      | "claimAuction"
      | "decreaseDucthAuctionPrice"
      | "getLastBidderAddress"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "increaseEnglishAuctionPrice"
      | "initialize"
      | "lastBidderForOrder"
      | "renounceRole"
      | "revokeRole"
      | "supportsInterface"
      | "updateAssetTransferAddress"
      | "updateNeatFiProtocolStorageAddress"
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
    functionFragment: "increaseEnglishAuctionPrice",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "lastBidderForOrder",
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
    functionFragment: "updateAssetTransferAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateNeatFiProtocolStorageAddress",
    values: [PromiseOrValue<string>]
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
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "increaseEnglishAuctionPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastBidderForOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAssetTransferAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateNeatFiProtocolStorageAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;

  events: {
    "AdminChanged(address,address)": EventFragment;
    "AuctionClaimed(bytes32,address)": EventFragment;
    "BeaconUpgraded(address)": EventFragment;
    "DutchAuctionBid(address,bytes32,uint256)": EventFragment;
    "EnglishAuctionBid(address,bytes32,uint256)": EventFragment;
    "LastBidApproved(bytes32,address)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionClaimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DutchAuctionBid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EnglishAuctionBid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LastBidApproved"): EventFragment;
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

export interface AuctionClaimedEventObject {
  orderHash: string;
  bidder: string;
}
export type AuctionClaimedEvent = TypedEvent<
  [string, string],
  AuctionClaimedEventObject
>;

export type AuctionClaimedEventFilter = TypedEventFilter<AuctionClaimedEvent>;

export interface BeaconUpgradedEventObject {
  beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<
  [string],
  BeaconUpgradedEventObject
>;

export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;

export interface DutchAuctionBidEventObject {
  bidder: string;
  orderHash: string;
  bidValue: BigNumber;
}
export type DutchAuctionBidEvent = TypedEvent<
  [string, string, BigNumber],
  DutchAuctionBidEventObject
>;

export type DutchAuctionBidEventFilter = TypedEventFilter<DutchAuctionBidEvent>;

export interface EnglishAuctionBidEventObject {
  bidder: string;
  orderHash: string;
  bidValue: BigNumber;
}
export type EnglishAuctionBidEvent = TypedEvent<
  [string, string, BigNumber],
  EnglishAuctionBidEventObject
>;

export type EnglishAuctionBidEventFilter =
  TypedEventFilter<EnglishAuctionBidEvent>;

export interface LastBidApprovedEventObject {
  orderHash: string;
  bidder: string;
}
export type LastBidApprovedEvent = TypedEvent<
  [string, string],
  LastBidApprovedEventObject
>;

export type LastBidApprovedEventFilter = TypedEventFilter<LastBidApprovedEvent>;

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

export interface AssetAuctionV1 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AssetAuctionV1Interface;

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

    increaseEnglishAuctionPrice(
      maker: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      newPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initialize(
      neatFiProtocolStorageAddress: PromiseOrValue<string>,
      assetTransferAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    lastBidderForOrder(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

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

    updateAssetTransferAddress(
      newAssetTransfer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateNeatFiProtocolStorageAddress(
      newNeatFiProtocolStorage: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

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

  increaseEnglishAuctionPrice(
    maker: PromiseOrValue<string>,
    orderHash: PromiseOrValue<BytesLike>,
    newPrice: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initialize(
    neatFiProtocolStorageAddress: PromiseOrValue<string>,
    assetTransferAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  lastBidderForOrder(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

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

  updateAssetTransferAddress(
    newAssetTransfer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateNeatFiProtocolStorageAddress(
    newNeatFiProtocolStorage: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

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

    increaseEnglishAuctionPrice(
      maker: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      newPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      neatFiProtocolStorageAddress: PromiseOrValue<string>,
      assetTransferAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    lastBidderForOrder(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

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

    updateAssetTransferAddress(
      newAssetTransfer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateNeatFiProtocolStorageAddress(
      newNeatFiProtocolStorage: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

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

    "AuctionClaimed(bytes32,address)"(
      orderHash?: null,
      bidder?: null
    ): AuctionClaimedEventFilter;
    AuctionClaimed(orderHash?: null, bidder?: null): AuctionClaimedEventFilter;

    "BeaconUpgraded(address)"(
      beacon?: PromiseOrValue<string> | null
    ): BeaconUpgradedEventFilter;
    BeaconUpgraded(
      beacon?: PromiseOrValue<string> | null
    ): BeaconUpgradedEventFilter;

    "DutchAuctionBid(address,bytes32,uint256)"(
      bidder?: null,
      orderHash?: null,
      bidValue?: null
    ): DutchAuctionBidEventFilter;
    DutchAuctionBid(
      bidder?: null,
      orderHash?: null,
      bidValue?: null
    ): DutchAuctionBidEventFilter;

    "EnglishAuctionBid(address,bytes32,uint256)"(
      bidder?: null,
      orderHash?: null,
      bidValue?: null
    ): EnglishAuctionBidEventFilter;
    EnglishAuctionBid(
      bidder?: null,
      orderHash?: null,
      bidValue?: null
    ): EnglishAuctionBidEventFilter;

    "LastBidApproved(bytes32,address)"(
      orderHash?: null,
      bidder?: null
    ): LastBidApprovedEventFilter;
    LastBidApproved(
      orderHash?: null,
      bidder?: null
    ): LastBidApprovedEventFilter;

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

    increaseEnglishAuctionPrice(
      maker: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      newPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initialize(
      neatFiProtocolStorageAddress: PromiseOrValue<string>,
      assetTransferAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    lastBidderForOrder(
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

    updateAssetTransferAddress(
      newAssetTransfer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateNeatFiProtocolStorageAddress(
      newNeatFiProtocolStorage: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

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

    increaseEnglishAuctionPrice(
      maker: PromiseOrValue<string>,
      orderHash: PromiseOrValue<BytesLike>,
      newPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      neatFiProtocolStorageAddress: PromiseOrValue<string>,
      assetTransferAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    lastBidderForOrder(
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

    updateAssetTransferAddress(
      newAssetTransfer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateNeatFiProtocolStorageAddress(
      newNeatFiProtocolStorage: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

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
