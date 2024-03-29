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
} from "../../../common";

export interface AssetStorageSettingsUpgradeableInterface
  extends utils.Interface {
  functions: {
    "maxTokenNumber()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "maxTokenNumber"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "maxTokenNumber",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "maxTokenNumber",
    data: BytesLike
  ): Result;

  events: {};
}

export interface AssetStorageSettingsUpgradeable extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AssetStorageSettingsUpgradeableInterface;

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
    maxTokenNumber(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  maxTokenNumber(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    maxTokenNumber(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    maxTokenNumber(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    maxTokenNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
