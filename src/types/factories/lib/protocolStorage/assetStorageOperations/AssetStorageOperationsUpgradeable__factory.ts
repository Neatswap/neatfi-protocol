/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  AssetStorageOperationsUpgradeable,
  AssetStorageOperationsUpgradeableInterface,
} from "../../../../lib/protocolStorage/assetStorageOperations/AssetStorageOperationsUpgradeable";

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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "AUTHORIZED_OPERATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PROTOCOL_ADMIN",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PROTOCOL_TREASURER",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
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
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
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
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
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
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
  "0x608060405234801561001057600080fd5b506109da806100206000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80632f2ff15d1161008c57806391d148541161006657806391d148541461027957806394658d7e1461028c578063a217fddf146102b3578063d547741f146102bb57600080fd5b80632f2ff15d1461024857806336568abe1461025d5780636c31dee81461027057600080fd5b80630153432d146100d457806301ffc9a71461010e57806303565ea114610131578063153d733414610185578063238e203f146101ac578063248a9ca314610225575b600080fd5b6100fb7fdb1507a7bd981676c03bdaae9e28ab8baadf8a4eee150a8b6a2dd2713db13a6481565b6040519081526020015b60405180910390f35b61012161011c3660046106f8565b6102ce565b6040519015158152602001610105565b61017561013f366004610722565b600360208190526000918252604090912080546001820154600283015492909301546001600160a01b0390911692919060ff1684565b6040516101059493929190610751565b6100fb7fec67990198cb34a8467e86e518c87d52127fe5b916e0095d8047a8355e37f63e81565b6102106101ba366004610722565b6002602081905260009182526040909120600181015491810154600382015460048301546005840154600685015460078601546008909601546001600160a01b0388169760ff600160a01b909104811697169089565b604051610105999897969594939291906107a1565b6100fb610233366004610722565b60009081526068602052604090206001015490565b61025b610256366004610800565b610305565b005b61025b61026b366004610800565b610330565b6100fb60015481565b610121610287366004610800565b6103b3565b6100fb7f0245b6cbab6b03e029f6c88bff9595f9f5c30170f52598c3459ee71476ad59c181565b6100fb600081565b61025b6102c9366004610800565b6103de565b60006001600160e01b03198216637965db0b60e01b14806102ff57506301ffc9a760e01b6001600160e01b03198316145b92915050565b6000828152606860205260409020600101546103218133610404565b61032b8383610468565b505050565b6001600160a01b03811633146103a55760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6103af82826104ee565b5050565b60009182526068602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6000828152606860205260409020600101546103fa8133610404565b61032b83836104ee565b61040e82826103b3565b6103af57610426816001600160a01b03166014610555565b610431836020610555565b60405160200161044292919061086c565b60408051601f198184030181529082905262461bcd60e51b825261039c916004016108e1565b61047282826103b3565b6103af5760008281526068602090815260408083206001600160a01b03851684529091529020805460ff191660011790556104aa3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6104f882826103b3565b156103af5760008281526068602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6060600061056483600261092a565b61056f906002610949565b67ffffffffffffffff81111561058757610587610961565b6040519080825280601f01601f1916602001820160405280156105b1576020820181803683370190505b509050600360fc1b816000815181106105cc576105cc610977565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106105fb576105fb610977565b60200101906001600160f81b031916908160001a905350600061061f84600261092a565b61062a906001610949565b90505b60018111156106a2576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061065e5761065e610977565b1a60f81b82828151811061067457610674610977565b60200101906001600160f81b031916908160001a90535060049490941c9361069b8161098d565b905061062d565b5083156106f15760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161039c565b9392505050565b60006020828403121561070a57600080fd5b81356001600160e01b0319811681146106f157600080fd5b60006020828403121561073457600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b6001600160a01b03851681526020810184905260408101839052608081016003831061077f5761077f61073b565b82606083015295945050505050565b6005811061079e5761079e61073b565b50565b6001600160a01b038a16815261012081016107bb8a61078e565b8960208301528860408301528760608301528660808301528560a08301528460c08301526107e88461078e565b60e08201939093526101000152979650505050505050565b6000806040838503121561081357600080fd5b8235915060208301356001600160a01b038116811461083157600080fd5b809150509250929050565b60005b8381101561085757818101518382015260200161083f565b83811115610866576000848401525b50505050565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516108a481601785016020880161083c565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516108d581602884016020880161083c565b01602801949350505050565b602081526000825180602084015261090081604085016020870161083c565b601f01601f19169190910160400192915050565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561094457610944610914565b500290565b6000821982111561095c5761095c610914565b500190565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b60008161099c5761099c610914565b50600019019056fea26469706673582212206b8daa53c460ec95e6f13f5ec312bc44b71fcdfb49a51cf6eb50f1cdc220987264736f6c634300080f0033";

type AssetStorageOperationsUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetStorageOperationsUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetStorageOperationsUpgradeable__factory extends ContractFactory {
  constructor(...args: AssetStorageOperationsUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AssetStorageOperationsUpgradeable> {
    return super.deploy(
      overrides || {}
    ) as Promise<AssetStorageOperationsUpgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AssetStorageOperationsUpgradeable {
    return super.attach(address) as AssetStorageOperationsUpgradeable;
  }
  override connect(signer: Signer): AssetStorageOperationsUpgradeable__factory {
    return super.connect(signer) as AssetStorageOperationsUpgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetStorageOperationsUpgradeableInterface {
    return new utils.Interface(
      _abi
    ) as AssetStorageOperationsUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetStorageOperationsUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AssetStorageOperationsUpgradeable;
  }
}
