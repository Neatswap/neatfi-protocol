/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  NeatSwapImplementationV1,
  NeatSwapImplementationV1Interface,
} from "../../NeatswapImplementationV1.sol/NeatSwapImplementationV1";

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
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EtherReceived",
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
    ],
    name: "MakeOrder",
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
    inputs: [
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
        name: "orderHash",
        type: "bytes32",
      },
    ],
    name: "approveLastBid",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "bidValue",
        type: "uint256",
      },
    ],
    name: "bidForDutchAuction",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "bidValue",
        type: "uint256",
      },
    ],
    name: "bidForEnglishAuction",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "buyItNow",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
    ],
    name: "cancelOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "claimDutchAuction",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "claimEnglishAuction",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "currentVersion",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
        name: "newPrice",
        type: "uint256",
      },
    ],
    name: "decreaseDucthAuctionPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
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
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "newPrice",
        type: "uint256",
      },
    ],
    name: "increaseEnglishAuctionPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_neatFiProtocolAddress",
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
        internalType: "enum AssetEnumsUpgradeable.AssetOrderType",
        name: "orderType",
        type: "uint8",
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
        internalType: "bytes32",
        name: "actorKey",
        type: "bytes32",
      },
    ],
    name: "makeOrder",
    outputs: [
      {
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "neatFiProtocolAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
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
    inputs: [],
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
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a080604052346100315730608052612649908161003782396080518181816109eb015281816112dd01526121230152f35b600080fdfe60806040526004361015610023575b361561001957600080fd5b61002161161c565b005b60003560e01c806301ffc9a71461025357806306fdde031461024a5780630bd2470714610241578063248a9ca3146102385780632cb752d61461022f5780632eaecfb7146102265780632f2ff15d1461021d57806332e6db691461021457806336568abe1461020b5780633659cfe6146102025780634271addc146101f95780634f1ef286146101f057806358da7ce5146101e75780635ab03ce6146101de578063660fe90d146101d5578063663c5441146101cc5780637489ec23146101c35780638e92c22f146101ba57806391d14854146101b15780639d888e86146101a8578063a217fddf1461019f578063ae71a07e14610196578063c4d66de81461018d578063d547741f14610184578063d56721861461017b578063d6fdcd4014610172578063f043314a146101695763f700260c0361000e576101646115a8565b61000e565b50610164611532565b50610164611483565b50610164611458565b50610164611413565b5061016461128a565b506101646111af565b50610164611192565b506101646110e7565b50610164611090565b5061016461101c565b50610164610fa2565b50610164610f2e565b50610164610e0e565b50610164610d74565b50610164610d18565b50610164610c9c565b50610164610b67565b506101646109c3565b5061016461092c565b506101646108a0565b506101646107cd565b50610164610725565b50610164610615565b506101646105e5565b50610164610499565b506101646103ad565b50346102aa5760203660031901126102aa5760043563ffffffff60e01b81168091036102aa57602090637965db0b60e01b8114908115610299575b506040519015158152f35b6301ffc9a760e01b1490503861028e565b600080fd5b60009103126102aa57565b90600182811c921680156102ea575b60208310146102d457565b634e487b7160e01b600052602260045260246000fd5b91607f16916102c9565b50634e487b7160e01b600052604160045260246000fd5b6001600160401b03811161031e57604052565b6103266102f4565b604052565b90601f801991011681019081106001600160401b0382111761031e57604052565b918091926000905b82821061036c575011610365575050565b6000910152565b91508060209183015181860152018291610354565b604091602082526103a1815180928160208601526020868601910161034c565b601f01601f1916010190565b50346102aa5760008060031936011261049657604051908061012e908154906103d5826102ba565b80865292600192808416908115610469575060011461040f575b61040b866103ff8188038261032b565b60405191829182610381565b0390f35b815292507fbdaadd9f750d0166045bf387a364eadd28ba243e04512a47282aa5147a68e37f5b8284106104515750505081016020016103ff8261040b386103ef565b80546020858701810191909152909301928101610435565b905086955061040b969350602092506103ff94915060ff191682840152151560051b8201019293386103ef565b80fd5b50346102aa576000806003193601126104965780805260c960209081526040808320336000908152925290205460ff161561053c5761012d5481906001600160a01b0316803b1561053957819060246040518094819363472009d960e11b83523060048401525af1801561052c575b610513575b50604051f35b806105206105269261030b565b806102af565b3861050d565b61053461164d565b610508565b50fd5b6105e160486105c961054d336123cd565b6105bb610558612482565b6040519485937f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000602086015261059881518092602060378901910161034c565b84017001034b99036b4b9b9b4b733903937b6329607d1b60378201520190611c89565b03601f19810183528261032b565b60405162461bcd60e51b815291829160048301610381565b0390fd5b50346102aa5760203660031901126102aa5760043560005260c96020526020600160406000200154604051908152f35b50346102aa576000604036600319011261049657610638600260fb54141561165a565b600260fb5561012d546001600160a01b0316803b156106c157604051630d342e7560e21b815233600480830191909152356024808301919091523560448201529082908290818381606481015b03925af180156106b4575b6106a5575b506106a0600160fb55565b604051f35b6106ae9061030b565b38610695565b6106bc61164d565b610690565b5080fd5b9181601f840112156102aa578235916001600160401b0383116102aa57602083818601950101116102aa57565b9060406003198301126102aa5760043591602435906001600160401b0382116102aa57610721916004016106c5565b9091565b506002610731366106f2565b60fb54916107446000958694141561165a565b600260fb5561012d546001600160a01b031690813b156107b8578361078195604051968795869485936358f52e5b60e11b855233600486016117eb565b03925af180156107ab575b61079c575b50600160fb55604051f35b6107a59061030b565b38610791565b6107b361164d565b61078c565b8380fd5b6001600160a01b038116036102aa57565b50346102aa576040806003193601126102aa57600435906024356107f0816107bc565b60009280845260c960205261080c600184862001543390611d0b565b80845260c960209081528385206001600160a01b03841660009081529152604090205460ff161561083c57505051f35b80845260c960209081528385206001600160a01b0384166000908152915260409020805460ff19166001179055825133926001600160a01b031691907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d908690a451f35b50346102aa5760203660031901126102aa576004356108be816107bc565b6108c733611ca0565b61012d546001600160a01b039081169190823b156102aa5760446000928360405195869485936308610b9560e11b85523060048601521660248401525af1801561091f575b61091257005b806105206100219261030b565b61092761164d565b61090c565b50346102aa5760403660031901126102aa5760243561094a816107bc565b336001600160a01b038216036109665761002190600435611e10565b60405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608490fd5b50346102aa5760203660031901126102aa576004356109e1816107bc565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169190610a1a30841415611875565b610a386000805160206125f4833981519152918254169384146118d6565b610a4133611ca0565b604051602081018181106001600160401b03821117610b5a575b60405260008152610a6b83611f3d565b805115801590610b52575b610b41575b50610a9c610a986000805160206125d48339815191525460ff1690565b1590565b610aa257005b61002192610b36610b2a610b3c93610acf6000805160206125d4833981519152600160ff19825416179055565b604051631b2ce7f360e11b60208201526001600160a01b0385166024820152610b0590610aff81604481016105bb565b8761206e565b506000805160206125d4833981519152805460ff19169055546001600160a01b031690565b6001600160a01b031690565b14611ed9565b611fcd565b610b4b908361206e565b5038610a7b565b506000610a76565b610b626102f4565b610a5b565b50346102aa576003196080368201126102aa576001600160401b03906044358281116102aa57610b9b9036906004016106c5565b9190926064359081116102aa57610bb69036906004016106c5565b919093610bc8600260fb54141561165a565b600260fb5561012d546001600160a01b031691823b156102aa57600094610c388692610c2996604051998a9889978896639d7ff10160e01b88523360048901526004356024890152602435604489015260a0606489015260a48801916117ca565b928584030160848601526117ca565b03925af18015610c65575b610c52575b610021600160fb55565b80610520610c5f9261030b565b38610c48565b610c6d61164d565b610c43565b6020906001600160401b038111610c8f575b601f01601f19160190565b610c976102f4565b610c84565b5060403660031901126102aa57600435610cb5816107bc565b602435906001600160401b0382116102aa57366023830112156102aa57816004013590610ce182610c72565b91610cef604051938461032b565b80835236602482860101116102aa57602081600092602461002197018387013784010152612119565b506002610d24366106f2565b60fb5491610d376000958694141561165a565b600260fb5561012d546001600160a01b031690813b156107b857836107819560405196879586948593637ed67ce360e01b855233600486016117eb565b50346102aa576000602036600319011261049657610d97600260fb54141561165a565b600260fb5561012d546001600160a01b0316803b156106c15760405163281ae15d60e21b815233600480830191909152356024820152908290829081838160448101610685565b9181601f840112156102aa578235916001600160401b0383116102aa576020808501948460071b0101116102aa57565b50346102aa5760603660031901126102aa576004356001600160401b0381116102aa57610e936020610e4761040b933690600401610dde565b90610e57600260fb54141561165a565b600260fb5560018060a01b0361012d5416906000604051809681958294633604e5fb60e21b845260443591602435914291339160048801611791565b03925af1908115610f21575b600091610ef3575b506040518181527fa9d472b32a5f921ecd7fa577f76086e5e52bc5c205c0ea14d6a3621e3df1270b9080602081015b0390a1610ee3600160fb55565b6040519081529081906020820190565b610f14915060203d8111610f1a575b610f0c818361032b565b8101906116a6565b38610ea7565b503d610f02565b610f2961164d565b610e9f565b50346102aa576000604036600319011261049657610f51600260fb54141561165a565b600260fb5561012d546001600160a01b0316803b156106c1576040516315ffcda760e11b81523360048083019190915235602480830191909152356044820152908290829081838160648101610685565b50346102aa57600060203660031901126104965761012d546001600160a01b0316803b156106c15760405163212c859f60e21b8152336004808301919091523560248201529082908290604490829084905af1801561100f575b6110065750604051f35b6105269061030b565b61101761164d565b610ffc565b50346102aa57600060403660031901126104965761103f600260fb54141561165a565b600260fb5561012d546001600160a01b0316803b156106c157604051637fff543360e01b81523360048083019190915235602480830191909152356044820152908290829081838160648101610685565b50346102aa5760403660031901126102aa57602060ff6110db6024356110b5816107bc565b60043560005260c9845260406000209060018060a01b0316600052602052604060002090565b54166040519015158152f35b50346102aa5760008060031936011261049657604051908061012f9081549061110f826102ba565b8086529260019280841690811561046957506001146111385761040b866103ff8188038261032b565b815292507f232da9e50dad2971456a78fb5cd6ff6b75019984d6e918139ce990999420f9795b82841061117a5750505081016020016103ff8261040b386103ef565b8054602085870181019190915290930192810161115e565b50346102aa5760003660031901126102aa57602060405160008152f35b5060a03660031901126102aa576004356001600160401b0381116102aa576111db903690600401610dde565b906024359060058210156102aa5761040b9261124392602092611203600260fb54141561165a565b600260fb5561012d546001600160a01b03169160405195869485938493630510629560e51b85526084359260643592604435924292339260048a0161172c565b039134905af1908115610f2157600091610ef357506040518181527fa9d472b32a5f921ecd7fa577f76086e5e52bc5c205c0ea14d6a3621e3df1270b908060208101610ed6565b50346102aa5760203660031901126102aa576004356112a8816107bc565b61138d6000549160ff8360081c16928315809481611408575b6112ca90611812565b6113f6575b506113226001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169061130b30831415611875565b6000805160206125f48339815191525416146118d6565b60005460ff8160081c169081158092816113eb575b61134090611812565b6113d9575b5061134e611c42565b611356611c42565b6113c4575b611363611bd6565b61136b612237565b61012d80546001600160a01b0319166001600160a01b03909216919091179055565b61139633611d68565b61139e6119a9565b6113ae6113a9611a9c565b611adb565b6113b457005b61002161ff001960005416600055565b6113d461ff001960005416600055565b61135b565b61ffff19166101011760005538611345565b5060ff821615611337565b61ffff191661010117600055386112cf565b5060ff8216156112c1565b50346102aa5760403660031901126102aa57610021602435600435611437826107bc565b8060005260c96020526114536001604060002001543390611d0b565b611e10565b50346102aa5760003660031901126102aa5761012d546040516001600160a01b039091168152602090f35b50346102aa576000806003193601126104965761012d546040516335364ac960e11b815230600482015290602090829060249082906001600160a01b03165afa908115611525575b82916114e6575b6040516001600160a01b0383168152602090f35b90506020813d821161151d575b816115006020938361032b565b810103126106c15761040b915051611517816107bc565b386114d2565b3d91506114f3565b61152d61164d565b6114cb565b50600261153e366106f2565b60fb54916115516000958694141561165a565b600260fb5561012d546001600160a01b031690813b156107b85761158d9460405195869485938493634289b6f560e11b855233600486016117eb565b039134905af180156107ab5761079c5750600160fb55604051f35b50346102aa5760006040366003190112610496576115cb600260fb54141561165a565b600260fb5561012d546001600160a01b0316803b156106c1576040516383caecdf60e01b81523360048083019190915235602480830191909152356044820152908290829081838160648101610685565b7f1e57e3bb474320be3d2c77138f75b7c3941292d647f5f9634e33a8e94e0e069b60408051338152346020820152a1565b506040513d6000823e3d90fd5b1561166157565b60405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fd5b908160209103126102aa575190565b918181526020809101929160009182905b8282106116d557505050505090565b909192939485356116e5816107bc565b6001600160a01b031681528582013582820152604080870135908201526060808701359060038210156117285782015260809081019501939291600101906116c6565b8680fd5b94919061174991999897949996939660e0875260e08701916116b5565b97600586101561177b5760c095602086015260018060a01b031660408501526060840152608083015260a08201520152565b634e487b7160e01b600052602160045260246000fd5b9296959491608094916117ac9160a0865260a08601916116b5565b6001600160a01b039097166020840152604083015260608201520152565b908060209392818452848401376000828201840152601f01601f1916010190565b61180f949260609260018060a01b03168252602082015281604082015201916117ca565b90565b1561181957565b60405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608490fd5b1561187c57565b60405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608490fd5b156118dd57565b60405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608490fd5b601f8111611943575050565b60009061012f82527f232da9e50dad2971456a78fb5cd6ff6b75019984d6e918139ce990999420f979906020601f850160051c8301941061199f575b601f0160051c01915b82811061199457505050565b818155600101611988565b909250829061197f565b61012e6119b681546102ba565b601f8111611a39575b50604f81556000527f4e65617446692050726f746f636f6c20496d706c656d656e746174696f6e20437fbdaadd9f750d0166045bf387a364eadd28ba243e04512a47282aa5147a68e37f55661bdb9d1c9858dd60ca1b7fbdaadd9f750d0166045bf387a364eadd28ba243e04512a47282aa5147a68e38055565b601f0160051c7fbdaadd9f750d0166045bf387a364eadd28ba243e04512a47282aa5147a68e37f017fbdaadd9f750d0166045bf387a364eadd28ba243e04512a47282aa5147a68e3815b818110611a9057506119bf565b60008155600101611a83565b60405190604082018281106001600160401b03821117611ace575b60405260058252640312e302e360dc1b6020830152565b611ad66102f4565b611ab7565b9081516001600160401b038111611bc9575b61012f90611b0481611aff84546102ba565b611937565b602080601f8311600114611b40575081929394600092611b35575b50508160011b916000199060031b1c1916179055565b015190503880611b1f565b90601f19831695611b7461012f6000527f232da9e50dad2971456a78fb5cd6ff6b75019984d6e918139ce990999420f97990565b926000905b888210611bb157505083600195969710611b98575b505050811b019055565b015160001960f88460031b161c19169055388080611b8e565b80600185968294968601518155019501930190611b79565b611bd16102f4565b611aed565b60005460ff8160081c16908115809281611c37575b611bf490611812565b611c25575b50611c02611c42565b611c0a611c42565b611c12611c42565b611c1857565b61ff001960005416600055565b61ffff19166101011760005538611bf9565b5060ff821615611beb565b60005460ff8160081c16908115809281611c7e575b611c6090611812565b611c6c575b50611c1857565b61ffff19166101011760005538611c65565b5060ff821615611c57565b90611c9c6020928281519485920161034c565b0190565b6001600160a01b03811660009081527f81fe90a866a48a634a12852c1be675b683a22307409932a7443b8029347be756602052604090205460ff1615611ce35750565b6105e1906048906105c990611d00906001600160a01b03166123cd565b6105bb6105586124f3565b908160005260c960205260ff611d378260406000209060018060a01b0316600052602052604060002090565b541615611d42575050565b6105c96105e1926105bb610558611d6260489560018060a01b03166123cd565b92612564565b6001600160a01b03811660009081527f81fe90a866a48a634a12852c1be675b683a22307409932a7443b8029347be756602052604081205460ff1615611dac575050565b80805260c9602090815260408083206001600160a01b038516600090815292529020805460ff1916600117905560405133926001600160a01b031691907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d908290a4565b600081815260c9602090815260408083206001600160a01b038616845290915290205460ff16611e3e575050565b600081815260c9602090815260408083206001600160a01b03861684529091529020805460ff1916905560405133926001600160a01b031691907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b90600090a4565b60405190608082018281106001600160401b03821117611ecc575b604052604282526060366020840137565b611ed46102f4565b611ebb565b15611ee057565b60405162461bcd60e51b815260206004820152602f60248201527f45524331393637557067726164653a207570677261646520627265616b73206660448201526e75727468657220757067726164657360881b6064820152608490fd5b803b15611f72576000805160206125f483398151915280546001600160a01b0319166001600160a01b03909216919091179055565b60405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608490fd5b611fd681611f3d565b60018060a01b03167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b6000604051a2565b60405190606082018281106001600160401b03821117612061575b60405260278252660819985a5b195960ca1b6040837f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c60208201520152565b6120696102f4565b612022565b90813b156120c55760008161180f9360208394519201905af43d156120be573d61209781610c72565b906120a5604051928361032b565b81523d6000602083013e5b6120b8612007565b916121ff565b60606120b0565b60405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608490fd5b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169261215130851415611875565b61216f6000805160206125f4833981519152928354169485146118d6565b61217833611ca0565b61218183611f3d565b8051158015906121f7575b6121e6575b506121ae610a986000805160206125d48339815191525460ff1690565b6121b757505050565b6121e492610b36610b2a610b3c93610acf6000805160206125d4833981519152600160ff19825416179055565b565b6121f0908361206e565b5038612191565b50600161218c565b9091901561220b575090565b81511561221b5750805190602001fd5b60405162461bcd60e51b81529081906105e19060048301610381565b600080549060ff8260081c169182158093816122f7575b61225790611812565b6122d9575b50805460ff8160081c169081158092816122ce575b61227a90611812565b6122b0575b50600160fb556122a1575b5061229157565b6121e461ff001960005416600055565b805461ff00191690553861228a565b61ff0019166101001782556000805460ff191660011790553861227f565b5060ff821615612271565b61ff0019166101001781556000805460ff191660011790553861225c565b5060ff82161561224e565b50634e487b7160e01b600052603260045260246000fd5b602090805115612327570190565b611c9c612302565b602190805160011015612327570190565b90602091805182101561235257010190565b61235a612302565b010190565b801561236c576000190190565b634e487b7160e01b600052601160045260246000fd5b1561238957565b606460405162461bcd60e51b815260206004820152602060248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b60405190606082018281106001600160401b03821117612475575b604052602a82526040366020840137603061240283612319565b53607861240e8361232f565b536029905b600182116124265761180f915015612382565b80600f61246292166010811015612468575b6f181899199a1a9b1b9c1cb0b131b232b360811b901a6124588486612340565b5360041c9161235f565b90612413565b612470612302565b612438565b61247d6102f4565b6123e8565b600061248c611ea0565b90603061249883612319565b5360786124a48361232f565b536041905b600182116124bc5761180f915015612382565b80600f6124ed92166010811015612468576f181899199a1a9b1b9c1cb0b131b232b360811b901a6124588486612340565b906124a9565b60006124fd611ea0565b90603061250983612319565b5360786125158361232f565b536041905b6001821161252d5761180f915015612382565b80600f61255e92166010811015612468576f181899199a1a9b1b9c1cb0b131b232b360811b901a6124588486612340565b9061251a565b61256c611ea0565b90603061257883612319565b5360786125848361232f565b536041905b6001821161259c5761180f915015612382565b80600f6125cd92166010811015612468576f181899199a1a9b1b9c1cb0b131b232b360811b901a6124588486612340565b9061258956fe4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbca2646970667358221220692895cefa3cecd42126a3bbf7200c3733ee871f64ce910256d81d7c29ddc20764736f6c634300080f0033";

type NeatSwapImplementationV1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NeatSwapImplementationV1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NeatSwapImplementationV1__factory extends ContractFactory {
  constructor(...args: NeatSwapImplementationV1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NeatSwapImplementationV1> {
    return super.deploy(overrides || {}) as Promise<NeatSwapImplementationV1>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NeatSwapImplementationV1 {
    return super.attach(address) as NeatSwapImplementationV1;
  }
  override connect(signer: Signer): NeatSwapImplementationV1__factory {
    return super.connect(signer) as NeatSwapImplementationV1__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NeatSwapImplementationV1Interface {
    return new utils.Interface(_abi) as NeatSwapImplementationV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NeatSwapImplementationV1 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as NeatSwapImplementationV1;
  }
}
