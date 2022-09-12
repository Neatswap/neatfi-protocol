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
} from "../../common";

export declare namespace ProtocolTreasuryStorageUpgradeable {
  export type LockerStruct = {
    tokenHolder: PromiseOrValue<string>;
    lockedTokenAmount: PromiseOrValue<BigNumberish>;
    lockedAt: PromiseOrValue<BigNumberish>;
    availableToUnlockAt: PromiseOrValue<BigNumberish>;
    lockerStatus: PromiseOrValue<BigNumberish>;
  };

  export type LockerStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    number
  ] & {
    tokenHolder: string;
    lockedTokenAmount: BigNumber;
    lockedAt: BigNumber;
    availableToUnlockAt: BigNumber;
    lockerStatus: number;
  };
}

export interface ProtocolTreasuryStorageUpgradeableInterface
  extends utils.Interface {
  functions: {
    "DAY()": FunctionFragment;
    "currentFeeDistributionPool()": FunctionFragment;
    "lastClaimedTimestamp(address)": FunctionFragment;
    "lastPoolGenerationTimestamp()": FunctionFragment;
    "lockedNeatsByAddress(address)": FunctionFragment;
    "lockerInfo(bytes32)": FunctionFragment;
    "lockersByAddress(address,uint256)": FunctionFragment;
    "neatTokenAddress()": FunctionFragment;
    "protocolSettingsAddress()": FunctionFragment;
    "totalLockedNeats()": FunctionFragment;
    "vestingEscrowAddress()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DAY"
      | "currentFeeDistributionPool"
      | "lastClaimedTimestamp"
      | "lastPoolGenerationTimestamp"
      | "lockedNeatsByAddress"
      | "lockerInfo"
      | "lockersByAddress"
      | "neatTokenAddress"
      | "protocolSettingsAddress"
      | "totalLockedNeats"
      | "vestingEscrowAddress"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "DAY", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "currentFeeDistributionPool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastClaimedTimestamp",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "lastPoolGenerationTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lockedNeatsByAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "lockerInfo",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "lockersByAddress",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "neatTokenAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "protocolSettingsAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalLockedNeats",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "vestingEscrowAddress",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "DAY", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentFeeDistributionPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastClaimedTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastPoolGenerationTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lockedNeatsByAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lockerInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lockersByAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "neatTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "protocolSettingsAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalLockedNeats",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vestingEscrowAddress",
    data: BytesLike
  ): Result;

  events: {
    "LockerCreated(tuple,bytes32)": EventFragment;
    "LockerUnlocked(tuple,bytes32)": EventFragment;
    "YieldClaimed(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LockerCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LockerUnlocked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "YieldClaimed"): EventFragment;
}

export interface LockerCreatedEventObject {
  locker: ProtocolTreasuryStorageUpgradeable.LockerStructOutput;
  lockerHash: string;
}
export type LockerCreatedEvent = TypedEvent<
  [ProtocolTreasuryStorageUpgradeable.LockerStructOutput, string],
  LockerCreatedEventObject
>;

export type LockerCreatedEventFilter = TypedEventFilter<LockerCreatedEvent>;

export interface LockerUnlockedEventObject {
  locker: ProtocolTreasuryStorageUpgradeable.LockerStructOutput;
  lockerHash: string;
}
export type LockerUnlockedEvent = TypedEvent<
  [ProtocolTreasuryStorageUpgradeable.LockerStructOutput, string],
  LockerUnlockedEventObject
>;

export type LockerUnlockedEventFilter = TypedEventFilter<LockerUnlockedEvent>;

export interface YieldClaimedEventObject {
  tokenHolder: string;
  yield: BigNumber;
}
export type YieldClaimedEvent = TypedEvent<
  [string, BigNumber],
  YieldClaimedEventObject
>;

export type YieldClaimedEventFilter = TypedEventFilter<YieldClaimedEvent>;

export interface ProtocolTreasuryStorageUpgradeable extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ProtocolTreasuryStorageUpgradeableInterface;

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
    DAY(overrides?: CallOverrides): Promise<[BigNumber]>;

    currentFeeDistributionPool(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastClaimedTimestamp(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    lastPoolGenerationTimestamp(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    lockedNeatsByAddress(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    lockerInfo(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber, number] & {
        tokenHolder: string;
        lockedTokenAmount: BigNumber;
        lockedAt: BigNumber;
        availableToUnlockAt: BigNumber;
        lockerStatus: number;
      }
    >;

    lockersByAddress(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    neatTokenAddress(overrides?: CallOverrides): Promise<[string]>;

    protocolSettingsAddress(overrides?: CallOverrides): Promise<[string]>;

    totalLockedNeats(overrides?: CallOverrides): Promise<[BigNumber]>;

    vestingEscrowAddress(overrides?: CallOverrides): Promise<[string]>;
  };

  DAY(overrides?: CallOverrides): Promise<BigNumber>;

  currentFeeDistributionPool(overrides?: CallOverrides): Promise<BigNumber>;

  lastClaimedTimestamp(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  lastPoolGenerationTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  lockedNeatsByAddress(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  lockerInfo(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, BigNumber, number] & {
      tokenHolder: string;
      lockedTokenAmount: BigNumber;
      lockedAt: BigNumber;
      availableToUnlockAt: BigNumber;
      lockerStatus: number;
    }
  >;

  lockersByAddress(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  neatTokenAddress(overrides?: CallOverrides): Promise<string>;

  protocolSettingsAddress(overrides?: CallOverrides): Promise<string>;

  totalLockedNeats(overrides?: CallOverrides): Promise<BigNumber>;

  vestingEscrowAddress(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    DAY(overrides?: CallOverrides): Promise<BigNumber>;

    currentFeeDistributionPool(overrides?: CallOverrides): Promise<BigNumber>;

    lastClaimedTimestamp(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastPoolGenerationTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    lockedNeatsByAddress(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lockerInfo(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber, number] & {
        tokenHolder: string;
        lockedTokenAmount: BigNumber;
        lockedAt: BigNumber;
        availableToUnlockAt: BigNumber;
        lockerStatus: number;
      }
    >;

    lockersByAddress(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    neatTokenAddress(overrides?: CallOverrides): Promise<string>;

    protocolSettingsAddress(overrides?: CallOverrides): Promise<string>;

    totalLockedNeats(overrides?: CallOverrides): Promise<BigNumber>;

    vestingEscrowAddress(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "LockerCreated(tuple,bytes32)"(
      locker?: null,
      lockerHash?: null
    ): LockerCreatedEventFilter;
    LockerCreated(locker?: null, lockerHash?: null): LockerCreatedEventFilter;

    "LockerUnlocked(tuple,bytes32)"(
      locker?: null,
      lockerHash?: null
    ): LockerUnlockedEventFilter;
    LockerUnlocked(locker?: null, lockerHash?: null): LockerUnlockedEventFilter;

    "YieldClaimed(address,uint256)"(
      tokenHolder?: null,
      _yield?: null
    ): YieldClaimedEventFilter;
    YieldClaimed(tokenHolder?: null, _yield?: null): YieldClaimedEventFilter;
  };

  estimateGas: {
    DAY(overrides?: CallOverrides): Promise<BigNumber>;

    currentFeeDistributionPool(overrides?: CallOverrides): Promise<BigNumber>;

    lastClaimedTimestamp(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastPoolGenerationTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    lockedNeatsByAddress(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lockerInfo(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lockersByAddress(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    neatTokenAddress(overrides?: CallOverrides): Promise<BigNumber>;

    protocolSettingsAddress(overrides?: CallOverrides): Promise<BigNumber>;

    totalLockedNeats(overrides?: CallOverrides): Promise<BigNumber>;

    vestingEscrowAddress(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currentFeeDistributionPool(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastClaimedTimestamp(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastPoolGenerationTimestamp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lockedNeatsByAddress(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lockerInfo(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lockersByAddress(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    neatTokenAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    protocolSettingsAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalLockedNeats(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vestingEscrowAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
