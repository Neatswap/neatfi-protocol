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
        internalType: "address payable",
        name: "feeDistributionAddress",
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
      {
        internalType: "address payable",
        name: "newFeeDistributionAddress",
        type: "address",
      },
    ],
    name: "changeFeeDistributionAddress",
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
        internalType: "address",
        name: "actorAddress",
        type: "address",
      },
    ],
    name: "getFeeDistributionAddress",
    outputs: [
      {
        internalType: "address payable",
        name: "feeDistributionAddress",
        type: "address",
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
  "0x60a0806040523461003157306080526123899081610037823960805181818161054c01528181610d5301526120120152f35b600080fdfe60806040526004361015610013575b600080fd5b60003560e01c80630153432d146101b757806301ffc9a7146101ae57806310c2172a146101a5578063153d73341461019c578063248a9ca3146101935780632f2ff15d1461018a57806336568abe146101815780633659cfe614610178578063390c10f41461016f578063396b88bf146101665780634f1ef2861461015d57806359e19a95146101545780635b30a97b1461014b5780636a6c9592146101425780638129fc1c146101395780638ad51d8c146101305780638e4013b21461012757806391d148541461011e57806394658d7e14610115578063a217fddf1461010c5763d547741f1461010457600080fd5b61000e6110c0565b5061000e6110a3565b5061000e611067565b5061000e611010565b5061000e610eff565b5061000e610e8d565b5061000e610d10565b5061000e610cc4565b5061000e610b92565b5061000e6109e9565b5061000e61096c565b5061000e61075f565b5061000e6106ca565b5061000e610524565b5061000e61048d565b5061000e6103ba565b5061000e61038a565b5061000e61034e565b5061000e61025b565b5061000e6101f3565b503461000e57600036600319011261000e5760206040517fdb1507a7bd981676c03bdaae9e28ab8baadf8a4eee150a8b6a2dd2713db13a648152f35b503461000e57602036600319011261000e5760043563ffffffff60e01b811680910361000e57602090637965db0b60e01b8114908115610239575b506040519015158152f35b6301ffc9a760e01b1490503861022e565b6001600160a01b0381160361000e57565b503461000e57604036600319011261000e576004356102798161024a565b602435906102868261024a565b61028f3361117d565b60018060a01b031660005260016020526040600020906002820154156102d95760016102d792019060018060a01b03166bffffffffffffffffffffffff60a01b825416179055565b005b60405162461bcd60e51b8152602060048201526053602482015260008051602061231483398151915260448201527f653a3a5f6368616e6765466565446973747269627574696f6e416464726573736064820152721d1030b1ba37b91035b2bc9034b990183c181760691b608482015260a490fd5b503461000e57600036600319011261000e5760206040517fec67990198cb34a8467e86e518c87d52127fe5b916e0095d8047a8355e37f63e8152f35b503461000e57602036600319011261000e5760043560005260666020526020600160406000200154604051908152f35b503461000e5760408060031936011261000e57600435906024356103dd8161024a565b60009280845260666020526103f96001848620015433906113fc565b808452606660209081528385206001600160a01b03841660009081529152604090205460ff161561042957505051f35b808452606660209081528385206001600160a01b0384166000908152915260409020805460ff19166001179055825133926001600160a01b031691907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d908690a451f35b503461000e57604036600319011261000e576024356104ab8161024a565b336001600160a01b038216036104c7576102d79060043561155e565b60405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608490fd5b503461000e57602036600319011261000e576004356105428161024a565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116919061057b30841415611820565b61059960008051602061233483398151915291825416938414611881565b6040516020810181811067ffffffffffffffff8211176106bd575b604052600081526105c483611e28565b8051158015906106b5575b6106a4575b506105f56105f16000805160206122f48339815191525460ff1690565b1590565b6105fb57005b6102d79261069961068d61069f936106286000805160206122f4833981519152600160ff19825416179055565b604051631b2ce7f360e11b60208201526001600160a01b03851660248201526106689061066281604481015b03601f198101835282610910565b87611f5a565b506000805160206122f4833981519152805460ff19169055546001600160a01b031690565b6001600160a01b031690565b14611dc4565b611eb8565b6106ae9083611f5a565b50386105d4565b5060006105cf565b6106c56108d0565b6105b4565b503461000e57602036600319011261000e5761075b6004356106eb8161024a565b60018060a01b03809116600052600160205261074a60606002604060002061073b60ff6040519661071b886108e7565b8084541688526001840154908116602089015260a01c16604087016115ee565b01549201918083521515611752565b516040519081529081906020820190565b0390f35b503461000e57602036600319011261000e5760043561077d8161024a565b61078633611308565b6001600160a01b0381166000908152600160205260409020600201541561085f5761085a8161080b60016107fc816107f17fa60a1ef7b6ee105c202f4c053d97ad27f41758bd853e57d57ed04349406ebf579760018060a01b03166000526001602052604060002090565b015460a01c60ff1690565b61080581610e6d565b146116da565b610840600161082c8360018060a01b03166000526001602052604060002090565b01805460ff60a01b1916600160a11b179055565b6040516001600160a01b0390911681529081906020820190565b0390a1005b60405162461bcd60e51b815260206004820152604f602482015260008051602061231483398151915260448201527f653a3a5f696e61637469766174654163746f723a206163746f72206973206e6f60648201526e3a1030b8383937bb32b2103cb2ba1760891b608482015260a490fd5b50634e487b7160e01b600052604160045260246000fd5b6080810190811067ffffffffffffffff82111761090357604052565b61090b6108d0565b604052565b90601f8019910116810190811067ffffffffffffffff82111761090357604052565b6040519061093f826108e7565b565b60209067ffffffffffffffff811161095f575b601f01601f19160190565b6109676108d0565b610954565b50604036600319011261000e576004356109858161024a565b6024359067ffffffffffffffff821161000e573660238301121561000e578160040135906109b282610941565b916109c06040519384610910565b808352366024828601011161000e5760208160009260246102d797018387013784010152612008565b503461000e57602036600319011261000e57600435610a078161024a565b610a1033611308565b6001600160a01b038116600090815260016020526040902060020154610b1357604080517ffe5101a8d2b9824e9cc03b87fe326b5fcbb3b3da29552660b1776cdc09eff89e602082019081526001600160a01b038416928201929092527f89f5d87aae42bb89b56dc264e105880664e5aed62f411be807470ca109f9791b929190610a9e8160608101610654565b5190206001600160a01b03821660009081526001602081905260409091206002810192909255610add915b01805460ff60a01b1916600160a01b179055565b6001600160a01b03166000818152600160209081526040918290206002015482519384529083015290a160405160008152602090f35b60405162461bcd60e51b815260206004820152605c602482015260008051602061231483398151915260448201527f653a3a5f617070726f7665416e6447656e65726174654163746f724b65793a2060648201527f6163746f72206b657920616c72656164792067656e6572617465642e00000000608482015260a490fd5b503461000e57602036600319011261000e57600435610bb08161024a565b610bb933611308565b6001600160a01b03811660009081526001602052604090206002015415610c555761085a81610c346002610c2560016107f17f2662dba0eeedca89b2d496492e35a18a724fd278ac58ce4c147d4830035b50959760018060a01b03166000526001602052604060002090565b610c2e81610e6d565b14611666565b6108406001610ac98360018060a01b03166000526001602052604060002090565b60405162461bcd60e51b815260206004820152604d602482015260008051602061231483398151915260448201527f653a3a5f61637469766174654163746f723a206163746f72206973206e6f742060648201526c30b8383937bb32b2103cb2ba1760991b608482015260a490fd5b503461000e57602036600319011261000e576020600435610ce48161024a565b610ced3361117d565b60018060a01b038091166000526001825260016040600020015416604051908152f35b503461000e57600080600319360112610e6a57805460ff8160081c16908115809281610e5f575b610d40906117bd565b610e4e575b50610d986001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811690610d8130831415611820565b600080516020612334833981519152541614611881565b815460ff8160081c16908115809281610e43575b610db5906117bd565b610e25575b50610dc3611c19565b610dcb611c19565b610e17575b610dd8611a53565b610de1336114b6565b610de961198d565b610df9610df4611a13565b611cb1565b610e0257604051f35b610e1261ff001960005416600055565b604051f35b815461ff0019168255610dd0565b61ff0019166101001783556000805460ff1916600117905538610dba565b5060ff821615610dac565b61ffff191661010117825538610d45565b5060ff821615610d37565b80fd5b60031115610e7757565b634e487b7160e01b600052602160045260246000fd5b503461000e57602036600319011261000e57600435610eab8161024a565b60018060a01b0380911660005260016020526040600020908082541690600183015490600260ff8360a01c16940154916040519384521660208301526003831015610e775760809260408301526060820152f35b503461000e57602036600319011261000e57600435610f1d8161024a565b610f263361117d565b803b15610f915761085a7f69b19e4f70557001d9898b480901f4635c99e8b8848e49417ff55736dfb224cf91610840610f5d610932565b6001600160a01b038316808252602080830182905260006040808501829052606085018290529281526001909152206115fa565b60405162461bcd60e51b815260206004820152605b602482015260008051602061231483398151915260448201527f653a3a5f726571756573744163746f724b65793a206163746f7220616464726560648201527f7373206973206e6f74206120736d61727420636f6e74726163742e0000000000608482015260a490fd5b503461000e57604036600319011261000e57602060ff61105b6024356110358161024a565b6004356000526066845260406000209060018060a01b0316600052602052604060002090565b54166040519015158152f35b503461000e57600036600319011261000e5760206040517f0245b6cbab6b03e029f6c88bff9595f9f5c30170f52598c3459ee71476ad59c18152f35b503461000e57600036600319011261000e57602060405160008152f35b503461000e57604036600319011261000e576102d76024356004356110e48261024a565b80600052606660205261110060016040600020015433906113fc565b61155e565b918091926000905b82821061112557501161111e575050565b6000910152565b9150806020918301518186015201829161110d565b9061114d60209282815194859201611105565b0190565b604091602082526111718151809281602086015260208686019101611105565b601f01601f1916010190565b6001600160a01b03811660009081527fa73621b2ad63da57e8fb46d13d9719d3ede38231f6ba315f97abac451e94a2e860205260409020547fec67990198cb34a8467e86e518c87d52127fe5b916e0095d8047a8355e37f63e919060ff16156111e4575050565b6111f6906001600160a01b03166121e6565b906111ff611da9565b90603061120b83612132565b53607861121783612148565b5360415b600181116112b9576112b5603761129d866106548761123a881561219b565b61129760405195869476020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b6020870152611276815180926020858a019101611105565b8501016011907001034b99036b4b9b9b4b733903937b6329607d1b81520190565b9061113a565b60405162461bcd60e51b815291829160048301611151565b0390fd5b9080600f6112f6921660108110156112fb575b6f181899199a1a9b1b9c1cb0b131b232b360811b901a6112ec8486612159565b5360041c91612178565b61121b565b61130361211b565b6112cc565b6001600160a01b03811660009081527f8e01eb25c56bd8f76ffa4e82c43cf2bf19ed181682f793396a7ad55ba951bcf160205260409020547f0245b6cbab6b03e029f6c88bff9595f9f5c30170f52598c3459ee71476ad59c1919060ff161561136f575050565b611381906001600160a01b03166121e6565b9061138a611da9565b90603061139683612132565b5360786113a283612148565b5360415b600181116113c5576112b5603761129d866106548761123a881561219b565b9080600f6113f7921660108110156112fb576f181899199a1a9b1b9c1cb0b131b232b360811b901a6112ec8486612159565b6113a6565b9081600052606660205260ff6114288260406000209060018060a01b0316600052602052604060002090565b541615611433575050565b61129d6112b59261065461145961145360489560018060a01b03166121e6565b92612284565b60405194859376020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b6020860152611493815180926020603789019101611105565b84017001034b99036b4b9b9b4b733903937b6329607d1b6037820152019061113a565b6001600160a01b03811660009081527f6f48904484b35701cf1f41ad9068b394adf7e2f8a59d2309a04d10a155eaa72b602052604081205460ff16156114fa575050565b8080526066602090815260408083206001600160a01b038516600090815292529020805460ff1916600117905560405133926001600160a01b031691907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d908290a4565b60008181526066602090815260408083206001600160a01b038616845290915290205460ff1661158c575050565b60008181526066602090815260408083206001600160a01b03861684529091529020805460ff1916905560405133926001600160a01b031691907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b90600090a4565b6003821015610e775752565b815181546001600160a01b03199081166001600160a01b03928316178355602084015160018401805491909316911617815590916040810151906003821015610e7757825460ff60a01b191660a09290921b60ff60a01b16919091179091556060015160029190910155565b1561166d57565b60405162461bcd60e51b815260206004820152604b602482015260008051602061231483398151915260448201527f653a3a5f61637469766174654163746f723a206163746f7220697320616c726560648201526a30b23c9030b1ba34bb329760a91b608482015260a490fd5b156116e157565b60405162461bcd60e51b815260206004820152604f602482015260008051602061231483398151915260448201527f653a3a5f696e61637469766174654163746f723a206163746f7220697320616c60648201526e3932b0b23c9034b730b1ba34bb329760891b608482015260a490fd5b1561175957565b60405162461bcd60e51b8152602060048201526042602482015260008051602061231483398151915260448201527f653a3a5f6765744163746f724b65793a206163746f72206b6579206973203078606482015261181760f11b608482015260a490fd5b156117c457565b60405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608490fd5b1561182757565b60405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608490fd5b1561188857565b60405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608490fd5b90600182811c92168015611912575b60208310146118fc57565b634e487b7160e01b600052602260045260246000fd5b91607f16916118f1565b601f8111611928575050565b60009060fd82527f9346ac6dd7de6b96975fec380d4d994c4c12e6a8897544f22915316cc6cca280906020601f850160051c83019410611983575b601f0160051c01915b82811061197857505050565b81815560010161196c565b9092508290611963565b61199860fc546118e2565b601f81116119c8575b507f4e6561744669204163746f724b657920466163746f727900000000000000002e60fc55565b600060fc8152601f7f371f36870d18f32a11fea0f144b021c8b407bb50f8e0267c711123f454b963c0920160051c8201915b828110611a085750506119a1565b8181556001016119fa565b604051906040820182811067ffffffffffffffff821117611a46575b60405260058252640312e302e360dc1b6020830152565b611a4e6108d0565b611a2f565b600080549060ff90818360081c16928315809481611ba3575b611a75906117bd565b611b85575b508054828160081c16908115809281611b7b575b611a97906117bd565b611b5d575b50611aa5611ca9565b611b48575b8054828160081c1692611ac7841594859283611b3d575b506117bd565b611b1e575b5050611ad6611c19565b611b09575b611ae3611c60565b611aeb611c60565b611af3611bad565b611af957565b61093f61ff001960005416600055565b611b1961ff001960005416600055565b611adb565b61ff0019166101001790556000805460ff191660011790553880611acc565b905083161538611ac1565b611b5861ff001960005416600055565b611aaa565b61ff0019166101001782556000805460ff1916600117905538611a9c565b5081851615611a8e565b61ff0019166101001781556000805460ff1916600117905538611a7a565b5081841615611a6c565b60005460ff8160081c16908115809281611c0e575b611bcb906117bd565b611bfc575b50611bd9611c19565b611be1611c19565b611be9611c19565b611bef57565b61ff001960005416600055565b61ffff19166101011760005538611bd0565b5060ff821615611bc2565b60005460ff8160081c16908115809281611c55575b611c37906117bd565b611c43575b50611bef57565b61ffff19166101011760005538611c3c565b5060ff821615611c2e565b60005460ff8160081c16908115809281611c9e575b611c7e906117bd565b611c8c575b50611be9611c19565b61ffff19166101011760005538611c83565b5060ff821615611c75565b611c60611c19565b90815167ffffffffffffffff8111611d9c575b611cd881611cd360fd546118e2565b61191c565b602080601f8311600114611d145750819293600092611d09575b50508160011b916000199060031b1c19161760fd55565b015190503880611cf2565b90601f19831694611d4760fd6000527f9346ac6dd7de6b96975fec380d4d994c4c12e6a8897544f22915316cc6cca28090565b926000905b878210611d84575050836001959610611d6b575b505050811b0160fd55565b015160001960f88460031b161c19169055388080611d60565b80600185968294968601518155019501930190611d4c565b611da46108d0565b611cc4565b60405190611db6826108e7565b604282526060366020840137565b15611dcb57565b60405162461bcd60e51b815260206004820152602f60248201527f45524331393637557067726164653a207570677261646520627265616b73206660448201526e75727468657220757067726164657360881b6064820152608490fd5b803b15611e5d5760008051602061233483398151915280546001600160a01b0319166001600160a01b03909216919091179055565b60405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608490fd5b611ec181611e28565b60018060a01b03167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b6000604051a2565b604051906060820182811067ffffffffffffffff821117611f4d575b60405260278252660819985a5b195960ca1b6040837f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c60208201520152565b611f556108d0565b611f0e565b90813b15611fb457600081611faa9360208394519201905af43d15611fad573d611f8381610941565b90611f916040519283610910565b81523d6000602083013e5b611fa4611ef2565b916120e3565b90565b6060611f9c565b60405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608490fd5b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169261204030851415611820565b61205e60008051602061233483398151915292835416948514611881565b61206783611e28565b8051158015906120db575b6120ca575b506120946105f16000805160206122f48339815191525460ff1690565b61209d57505050565b61093f9261069961068d61069f936106286000805160206122f4833981519152600160ff19825416179055565b6120d49083611f5a565b5038612077565b506001612072565b909190156120ef575090565b8151156120ff5750805190602001fd5b60405162461bcd60e51b81529081906112b59060048301611151565b50634e487b7160e01b600052603260045260246000fd5b602090805115612140570190565b61114d61211b565b602190805160011015612140570190565b90602091805182101561216b57010190565b61217361211b565b010190565b8015612185576000190190565b634e487b7160e01b600052601160045260246000fd5b156121a257565b606460405162461bcd60e51b815260206004820152602060248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b604051906060820182811067ffffffffffffffff821117612277575b604052602a82526040366020840137603061221c83612132565b53607861222883612148565b536029905b6001821161224057611faa91501561219b565b80600f612271921660108110156112fb576f181899199a1a9b1b9c1cb0b131b232b360811b901a6112ec8486612159565b9061222d565b61227f6108d0565b612202565b61228c611da9565b90603061229883612132565b5360786122a483612148565b536041905b600182116122bc57611faa91501561219b565b80600f6122ed921660108110156112fb576f181899199a1a9b1b9c1cb0b131b232b360811b901a6112ec8486612159565b906122a956fe4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91434163746f72466163746f72794f7065726174696f6e735570677261646561626c360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbca2646970667358221220395dc742d6b0abb5be9f4397416df38ca41a45a51c220e4dd750c8516c934ee164736f6c634300080f0033";

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
