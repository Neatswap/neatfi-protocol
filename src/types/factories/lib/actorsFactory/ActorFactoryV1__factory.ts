/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ActorFactoryV1,
  ActorFactoryV1Interface,
} from "../../../lib/actorsFactory/ActorFactoryV1";

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
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
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
        name: "actorAddress",
        type: "address",
      },
    ],
    name: "activateActor",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "actorAddress",
        type: "address",
      },
    ],
    name: "approveAndGenerateActorKey",
    outputs: [
      {
        internalType: "bytes32",
        name: "actorKey",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "actorAddress",
        type: "address",
      },
    ],
    name: "getActorKey",
    outputs: [
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
        internalType: "address",
        name: "actorAddress",
        type: "address",
      },
    ],
    name: "inactivateActor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
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
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "actorAddress",
        type: "address",
      },
    ],
    name: "requestActorKey",
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
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523060805234801561001457600080fd5b50608051611ec4610053600039600081816104dd0152818161051d015281816105c9015281816106090152818161071b015261075b0152611ec46000f3fe6080604052600436106101145760003560e01c80634f1ef286116100a05780638e4013b2116100645780638e4013b21461035757806391d148541461037757806394658d7e14610397578063a217fddf146103b9578063d547741f146103ce57600080fd5b80634f1ef2861461029657806359e19a95146102a95780635b30a97b146102c95780638129fc1c146102e95780638ad51d8c146102fe57600080fd5b80632f2ff15d116100e75780632f2ff15d146101f457806336568abe146102165780633659cfe614610236578063390c10f414610256578063396b88bf1461027657600080fd5b80630153432d1461011957806301ffc9a714610160578063153d733414610190578063248a9ca3146101c4575b600080fd5b34801561012557600080fd5b5061014d7fdb1507a7bd981676c03bdaae9e28ab8baadf8a4eee150a8b6a2dd2713db13a6481565b6040519081526020015b60405180910390f35b34801561016c57600080fd5b5061018061017b3660046118be565b6103ee565b6040519015158152602001610157565b34801561019c57600080fd5b5061014d7fec67990198cb34a8467e86e518c87d52127fe5b916e0095d8047a8355e37f63e81565b3480156101d057600080fd5b5061014d6101df3660046118e8565b60009081526066602052604090206001015490565b34801561020057600080fd5b5061021461020f36600461191d565b610425565b005b34801561022257600080fd5b5061021461023136600461191d565b610450565b34801561024257600080fd5b50610214610251366004611949565b6104d3565b34801561026257600080fd5b5061014d610271366004611949565b610592565b34801561028257600080fd5b50610214610291366004611949565b61059d565b6102146102a436600461197a565b6105bf565b3480156102b557600080fd5b5061014d6102c4366004611949565b61066b565b3480156102d557600080fd5b506102146102e4366004611949565b610698565b3480156102f557600080fd5b506102146106ba565b34801561030a57600080fd5b50610348610319366004611949565b600160208190526000918252604090912080549101546001600160a01b03821691600160a01b900460ff169083565b60405161015793929190611a52565b34801561036357600080fd5b50610214610372366004611949565b610848565b34801561038357600080fd5b5061018061039236600461191d565b61087c565b3480156103a357600080fd5b5061014d600080516020611e4883398151915281565b3480156103c557600080fd5b5061014d600081565b3480156103da57600080fd5b506102146103e936600461191d565b6108a7565b60006001600160e01b03198216637965db0b60e01b148061041f57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60008281526066602052604090206001015461044181336108cd565b61044b8383610931565b505050565b6001600160a01b03811633146104c55760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6104cf82826109b7565b5050565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016300361051b5760405162461bcd60e51b81526004016104bc90611a91565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661054d610a1e565b6001600160a01b0316146105735760405162461bcd60e51b81526004016104bc90611add565b6040805160008082526020820190925261058f91839190610a4c565b50565b600061041f82610b97565b600080516020611e488339815191526105b681336108cd565b6104cf82610c87565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036106075760405162461bcd60e51b81526004016104bc90611a91565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610639610a1e565b6001600160a01b03161461065f5760405162461bcd60e51b81526004016104bc90611add565b6104cf82826001610a4c565b6000600080516020611e4883398151915261068681336108cd565b61068f83610e2d565b91505b50919050565b600080516020611e488339815191526106b181336108cd565b6104cf82610f8d565b600054610100900460ff16806106d3575060005460ff16155b6106ef5760405162461bcd60e51b81526004016104bc90611b29565b600054610100900460ff16158015610711576000805461ffff19166101011790555b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036107595760405162461bcd60e51b81526004016104bc90611a91565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661078b610a1e565b6001600160a01b0316146107b15760405162461bcd60e51b81526004016104bc90611add565b6107b9611126565b6107c161118d565b6107cc60003361120c565b60408051808201909152601781527f4e6561744669204163746f724b657920466163746f7279000000000000000000602082015260fc9061080d9082611bf9565b50610834604051806040016040528060058152602001640312e302e360dc1b815250611216565b801561058f576000805461ff001916905550565b7fec67990198cb34a8467e86e518c87d52127fe5b916e0095d8047a8355e37f63e61087381336108cd565b6104cf8261122e565b60009182526066602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6000828152606660205260409020600101546108c381336108cd565b61044b83836109b7565b6108d7828261087c565b6104cf576108ef816001600160a01b03166014611388565b6108fa836020611388565b60405160200161090b929190611ce9565b60408051601f198184030181529082905262461bcd60e51b82526104bc91600401611d5e565b61093b828261087c565b6104cf5760008281526066602090815260408083206001600160a01b03851684529091529020805460ff191660011790556109733390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6109c1828261087c565b156104cf5760008281526066602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6000610a56610a1e565b9050610a618461152b565b600083511180610a6e5750815b15610a7f57610a7d84846115d0565b505b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143805460ff16610b9057805460ff191660011781556040516001600160a01b0383166024820152610afe90869060440160408051601f198184030181529190526020810180516001600160e01b0316631b2ce7f360e11b1790526115d0565b50805460ff19168155610b0f610a1e565b6001600160a01b0316826001600160a01b031614610b875760405162461bcd60e51b815260206004820152602f60248201527f45524331393637557067726164653a207570677261646520627265616b73206660448201526e75727468657220757067726164657360881b60648201526084016104bc565b610b90856116bb565b5050505050565b6001600160a01b03818116600090815260016020908152604080832081516060810190925280549485168252929384939192830190600160a01b900460ff166002811115610be757610be7611a3c565b6002811115610bf857610bf8611a3c565b8152602001600182015481525050905080604001516000801b03610c7d5760405162461bcd60e51b81526020600482015260426024820152600080516020611e2883398151915260448201527f653a3a5f6765744163746f724b65793a206163746f72206b6579206973203078606482015261181760f11b608482015260a4016104bc565b6040015192915050565b6001600160a01b0381166000908152600160208190526040822001549003610d1d5760405162461bcd60e51b815260206004820152604f6024820152600080516020611e2883398151915260448201527f653a3a5f696e61637469766174654163746f723a206163746f72206973206e6f60648201526e3a1030b8383937bb32b2103cb2ba1760891b608482015260a4016104bc565b60016001600160a01b038216600090815260016020526040902054600160a01b900460ff166002811115610d5357610d53611a3c565b14610dcc5760405162461bcd60e51b815260206004820152604f6024820152600080516020611e2883398151915260448201527f653a3a5f696e61637469766174654163746f723a206163746f7220697320616c60648201526e3932b0b23c9034b730b1ba34bb329760891b608482015260a4016104bc565b6001600160a01b038116600081815260016020908152604091829020805460ff60a01b1916600160a11b17905590519182527fa60a1ef7b6ee105c202f4c053d97ad27f41758bd853e57d57ed04349406ebf5791015b60405180910390a150565b6001600160a01b03811660009081526001602081905260408220015415610ed05760405162461bcd60e51b815260206004820152605c6024820152600080516020611e2883398151915260448201527f653a3a5f617070726f7665416e6447656e65726174654163746f724b65793a2060648201527f6163746f72206b657920616c72656164792067656e6572617465642e00000000608482015260a4016104bc565b604080517ffe5101a8d2b9824e9cc03b87fe326b5fcbb3b3da29552660b1776cdc09eff89e60208201526001600160a01b0384169181019190915260600160408051808303601f1901815282825280516020918201206001600160a01b03861660008181526001808552908590209081018390558054600160a01b60ff60a01b199091161790558452908301527f89f5d87aae42bb89b56dc264e105880664e5aed62f411be807470ca109f9791b910160405180910390a1919050565b6001600160a01b03811660009081526001602081905260408220015490036110215760405162461bcd60e51b815260206004820152604d6024820152600080516020611e2883398151915260448201527f653a3a5f61637469766174654163746f723a206163746f72206973206e6f742060648201526c30b8383937bb32b2103cb2ba1760991b608482015260a4016104bc565b60026001600160a01b038216600090815260016020526040902054600160a01b900460ff16600281111561105757611057611a3c565b146110cc5760405162461bcd60e51b815260206004820152604b6024820152600080516020611e2883398151915260448201527f653a3a5f61637469766174654163746f723a206163746f7220697320616c726560648201526a30b23c9030b1ba34bb329760a91b608482015260a4016104bc565b6001600160a01b038116600081815260016020908152604091829020805460ff60a01b1916600160a01b17905590519182527f2662dba0eeedca89b2d496492e35a18a724fd278ac58ce4c147d4830035b50959101610e22565b600054610100900460ff168061113f575060005460ff16155b61115b5760405162461bcd60e51b81526004016104bc90611b29565b600054610100900460ff1615801561117d576000805461ffff19166101011790555b6111856116fb565b6108346116fb565b600054610100900460ff16806111a6575060005460ff16155b6111c25760405162461bcd60e51b81526004016104bc90611b29565b600054610100900460ff161580156111e4576000805461ffff19166101011790555b6111ec611765565b6111f46117c8565b6111fc6117c8565b6112046117c8565b610834611826565b6104cf8282610931565b600061122281336108cd565b60fd61044b8382611bf9565b6000816001600160a01b03163b116112c25760405162461bcd60e51b815260206004820152605b6024820152600080516020611e2883398151915260448201527f653a3a5f726571756573744163746f724b65793a206163746f7220616464726560648201527f7373206973206e6f74206120736d61727420636f6e74726163742e0000000000608482015260a4016104bc565b604080516060810182526001600160a01b038381168083526000602080850182815285870183905292825260019052939093208251815492166001600160a01b0319831681178255935192938493919283916001600160a81b031990911617600160a01b83600281111561133857611338611a3c565b021790555060409182015160019190910155516001600160a01b03831681527f69b19e4f70557001d9898b480901f4635c99e8b8848e49417ff55736dfb224cf9060200160405180910390a15050565b60606000611397836002611da7565b6113a2906002611dc6565b67ffffffffffffffff8111156113ba576113ba611964565b6040519080825280601f01601f1916602001820160405280156113e4576020820181803683370190505b509050600360fc1b816000815181106113ff576113ff611dde565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061142e5761142e611dde565b60200101906001600160f81b031916908160001a9053506000611452846002611da7565b61145d906001611dc6565b90505b60018111156114d5576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061149157611491611dde565b1a60f81b8282815181106114a7576114a7611dde565b60200101906001600160f81b031916908160001a90535060049490941c936114ce81611df4565b9050611460565b5083156115245760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016104bc565b9392505050565b803b61158f5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084016104bc565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b6060823b61162f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016104bc565b600080846001600160a01b03168460405161164a9190611e0b565b600060405180830381855af49150503d8060008114611685576040519150601f19603f3d011682016040523d82523d6000602084013e61168a565b606091505b50915091506116b28282604051806060016040528060278152602001611e6860279139611885565b95945050505050565b6116c48161152b565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b600054610100900460ff1680611714575060005460ff16155b6117305760405162461bcd60e51b81526004016104bc90611b29565b600054610100900460ff16158015610834576000805461ffff1916610101179055801561058f576000805461ff001916905550565b600054610100900460ff168061177e575060005460ff16155b61179a5760405162461bcd60e51b81526004016104bc90611b29565b600054610100900460ff161580156117bc576000805461ffff19166101011790555b6117c46116fb565b6108345b600054610100900460ff16806117e1575060005460ff16155b6117fd5760405162461bcd60e51b81526004016104bc90611b29565b600054610100900460ff16158015611185576000805461ffff19166101011790556108346116fb565b600054610100900460ff168061183f575060005460ff16155b61185b5760405162461bcd60e51b81526004016104bc90611b29565b600054610100900460ff1615801561187d576000805461ffff19166101011790555b61117d6116fb565b60608315611894575081611524565b8251156118a45782518084602001fd5b8160405162461bcd60e51b81526004016104bc9190611d5e565b6000602082840312156118d057600080fd5b81356001600160e01b03198116811461152457600080fd5b6000602082840312156118fa57600080fd5b5035919050565b80356001600160a01b038116811461191857600080fd5b919050565b6000806040838503121561193057600080fd5b8235915061194060208401611901565b90509250929050565b60006020828403121561195b57600080fd5b61152482611901565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561198d57600080fd5b61199683611901565b9150602083013567ffffffffffffffff808211156119b357600080fd5b818501915085601f8301126119c757600080fd5b8135818111156119d9576119d9611964565b604051601f8201601f19908116603f01168101908382118183101715611a0157611a01611964565b81604052828152886020848701011115611a1a57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b634e487b7160e01b600052602160045260246000fd5b6001600160a01b03841681526060810160038410611a8057634e487b7160e01b600052602160045260246000fd5b602082019390935260400152919050565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b600181811c90821680611b8b57607f821691505b60208210810361069257634e487b7160e01b600052602260045260246000fd5b601f82111561044b57600081815260208120601f850160051c81016020861015611bd25750805b601f850160051c820191505b81811015611bf157828155600101611bde565b505050505050565b815167ffffffffffffffff811115611c1357611c13611964565b611c2781611c218454611b77565b84611bab565b602080601f831160018114611c5c5760008415611c445750858301515b600019600386901b1c1916600185901b178555611bf1565b600085815260208120601f198616915b82811015611c8b57888601518255948401946001909101908401611c6c565b5085821015611ca95787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60005b83811015611cd4578181015183820152602001611cbc565b83811115611ce3576000848401525b50505050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611d21816017850160208801611cb9565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611d52816028840160208801611cb9565b01602801949350505050565b6020815260008251806020840152611d7d816040850160208701611cb9565b601f01601f19169190910160400192915050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615611dc157611dc1611d91565b500290565b60008219821115611dd957611dd9611d91565b500190565b634e487b7160e01b600052603260045260246000fd5b600081611e0357611e03611d91565b506000190190565b60008251611e1d818460208701611cb9565b919091019291505056fe4163746f72466163746f72794f7065726174696f6e735570677261646561626c0245b6cbab6b03e029f6c88bff9595f9f5c30170f52598c3459ee71476ad59c1416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220dc8a4f3d76cff01294d9e9d688d576450afd27081645704a6d6df816a535a56864736f6c634300080f0033";

type ActorFactoryV1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ActorFactoryV1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ActorFactoryV1__factory extends ContractFactory {
  constructor(...args: ActorFactoryV1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ActorFactoryV1> {
    return super.deploy(overrides || {}) as Promise<ActorFactoryV1>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ActorFactoryV1 {
    return super.attach(address) as ActorFactoryV1;
  }
  override connect(signer: Signer): ActorFactoryV1__factory {
    return super.connect(signer) as ActorFactoryV1__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ActorFactoryV1Interface {
    return new utils.Interface(_abi) as ActorFactoryV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ActorFactoryV1 {
    return new Contract(address, _abi, signerOrProvider) as ActorFactoryV1;
  }
}
