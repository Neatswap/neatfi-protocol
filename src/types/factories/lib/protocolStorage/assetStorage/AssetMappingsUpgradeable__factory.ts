/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  AssetMappingsUpgradeable,
  AssetMappingsUpgradeableInterface,
} from "../../../../lib/protocolStorage/assetStorage/AssetMappingsUpgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "bytes32[]",
            name: "tokenHashes",
            type: "bytes32[]",
          },
          {
            internalType: "address payable",
            name: "maker",
            type: "address",
          },
          {
            internalType: "enum AssetEnumsUpgradeable.AssetOrderType",
            name: "orderType",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "listingTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expirationTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endPrice",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "salt",
            type: "bytes32",
          },
          {
            internalType: "enum AssetEnumsUpgradeable.AssetOrderStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "actorKey",
            type: "bytes32",
          },
        ],
        indexed: false,
        internalType: "struct AssetStructsUpgradeable.Order",
        name: "order",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
    ],
    name: "OrderCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "bytes32[]",
            name: "tokenHashes",
            type: "bytes32[]",
          },
          {
            internalType: "address payable",
            name: "maker",
            type: "address",
          },
          {
            internalType: "enum AssetEnumsUpgradeable.AssetOrderType",
            name: "orderType",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "listingTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expirationTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endPrice",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "salt",
            type: "bytes32",
          },
          {
            internalType: "enum AssetEnumsUpgradeable.AssetOrderStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "actorKey",
            type: "bytes32",
          },
        ],
        indexed: false,
        internalType: "struct AssetStructsUpgradeable.Order",
        name: "order",
        type: "tuple",
      },
    ],
    name: "OrderEndPriceChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "bytes32[]",
            name: "tokenHashes",
            type: "bytes32[]",
          },
          {
            internalType: "address payable",
            name: "maker",
            type: "address",
          },
          {
            internalType: "enum AssetEnumsUpgradeable.AssetOrderType",
            name: "orderType",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "listingTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expirationTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endPrice",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "salt",
            type: "bytes32",
          },
          {
            internalType: "enum AssetEnumsUpgradeable.AssetOrderStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "actorKey",
            type: "bytes32",
          },
        ],
        indexed: false,
        internalType: "struct AssetStructsUpgradeable.Order",
        name: "order",
        type: "tuple",
      },
    ],
    name: "OrderExpirationTimeChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "bytes32[]",
            name: "tokenHashes",
            type: "bytes32[]",
          },
          {
            internalType: "address payable",
            name: "maker",
            type: "address",
          },
          {
            internalType: "enum AssetEnumsUpgradeable.AssetOrderType",
            name: "orderType",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "listingTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expirationTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endPrice",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "salt",
            type: "bytes32",
          },
          {
            internalType: "enum AssetEnumsUpgradeable.AssetOrderStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "actorKey",
            type: "bytes32",
          },
        ],
        indexed: false,
        internalType: "struct AssetStructsUpgradeable.Order",
        name: "order",
        type: "tuple",
      },
    ],
    name: "OrderStartPriceChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "bytes32[]",
            name: "tokenHashes",
            type: "bytes32[]",
          },
          {
            internalType: "address payable",
            name: "maker",
            type: "address",
          },
          {
            internalType: "enum AssetEnumsUpgradeable.AssetOrderType",
            name: "orderType",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "listingTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expirationTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endPrice",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "salt",
            type: "bytes32",
          },
          {
            internalType: "enum AssetEnumsUpgradeable.AssetOrderStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "actorKey",
            type: "bytes32",
          },
        ],
        indexed: false,
        internalType: "struct AssetStructsUpgradeable.Order",
        name: "order",
        type: "tuple",
      },
    ],
    name: "OrderStatusChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "orderInfo",
    outputs: [
      {
        internalType: "address payable",
        name: "maker",
        type: "address",
      },
      {
        internalType: "enum AssetEnumsUpgradeable.AssetOrderType",
        name: "orderType",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "listingTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expirationTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endPrice",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "enum AssetEnumsUpgradeable.AssetOrderStatus",
        name: "status",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "actorKey",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "tokenInfo",
    outputs: [
      {
        internalType: "address",
        name: "tokenContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "enum AssetEnumsUpgradeable.TokenType",
        name: "tokenType",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60808060405234610016576101a9908161001c8239f35b600080fdfe60806040818152600436101561001457600080fd5b600091823560e01c90816303565ea1146100de575063238e203f1461003857600080fd5b346100da5760203660031901126100da57806101209260043581526001602052209060018201549160ff8360a01c169160028201546003830154600484015490600585015492600686015494600860ff6007890154169701549781519960018060a01b03168a526100a881610153565b60208a01528801526060870152608086015260a085015260c08401526100cd81610153565b60e0830152610100820152f35b5080fd5b9190503461014f57602036600319011261014f576004358352600260205280832060018060a01b0381541691600182015460ff60036002850154940154169385526020850152830152600381101561013b57608092506060820152f35b634e487b7160e01b83526021600452602483fd5b8280fd5b6005111561015d57565b634e487b7160e01b600052602160045260246000fdfea2646970667358221220081c87f9e61de27d337cf16be8455877413a6ad8a3b12e557718a65814adaa5864736f6c634300080f0033";

type AssetMappingsUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetMappingsUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetMappingsUpgradeable__factory extends ContractFactory {
  constructor(...args: AssetMappingsUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AssetMappingsUpgradeable> {
    return super.deploy(overrides || {}) as Promise<AssetMappingsUpgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AssetMappingsUpgradeable {
    return super.attach(address) as AssetMappingsUpgradeable;
  }
  override connect(signer: Signer): AssetMappingsUpgradeable__factory {
    return super.connect(signer) as AssetMappingsUpgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetMappingsUpgradeableInterface {
    return new utils.Interface(_abi) as AssetMappingsUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetMappingsUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AssetMappingsUpgradeable;
  }
}
