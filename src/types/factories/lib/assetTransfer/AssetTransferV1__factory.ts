/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  AssetTransferV1,
  AssetTransferV1Interface,
} from "../../../lib/assetTransfer/AssetTransferV1";

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
        internalType: "struct AssetStructsUpgradeable.Order",
        name: "order",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "transferResolver",
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
  "0x60a08060405234610031573060805261201790816100378239608051818181610413015281816109760152611cd70152f35b600080fdfe60806040526004361015610013575b600080fd5b60003560e01c80630153432d1461013f57806301ffc9a714610136578063153d73341461012d578063248a9ca3146101245780632f2ff15d1461011b57806336568abe146101125780633659cfe6146101095780634f1ef2861461010057806375318840146100f757806391d14854146100ee57806394658d7e146100e5578063a217fddf146100dc578063c4d66de8146100d3578063d547741f146100ca5763dd0e085f146100c257600080fd5b61000e610adb565b5061000e610a96565b5061000e610921565b5061000e610904565b5061000e6108c8565b5061000e610871565b5061000e610770565b5061000e61063b565b5061000e6103eb565b5061000e610352565b5061000e61027f565b5061000e610222565b5061000e6101e6565b5061000e61018f565b5061000e610153565b600091031261000e57565b503461000e57600036600319011261000e5760206040517fdb1507a7bd981676c03bdaae9e28ab8baadf8a4eee150a8b6a2dd2713db13a648152f35b503461000e57602036600319011261000e5760043563ffffffff60e01b811680910361000e57602090637965db0b60e01b81149081156101d5575b506040519015158152f35b6301ffc9a760e01b149050386101ca565b503461000e57600036600319011261000e5760206040517fec67990198cb34a8467e86e518c87d52127fe5b916e0095d8047a8355e37f63e8152f35b503461000e57602036600319011261000e5760043560005260656020526020600160406000200154604051908152f35b6001600160a01b0381160361000e57565b6024359061027082610252565b565b6044359061027082610252565b503461000e5760408060031936011261000e57600435906024356102a281610252565b60009280845260656020526102be600184862001543390610d2a565b808452606560209081528385206001600160a01b03841660009081529152604090205460ff16156102ee57505051f35b808452606560209081528385206001600160a01b0384166000908152915260409020805460ff19166001179055825133926001600160a01b031691907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d908690a451f35b503461000e57604036600319011261000e5760243561037081610252565b336001600160a01b0382160361038e5761038c90600435610e8c565b005b60405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608490fd5b503461000e57602036600319011261000e5760043561040981610252565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169190610442308414156114d1565b610460600080516020611fc283398151915291825416938414611532565b61046933610b9f565b604051602081018181106001600160401b0382111761058c575b6040526000815261049383611af1565b805115801590610584575b610573575b506104c46104c0600080516020611fa28339815191525460ff1690565b1590565b6104ca57005b61038c9261056861055c61056e936104f7600080516020611fa2833981519152600160ff19825416179055565b604051631b2ce7f360e11b60208201526001600160a01b03851660248201526105379061053181604481015b03601f1981018352826105d0565b87611c22565b50600080516020611fa2833981519152805460ff19169055546001600160a01b031690565b6001600160a01b031690565b14611a8d565b611b81565b61057d9083611c22565b50386104a3565b50600061049e565b610594610599565b610483565b50634e487b7160e01b600052604160045260246000fd5b6001600160401b0381116105c357604052565b6105cb610599565b604052565b90601f801991011681019081106001600160401b038211176105c357604052565b6040519061014082018281106001600160401b038211176105c357604052565b6020906001600160401b03811161062e575b601f01601f19160190565b610636610599565b610623565b50604036600319011261000e5760043561065481610252565b602435906001600160401b03821161000e573660238301121561000e5781600401359061068082610611565b9161068e60405193846105d0565b808352366024828601011161000e57602081600092602461038c97018387013784010152611ccd565b9080601f8301121561000e578135906001600160401b03821161071e575b8160051b604051936020936106ec858401876105d0565b8552838086019282010192831161000e578301905b82821061070f575050505090565b81358152908301908301610701565b610726610599565b6106d5565b359061027082610252565b3590600582101561000e57565b9181601f8401121561000e578235916001600160401b03831161000e576020838186019501011161000e57565b503461000e5760031960803682011261000e576004356001600160401b039182821161000e5761014090823603011261000e576107ab6105f1565b9080600401359083821161000e576107cc61012492600436918401016106b7565b83526107da6024820161072b565b60208401526107eb60448201610736565b6040840152606481013560608401526084810135608084015260a481013560a084015260c481013560c084015260e481013560e084015261082f6101048201610736565b6101008401520135610120820152610845610263565b9061084e610272565b60643593841161000e5761086961038c943690600401610743565b939092610f1c565b503461000e57604036600319011261000e57602060ff6108bc60243561089681610252565b6004356000526065845260406000209060018060a01b0316600052602052604060002090565b54166040519015158152f35b503461000e57600036600319011261000e5760206040517f0245b6cbab6b03e029f6c88bff9595f9f5c30170f52598c3459ee71476ad59c18152f35b503461000e57600036600319011261000e57602060405160008152f35b503461000e57602036600319011261000e5760043561093f81610252565b6000906109f782549160ff8360081c16928315809481610a8b575b6109639061146e565b610a6d575b506109bb6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116906109a4308314156114d1565b600080516020611fc2833981519152541614611532565b835460ff8160081c16908115809281610a62575b6109d89061146e565b610a44575b506109e66118c5565b6109ee6118c5565b610a3657611703565b610a0033610de4565b610a0861163e565b610a18610a136116c4565b611955565b610a2157604051f35b610a3161ff001960005416600055565b604051f35b835461ff0019168455611703565b61ff0019166101001785556000805460ff19166001179055386109dd565b5060ff8216156109cf565b61ff0019166101001784556000805460ff1916600117905538610968565b5060ff82161561095a565b503461000e57604036600319011261000e5761038c602435600435610aba82610252565b806000526065602052610ad66001604060002001543390610d2a565b610e8c565b503461000e57602036600319011261000e5761038c600435610afc81610252565b610b0533610b9f565b60018060a01b03166bffffffffffffffffffffffff60a01b6097541617609755565b918091926000905b828210610b47575011610b40575050565b6000910152565b91508060209183015181860152018291610b2f565b90610b6f60209282815194859201610b27565b0190565b60409160208252610b938151809281602086015260208686019101610b27565b601f01601f1916010190565b6001600160a01b03811660009081527fedeb221ad30506a87ccb533a9d2f162a9dfb17aa4a3909cfc7cfee05fb4297fc60205260409020547f0245b6cbab6b03e029f6c88bff9595f9f5c30170f52598c3459ee71476ad59c1919060ff1615610c06575050565b610c18906001600160a01b0316611e95565b90610c21611a54565b906030610c2d83611de9565b536078610c3983611dff565b5360415b60018111610cdb57610cd76037610cbf8661052387610c5c8815611e4a565b610cb960405195869476020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b6020870152610c98815180926020858a019101610b27565b8501016011907001034b99036b4b9b9b4b733903937b6329607d1b81520190565b90610b5c565b60405162461bcd60e51b815291829160048301610b73565b0390fd5b9080600f610d1892166010811015610d1d575b6f181899199a1a9b1b9c1cb0b131b232b360811b901a610d0e8486611e10565b5360041c91611e2f565b610c3d565b610d2561103d565b610cee565b9081600052606560205260ff610d568260406000209060018060a01b0316600052602052604060002090565b541615610d61575050565b610cbf610cd792610523610d87610d8160489560018060a01b0316611e95565b92611f32565b60405194859376020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b6020860152610dc1815180926020603789019101610b27565b84017001034b99036b4b9b9b4b733903937b6329607d1b60378201520190610b5c565b6001600160a01b03811660009081527fffdfc1249c027f9191656349feb0761381bb32c9f557e01f419fd08754bf5a1b602052604081205460ff1615610e28575050565b8080526065602090815260408083206001600160a01b038516600090815292529020805460ff1916600117905560405133926001600160a01b031691907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d908290a4565b60008181526065602090815260408083206001600160a01b038616845290915290205460ff16610eba575050565b60008181526065602090815260408083206001600160a01b03861684529091529020805460ff1916905560405133926001600160a01b031691907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b90600090a4565b3360009081527faf674092dd2765cd554a2f244a399d55a2ca26739b09284bfb0c8b87da87df8560205260409020547fec67990198cb34a8467e86e518c87d52127fe5b916e0095d8047a8355e37f63e9695949392919060ff1615610f8957610f869596506111af565b50565b86610f9333611e95565b90610f9c611a54565b906030610fa883611de9565b536078610fb483611dff565b5360415b60018111610fd757610cd76037610cbf8661052387610c5c8815611e4a565b9080600f61100992166010811015610d1d576f181899199a1a9b1b9c1cb0b131b232b360811b901a610d0e8486611e10565b610fb8565b50634e487b7160e01b600052601160045260246000fd5b6001906000198114611035570190565b610b6f61100e565b50634e487b7160e01b600052603260045260246000fd5b6020918151811015611069575b60051b010190565b61107161103d565b611061565b9081608091031261000e57606060405191608083018381106001600160401b038211176110d5575b60405280516110ac81610252565b835260208101516020840152604081015160408401520151600381101561000e57606082015290565b6110dd610599565b61109e565b506040513d6000823e3d90fd5b600311156110f957565b634e487b7160e01b600052602160045260246000fd5b9081602091031261000e5751801515810361000e5790565b908060209392818452848401376000828201840152601f01601f1916010190565b919261117b96949160a094600180871b038092168552166020840152604083015260608201528160808201520191611127565b90565b6001600160a01b03918216815291166020820152604081019190915260806060820181905261117b93910191611127565b909392936000809485965b8451948551891015611462576097546111e9908a906111e39061055c906001600160a01b031681565b97611054565b51936040998a518098630aadfa7160e11b82526080998a91818061121660049c8d83019190602083019252565b03915afa988915611455575b8b99611426575b505060608801805161123a816110ef565b611243816110ef565b6112d0575050865160209250611264915061055c906001600160a01b031681565b95015197853b156112cc57916112909188949351998a9889978896635c46a7ef60e11b8852870161117e565b03925af180156112bf575b6112a6575b50600190565b806112b36112b9926105b0565b80610148565b386112a0565b6112c76110e2565b61129b565b8780fd5b6002819c999c516112e0816110ef565b6112e9816110ef565b036113405750508951611308925061055c91506001600160a01b031681565b948060208a015199015190863b1561133c57918894939161129093519a8b998a988997637921219560e11b89528801611148565b8880fd5b6001909b919496939b98929851611356816110ef565b61135f816110ef565b146113785750505061137090611025565b9693916111ba565b945094969250945050856113dd9697508361139f61055c61055c865160018060a01b031690565b93015193518097819582946323b872dd60e01b84526020998a99850160409194939294606082019560018060a01b0380921683521660208201520152565b03925af1928315611419575b926113f357505090565b61117b9250803d10611412575b61140a81836105d0565b81019061110f565b503d611400565b6114216110e2565b6113e9565b611446929950803d1061144e575b61143e81836105d0565b810190611076565b963880611229565b503d611434565b61145d6110e2565b611222565b50505095945050505050565b1561147557565b60405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608490fd5b156114d857565b60405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608490fd5b1561153957565b60405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608490fd5b90600182811c921680156115c3575b60208310146115ad57565b634e487b7160e01b600052602260045260246000fd5b91607f16916115a2565b601f81116115d9575050565b60009060fd82527f9346ac6dd7de6b96975fec380d4d994c4c12e6a8897544f22915316cc6cca280906020601f850160051c83019410611634575b601f0160051c01915b82811061162957505050565b81815560010161161d565b9092508290611614565b61164960fc54611593565b601f8111611679575b507f4e6561744669204173736574205472616e73666572205265736f6c766572003c60fc55565b600060fc8152601f7f371f36870d18f32a11fea0f144b021c8b407bb50f8e0267c711123f454b963c0920160051c8201915b8281106116b9575050611652565b8181556001016116ab565b60405190604082018281106001600160401b038211176116f6575b60405260058252640312e302e360dc1b6020830152565b6116fe610599565b6116df565b61179f60009182549260ff90818560081c1694851580968161184f575b6117299061146e565b611831575b508054828160081c16908115809281611827575b61174b9061146e565b611809575b50611759611a4c565b6117f4575b8054828160081c169261177b8415948592836117e9575b5061146e565b6117ca575b505061178a6118c5565b6117b5575b61179761190c565b610b05611859565b6117a557565b61027061ff001960005416600055565b6117c561ff001960005416600055565b61178f565b61ff0019166101001790556000805460ff191660011790553880611780565b905083161538611775565b61180461ff001960005416600055565b61175e565b61ff0019166101001782556000805460ff1916600117905538611750565b5081851615611742565b61ff0019166101001781556000805460ff191660011790553861172e565b5081841615611720565b60005460ff8160081c169081158092816118ba575b6118779061146e565b6118a8575b506118856118c5565b61188d6118c5565b6118956118c5565b61189b57565b61ff001960005416600055565b61ffff1916610101176000553861187c565b5060ff82161561186e565b60005460ff8160081c16908115809281611901575b6118e39061146e565b6118ef575b5061189b57565b61ffff191661010117600055386118e8565b5060ff8216156118da565b60005460ff8160081c1690811580928161194a575b61192a9061146e565b611938575b506118956118c5565b61ffff1916610101176000553861192f565b5060ff821615611921565b9081516001600160401b038111611a3f575b61197b8161197660fd54611593565b6115cd565b602080601f83116001146119b757508192936000926119ac575b50508160011b916000199060031b1c19161760fd55565b015190503880611995565b90601f198316946119ea60fd6000527f9346ac6dd7de6b96975fec380d4d994c4c12e6a8897544f22915316cc6cca28090565b926000905b878210611a27575050836001959610611a0e575b505050811b0160fd55565b015160001960f88460031b161c19169055388080611a03565b806001859682949686015181550195019301906119ef565b611a47610599565b611967565b61190c6118c5565b60405190608082018281106001600160401b03821117611a80575b604052604282526060366020840137565b611a88610599565b611a6f565b15611a9457565b60405162461bcd60e51b815260206004820152602f60248201527f45524331393637557067726164653a207570677261646520627265616b73206660448201526e75727468657220757067726164657360881b6064820152608490fd5b803b15611b2657600080516020611fc283398151915280546001600160a01b0319166001600160a01b03909216919091179055565b60405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608490fd5b611b8a81611af1565b60018060a01b03167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b6000604051a2565b60405190606082018281106001600160401b03821117611c15575b60405260278252660819985a5b195960ca1b6040837f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c60208201520152565b611c1d610599565b611bd6565b90813b15611c795760008161117b9360208394519201905af43d15611c72573d611c4b81610611565b90611c5960405192836105d0565b81523d6000602083013e5b611c6c611bbb565b91611db1565b6060611c64565b60405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608490fd5b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811692611d05308514156114d1565b611d23600080516020611fc283398151915292835416948514611532565b611d2c33610b9f565b611d3583611af1565b805115801590611da9575b611d98575b50611d626104c0600080516020611fa28339815191525460ff1690565b611d6b57505050565b6102709261056861055c61056e936104f7600080516020611fa2833981519152600160ff19825416179055565b611da29083611c22565b5038611d45565b506001611d40565b90919015611dbd575090565b815115611dcd5750805190602001fd5b60405162461bcd60e51b8152908190610cd79060048301610b73565b602090805115611df7570190565b610b6f61103d565b602190805160011015611df7570190565b906020918051821015611e2257010190565b611e2a61103d565b010190565b8015611e3d575b6000190190565b611e4561100e565b611e36565b15611e5157565b606460405162461bcd60e51b815260206004820152602060248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b60405190606082018281106001600160401b03821117611f25575b604052602a825260403660208401376030611eca83611de9565b536078611ed683611dff565b536029905b60018211611eee5761117b915015611e4a565b80600f611f1f92166010811015610d1d576f181899199a1a9b1b9c1cb0b131b232b360811b901a610d0e8486611e10565b90611edb565b611f2d610599565b611eb0565b611f3a611a54565b906030611f4683611de9565b536078611f5283611dff565b536041905b60018211611f6a5761117b915015611e4a565b80600f611f9b92166010811015610d1d576f181899199a1a9b1b9c1cb0b131b232b360811b901a610d0e8486611e10565b90611f5756fe4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbca2646970667358221220263d4cccbf2ee180ad436f433b2d511e73f101c9ce00f3acd7d50db78bee1a3864736f6c634300080f0033";

type AssetTransferV1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetTransferV1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetTransferV1__factory extends ContractFactory {
  constructor(...args: AssetTransferV1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AssetTransferV1> {
    return super.deploy(overrides || {}) as Promise<AssetTransferV1>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AssetTransferV1 {
    return super.attach(address) as AssetTransferV1;
  }
  override connect(signer: Signer): AssetTransferV1__factory {
    return super.connect(signer) as AssetTransferV1__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetTransferV1Interface {
    return new utils.Interface(_abi) as AssetTransferV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetTransferV1 {
    return new Contract(address, _abi, signerOrProvider) as AssetTransferV1;
  }
}
