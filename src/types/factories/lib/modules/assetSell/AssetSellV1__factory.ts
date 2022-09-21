/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  AssetSellV1,
  AssetSellV1Interface,
} from "../../../../lib/modules/assetSell/AssetSellV1";

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
        name: "orderHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "purchaseValue",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "buyItNow",
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
  "0x60a080604052346100315730608052612313908161003782396080518181816104570152818161063e0152611ed90152f35b600080fdfe60806040526004361015610013575b600080fd5b60003560e01c80630153432d1461015357806301ffc9a71461014a578063153d733414610141578063248a9ca3146101385780632f2ff15d1461012f57806334a0fbb11461012657806336568abe1461011d5780633659cfe614610114578063485cc9551461010b5780634f1ef286146101025780635994dcdb146100f957806391d14854146100f057806394658d7e146100e7578063a217fddf146100de578063d547741f146100d55763dd0e085f146100cd57600080fd5b61000e6109d9565b5061000e610994565b5061000e610977565b5061000e61093b565b5061000e6108e4565b5061000e61087c565b5061000e610800565b5061000e6105dd565b5061000e61042f565b5061000e610398565b5061000e61034a565b5061000e610277565b5061000e610236565b5061000e6101fa565b5061000e6101a3565b5061000e610167565b600091031261000e57565b503461000e57600036600319011261000e5760206040517fdb1507a7bd981676c03bdaae9e28ab8baadf8a4eee150a8b6a2dd2713db13a648152f35b503461000e57602036600319011261000e5760043563ffffffff60e01b811680910361000e57602090637965db0b60e01b81149081156101e9575b506040519015158152f35b6301ffc9a760e01b149050386101de565b503461000e57600036600319011261000e5760206040517fec67990198cb34a8467e86e518c87d52127fe5b916e0095d8047a8355e37f63e8152f35b503461000e57602036600319011261000e5760043560005260656020526020600160406000200154604051908152f35b6001600160a01b0381160361000e57565b503461000e5760408060031936011261000e576004359060243561029a81610266565b60009280845260656020526102b6600184862001543390610d1c565b808452606560209081528385206001600160a01b03841660009081529152604090205460ff16156102e657505051f35b808452606560209081528385206001600160a01b0384166000908152915260409020805460ff19166001179055825133926001600160a01b031691907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d908690a451f35b503461000e57602036600319011261000e5761039660043561036b81610266565b61037433610a9d565b60018060a01b03166bffffffffffffffffffffffff60a01b60ca54161760ca55565b005b503461000e57604036600319011261000e576024356103b681610266565b336001600160a01b038216036103d25761039690600435610e7e565b60405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608490fd5b503461000e57602036600319011261000e5760043561044d81610266565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169190610486308414156116c7565b6104a460008051602061229e83398151915291825416938414611728565b6104ad33610a9d565b604051602081018181106001600160401b038211176105d0575b604052600081526104d783611cf3565b8051158015906105c8575b6105b7575b5061050861050460008051602061227e8339815191525460ff1690565b1590565b61050e57005b610396926105ac6105a06105b29361053b60008051602061227e833981519152600160ff19825416179055565b604051631b2ce7f360e11b60208201526001600160a01b038516602482015261057b9061057581604481015b03601f198101835282610795565b87611e24565b5060008051602061227e833981519152805460ff19169055546001600160a01b031690565b6001600160a01b031690565b14611c8f565b611d83565b6105c19083611e24565b50386104e7565b5060006104e2565b6105d861075e565b6104c7565b503461000e57604036600319011261000e576004356105fb81610266565b60243561060781610266565b6106bf60009283549260ff8460081c16938415809581610753575b61062b90611664565b610735575b506106836001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169061066c308314156116c7565b60008051602061229e833981519152541614611728565b845460ff8160081c1690811580928161072a575b6106a090611664565b61070c575b506106ae611acb565b6106b6611acb565b6106fe576118fa565b6106c833610dd6565b6106d0611835565b6106e06106db6118bb565b611b5b565b6106e957604051f35b6106f961ff001960005416600055565b604051f35b845461ff00191685556118fa565b61ff0019166101001786556000805460ff19166001179055386106a5565b5060ff821615610697565b61ff0019166101001785556000805460ff1916600117905538610630565b5060ff821615610622565b50634e487b7160e01b600052604160045260246000fd5b6001600160401b03811161078857604052565b61079061075e565b604052565b90601f801991011681019081106001600160401b0382111761078857604052565b6040519061014082018281106001600160401b0382111761078857604052565b6020906001600160401b0381116107f3575b601f01601f19160190565b6107fb61075e565b6107e8565b50604036600319011261000e5760043561081981610266565b602435906001600160401b03821161000e573660238301121561000e57816004013590610845826107d6565b916108536040519384610795565b808352366024828601011161000e57602081600092602461039697018387013784010152611ecf565b503461000e57608036600319011261000e5760443561089a81610266565b606435906001600160401b039081831161000e573660238401121561000e57826004013591821161000e57366024838501011161000e576024610396930190602435600435610f0e565b503461000e57604036600319011261000e57602060ff61092f60243561090981610266565b6004356000526065845260406000209060018060a01b0316600052602052604060002090565b54166040519015158152f35b503461000e57600036600319011261000e5760206040517f0245b6cbab6b03e029f6c88bff9595f9f5c30170f52598c3459ee71476ad59c18152f35b503461000e57600036600319011261000e57602060405160008152f35b503461000e57604036600319011261000e576103966024356004356109b882610266565b8060005260656020526109d46001604060002001543390610d1c565b610e7e565b503461000e57602036600319011261000e576103966004356109fa81610266565b610a0333610a9d565b60018060a01b03166bffffffffffffffffffffffff60a01b60c954161760c955565b918091926000905b828210610a45575011610a3e575050565b6000910152565b91508060209183015181860152018291610a2d565b90610a6d60209282815194859201610a25565b0190565b60409160208252610a918151809281602086015260208686019101610a25565b601f01601f1916010190565b6001600160a01b03811660009081527fedeb221ad30506a87ccb533a9d2f162a9dfb17aa4a3909cfc7cfee05fb4297fc60205260409020547f0245b6cbab6b03e029f6c88bff9595f9f5c30170f52598c3459ee71476ad59c1919060ff1615610b04575050565b610b16906001600160a01b0316612171565b90610b1f611c56565b906030610b2b836120bd565b536078610b37836120d3565b5360415b60018111610bd957610bd56037610bbd8661056787610b5a8815612126565b610bb760405195869476020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b6020870152610b96815180926020858a019101610a25565b8501016011907001034b99036b4b9b9b4b733903937b6329607d1b81520190565b90610a5a565b60405162461bcd60e51b815291829160048301610a71565b0390fd5b9080600f610c1692166010811015610c1b575b6f181899199a1a9b1b9c1cb0b131b232b360811b901a610c0c84866120e4565b5360041c91612103565b610b3b565b610c236120a6565b610bec565b6001600160a01b03811660009081527faf674092dd2765cd554a2f244a399d55a2ca26739b09284bfb0c8b87da87df8560205260409020547fec67990198cb34a8467e86e518c87d52127fe5b916e0095d8047a8355e37f63e919060ff1615610c8f575050565b610ca1906001600160a01b0316612171565b90610caa611c56565b906030610cb6836120bd565b536078610cc2836120d3565b5360415b60018111610ce557610bd56037610bbd8661056787610b5a8815612126565b9080600f610d1792166010811015610c1b576f181899199a1a9b1b9c1cb0b131b232b360811b901a610c0c84866120e4565b610cc6565b9081600052606560205260ff610d488260406000209060018060a01b0316600052602052604060002090565b541615610d53575050565b610bbd610bd592610567610d79610d7360489560018060a01b0316612171565b9261220e565b60405194859376020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b6020860152610db3815180926020603789019101610a25565b84017001034b99036b4b9b9b4b733903937b6329607d1b60378201520190610a5a565b6001600160a01b03811660009081527fffdfc1249c027f9191656349feb0761381bb32c9f557e01f419fd08754bf5a1b602052604081205460ff1615610e1a575050565b8080526065602090815260408083206001600160a01b038516600090815292529020805460ff1916600117905560405133926001600160a01b031691907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d908290a4565b60008181526065602090815260408083206001600160a01b038616845290915290205460ff16610eac575050565b60008181526065602090815260408083206001600160a01b03861684529091529020805460ff1916905560405133926001600160a01b031691907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b90600090a4565b929390610f1a33610c28565b6002609754146111c757600260975560c954610f40906105a0906001600160a01b031681565b60408051639b63ec0560e01b8152600481018790523360248201529095602094929091610fc39190610f8b908781604481865afa9081156111ba575b60009161119d575b5015611231565b87516324fc4fbd60e01b815260048101849052908690829060249082906000905af1908115611190575b600091611163575b506112a6565b60c954610fda906105a0906001600160a01b031681565b8651632bbc239560e11b81526004810183905293600085602481855afa948515611156575b60009561112f575b506110369061102b8987015161101c8161144e565b6110258161144e565b1561146e565b60c0860151146114ce565b803b1561000e5786516313c1a68760e11b815260048082019390935260248101929092526000908290604490829084905af18015611122575b61110f575b5060ca546110a090611090906105a0906001600160a01b031681565b938301516001600160a01b031690565b91833b1561000e576110cc60009692879351988997889687956301d4c62160e61b87526004870161158f565b03925af18015611102575b6110e9575b506110e76001609755565b565b806110f66110fc92610775565b8061015c565b386110dc565b61110a611224565b6110d7565b806110f661111c92610775565b38611074565b61112a611224565b61106f565b61114f9061103692963d8091833e6111478183610795565b810190611392565b9490611007565b61115e611224565b610fff565b6111839150863d8811611189575b61117b8183610795565b81019061120c565b38610fbd565b503d611171565b611198611224565b610fb5565b6111b49150883d8a116111895761117b8183610795565b38610f84565b6111c2611224565b610f7c565b60405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fd5b9081602091031261000e5751801515810361000e5790565b506040513d6000823e3d90fd5b1561123857565b60405162461bcd60e51b815260206004820152604c60248201526000805160206122be83398151915260448201527f5f62757949744e6f773a2062757965722063616e206e6f74206265207468652060648201526b37b93232b91036b0b5b2b91760a11b608482015260a490fd5b156112ad57565b60405162461bcd60e51b815260206004820152603960248201526000805160206122be83398151915260448201527f5f62757949744e6f773a20696e76616c6964206f726465722e000000000000006064820152608490fd5b9080601f8301121561000e578151906001600160401b03821161136d575b8160051b6040519360209361133b85840187610795565b8552838086019282010192831161000e578301905b82821061135e575050505090565b81518152908301908301611350565b61137561075e565b611324565b51906110e782610266565b5190600582101561000e57565b60208183031261000e5780516001600160401b039182821161000e5701906101408284031261000e576113c36107b6565b92825191821161000e576113d8918301611306565b82526113e66020820161137a565b60208301526113f760408201611385565b6040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e083015261010061143c818301611385565b90830152610120809101519082015290565b6005111561145857565b634e487b7160e01b600052602160045260246000fd5b1561147557565b60405162461bcd60e51b815260206004820152603c60248201526000805160206122be83398151915260448201527f5f62757949744e6f773a2077726f6e67206f7264657220747970652e000000006064820152608490fd5b156114d557565b608460405162461bcd60e51b815260206004820152604060248201526000805160206122be83398151915260448201527f5f62757949744e6f773a2077726f6e672070757263686173652076616c75652e6064820152fd5b906115378261144e565b52565b90815180825260208080930193019160005b82811061155a575050505090565b83518552938101939281019260010161154c565b908060209392818452848401376000828201840152601f01601f1916010190565b9093916116619593611644611654926080855287516115bc610140918260808901526101c088019061153a565b60208a01516001600160a01b031660a0880152986115e2604082015160c089019061152d565b606081015160e088015261162c608082015161010090818a015260a08301519361012094858b015260c0840151908a015260e08301516101608a015282015161018089019061152d565b01516101a08601526001600160a01b03166020850152565b6001600160a01b03166040830152565b606081850391015261156e565b90565b1561166b57565b60405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608490fd5b156116ce57565b60405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608490fd5b1561172f57565b60405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608490fd5b90600182811c921680156117b9575b60208310146117a357565b634e487b7160e01b600052602260045260246000fd5b91607f1691611798565b601f81116117cf575050565b60009061013082527f2f605e086faac1d93117bbfbc18835d434e9405fadc1ca66faf4b864746daf34906020601f850160051c8301941061182b575b601f0160051c01915b82811061182057505050565b818155600101611814565b909250829061180b565b61012f6118428154611789565b601f8111611871575b507f4e65617446692041737365742053656c6c204d6f64756c6500000000000000309055565b6000828152601f7f232da9e50dad2971456a78fb5cd6ff6b75019984d6e918139ce990999420f979920160051c8201915b8281106118b057505061184b565b8181556001016118a2565b60405190604082018281106001600160401b038211176118ed575b60405260058252640312e302e360dc1b6020830152565b6118f561075e565b6118d6565b906119ac90610a0360009384549460ff90818760081c16968715809881611a55575b61192590611664565b611a37575b50805491808360081c16928315809481611a2d575b61194890611664565b611a0f575b50611956611acb565b8154818160081c1691611973831593849283611a04575b50611664565b6119e6575b50611981611acb565b6119d7575b506119c2575b611994611b12565b61199c611b12565b6119a4611a5f565b610374611feb565b6119b257565b6110e761ff001960005416600055565b6119d261ff001960005416600055565b61198c565b805461ff001916905538611986565b61ff0019166101001782556000805460ff1916600117905538611978565b90508316153861196d565b61ff0019166101001782556000805460ff191660011790553861194d565b508183161561193f565b61ff0019166101001781556000805460ff191660011790553861192a565b508184161561191c565b60005460ff8160081c16908115809281611ac0575b611a7d90611664565b611aae575b50611a8b611acb565b611a93611acb565b611a9b611acb565b611aa157565b61ff001960005416600055565b61ffff19166101011760005538611a82565b5060ff821615611a74565b60005460ff8160081c16908115809281611b07575b611ae990611664565b611af5575b50611aa157565b61ffff19166101011760005538611aee565b5060ff821615611ae0565b60005460ff8160081c16908115809281611b50575b611b3090611664565b611b3e575b50611a9b611acb565b61ffff19166101011760005538611b35565b5060ff821615611b27565b9081516001600160401b038111611c49575b61013090611b8481611b7f8454611789565b6117c3565b602080601f8311600114611bc0575081929394600092611bb5575b50508160011b916000199060031b1c1916179055565b015190503880611b9f565b90601f19831695611bf46101306000527f2f605e086faac1d93117bbfbc18835d434e9405fadc1ca66faf4b864746daf3490565b926000905b888210611c3157505083600195969710611c18575b505050811b019055565b015160001960f88460031b161c19169055388080611c0e565b80600185968294968601518155019501930190611bf9565b611c5161075e565b611b6d565b60405190608082018281106001600160401b03821117611c82575b604052604282526060366020840137565b611c8a61075e565b611c71565b15611c9657565b60405162461bcd60e51b815260206004820152602f60248201527f45524331393637557067726164653a207570677261646520627265616b73206660448201526e75727468657220757067726164657360881b6064820152608490fd5b803b15611d285760008051602061229e83398151915280546001600160a01b0319166001600160a01b03909216919091179055565b60405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608490fd5b611d8c81611cf3565b60018060a01b03167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b6000604051a2565b60405190606082018281106001600160401b03821117611e17575b60405260278252660819985a5b195960ca1b6040837f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c60208201520152565b611e1f61075e565b611dd8565b90813b15611e7b576000816116619360208394519201905af43d15611e74573d611e4d816107d6565b90611e5b6040519283610795565b81523d6000602083013e5b611e6e611dbd565b91611fb3565b6060611e66565b60405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608490fd5b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811692611f07308514156116c7565b611f2560008051602061229e83398151915292835416948514611728565b611f2e33610a9d565b611f3783611cf3565b805115801590611fab575b611f9a575b50611f6461050460008051602061227e8339815191525460ff1690565b611f6d57505050565b6110e7926105ac6105a06105b29361053b60008051602061227e833981519152600160ff19825416179055565b611fa49083611e24565b5038611f47565b506001611f42565b90919015611fbf575090565b815115611fcf5750805190602001fd5b60405162461bcd60e51b8152908190610bd59060048301610a71565b600080549060ff8260081c1691821580938161209b575b61200b90611664565b61207d575b50805460ff8160081c16908115809281612072575b61202e90611664565b612054575b506001609755612045575b506119b257565b805461ff00191690553861203e565b61ff0019166101001782556000805460ff1916600117905538612033565b5060ff821615612025565b61ff0019166101001781556000805460ff1916600117905538612010565b5060ff821615612002565b50634e487b7160e01b600052603260045260246000fd5b6020908051156120cb570190565b610a6d6120a6565b6021908051600110156120cb570190565b9060209180518210156120f657010190565b6120fe6120a6565b010190565b8015612110576000190190565b634e487b7160e01b600052601160045260246000fd5b1561212d57565b606460405162461bcd60e51b815260206004820152602060248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b60405190606082018281106001600160401b03821117612201575b604052602a8252604036602084013760306121a6836120bd565b5360786121b2836120d3565b536029905b600182116121ca57611661915015612126565b80600f6121fb92166010811015610c1b576f181899199a1a9b1b9c1cb0b131b232b360811b901a610c0c84866120e4565b906121b7565b61220961075e565b61218c565b612216611c56565b906030612222836120bd565b53607861222e836120d3565b536041905b6001821161224657611661915015612126565b80600f61227792166010811015610c1b576f181899199a1a9b1b9c1cb0b131b232b360811b901a610c0c84866120e4565b9061223356fe4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc417373657453656c6c4f7065726174696f6e735570677261646561626c653a3aa2646970667358221220b3f8a4a01b22c243bd7782b6575b50153f9f7a2db6f741a2231dd6d37ebc2cb464736f6c634300080f0033";

type AssetSellV1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetSellV1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetSellV1__factory extends ContractFactory {
  constructor(...args: AssetSellV1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AssetSellV1> {
    return super.deploy(overrides || {}) as Promise<AssetSellV1>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AssetSellV1 {
    return super.attach(address) as AssetSellV1;
  }
  override connect(signer: Signer): AssetSellV1__factory {
    return super.connect(signer) as AssetSellV1__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetSellV1Interface {
    return new utils.Interface(_abi) as AssetSellV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetSellV1 {
    return new Contract(address, _abi, signerOrProvider) as AssetSellV1;
  }
}
