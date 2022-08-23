/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ActorFactoryOperationsUpgradeable,
  ActorFactoryOperationsUpgradeableInterface,
} from "../../../lib/actorsFactory/ActorFactoryOperationsUpgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "actorAddress",
        type: "address",
      },
    ],
    name: "ActorActivated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "actorAddress",
        type: "address",
      },
    ],
    name: "ActorInactivated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "actorAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "actorKey",
        type: "bytes32",
      },
    ],
    name: "ActorKeyCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "actorAddress",
        type: "address",
      },
    ],
    name: "ActorKeyRequested",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "actorInfo",
    outputs: [
      {
        internalType: "address",
        name: "actorContract",
        type: "address",
      },
      {
        internalType: "enum ActorFactoryEnumsUpgradeable.ActorStatus",
        name: "actorStatus",
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
  "0x608060405234801561001057600080fd5b506108cb806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806336568abe1161007157806336568abe1461016a5780638ad51d8c1461017d57806391d14854146101c957806394658d7e146101dc578063a217fddf14610203578063d547741f1461020b57600080fd5b80630153432d146100ae57806301ffc9a7146100e8578063153d73341461010b578063248a9ca3146101325780632f2ff15d14610155575b600080fd5b6100d57fdb1507a7bd981676c03bdaae9e28ab8baadf8a4eee150a8b6a2dd2713db13a6481565b6040519081526020015b60405180910390f35b6100fb6100f6366004610648565b61021e565b60405190151581526020016100df565b6100d57fec67990198cb34a8467e86e518c87d52127fe5b916e0095d8047a8355e37f63e81565b6100d5610140366004610672565b60009081526066602052604090206001015490565b6101686101633660046106a7565b610255565b005b6101686101783660046106a7565b610280565b6101ba61018b3660046106d3565b600160208190526000918252604090912080549101546001600160a01b03821691600160a01b900460ff169083565b6040516100df939291906106ee565b6100fb6101d73660046106a7565b610303565b6100d57f0245b6cbab6b03e029f6c88bff9595f9f5c30170f52598c3459ee71476ad59c181565b6100d5600081565b6101686102193660046106a7565b61032e565b60006001600160e01b03198216637965db0b60e01b148061024f57506301ffc9a760e01b6001600160e01b03198316145b92915050565b6000828152606660205260409020600101546102718133610354565b61027b83836103b8565b505050565b6001600160a01b03811633146102f55760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6102ff828261043e565b5050565b60009182526066602090815260408084206001600160a01b0393909316845291905290205460ff1690565b60008281526066602052604090206001015461034a8133610354565b61027b838361043e565b61035e8282610303565b6102ff57610376816001600160a01b031660146104a5565b6103818360206104a5565b60405160200161039292919061075d565b60408051601f198184030181529082905262461bcd60e51b82526102ec916004016107d2565b6103c28282610303565b6102ff5760008281526066602090815260408083206001600160a01b03851684529091529020805460ff191660011790556103fa3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6104488282610303565b156102ff5760008281526066602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b606060006104b483600261081b565b6104bf90600261083a565b67ffffffffffffffff8111156104d7576104d7610852565b6040519080825280601f01601f191660200182016040528015610501576020820181803683370190505b509050600360fc1b8160008151811061051c5761051c610868565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061054b5761054b610868565b60200101906001600160f81b031916908160001a905350600061056f84600261081b565b61057a90600161083a565b90505b60018111156105f2576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106105ae576105ae610868565b1a60f81b8282815181106105c4576105c4610868565b60200101906001600160f81b031916908160001a90535060049490941c936105eb8161087e565b905061057d565b5083156106415760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016102ec565b9392505050565b60006020828403121561065a57600080fd5b81356001600160e01b03198116811461064157600080fd5b60006020828403121561068457600080fd5b5035919050565b80356001600160a01b03811681146106a257600080fd5b919050565b600080604083850312156106ba57600080fd5b823591506106ca6020840161068b565b90509250929050565b6000602082840312156106e557600080fd5b6106418261068b565b6001600160a01b0384168152606081016003841061071c57634e487b7160e01b600052602160045260246000fd5b602082019390935260400152919050565b60005b83811015610748578181015183820152602001610730565b83811115610757576000848401525b50505050565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526000835161079581601785016020880161072d565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516107c681602884016020880161072d565b01602801949350505050565b60208152600082518060208401526107f181604085016020870161072d565b601f01601f19169190910160400192915050565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561083557610835610805565b500290565b6000821982111561084d5761084d610805565b500190565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b60008161088d5761088d610805565b50600019019056fea2646970667358221220c06faab1c1c65b3db9dfbc4ab5a2d72ebb64b8155ed735fed63f7ae1925a6b2964736f6c634300080f0033";

type ActorFactoryOperationsUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ActorFactoryOperationsUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ActorFactoryOperationsUpgradeable__factory extends ContractFactory {
  constructor(...args: ActorFactoryOperationsUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ActorFactoryOperationsUpgradeable> {
    return super.deploy(
      overrides || {}
    ) as Promise<ActorFactoryOperationsUpgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ActorFactoryOperationsUpgradeable {
    return super.attach(address) as ActorFactoryOperationsUpgradeable;
  }
  override connect(signer: Signer): ActorFactoryOperationsUpgradeable__factory {
    return super.connect(signer) as ActorFactoryOperationsUpgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ActorFactoryOperationsUpgradeableInterface {
    return new utils.Interface(
      _abi
    ) as ActorFactoryOperationsUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ActorFactoryOperationsUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ActorFactoryOperationsUpgradeable;
  }
}
