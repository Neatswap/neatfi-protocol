/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  AssetSwapV1,
  AssetSwapV1Interface,
} from "../../../../lib/modules/assetSwap/AssetSwapV1";

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
        indexed: false,
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "bidHash",
        type: "bytes32",
      },
    ],
    name: "BidForOrder",
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
        name: "maker",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "bidHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "orderData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "bidData",
        type: "bytes",
      },
    ],
    name: "approveAndResolveSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "bidsByOrder",
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
        internalType: "address",
        name: "neatFiProtocolStorageAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "assetTransferAddress",
        type: "address",
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
        internalType: "address",
        name: "bidder",
        type: "address",
      },
      {
        components: [
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
        internalType: "struct AssetStructsUpgradeable.Token[]",
        name: "tokens",
        type: "tuple[]",
      },
      {
        internalType: "uint256",
        name: "listingTime",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "actorKey",
        type: "bytes32",
      },
    ],
    name: "makeBid",
    outputs: [
      {
        internalType: "bytes32",
        name: "bidHash",
        type: "bytes32",
      },
    ],
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
    name: "swapEscrowParties",
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
        name: "newAssetTransfer",
        type: "address",
      },
    ],
    name: "updateAssetTransferAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newNeatFiProtocolStorage",
        type: "address",
      },
    ],
    name: "updateNeatFiProtocolStorageAddress",
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
  "0x60a0806040523461003157306080526129a0908161003782396080518181816105180152818161077d01526125860152f35b600080fdfe60806040526004361015610013575b600080fd5b60003560e01c80630153432d1461018f57806301ffc9a714610186578063153d73341461017d578063248a9ca3146101745780632f2ff15d1461016b57806334a0fbb114610162578063354f93601461015957806336568abe146101505780633659cfe6146101475780633b30c7a81461013e578063485cc955146101355780634f1ef2861461012c578063675506231461012357806391d148541461011a57806394658d7e146101115780639d7ff10114610108578063a217fddf146100ff578063d547741f146100f65763dd0e085f146100ee57600080fd5b61000e610fd5565b5061000e610f90565b5061000e610f73565b5061000e610aa8565b5061000e610a3f565b5061000e6109e8565b5061000e6109bb565b5061000e61093f565b5061000e61071c565b5061000e610695565b5061000e6104f0565b5061000e610459565b5061000e610411565b5061000e610386565b5061000e6102b3565b5061000e610272565b5061000e610236565b5061000e6101df565b5061000e6101a3565b600091031261000e57565b503461000e57600036600319011261000e5760206040517fdb1507a7bd981676c03bdaae9e28ab8baadf8a4eee150a8b6a2dd2713db13a648152f35b503461000e57602036600319011261000e5760043563ffffffff60e01b811680910361000e57602090637965db0b60e01b8114908115610225575b506040519015158152f35b6301ffc9a760e01b1490503861021a565b503461000e57600036600319011261000e5760206040517fec67990198cb34a8467e86e518c87d52127fe5b916e0095d8047a8355e37f63e8152f35b503461000e57602036600319011261000e5760043560005260656020526020600160406000200154604051908152f35b6001600160a01b0381160361000e57565b503461000e5760408060031936011261000e57600435906024356102d6816102a2565b60009280845260656020526102f2600184862001543390611318565b808452606560209081528385206001600160a01b03841660009081529152604090205460ff161561032257505051f35b808452606560209081528385206001600160a01b0384166000908152915260409020805460ff19166001179055825133926001600160a01b031691907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d908690a451f35b503461000e57602036600319011261000e576103d26004356103a7816102a2565b6103b033611099565b60018060a01b03166bffffffffffffffffffffffff60a01b60cc54161760cc55565b005b50634e487b7160e01b600052603260045260246000fd5b8054821015610404575b60005260206000200190600090565b61040c6103d4565b6103f5565b503461000e57604036600319011261000e5760243560043560005260976020526040600020805482101561000e5760209161044b916103eb565b90546040519160031b1c8152f35b503461000e57604036600319011261000e57602435610477816102a2565b336001600160a01b03821603610493576103d29060043561147a565b60405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608490fd5b503461000e57602036600319011261000e5760043561050e816102a2565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116919061054730841415611d64565b61056560008051602061294b83398151915291825416938414611dc5565b604051602081018181106001600160401b03821117610688575b6040526000815261058f836123a0565b805115801590610680575b61066f575b506105c06105bc60008051602061290b8339815191525460ff1690565b1590565b6105c657005b6103d29261066461065861066a936105f360008051602061290b833981519152600160ff19825416179055565b604051631b2ce7f360e11b60208201526001600160a01b03851660248201526106339061062d81604481015b03601f1981018352826108d4565b876124d1565b5060008051602061290b833981519152805460ff19169055546001600160a01b031690565b6001600160a01b031690565b1461233c565b612430565b61067990836124d1565b503861059f565b50600061059a565b61069061089d565b61057f565b503461000e5760a036600319011261000e576004356106b3816102a2565b6024356001600160401b0380821161000e573660238301121561000e57816004013590811161000e573660248260071b8401011161000e5761071892610708926084359260643592602460443593019061150a565b6040519081529081906020820190565b0390f35b503461000e57604036600319011261000e5760043561073a816102a2565b602435610746816102a2565b6107fe60009283549260ff8460081c16938415809581610892575b61076a90611d01565b610874575b506107c26001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116906107ab30831415611d64565b60008051602061294b833981519152541614611dc5565b845460ff8160081c16908115809281610869575b6107df90611d01565b61084b575b506107ed612178565b6107f5612178565b61083d57611f97565b610807336113d2565b61080f611ed2565b61081f61081a611f58565b612208565b61082857604051f35b61083861ff001960005416600055565b604051f35b845461ff0019168555611f97565b61ff0019166101001786556000805460ff19166001179055386107e4565b5060ff8216156107d6565b61ff0019166101001785556000805460ff191660011790553861076f565b5060ff821615610761565b50634e487b7160e01b600052604160045260246000fd5b6001600160401b0381116108c757604052565b6108cf61089d565b604052565b90601f801991011681019081106001600160401b038211176108c757604052565b6040519061014082018281106001600160401b038211176108c757604052565b6020906001600160401b038111610932575b601f01601f19160190565b61093a61089d565b610927565b50604036600319011261000e57600435610958816102a2565b602435906001600160401b03821161000e573660238301121561000e5781600401359061098482610915565b9161099260405193846108d4565b808352366024828601011161000e5760208160009260246103d29701838701378401015261257c565b503461000e57602036600319011261000e5760043560005260986020526020604060002054604051908152f35b503461000e57604036600319011261000e57602060ff610a33602435610a0d816102a2565b6004356000526065845260406000209060018060a01b0316600052602052604060002090565b54166040519015158152f35b503461000e57600036600319011261000e5760206040517f0245b6cbab6b03e029f6c88bff9595f9f5c30170f52598c3459ee71476ad59c18152f35b9181601f8401121561000e578235916001600160401b03831161000e576020838186019501011161000e57565b503461000e5760a036600319011261000e57610ac56004356102a2565b6001600160401b0360643581811161000e57610ae5903690600401610a7b565b9160843590811161000e57610afe903690600401610a7b565b919092610b0a33611224565b610b1960026099541415611740565b600260995560cb54610b7c90610b3990610658906001600160a01b031681565b602060405180926324fc4fbd60e01b825281600081610b62602435600483019190602083019252565b03925af1908115610f3a575b600091610f0b575b50611b03565b60cb54610b9390610658906001600160a01b031681565b604051639b63ec0560e01b815260248035600480840191909152356001600160a01b031690820152909390610be190602081604481895afa908115610f66575b600091610f47575b50611b72565b610c0e6040516324fc4fbd60e01b81526020816044359781600081610b628c600483019190602083019252565b60cb54610c2590610658906001600160a01b031681565b9260405194632bbc239560e11b80875260008780610c4d602435600483019190602083019252565b0381895afa968715610efe575b600097610edf575b506040519081526004810182905294600090869060249082905afa948515610ed2575b600095610ead575b5080610ca56024356000526098602052604060002090565b5560cb54610cbd90610658906001600160a01b031681565b803b1561000e576040516313c1a68760e11b8082526024803560048085019190915290830152916000908290604490829084905af18015610ea0575b610e8d575b5060cb54610d1690610658906001600160a01b031681565b91823b1561000e576040519182526004808301919091526024820152906000908290604490829084905af18015610e80575b610e6d575b5060cc54610d6590610658906001600160a01b031681565b6020850180519094906001600160a01b031691803b1561000e57610daa9360008094604051968795869485936301d4c62160e61b9e8f86526004359060048701611c3f565b03925af18015610e60575b610e4d575b5060cc54610de490610dd690610658906001600160a01b031681565b92516001600160a01b031690565b90823b1561000e57600094610e0d86926040519889978896879586526004359160048701611c3f565b03925af18015610e40575b610e27575b6103d26001609955565b80610e34610e3a926108b4565b80610198565b38610e1d565b610e486117a4565b610e18565b80610e34610e5a926108b4565b38610dba565b610e686117a4565b610db5565b80610e34610e7a926108b4565b38610d4d565b610e886117a4565b610d48565b80610e34610e9a926108b4565b38610cfe565b610ea86117a4565b610cf9565b610ecb9195503d806000833e610ec381836108d4565b81019061189f565b9338610c8d565b610eda6117a4565b610c85565b6000919750610ef7903d8084833e610ec381836108d4565b9690610c62565b610f066117a4565b610c5a565b610f2d915060203d602011610f33575b610f2581836108d4565b81019061178c565b38610b76565b503d610f1b565b610f426117a4565b610b6e565b610f60915060203d602011610f3357610f2581836108d4565b38610bdb565b610f6e6117a4565b610bd3565b503461000e57600036600319011261000e57602060405160008152f35b503461000e57604036600319011261000e576103d2602435600435610fb4826102a2565b806000526065602052610fd06001604060002001543390611318565b61147a565b503461000e57602036600319011261000e576103d2600435610ff6816102a2565b610fff33611099565b60018060a01b03166bffffffffffffffffffffffff60a01b60cb54161760cb55565b918091926000905b82821061104157501161103a575050565b6000910152565b91508060209183015181860152018291611029565b9061106960209282815194859201611021565b0190565b6040916020825261108d8151809281602086015260208686019101611021565b601f01601f1916010190565b6001600160a01b03811660009081527fedeb221ad30506a87ccb533a9d2f162a9dfb17aa4a3909cfc7cfee05fb4297fc60205260409020547f0245b6cbab6b03e029f6c88bff9595f9f5c30170f52598c3459ee71476ad59c1919060ff1615611100575050565b611112906001600160a01b03166127fe565b9061111b612303565b9060306111278361274a565b53607861113383612760565b5360415b600181116111d5576111d160376111b98661061f8761115688156127b3565b6111b360405195869476020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b6020870152611192815180926020858a019101611021565b8501016011907001034b99036b4b9b9b4b733903937b6329607d1b81520190565b90611056565b60405162461bcd60e51b81529182916004830161106d565b0390fd5b9080600f61121292166010811015611217575b6f181899199a1a9b1b9c1cb0b131b232b360811b901a6112088486612771565b5360041c91612790565b611137565b61121f6103d4565b6111e8565b6001600160a01b03811660009081527faf674092dd2765cd554a2f244a399d55a2ca26739b09284bfb0c8b87da87df8560205260409020547fec67990198cb34a8467e86e518c87d52127fe5b916e0095d8047a8355e37f63e919060ff161561128b575050565b61129d906001600160a01b03166127fe565b906112a6612303565b9060306112b28361274a565b5360786112be83612760565b5360415b600181116112e1576111d160376111b98661061f8761115688156127b3565b9080600f61131392166010811015611217576f181899199a1a9b1b9c1cb0b131b232b360811b901a6112088486612771565b6112c2565b9081600052606560205260ff6113448260406000209060018060a01b0316600052602052604060002090565b54161561134f575050565b6111b96111d19261061f61137561136f60489560018060a01b03166127fe565b9261289b565b60405194859376020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b60208601526113af815180926020603789019101611021565b84017001034b99036b4b9b9b4b733903937b6329607d1b60378201520190611056565b6001600160a01b03811660009081527fffdfc1249c027f9191656349feb0761381bb32c9f557e01f419fd08754bf5a1b602052604081205460ff1615611416575050565b8080526065602090815260408083206001600160a01b038516600090815292529020805460ff1916600117905560405133926001600160a01b031691907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d908290a4565b60008181526065602090815260408083206001600160a01b038616845290915290205460ff166114a8575050565b60008181526065602090815260408083206001600160a01b03861684529091529020805460ff1916905560405133926001600160a01b031691907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b90600090a4565b9194909161151733611224565b6099546002141561152790611740565b600260995560cb546040516324fc4fbd60e01b8152600481018790526000976020958695899492938b9390919088908390602490829088906001600160a01b03165af161161e9261158791908115611733575b8691611716575b506117b1565b6116016115f06106588a6115ce886115ac61065861065860cb5460018060a01b031690565b9b8c6040518080958194632bbc239560e11b8352600483019190602083019252565b03915afa908115611709575b89916116ef575b5001516001600160a01b031690565b6001600160a01b038916141561195b565b604051633634804960e01b8152998a9788968795600487016119fe565b03925af19384156116e2575b9361168f575b505081816116728261166d7f6eae655a8f7fcd39b820047955e1888833ea462537c6637b5a42ae143916d9e6956000526097602052604060002090565b611ab9565b604080519182526020820192909252a161168c6001609955565b90565b7f6eae655a8f7fcd39b820047955e1888833ea462537c6637b5a42ae143916d9e692935090816116d392903d106116db575b6116cb81836108d4565b8101906119cc565b919038611630565b503d6116c1565b6116ea6117a4565b61162a565b61170391503d808b833e610ec381836108d4565b386115e1565b6117116117a4565b6115da565b61172d91508a3d8c11610f3357610f2581836108d4565b38611581565b61173b6117a4565b61157a565b1561174757565b60405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fd5b9081602091031261000e5751801515810361000e5790565b506040513d6000823e3d90fd5b156117b857565b60405162461bcd60e51b8152602060048201526038602482015260008051602061292b83398151915260448201527f5f6d616b654269643a20696e76616c6964206f726465722e00000000000000006064820152608490fd5b9080601f8301121561000e578151906001600160401b038211611878575b8160051b60405193602093611846858401876108d4565b8552838086019282010192831161000e578301905b828210611869575050505090565b8151815290830190830161185b565b61188061089d565b61182f565b5190611890826102a2565b565b5190600582101561000e57565b60208183031261000e5780516001600160401b039182821161000e5701906101408284031261000e576118d06108f5565b92825191821161000e576118e5918301611811565b82526118f360208201611885565b602083015261190460408201611892565b6040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e0830152610100611949818301611892565b90830152610120809101519082015290565b1561196257565b60405162461bcd60e51b8152602060048201526048602482015260008051602061292b83398151915260448201527f5f6d616b654269643a2073656c662d62696464696e67206973206e6f7420617660648201526730b4b630b136329760c11b608482015260a490fd5b9081602091031261000e575190565b9060058210156119e85752565b634e487b7160e01b600052602160045260246000fd5b92959493918061010080860190865252610120840191906000905b808210611a675750505090611a4960e0939296611a396020850160049052565b6001600160a01b03166040840152565b606082015260006080820152600060a0820152600060c08201520152565b9091928335611a75816102a2565b6001600160a01b03168152602084810135908201526040808501359082015260609081850135600381101561000e5760019282015260808091019401920190611a19565b8054611adc9168010000000000000000821015611af6575b6001820181556103eb565b819291549060031b600019811b9283911b16911916179055565b611afe61089d565b611ad1565b15611b0a57565b60405162461bcd60e51b8152602060048201526046602482015260008051602061292b83398151915260448201527f5f617070726f7665416e645265736f6c7665537761703a20696e76616c69642060648201526537b93232b91760d11b608482015260a490fd5b15611b7957565b60405162461bcd60e51b815260206004820152604f602482015260008051602061292b83398151915260448201527f5f617070726f7665416e645265736f6c7665537761703a206f776e657273686960648201526e381031b432b1b5903330b4b632b21760891b608482015260a490fd5b90815180825260208080930193019160005b828110611c0a575050505090565b835185529381019392810192600101611bfc565b908060209392818452848401376000828201840152601f01601f1916010190565b90939161168c9593608083528551611c65610140918260808701526101c0860190611bea565b60208801516001600160a01b031660a086015296611c8b604082015160c08701906119db565b606081015160e0860152611cd56080820151610100908188015260a083015193610120948589015260c08401519088015260e08301516101608801528201516101808701906119db565b01516101a08401526001600160a01b039182166020840152166040820152808403606090910152611c1e565b15611d0857565b60405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608490fd5b15611d6b57565b60405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608490fd5b15611dcc57565b60405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608490fd5b90600182811c92168015611e56575b6020831014611e4057565b634e487b7160e01b600052602260045260246000fd5b91607f1691611e35565b601f8111611e6c575050565b60009061013282527fc53bdfd4aa1ab65dfdaf681ca6bda958ae4a123d4ed68c4277796592280e7835906020601f850160051c83019410611ec8575b601f0160051c01915b828110611ebd57505050565b818155600101611eb1565b9092508290611ea8565b610131611edf8154611e26565b601f8111611f0e575b507f4e65617446692041737365742053776170204d6f64756c6500000000000000309055565b6000828152601f7fbd987ad6ccdb7c7567f7335ea839f95dc944431abcf935b6924f70215963db73920160051c8201915b828110611f4d575050611ee8565b818155600101611f3f565b60405190604082018281106001600160401b03821117611f8a575b60405260058252640312e302e360dc1b6020830152565b611f9261089d565b611f73565b9061205990610fff60009384549460ff90818760081c16968715809881612102575b611fc290611d01565b6120e4575b50805491808360081c169283158094816120da575b611fe590611d01565b6120bc575b50611ff3612178565b8154818160081c16916120108315938492836120b1575b50611d01565b612093575b5061201e612178565b612084575b5061206f575b6120316121bf565b6120396121bf565b6120416121bf565b6120496121bf565b61205161210c565b6103b061268f565b61205f57565b61189061ff001960005416600055565b61207f61ff001960005416600055565b612029565b805461ff001916905538612023565b61ff0019166101001782556000805460ff1916600117905538612015565b90508316153861200a565b61ff0019166101001782556000805460ff1916600117905538611fea565b5081831615611fdc565b61ff0019166101001781556000805460ff1916600117905538611fc7565b5081841615611fb9565b60005460ff8160081c1690811580928161216d575b61212a90611d01565b61215b575b50612138612178565b612140612178565b612148612178565b61214e57565b61ff001960005416600055565b61ffff1916610101176000553861212f565b5060ff821615612121565b60005460ff8160081c169081158092816121b4575b61219690611d01565b6121a2575b5061214e57565b61ffff1916610101176000553861219b565b5060ff82161561218d565b60005460ff8160081c169081158092816121fd575b6121dd90611d01565b6121eb575b50612148612178565b61ffff191661010117600055386121e2565b5060ff8216156121d4565b9081516001600160401b0381116122f6575b610132906122318161222c8454611e26565b611e60565b602080601f831160011461226d575081929394600092612262575b50508160011b916000199060031b1c1916179055565b01519050388061224c565b90601f198316956122a16101326000527fc53bdfd4aa1ab65dfdaf681ca6bda958ae4a123d4ed68c4277796592280e783590565b926000905b8882106122de575050836001959697106122c5575b505050811b019055565b015160001960f88460031b161c191690553880806122bb565b806001859682949686015181550195019301906122a6565b6122fe61089d565b61221a565b60405190608082018281106001600160401b0382111761232f575b604052604282526060366020840137565b61233761089d565b61231e565b1561234357565b60405162461bcd60e51b815260206004820152602f60248201527f45524331393637557067726164653a207570677261646520627265616b73206660448201526e75727468657220757067726164657360881b6064820152608490fd5b803b156123d55760008051602061294b83398151915280546001600160a01b0319166001600160a01b03909216919091179055565b60405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608490fd5b612439816123a0565b60018060a01b03167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b6000604051a2565b60405190606082018281106001600160401b038211176124c4575b60405260278252660819985a5b195960ca1b6040837f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c60208201520152565b6124cc61089d565b612485565b90813b156125285760008161168c9360208394519201905af43d15612521573d6124fa81610915565b9061250860405192836108d4565b81523d6000602083013e5b61251b61246a565b91612657565b6060612513565b60405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608490fd5b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116926125b430851415611d64565b6125d260008051602061294b83398151915292835416948514611dc5565b6125db836123a0565b80511580159061264f575b61263e575b506126086105bc60008051602061290b8339815191525460ff1690565b61261157505050565b6118909261066461065861066a936105f360008051602061290b833981519152600160ff19825416179055565b61264890836124d1565b50386125eb565b5060016125e6565b90919015612663575090565b8151156126735750805190602001fd5b60405162461bcd60e51b81529081906111d1906004830161106d565b600080549060ff8260081c1691821580938161273f575b6126af90611d01565b612721575b50805460ff8160081c16908115809281612716575b6126d290611d01565b6126f8575b5060016099556126e9575b5061205f57565b805461ff0019169055386126e2565b61ff0019166101001782556000805460ff19166001179055386126d7565b5060ff8216156126c9565b61ff0019166101001781556000805460ff19166001179055386126b4565b5060ff8216156126a6565b602090805115612758570190565b6110696103d4565b602190805160011015612758570190565b90602091805182101561278357010190565b61278b6103d4565b010190565b801561279d576000190190565b634e487b7160e01b600052601160045260246000fd5b156127ba57565b606460405162461bcd60e51b815260206004820152602060248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b60405190606082018281106001600160401b0382111761288e575b604052602a8252604036602084013760306128338361274a565b53607861283f83612760565b536029905b600182116128575761168c9150156127b3565b80600f61288892166010811015611217576f181899199a1a9b1b9c1cb0b131b232b360811b901a6112088486612771565b90612844565b61289661089d565b612819565b6128a3612303565b9060306128af8361274a565b5360786128bb83612760565b536041905b600182116128d35761168c9150156127b3565b80600f61290492166010811015611217576f181899199a1a9b1b9c1cb0b131b232b360811b901a6112088486612771565b906128c056fe4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91434173736574537761704f7065726174696f6e735570677261646561626c653a3a360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbca2646970667358221220e52698dc4eeca8a194944d0516c45f9e659d9471df3a7ac684d0492680ff1baa64736f6c634300080f0033";

type AssetSwapV1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetSwapV1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetSwapV1__factory extends ContractFactory {
  constructor(...args: AssetSwapV1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AssetSwapV1> {
    return super.deploy(overrides || {}) as Promise<AssetSwapV1>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AssetSwapV1 {
    return super.attach(address) as AssetSwapV1;
  }
  override connect(signer: Signer): AssetSwapV1__factory {
    return super.connect(signer) as AssetSwapV1__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetSwapV1Interface {
    return new utils.Interface(_abi) as AssetSwapV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetSwapV1 {
    return new Contract(address, _abi, signerOrProvider) as AssetSwapV1;
  }
}