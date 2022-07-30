/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  AssetSellOperationsUpgradeable,
  AssetSellOperationsUpgradeableInterface,
} from "../../../../lib/modules/assetSell/AssetSellOperationsUpgradeable";

const _abi = [
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061080e806100206000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806336568abe1161006657806336568abe1461015f57806391d148541461017257806394658d7e14610185578063a217fddf146101ac578063d547741f146101b457600080fd5b80630153432d146100a357806301ffc9a7146100dd578063153d733414610100578063248a9ca3146101275780632f2ff15d1461014a575b600080fd5b6100ca7fdb1507a7bd981676c03bdaae9e28ab8baadf8a4eee150a8b6a2dd2713db13a6481565b6040519081526020015b60405180910390f35b6100f06100eb3660046105f1565b6101c7565b60405190151581526020016100d4565b6100ca7fec67990198cb34a8467e86e518c87d52127fe5b916e0095d8047a8355e37f63e81565b6100ca61013536600461061b565b60009081526065602052604090206001015490565b61015d610158366004610634565b6101fe565b005b61015d61016d366004610634565b610229565b6100f0610180366004610634565b6102ac565b6100ca7f0245b6cbab6b03e029f6c88bff9595f9f5c30170f52598c3459ee71476ad59c181565b6100ca600081565b61015d6101c2366004610634565b6102d7565b60006001600160e01b03198216637965db0b60e01b14806101f857506301ffc9a760e01b6001600160e01b03198316145b92915050565b60008281526065602052604090206001015461021a81336102fd565b6102248383610361565b505050565b6001600160a01b038116331461029e5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6102a882826103e7565b5050565b60009182526065602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6000828152606560205260409020600101546102f381336102fd565b61022483836103e7565b61030782826102ac565b6102a85761031f816001600160a01b0316601461044e565b61032a83602061044e565b60405160200161033b9291906106a0565b60408051601f198184030181529082905262461bcd60e51b825261029591600401610715565b61036b82826102ac565b6102a85760008281526065602090815260408083206001600160a01b03851684529091529020805460ff191660011790556103a33390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6103f182826102ac565b156102a85760008281526065602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6060600061045d83600261075e565b61046890600261077d565b67ffffffffffffffff81111561048057610480610795565b6040519080825280601f01601f1916602001820160405280156104aa576020820181803683370190505b509050600360fc1b816000815181106104c5576104c56107ab565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106104f4576104f46107ab565b60200101906001600160f81b031916908160001a905350600061051884600261075e565b61052390600161077d565b90505b600181111561059b576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610557576105576107ab565b1a60f81b82828151811061056d5761056d6107ab565b60200101906001600160f81b031916908160001a90535060049490941c93610594816107c1565b9050610526565b5083156105ea5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610295565b9392505050565b60006020828403121561060357600080fd5b81356001600160e01b0319811681146105ea57600080fd5b60006020828403121561062d57600080fd5b5035919050565b6000806040838503121561064757600080fd5b8235915060208301356001600160a01b038116811461066557600080fd5b809150509250929050565b60005b8381101561068b578181015183820152602001610673565b8381111561069a576000848401525b50505050565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516106d8816017850160208801610670565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351610709816028840160208801610670565b01602801949350505050565b6020815260008251806020840152610734816040850160208701610670565b601f01601f19169190910160400192915050565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561077857610778610748565b500290565b6000821982111561079057610790610748565b500190565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6000816107d0576107d0610748565b50600019019056fea26469706673582212202e13f459863095898437d3e9212755ffe456f4fccef7c243af15585571fe688864736f6c634300080f0033";

type AssetSellOperationsUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetSellOperationsUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetSellOperationsUpgradeable__factory extends ContractFactory {
  constructor(...args: AssetSellOperationsUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AssetSellOperationsUpgradeable> {
    return super.deploy(
      overrides || {}
    ) as Promise<AssetSellOperationsUpgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AssetSellOperationsUpgradeable {
    return super.attach(address) as AssetSellOperationsUpgradeable;
  }
  override connect(signer: Signer): AssetSellOperationsUpgradeable__factory {
    return super.connect(signer) as AssetSellOperationsUpgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetSellOperationsUpgradeableInterface {
    return new utils.Interface(_abi) as AssetSellOperationsUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetSellOperationsUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AssetSellOperationsUpgradeable;
  }
}
