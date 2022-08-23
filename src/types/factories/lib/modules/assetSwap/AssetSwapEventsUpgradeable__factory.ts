/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  AssetSwapEventsUpgradeable,
  AssetSwapEventsUpgradeableInterface,
} from "../../../../lib/modules/assetSwap/AssetSwapEventsUpgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "bidHash",
        type: "bytes32",
      },
    ],
    name: "BidForOrder",
    type: "event",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea26469706673582212209808e6235378057be5812da0da8aaf678db792639414f31dc7c4e222b3ae275b64736f6c634300080f0033";

type AssetSwapEventsUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetSwapEventsUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetSwapEventsUpgradeable__factory extends ContractFactory {
  constructor(...args: AssetSwapEventsUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AssetSwapEventsUpgradeable> {
    return super.deploy(overrides || {}) as Promise<AssetSwapEventsUpgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AssetSwapEventsUpgradeable {
    return super.attach(address) as AssetSwapEventsUpgradeable;
  }
  override connect(signer: Signer): AssetSwapEventsUpgradeable__factory {
    return super.connect(signer) as AssetSwapEventsUpgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetSwapEventsUpgradeableInterface {
    return new utils.Interface(_abi) as AssetSwapEventsUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetSwapEventsUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AssetSwapEventsUpgradeable;
  }
}
