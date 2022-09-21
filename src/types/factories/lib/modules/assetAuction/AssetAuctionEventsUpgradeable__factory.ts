/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  AssetAuctionEventsUpgradeable,
  AssetAuctionEventsUpgradeableInterface,
} from "../../../../lib/modules/assetAuction/AssetAuctionEventsUpgradeable";

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
        internalType: "address",
        name: "bidder",
        type: "address",
      },
    ],
    name: "AuctionClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "bidder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bidValue",
        type: "uint256",
      },
    ],
    name: "DutchAuctionBid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "bidder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bidValue",
        type: "uint256",
      },
    ],
    name: "EnglishAuctionBid",
    type: "event",
  },
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
        internalType: "address",
        name: "bidder",
        type: "address",
      },
    ],
    name: "LastBidApproved",
    type: "event",
  },
];

const _bytecode =
  "0x60808060405234601357603a908160198239f35b600080fdfe600080fdfea2646970667358221220aa83f0de07b1223660c6265a048aa3349e9556f87fcc0f623c4dd6de10ab94fb64736f6c634300080f0033";

type AssetAuctionEventsUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetAuctionEventsUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetAuctionEventsUpgradeable__factory extends ContractFactory {
  constructor(...args: AssetAuctionEventsUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AssetAuctionEventsUpgradeable> {
    return super.deploy(
      overrides || {}
    ) as Promise<AssetAuctionEventsUpgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AssetAuctionEventsUpgradeable {
    return super.attach(address) as AssetAuctionEventsUpgradeable;
  }
  override connect(signer: Signer): AssetAuctionEventsUpgradeable__factory {
    return super.connect(signer) as AssetAuctionEventsUpgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetAuctionEventsUpgradeableInterface {
    return new utils.Interface(_abi) as AssetAuctionEventsUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetAuctionEventsUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AssetAuctionEventsUpgradeable;
  }
}
