/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ProtocolSettingsV1,
  ProtocolSettingsV1Interface,
} from "../../../lib/protocolSettings/ProtocolSettingsV1";

const _abi = [
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
    inputs: [],
    name: "dutchAuctionProtocolFeeNumerator",
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
    inputs: [],
    name: "englishAuctionProtocolFeeNumerator",
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
    inputs: [],
    name: "getDutchAuctionProtocolFeeNumerator",
    outputs: [
      {
        internalType: "uint256",
        name: "dutchAuctionFeeNumerator",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEnglishAuctionProtocolFeeNumerator",
    outputs: [
      {
        internalType: "uint256",
        name: "englishAuctionFeeNumerator",
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
    inputs: [],
    name: "getSellProtocolFeeNumerator",
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
    inputs: [],
    name: "getSwapProtocolFee",
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
        internalType: "uint256",
        name: "newSwapProtocolFeeValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newSellProtocolFeeValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newDutchAuctionProtocolFeeNumeratorValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newEnglishAuctionProtocolFeeNumeratorValue",
        type: "uint256",
      },
    ],
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
    inputs: [],
    name: "sellProtocolFee",
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
        internalType: "uint256",
        name: "newDutchAuctionProtocolFeeNumerator",
        type: "uint256",
      },
    ],
    name: "setDutchAuctionProtocolFeeNumerator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newEnglishAuctionProtocolFeeNumerator",
        type: "uint256",
      },
    ],
    name: "setEnglishAuctionProtocolFeeNumerator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newSellProtocolFee",
        type: "uint256",
      },
    ],
    name: "setSellProtocolFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newSwapProtocolFee",
        type: "uint256",
      },
    ],
    name: "setSwapProtocolFee",
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
    inputs: [],
    name: "swapProtocolFee",
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
  "0x60a06040523060805234801561001457600080fd5b50608051611995610053600039600081816105e601528181610626015281816106ae015281816106ee015281816107ba01526107fa01526119956000f3fe6080604052600436106101665760003560e01c806391d14854116100d1578063b5c63fbc1161008a578063d6b509c911610064578063d6b509c914610415578063d891ac9f14610435578063e2a7797e1461044a578063f48f62d41461046057600080fd5b8063b5c63fbc146103bf578063bf0589ea146103d5578063d547741f146103f557600080fd5b806391d148541461032657806394658d7e1461034657806396a65b8e146103685780639d06c8931461037d578063a217fddf14610394578063a86b53b9146103a957600080fd5b80632f2ff15d116101235780632f2ff15d1461027d57806336568abe1461029d5780633659cfe6146102bd5780634f1ef286146102dd5780635a3aa46a146102f057806360a2da441461030657600080fd5b80630153432d1461016b57806301ffc9a7146101b25780630d9e5d4d146101e2578063149f376214610204578063153d733414610219578063248a9ca31461024d575b600080fd5b34801561017757600080fd5b5061019f7fdb1507a7bd981676c03bdaae9e28ab8baadf8a4eee150a8b6a2dd2713db13a6481565b6040519081526020015b60405180910390f35b3480156101be57600080fd5b506101d26101cd36600461130d565b610480565b60405190151581526020016101a9565b3480156101ee57600080fd5b506102026101fd366004611337565b6104b7565b005b34801561021057600080fd5b5060fe5461019f565b34801561022557600080fd5b5061019f7fec67990198cb34a8467e86e518c87d52127fe5b916e0095d8047a8355e37f63e81565b34801561025957600080fd5b5061019f610268366004611337565b600090815260c9602052604090206001015490565b34801561028957600080fd5b5061020261029836600461136c565b610538565b3480156102a957600080fd5b506102026102b836600461136c565b61055e565b3480156102c957600080fd5b506102026102d8366004611398565b6105dc565b6102026102eb3660046113c9565b6106a4565b3480156102fc57600080fd5b5061019f60fd5481565b34801561031257600080fd5b5061020261032136600461148b565b610759565b34801561033257600080fd5b506101d261034136600461136c565b6108fd565b34801561035257600080fd5b5061019f6000805160206118f883398151915281565b34801561037457600080fd5b5060ff5461019f565b34801561038957600080fd5b5061019f6101005481565b3480156103a057600080fd5b5061019f600081565b3480156103b557600080fd5b5061019f60fe5481565b3480156103cb57600080fd5b506101005461019f565b3480156103e157600080fd5b506102026103f0366004611337565b610928565b34801561040157600080fd5b5061020261041036600461136c565b61094a565b34801561042157600080fd5b50610202610430366004611337565b610970565b34801561044157600080fd5b5060fd5461019f565b34801561045657600080fd5b5061019f60ff5481565b34801561046c57600080fd5b5061020261047b366004611337565b6109e3565b60006001600160e01b03198216637965db0b60e01b14806104b157506301ffc9a760e01b6001600160e01b03198316145b92915050565b6000805160206118f88339815191526104d08133610a05565b81633b9aca008110156104fe5760405162461bcd60e51b81526004016104f5906114bd565b60405180910390fd5b6b033b2e3c9fd0803ce800000081111561052a5760405162461bcd60e51b81526004016104f59061150c565b61053383610a69565b505050565b600082815260c960205260409020600101546105548133610a05565b6105338383610ac1565b6001600160a01b03811633146105ce5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016104f5565b6105d88282610b47565b5050565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036106245760405162461bcd60e51b81526004016104f59061155b565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610656610bae565b6001600160a01b03161461067c5760405162461bcd60e51b81526004016104f5906115a7565b61068581610bdc565b604080516000808252602082019092526106a191839190610bf5565b50565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036106ec5760405162461bcd60e51b81526004016104f59061155b565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661071e610bae565b6001600160a01b0316146107445760405162461bcd60e51b81526004016104f5906115a7565b61074d82610bdc565b6105d882826001610bf5565b600054610100900460ff1680610772575060005460ff16155b61078e5760405162461bcd60e51b81526004016104f5906115f3565b600054610100900460ff161580156107b0576000805461ffff19166101011790555b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036107f85760405162461bcd60e51b81526004016104f59061155b565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661082a610bae565b6001600160a01b0316146108505760405162461bcd60e51b81526004016104f5906115a7565b610858610d39565b610860610db4565b610868610e12565b61087185610a69565b61087a84610e71565b6108838360fd55565b61088c8260fe55565b610897600033610ec8565b6040518060600160405280602181526020016119186021913960fb906108bd90826116c9565b506108e4604051806040016040528060058152602001640312e302e360dc1b815250610ed2565b80156108f6576000805461ff00191690555b5050505050565b600091825260c9602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6000805160206118f88339815191526109418133610a05565b6105d88260fd55565b600082815260c960205260409020600101546109668133610a05565b6105338383610b47565b6000805160206118f88339815191526109898133610a05565b81633b9aca008110156109ae5760405162461bcd60e51b81526004016104f5906114bd565b6b033b2e3c9fd0803ce80000008111156109da5760405162461bcd60e51b81526004016104f59061150c565b61053383610e71565b6000805160206118f88339815191526109fc8133610a05565b6105d88260fe55565b610a0f82826108fd565b6105d857610a27816001600160a01b03166014610ef7565b610a32836020610ef7565b604051602001610a439291906117b9565b60408051601f198184030181529082905262461bcd60e51b82526104f59160040161182e565b80633b9aca00811015610a8e5760405162461bcd60e51b81526004016104f5906114bd565b6b033b2e3c9fd0803ce8000000811115610aba5760405162461bcd60e51b81526004016104f59061150c565b5061010055565b610acb82826108fd565b6105d857600082815260c9602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610b033390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610b5182826108fd565b156105d857600082815260c9602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6000805160206118f88339815191526105d88133610a05565b6000610bff610bae565b9050610c0a8461109a565b600083511180610c175750815b15610c2857610c26848461113f565b505b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143805460ff166108f657805460ff191660011781556040516001600160a01b0383166024820152610ca790869060440160408051601f198184030181529190526020810180516001600160e01b0316631b2ce7f360e11b17905261113f565b50805460ff19168155610cb8610bae565b6001600160a01b0316826001600160a01b031614610d305760405162461bcd60e51b815260206004820152602f60248201527f45524331393637557067726164653a207570677261646520627265616b73206660448201526e75727468657220757067726164657360881b60648201526084016104f5565b6108f68561122a565b600054610100900460ff1680610d52575060005460ff16155b610d6e5760405162461bcd60e51b81526004016104f5906115f3565b600054610100900460ff16158015610d90576000805461ffff19166101011790555b610d9861126a565b610da061126a565b80156106a1576000805461ff001916905550565b600054610100900460ff1680610dcd575060005460ff16155b610de95760405162461bcd60e51b81526004016104f5906115f3565b600054610100900460ff16158015610d98576000805461ffff1916610101179055610da061126a565b600054610100900460ff1680610e2b575060005460ff16155b610e475760405162461bcd60e51b81526004016104f5906115f3565b600054610100900460ff16158015610e69576000805461ffff19166101011790555b610d9061126a565b80633b9aca00811015610e965760405162461bcd60e51b81526004016104f5906114bd565b6b033b2e3c9fd0803ce8000000811115610ec25760405162461bcd60e51b81526004016104f59061150c565b5060ff55565b6105d88282610ac1565b6000805160206118f8833981519152610eeb8133610a05565b60fc61053383826116c9565b60606000610f06836002611877565b610f11906002611896565b67ffffffffffffffff811115610f2957610f296113b3565b6040519080825280601f01601f191660200182016040528015610f53576020820181803683370190505b509050600360fc1b81600081518110610f6e57610f6e6118ae565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610f9d57610f9d6118ae565b60200101906001600160f81b031916908160001a9053506000610fc1846002611877565b610fcc906001611896565b90505b6001811115611044576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110611000576110006118ae565b1a60f81b828281518110611016576110166118ae565b60200101906001600160f81b031916908160001a90535060049490941c9361103d816118c4565b9050610fcf565b5083156110935760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016104f5565b9392505050565b803b6110fe5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084016104f5565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b6060823b61119e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016104f5565b600080846001600160a01b0316846040516111b991906118db565b600060405180830381855af49150503d80600081146111f4576040519150601f19603f3d011682016040523d82523d6000602084013e6111f9565b606091505b50915091506112218282604051806060016040528060278152602001611939602791396112d4565b95945050505050565b6112338161109a565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b600054610100900460ff1680611283575060005460ff16155b61129f5760405162461bcd60e51b81526004016104f5906115f3565b600054610100900460ff16158015610da0576000805461ffff191661010117905580156106a1576000805461ff001916905550565b606083156112e3575081611093565b8251156112f35782518084602001fd5b8160405162461bcd60e51b81526004016104f5919061182e565b60006020828403121561131f57600080fd5b81356001600160e01b03198116811461109357600080fd5b60006020828403121561134957600080fd5b5035919050565b80356001600160a01b038116811461136757600080fd5b919050565b6000806040838503121561137f57600080fd5b8235915061138f60208401611350565b90509250929050565b6000602082840312156113aa57600080fd5b61109382611350565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156113dc57600080fd5b6113e583611350565b9150602083013567ffffffffffffffff8082111561140257600080fd5b818501915085601f83011261141657600080fd5b813581811115611428576114286113b3565b604051601f8201601f19908116603f01168101908382118183101715611450576114506113b3565b8160405282815288602084870101111561146957600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b600080600080608085870312156114a157600080fd5b5050823594602084013594506040840135936060013592509050565b6020808252602f908201527f4c696d697473436865636b3a697357697468696e4c696d6974733a2076616c7560408201526e329034b9903a37b79039b6b0b6361760891b606082015260800190565b6020808252602f908201527f4c696d697473436865636b3a697357697468696e4c696d6974733a2076616c7560408201526e329034b9903a37b7903630b933b29760891b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b600181811c9082168061165557607f821691505b60208210810361167557634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561053357600081815260208120601f850160051c810160208610156116a25750805b601f850160051c820191505b818110156116c1578281556001016116ae565b505050505050565b815167ffffffffffffffff8111156116e3576116e36113b3565b6116f7816116f18454611641565b8461167b565b602080601f83116001811461172c57600084156117145750858301515b600019600386901b1c1916600185901b1785556116c1565b600085815260208120601f198616915b8281101561175b5788860151825594840194600190910190840161173c565b50858210156117795787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60005b838110156117a457818101518382015260200161178c565b838111156117b3576000848401525b50505050565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516117f1816017850160208801611789565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611822816028840160208801611789565b01602801949350505050565b602081526000825180602084015261184d816040850160208701611789565b601f01601f19169190910160400192915050565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561189157611891611861565b500290565b600082198211156118a9576118a9611861565b500190565b634e487b7160e01b600052603260045260246000fd5b6000816118d3576118d3611861565b506000190190565b600082516118ed818460208701611789565b919091019291505056fe0245b6cbab6b03e029f6c88bff9595f9f5c30170f52598c3459ee71476ad59c14e6561744669205061796d656e7473205472616e73666572205265736f6c766572416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220c554626e170dee5c823a5edec3e73e1529374751ccdbbf67f5834e293ea7be5164736f6c634300080f0033";

type ProtocolSettingsV1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProtocolSettingsV1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProtocolSettingsV1__factory extends ContractFactory {
  constructor(...args: ProtocolSettingsV1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ProtocolSettingsV1> {
    return super.deploy(overrides || {}) as Promise<ProtocolSettingsV1>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ProtocolSettingsV1 {
    return super.attach(address) as ProtocolSettingsV1;
  }
  override connect(signer: Signer): ProtocolSettingsV1__factory {
    return super.connect(signer) as ProtocolSettingsV1__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProtocolSettingsV1Interface {
    return new utils.Interface(_abi) as ProtocolSettingsV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProtocolSettingsV1 {
    return new Contract(address, _abi, signerOrProvider) as ProtocolSettingsV1;
  }
}
