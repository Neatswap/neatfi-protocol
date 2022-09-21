/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  AssetStorageSettingsUpgradeable,
  AssetStorageSettingsUpgradeableInterface,
} from "../../../../lib/protocolStorage/assetStorage/AssetStorageSettingsUpgradeable";

const _abi = [
  {
    inputs: [],
    name: "maxTokenNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60808060405234601457607a908161001a8239f35b600080fdfe6080806040526004361015601257600080fd5b600090813560e01c636c31dee814602857600080fd5b34604057816003193601126040576020906001548152f35b5080fdfea2646970667358221220942884529da583f93585b08ca0f54c3c5f9e8a05c46532141c00579337712a3464736f6c634300080f0033";

type AssetStorageSettingsUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetStorageSettingsUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetStorageSettingsUpgradeable__factory extends ContractFactory {
  constructor(...args: AssetStorageSettingsUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AssetStorageSettingsUpgradeable> {
    return super.deploy(
      overrides || {}
    ) as Promise<AssetStorageSettingsUpgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AssetStorageSettingsUpgradeable {
    return super.attach(address) as AssetStorageSettingsUpgradeable;
  }
  override connect(signer: Signer): AssetStorageSettingsUpgradeable__factory {
    return super.connect(signer) as AssetStorageSettingsUpgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetStorageSettingsUpgradeableInterface {
    return new utils.Interface(
      _abi
    ) as AssetStorageSettingsUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetStorageSettingsUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AssetStorageSettingsUpgradeable;
  }
}
