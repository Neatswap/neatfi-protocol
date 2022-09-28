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
    name: "actorEarningsNumerator",
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
    name: "getActorEarningsNumerator",
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
    inputs: [],
    name: "getProtocolFeeDistributionNumerator",
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
        name: "newProtocolFeeDistributionNumerator",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newSwapProtocolFeeValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newSellProtocolFeeNumeratorValue",
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
      {
        internalType: "uint256",
        name: "newActorEarningsNumerator",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "protocolFeeDistributionNumerator",
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
    name: "sellProtocolFeeNumerator",
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
        name: "newSellProtocolFeeNumerator",
        type: "uint256",
      },
    ],
    name: "setSellProtocolFeeNumerator",
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
  "0x60a080604052346100315730608052611b2e908161003782396080518181816106140152818161106f01526117ce0152f35b600080fdfe60806040526004361015610013575b600080fd5b60003560e01c80630153432d1461022157806301ffc9a71461021857806305dded361461017657806308641ff8146101e25780630d9e5d4d1461020f578063149f37621461019a578063153d733414610206578063248a9ca3146101fd5780632d7aa82b146101f45780632f2ff15d146101eb57806334d6b97b146101e257806336568abe146101d95780633659cfe6146101d057806339d37225146101ac5780634f1ef286146101c75780635a3aa46a1461016457806391d14854146101be57806394658d7e146101b557806396a65b8e146101ac5780639d06c89314610188578063a217fddf146101a3578063a86b53b91461019a578063aa4ae43e14610191578063b5c63fbc14610188578063bf0589ea1461017f578063d0473b4114610176578063d547741f1461016d578063d891ac9f146101645763f48f62d41461015c57600080fd5b61000e610a17565b5061000e6108a4565b5061000e6109d5565b5061000e6102b4565b5061000e6109b2565b5061000e610952565b5061000e61098f565b5061000e610353565b5061000e610972565b5061000e61079b565b5061000e610916565b5061000e6108c3565b5061000e61082b565b5061000e6105f0565b5061000e61055d565b5061000e6102d4565b5061000e61048e565b5061000e6103de565b5061000e6103ae565b5061000e610372565b5061000e6102f4565b5061000e61025d565b503461000e57600036600319011261000e5760206040517fdb1507a7bd981676c03bdaae9e28ab8baadf8a4eee150a8b6a2dd2713db13a648152f35b503461000e57602036600319011261000e5760043563ffffffff60e01b811680910361000e57602090637965db0b60e01b81149081156102a3575b506040519015158152f35b6301ffc9a760e01b14905038610298565b503461000e57600036600319011261000e57602061010154604051908152f35b503461000e57600036600319011261000e57602061010254604051908152f35b503461000e57602036600319011261000e5760043561031233610ab2565b61034d633b9aca0082101561032681610e2f565b6103486b033b2e3c9fd0803ce80000008411159161034383610e93565b610e2f565b610e93565b61010055005b503461000e57600036600319011261000e57602060fe54604051908152f35b503461000e57600036600319011261000e5760206040517fec67990198cb34a8467e86e518c87d52127fe5b916e0095d8047a8355e37f63e8152f35b503461000e57602036600319011261000e5760043560005260c96020526020600160406000200154604051908152f35b503461000e5760c036600319011261000e5760005460ff8160081c16908115809281610457575b61040e90610f25565b610445575b5061042e60a43560843560643560443560243560043561104a565b610435575b005b61043361ff001960005416600055565b61ffff19166101011760005538610413565b5060ff821615610405565b602435906001600160a01b038216820361000e57565b600435906001600160a01b038216820361000e57565b503461000e5760408060031936011261000e57600435906104ad610462565b60009280845260c96020526104c9600184862001543390610c3d565b80845260c960209081528385206001600160a01b03841660009081529152604090205460ff16156104f957505051f35b80845260c960209081528385206001600160a01b0384166000908152915260409020805460ff19166001179055825133926001600160a01b031691907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d908690a451f35b503461000e57604036600319011261000e57610577610462565b336001600160a01b038216036105935761043390600435610d9f565b60405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608490fd5b503461000e57602036600319011261000e5761060a610478565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116919061064330841415610f88565b610661600080516020611ad983398151915291825416938414610fe9565b61066a33610ab2565b6040516020810181811067ffffffffffffffff82111761078e575b60405260008152610695836115e4565b805115801590610786575b610775575b506106c66106c2600080516020611ab98339815191525460ff1690565b1590565b6106cc57005b6104339261076a61075e610770936106f9600080516020611ab9833981519152600160ff19825416179055565b604051631b2ce7f360e11b60208201526001600160a01b03851660248201526107399061073381604481015b03601f1981018352826107d1565b87611716565b50600080516020611ab9833981519152805460ff19169055546001600160a01b031690565b6001600160a01b031690565b14611580565b611674565b61077f9083611716565b50386106a5565b5060006106a0565b6107966107ba565b610685565b503461000e57600036600319011261000e57602060ff54604051908152f35b50634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff8211176107f357604052565b6107fb6107ba565b604052565b60209067ffffffffffffffff811161081e575b601f01601f19160190565b6108266107ba565b610813565b50604036600319011261000e57610840610478565b6024359067ffffffffffffffff821161000e573660238301121561000e5781600401359061086d82610800565b9161087b60405193846107d1565b808352366024828601011161000e576020816000926024610433970183870137840101526117c4565b503461000e57600036600319011261000e57602060fd54604051908152f35b503461000e57604036600319011261000e57602060ff61090a6108e4610462565b60043560005260c9845260406000209060018060a01b0316600052602052604060002090565b54166040519015158152f35b503461000e57600036600319011261000e5760206040517f0245b6cbab6b03e029f6c88bff9595f9f5c30170f52598c3459ee71476ad59c18152f35b503461000e57600036600319011261000e57602061010054604051908152f35b503461000e57600036600319011261000e57602060405160008152f35b503461000e57602036600319011261000e576109aa33610ab2565b60043560ff55005b503461000e57602036600319011261000e576109cd33610ab2565b60043560fd55005b503461000e57604036600319011261000e576104336004356109f5610462565b908060005260c9602052610a126001604060002001543390610c3d565b610d9f565b503461000e57602036600319011261000e57610a3233610ab2565b60043560fe55005b918091926000905b828210610a5a575011610a53575050565b6000910152565b91508060209183015181860152018291610a42565b90610a8260209282815194859201610a3a565b0190565b60409160208252610aa68151809281602086015260208686019101610a3a565b601f01601f1916010190565b6001600160a01b03811660009081527fa9809c5ca025aef26b610bee294783e07a805854a669db33c42e45a89b735e0f60205260409020547f0245b6cbab6b03e029f6c88bff9595f9f5c30170f52598c3459ee71476ad59c1919060ff1615610b19575050565b610b2b906001600160a01b03166119ab565b90610b34611546565b906030610b40836118f7565b536078610b4c8361190d565b5360415b60018111610bee57610bea6037610bd28661072587610b6f8815611960565b610bcc60405195869476020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b6020870152610bab815180926020858a019101610a3a565b8501016011907001034b99036b4b9b9b4b733903937b6329607d1b81520190565b90610a6f565b60405162461bcd60e51b815291829160048301610a86565b0390fd5b9080600f610c2b92166010811015610c30575b6f181899199a1a9b1b9c1cb0b131b232b360811b901a610c21848661191e565b5360041c9161193d565b610b50565b610c386118e0565b610c01565b908160005260c960205260ff610c698260406000209060018060a01b0316600052602052604060002090565b541615610c74575050565b610bd2610bea92610725610c9a610c9460489560018060a01b03166119ab565b92611a49565b60405194859376020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b6020860152610cd4815180926020603789019101610a3a565b84017001034b99036b4b9b9b4b733903937b6329607d1b60378201520190610a6f565b6001600160a01b03811660009081527f81fe90a866a48a634a12852c1be675b683a22307409932a7443b8029347be756602052604081205460ff1615610d3b575050565b80805260c9602090815260408083206001600160a01b038516600090815292529020805460ff1916600117905560405133926001600160a01b031691907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d908290a4565b600081815260c9602090815260408083206001600160a01b038616845290915290205460ff16610dcd575050565b600081815260c9602090815260408083206001600160a01b03861684529091529020805460ff1916905560405133926001600160a01b031691907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b90600090a4565b15610e3657565b60405162461bcd60e51b815260206004820152602f60248201527f4c696d697473436865636b3a697357697468696e4c696d6974733a2076616c7560448201526e329034b9903a37b79039b6b0b6361760891b6064820152608490fd5b15610e9a57565b60405162461bcd60e51b815260206004820152602f60248201527f4c696d697473436865636b3a697357697468696e4c696d6974733a2076616c7560448201526e329034b9903a37b7903630b933b29760891b6064820152608490fd5b610f07633b9aca00821015610e2f565b610f1f6b033b2e3c9fd0803ce8000000821115610e93565b61010055565b15610f2c57565b60405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608490fd5b15610f8f57565b60405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608490fd5b15610ff057565b60405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608490fd5b926111046111149695936110ff611109946110fa61110e986110b360018060a01b03807f0000000000000000000000000000000000000000000000000000000000000000169061109c82301415610f88565b600080516020611ad9833981519152541614610fe9565b60005460ff8160081c1690811580928161115e575b6110d190610f25565b61114c575b506110df611536565b611137575b6110ec6113f5565b6110f4611342565b61010255565b610ef7565b60ff55565b60fd55565b60fe55565b61010155565b61111d33610cf7565b611125611214565b611135611130611302565b61143e565b565b61114761ff001960005416600055565b6110e4565b61ffff191661010117600055386110d6565b5060ff8216156110c8565b90600182811c92168015611199575b602083101461118357565b634e487b7160e01b600052602260045260246000fd5b91607f1691611178565b601f81116111af575050565b60009060fc82527f371f36870d18f32a11fea0f144b021c8b407bb50f8e0267c711123f454b963c0906020601f850160051c8301941061120a575b601f0160051c01915b8281106111ff57505050565b8181556001016111f3565b90925082906111ea565b61121f60fb54611169565b601f811161129f575b50604360fb5560fb6000527f4e6561744669205061796d656e7473205472616e73666572205265736f6c76657f3e7257b7272bb46d49cd6019b04ddee20da7c0cb13f7c1ec3391291b2ccebabc55603960f91b7f3e7257b7272bb46d49cd6019b04ddee20da7c0cb13f7c1ec3391291b2ccebabd55565b601f0160051c7f3e7257b7272bb46d49cd6019b04ddee20da7c0cb13f7c1ec3391291b2ccebabc017f3e7257b7272bb46d49cd6019b04ddee20da7c0cb13f7c1ec3391291b2ccebabe5b8181106112f65750611228565b600081556001016112e9565b604051906040820182811067ffffffffffffffff821117611335575b60405260058252640312e302e360dc1b6020830152565b61133d6107ba565b61131e565b60005460ff8160081c169081158092816113a3575b61136090610f25565b611391575b5061136e6113ae565b6113766113ae565b61137e6113ae565b61138457565b61ff001960005416600055565b61ffff19166101011760005538611365565b5060ff821615611357565b60005460ff8160081c169081158092816113ea575b6113cc90610f25565b6113d8575b5061138457565b61ffff191661010117600055386113d1565b5060ff8216156113c3565b60005460ff8160081c16908115809281611433575b61141390610f25565b611421575b5061137e6113ae565b61ffff19166101011760005538611418565b5060ff82161561140a565b90815167ffffffffffffffff8111611529575b6114658161146060fc54611169565b6111a3565b602080601f83116001146114a15750819293600092611496575b50508160011b916000199060031b1c19161760fc55565b01519050388061147f565b90601f198316946114d460fc6000527f371f36870d18f32a11fea0f144b021c8b407bb50f8e0267c711123f454b963c090565b926000905b8782106115115750508360019596106114f8575b505050811b0160fc55565b015160001960f88460031b161c191690553880806114ed565b806001859682949686015181550195019301906114d9565b6115316107ba565b611451565b61153e6113ae565b6111356113ae565b604051906080820182811067ffffffffffffffff821117611573575b604052604282526060366020840137565b61157b6107ba565b611562565b1561158757565b60405162461bcd60e51b815260206004820152602f60248201527f45524331393637557067726164653a207570677261646520627265616b73206660448201526e75727468657220757067726164657360881b6064820152608490fd5b803b1561161957600080516020611ad983398151915280546001600160a01b0319166001600160a01b03909216919091179055565b60405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608490fd5b61167d816115e4565b60018060a01b03167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b6000604051a2565b604051906060820182811067ffffffffffffffff821117611709575b60405260278252660819985a5b195960ca1b6040837f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c60208201520152565b6117116107ba565b6116ca565b90813b15611770576000816117669360208394519201905af43d15611769573d61173f81610800565b9061174d60405192836107d1565b81523d6000602083013e5b6117606116ae565b916118a8565b90565b6060611758565b60405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608490fd5b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116926117fc30851415610f88565b61181a600080516020611ad983398151915292835416948514610fe9565b61182333610ab2565b61182c836115e4565b8051158015906118a0575b61188f575b506118596106c2600080516020611ab98339815191525460ff1690565b61186257505050565b6111359261076a61075e610770936106f9600080516020611ab9833981519152600160ff19825416179055565b6118999083611716565b503861183c565b506001611837565b909190156118b4575090565b8151156118c45750805190602001fd5b60405162461bcd60e51b8152908190610bea9060048301610a86565b50634e487b7160e01b600052603260045260246000fd5b602090805115611905570190565b610a826118e0565b602190805160011015611905570190565b90602091805182101561193057010190565b6119386118e0565b010190565b801561194a576000190190565b634e487b7160e01b600052601160045260246000fd5b1561196757565b606460405162461bcd60e51b815260206004820152602060248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b604051906060820182811067ffffffffffffffff821117611a3c575b604052602a8252604036602084013760306119e1836118f7565b5360786119ed8361190d565b536029905b60018211611a0557611766915015611960565b80600f611a3692166010811015610c30576f181899199a1a9b1b9c1cb0b131b232b360811b901a610c21848661191e565b906119f2565b611a446107ba565b6119c7565b611a51611546565b906030611a5d836118f7565b536078611a698361190d565b536041905b60018211611a8157611766915015611960565b80600f611ab292166010811015610c30576f181899199a1a9b1b9c1cb0b131b232b360811b901a610c21848661191e565b90611a6e56fe4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbca26469706673582212205b34bfa9ebfdf577952fe86dd903d8ce711c1bec301e022d496010c6c35088c064736f6c634300080f0033";

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
