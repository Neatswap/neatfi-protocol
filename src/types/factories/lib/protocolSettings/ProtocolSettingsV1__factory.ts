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
  "0x60a080604052346100315730608052611b6390816100378239608051818181610592015281816110aa01526118030152f35b600080fdfe60806040526004361015610013575b600080fd5b60003560e01c80630153432d1461022157806301ffc9a71461021857806305dded361461019157806308641ff8146101eb5780630d9e5d4d1461020f578063149f3762146101ac578063153d733414610206578063248a9ca3146101fd5780632f2ff15d146101f457806334d6b97b146101eb57806336568abe146101e25780633659cfe6146101d95780634f1ef286146101d05780635a3aa46a1461017657806391d14854146101c757806394658d7e146101be57806396a65b8e146101645780639d06c893146101a3578063a217fddf146101b5578063a86b53b9146101ac578063b5c63fbc146101a3578063bf0589ea1461019a578063d0473b4114610191578063d547741f14610188578063d6b509c91461017f578063d891ac9f14610176578063dcbab6081461016d578063e2a7797e146101645763f48f62d41461015c57600080fd5b61000e610a29565b5061000e6108b1565b5061000e6109a9565b5061000e610803565b5061000e610972565b5061000e610930565b5061000e6102b4565b5061000e61090d565b5061000e6108d0565b5061000e610353565b5061000e6108f0565b5061000e610875565b5061000e610822565b5061000e61078a565b5061000e61056e565b5061000e6104d9565b5061000e6102d4565b5061000e61040a565b5061000e6103ae565b5061000e610372565b5061000e6102f4565b5061000e61025d565b503461000e57600036600319011261000e5760206040517fdb1507a7bd981676c03bdaae9e28ab8baadf8a4eee150a8b6a2dd2713db13a648152f35b503461000e57602036600319011261000e5760043563ffffffff60e01b811680910361000e57602090637965db0b60e01b81149081156102a3575b506040519015158152f35b6301ffc9a760e01b14905038610298565b503461000e57600036600319011261000e57602061010154604051908152f35b503461000e57600036600319011261000e57602061010254604051908152f35b503461000e57602036600319011261000e5760043561031233610ac4565b61034d633b9aca0082101561032681610e41565b6103486b033b2e3c9fd0803ce80000008411159161034383610ea5565b610e41565b610ea5565b61010055005b503461000e57600036600319011261000e57602060fe54604051908152f35b503461000e57600036600319011261000e5760206040517fec67990198cb34a8467e86e518c87d52127fe5b916e0095d8047a8355e37f63e8152f35b503461000e57602036600319011261000e5760043560005260c96020526020600160406000200154604051908152f35b602435906001600160a01b038216820361000e57565b600435906001600160a01b038216820361000e57565b503461000e5760408060031936011261000e57600435906104296103de565b60009280845260c9602052610445600184862001543390610c4f565b80845260c960209081528385206001600160a01b03841660009081529152604090205460ff161561047557505051f35b80845260c960209081528385206001600160a01b0384166000908152915260409020805460ff19166001179055825133926001600160a01b031691907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d908690a451f35b503461000e57604036600319011261000e576104f36103de565b336001600160a01b038216036105115761050f90600435610db1565b005b60405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608490fd5b503461000e57602036600319011261000e576105886103f4565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811691906105c130841415610fc7565b6105df600080516020611b0e83398151915291825416938414611028565b6105e833610ac4565b6040516020810181811067ffffffffffffffff82111761070c575b6040526000815261061383611619565b805115801590610704575b6106f3575b50610644610640600080516020611aee8339815191525460ff1690565b1590565b61064a57005b61050f926106e86106dc6106ee93610677600080516020611aee833981519152600160ff19825416179055565b604051631b2ce7f360e11b60208201526001600160a01b03851660248201526106b7906106b181604481015b03601f198101835282610730565b8761174b565b50600080516020611aee833981519152805460ff19169055546001600160a01b031690565b6001600160a01b031690565b146115b5565b6116a9565b6106fd908361174b565b5038610623565b50600061061e565b610714610719565b610603565b50634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff82111761075257604052565b61075a610719565b604052565b60209067ffffffffffffffff811161077d575b601f01601f19160190565b610785610719565b610772565b50604036600319011261000e5761079f6103f4565b6024359067ffffffffffffffff821161000e573660238301121561000e578160040135906107cc8261075f565b916107da6040519384610730565b808352366024828601011161000e57602081600092602461050f970183870137840101526117f9565b503461000e57600036600319011261000e57602060fd54604051908152f35b503461000e57604036600319011261000e57602060ff6108696108436103de565b60043560005260c9845260406000209060018060a01b0316600052602052604060002090565b54166040519015158152f35b503461000e57600036600319011261000e5760206040517f0245b6cbab6b03e029f6c88bff9595f9f5c30170f52598c3459ee71476ad59c18152f35b503461000e57600036600319011261000e57602060ff54604051908152f35b503461000e57600036600319011261000e57602061010054604051908152f35b503461000e57600036600319011261000e57602060405160008152f35b503461000e57602036600319011261000e5761092833610ac4565b60043560fd55005b503461000e57604036600319011261000e5761050f6004356109506103de565b908060005260c960205261096d6001604060002001543390610c4f565b610db1565b503461000e57602036600319011261000e5760043561099033610ac4565b6109a4633b9aca0082101561032681610e41565b60ff55005b503461000e5760a036600319011261000e5760005460ff8160081c16908115809281610a1e575b6109d990610f64565b610a0c575b506109f6608435606435604435602435600435611089565b6109fc57005b61050f61ff001960005416600055565b61ffff191661010117600055386109de565b5060ff8216156109d0565b503461000e57602036600319011261000e57610a4433610ac4565b60043560fe55005b918091926000905b828210610a6c575011610a65575050565b6000910152565b91508060209183015181860152018291610a54565b90610a9460209282815194859201610a4c565b0190565b60409160208252610ab88151809281602086015260208686019101610a4c565b601f01601f1916010190565b6001600160a01b03811660009081527fa9809c5ca025aef26b610bee294783e07a805854a669db33c42e45a89b735e0f60205260409020547f0245b6cbab6b03e029f6c88bff9595f9f5c30170f52598c3459ee71476ad59c1919060ff1615610b2b575050565b610b3d906001600160a01b03166119e0565b90610b4661157b565b906030610b528361192c565b536078610b5e83611942565b5360415b60018111610c0057610bfc6037610be4866106a387610b818815611995565b610bde60405195869476020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b6020870152610bbd815180926020858a019101610a4c565b8501016011907001034b99036b4b9b9b4b733903937b6329607d1b81520190565b90610a81565b60405162461bcd60e51b815291829160048301610a98565b0390fd5b9080600f610c3d92166010811015610c42575b6f181899199a1a9b1b9c1cb0b131b232b360811b901a610c338486611953565b5360041c91611972565b610b62565b610c4a611915565b610c13565b908160005260c960205260ff610c7b8260406000209060018060a01b0316600052602052604060002090565b541615610c86575050565b610be4610bfc926106a3610cac610ca660489560018060a01b03166119e0565b92611a7e565b60405194859376020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b6020860152610ce6815180926020603789019101610a4c565b84017001034b99036b4b9b9b4b733903937b6329607d1b60378201520190610a81565b6001600160a01b03811660009081527f81fe90a866a48a634a12852c1be675b683a22307409932a7443b8029347be756602052604081205460ff1615610d4d575050565b80805260c9602090815260408083206001600160a01b038516600090815292529020805460ff1916600117905560405133926001600160a01b031691907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d908290a4565b600081815260c9602090815260408083206001600160a01b038616845290915290205460ff16610ddf575050565b600081815260c9602090815260408083206001600160a01b03861684529091529020805460ff1916905560405133926001600160a01b031691907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b90600090a4565b15610e4857565b60405162461bcd60e51b815260206004820152602f60248201527f4c696d697473436865636b3a697357697468696e4c696d6974733a2076616c7560448201526e329034b9903a37b79039b6b0b6361760891b6064820152608490fd5b15610eac57565b60405162461bcd60e51b815260206004820152602f60248201527f4c696d697473436865636b3a697357697468696e4c696d6974733a2076616c7560448201526e329034b9903a37b7903630b933b29760891b6064820152608490fd5b610f19633b9aca00821015610e41565b610f316b033b2e3c9fd0803ce8000000821115610ea5565b61010055565b610f47633b9aca00821015610e41565b610f5f6b033b2e3c9fd0803ce8000000821115610ea5565b60ff55565b15610f6b57565b60405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608490fd5b15610fce57565b60405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608490fd5b1561102f57565b60405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608490fd5b6111439261113961114996959361113461113e946110ee60018060a01b03807f000000000000000000000000000000000000000000000000000000000000000016906110d782301415610fc7565b600080516020611b0e833981519152541614611028565b60005460ff8160081c16908115809281611193575b61110c90610f64565b611181575b5061111a61156b565b61116c575b61112761142a565b61112f611377565b610f09565b610f37565b60fd55565b60fe55565b61010155565b61115233610d09565b61115a611249565b61116a611165611337565b611473565b565b61117c61ff001960005416600055565b61111f565b61ffff19166101011760005538611111565b5060ff821615611103565b90600182811c921680156111ce575b60208310146111b857565b634e487b7160e01b600052602260045260246000fd5b91607f16916111ad565b601f81116111e4575050565b60009060fc82527f371f36870d18f32a11fea0f144b021c8b407bb50f8e0267c711123f454b963c0906020601f850160051c8301941061123f575b601f0160051c01915b82811061123457505050565b818155600101611228565b909250829061121f565b61125460fb5461119e565b601f81116112d4575b50604360fb5560fb6000527f4e6561744669205061796d656e7473205472616e73666572205265736f6c76657f3e7257b7272bb46d49cd6019b04ddee20da7c0cb13f7c1ec3391291b2ccebabc55603960f91b7f3e7257b7272bb46d49cd6019b04ddee20da7c0cb13f7c1ec3391291b2ccebabd55565b601f0160051c7f3e7257b7272bb46d49cd6019b04ddee20da7c0cb13f7c1ec3391291b2ccebabc017f3e7257b7272bb46d49cd6019b04ddee20da7c0cb13f7c1ec3391291b2ccebabe5b81811061132b575061125d565b6000815560010161131e565b604051906040820182811067ffffffffffffffff82111761136a575b60405260058252640312e302e360dc1b6020830152565b611372610719565b611353565b60005460ff8160081c169081158092816113d8575b61139590610f64565b6113c6575b506113a36113e3565b6113ab6113e3565b6113b36113e3565b6113b957565b61ff001960005416600055565b61ffff1916610101176000553861139a565b5060ff82161561138c565b60005460ff8160081c1690811580928161141f575b61140190610f64565b61140d575b506113b957565b61ffff19166101011760005538611406565b5060ff8216156113f8565b60005460ff8160081c16908115809281611468575b61144890610f64565b611456575b506113b36113e3565b61ffff1916610101176000553861144d565b5060ff82161561143f565b90815167ffffffffffffffff811161155e575b61149a8161149560fc5461119e565b6111d8565b602080601f83116001146114d657508192936000926114cb575b50508160011b916000199060031b1c19161760fc55565b0151905038806114b4565b90601f1983169461150960fc6000527f371f36870d18f32a11fea0f144b021c8b407bb50f8e0267c711123f454b963c090565b926000905b87821061154657505083600195961061152d575b505050811b0160fc55565b015160001960f88460031b161c19169055388080611522565b8060018596829496860151815501950193019061150e565b611566610719565b611486565b6115736113e3565b61116a6113e3565b604051906080820182811067ffffffffffffffff8211176115a8575b604052604282526060366020840137565b6115b0610719565b611597565b156115bc57565b60405162461bcd60e51b815260206004820152602f60248201527f45524331393637557067726164653a207570677261646520627265616b73206660448201526e75727468657220757067726164657360881b6064820152608490fd5b803b1561164e57600080516020611b0e83398151915280546001600160a01b0319166001600160a01b03909216919091179055565b60405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608490fd5b6116b281611619565b60018060a01b03167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b6000604051a2565b604051906060820182811067ffffffffffffffff82111761173e575b60405260278252660819985a5b195960ca1b6040837f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c60208201520152565b611746610719565b6116ff565b90813b156117a55760008161179b9360208394519201905af43d1561179e573d6117748161075f565b906117826040519283610730565b81523d6000602083013e5b6117956116e3565b916118dd565b90565b606061178d565b60405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608490fd5b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169261183130851415610fc7565b61184f600080516020611b0e83398151915292835416948514611028565b61185833610ac4565b61186183611619565b8051158015906118d5575b6118c4575b5061188e610640600080516020611aee8339815191525460ff1690565b61189757505050565b61116a926106e86106dc6106ee93610677600080516020611aee833981519152600160ff19825416179055565b6118ce908361174b565b5038611871565b50600161186c565b909190156118e9575090565b8151156118f95750805190602001fd5b60405162461bcd60e51b8152908190610bfc9060048301610a98565b50634e487b7160e01b600052603260045260246000fd5b60209080511561193a570190565b610a94611915565b60219080516001101561193a570190565b90602091805182101561196557010190565b61196d611915565b010190565b801561197f576000190190565b634e487b7160e01b600052601160045260246000fd5b1561199c57565b606460405162461bcd60e51b815260206004820152602060248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b604051906060820182811067ffffffffffffffff821117611a71575b604052602a825260403660208401376030611a168361192c565b536078611a2283611942565b536029905b60018211611a3a5761179b915015611995565b80600f611a6b92166010811015610c42576f181899199a1a9b1b9c1cb0b131b232b360811b901a610c338486611953565b90611a27565b611a79610719565b6119fc565b611a8661157b565b906030611a928361192c565b536078611a9e83611942565b536041905b60018211611ab65761179b915015611995565b80600f611ae792166010811015610c42576f181899199a1a9b1b9c1cb0b131b232b360811b901a610c338486611953565b90611aa356fe4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbca26469706673582212206dbdd23250699547cf381173e0b717c5311fad0cb261fd602faaf24b8499eb6464736f6c634300080f0033";

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
