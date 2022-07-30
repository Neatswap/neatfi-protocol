/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  AssetAuctionStorageUpgradeable,
  AssetAuctionStorageUpgradeableInterface,
} from "../../../../lib/modules/assetAuction/AssetAuctionStorageUpgradeable";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "lastBidderForOrder",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060bd8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806357bf500d14602d575b600080fd5b60536038366004606f565b6001602052600090815260409020546001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b600060208284031215608057600080fd5b503591905056fea26469706673582212200bb75ca5b45c692537d5c9da9fefdced7bf77430b1ac8d01fb1ad021d470861664736f6c634300080f0033";

type AssetAuctionStorageUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetAuctionStorageUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetAuctionStorageUpgradeable__factory extends ContractFactory {
  constructor(...args: AssetAuctionStorageUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AssetAuctionStorageUpgradeable> {
    return super.deploy(
      overrides || {}
    ) as Promise<AssetAuctionStorageUpgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AssetAuctionStorageUpgradeable {
    return super.attach(address) as AssetAuctionStorageUpgradeable;
  }
  override connect(signer: Signer): AssetAuctionStorageUpgradeable__factory {
    return super.connect(signer) as AssetAuctionStorageUpgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetAuctionStorageUpgradeableInterface {
    return new utils.Interface(_abi) as AssetAuctionStorageUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetAuctionStorageUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AssetAuctionStorageUpgradeable;
  }
}
