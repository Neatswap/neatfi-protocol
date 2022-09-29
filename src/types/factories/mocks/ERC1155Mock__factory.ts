/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  ERC1155Mock,
  ERC1155MockInterface,
} from "../../mocks/ERC1155Mock";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "mintBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newuri",
        type: "string",
      },
    ],
    name: "setURI",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
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
];

const _bytecode =
  "0x60803461014b5760408101906001600160401b038211818310176101355760209160405260108152016f68747470733a2f2f746573742e636f6d60801b8152600254906001918281811c9116801561012b575b602082101461011557601f81116100cc575b81516001600160801b031916602017600255600380546001600160a01b031981163390811790925560405191906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600084a36117989081620001518239f35b6002600052601f0160051c7f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace908101905b81811061010a5750610064565b6000815583016100fd565b634e487b7160e01b600052602260045260246000fd5b90607f1690610052565b634e487b7160e01b600052604160045260246000fd5b600080fdfe6040608081526004908136101561001557600080fd5b600091823560e01c8062fdd58e1461112057806301ffc9a7146110b357806302fe530514610f135780630e89341c14610e295780631f7fdffa14610c1d5780632eb2c2d6146109775780634e1273f4146107d6578063715018a614610776578063731133e9146105de5780638da5cb5b146105b5578063a22cb465146104d8578063e985e9c514610486578063f242432a146101885763f2fde38b146100ba57600080fd5b34610184576020366003190112610184576100d3611150565b6100db611319565b6001600160a01b03908116918215610132575060035492826bffffffffffffffffffffffff60a01b8516176003555192167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08484a3f35b608490602085519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b8280fd5b50346101845760a0366003190112610184576101a2611150565b836101ab61116b565b916044359060643560843567ffffffffffffffff8111610482576101d290369088016112c7565b926001600160a01b03928316923384148015610463575b6101f29061147f565b8616906102008215156114e2565b6102098161172c565b506102138361172c565b508086526020968688528987208588528852838a8820546102368282101561153c565b838952888a528b8920878a528a52038a882055818752868852898720838852885289872061026585825461159b565b905582858b51848152868b8201527fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628d3392a43b6102a257858951f35b879587946102e38b519788968795869463f23a6e6160e01b9c8d8752339087015260248601526044850152606484015260a0608484015260a4830190611200565b03925af1869181610434575b506103c057505060019061030161169f565b6308c379a01461038d575b5061032057505b3880838180808080858951f35b905162461bcd60e51b815290819061038990820160809060208152603460208201527f455243313135353a207472616e7366657220746f206e6f6e2d455243313135356040820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b60608201520190565b0390fd5b6103956116bd565b806103a0575061030c565b6103898491865193849362461bcd60e51b85528401526024830190611200565b6001600160e01b0319160390506103d75750610313565b905162461bcd60e51b815290819061038990820160809060208152602860208201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b60608201520190565b610455919250843d861161045c575b61044d8183611181565b81019061167f565b90386102ef565b503d610443565b508386526001602090815289872033885290528886205460ff166101e9565b8480fd5b5050346104d457806003193601126104d45760ff816020936104a6611150565b6104ae61116b565b6001600160a01b0391821683526001875283832091168252855220549151911615158152f35b5080fd5b50346101845781600319360112610184576104f1611150565b60243590811515809203610482576001600160a01b0316913383146105605750338452600160205282842082855260205282842060ff1981541660ff831617905582519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a351f35b608490602085519162461bcd60e51b8352820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b6064820152fd5b5050346104d457816003193601126104d45760035490516001600160a01b039091168152602090f35b5034610184576080366003190112610184576105f8611150565b60243560443560643567ffffffffffffffff81116107725761061d90369086016112c7565b90610626611319565b6001600160a01b0384169161063c831515611629565b6106458461172c565b5061064f8261172c565b50838852602094888652878920848a52865287892061066f84825461159b565b90558389895187815285898201527fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628b3392a43b6106ac57878751f35b6106ee92859289895180968195829463f23a6e6160e01b9a8b85528d33908601528560248601526044850152606484015260a0608484015260a4830190611200565b03925af1869181610753575b5061073c57505060019061070c61169f565b6308c379a014610729575b5061032057505b388080808080878751f35b6107316116bd565b806103a05750610717565b6001600160e01b0319160390506103d7575061071e565b61076b919250843d861161045c5761044d8183611181565b90386106fa565b8680fd5b5050346104d457816003193601126104d457610790611319565b600380546001600160a01b0319811690915590519082906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08284a3f35b5034610184578160031936011261018457803567ffffffffffffffff808211610482573660238301121561048257818301359061081282611251565b9261081f86519485611181565b82845260209260248486019160051b8301019136831161097357602401905b8282106109505750505060243590811161094c5761085f9036908501611269565b9282518451036108f9575081519461087686611251565b9561088386519788611181565b808752610892601f1991611251565b0136838801375b82518110156108e3576108de906108ce6001600160a01b036108bb8387611455565b51166108c78388611455565b51906113ab565b6108d88289611455565b52611430565b610899565b8451828152806108f5818501896112e5565b0390f35b60849185519162461bcd60e51b8352820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b6064820152fd5b8580fd5b81356001600160a01b038116810361096f57815290840190840161083e565b8980fd5b8880fd5b508234610c1a576003199260a0368501126104d457610994611150565b9161099d61116b565b9467ffffffffffffffff93604435858111610c16576109bf9036908801611269565b606435868111610482576109d69036908901611269565b95608435908111610482576109ee90369089016112c7565b966001600160a01b03928316923384148015610bf7575b610a0e9061147f565b610a1b83518951146115a7565b891693610a298515156114e2565b855b8351811015610aad5780610a42610aa89286611455565b51610a4d828c611455565b5190808a526020908a82528b8b20898c528252828c8c8b8282205492610a758585101561153c565b858352828752822091528452038c8c20558a528981528a8a2090898b5252610aa18a8a2091825461159b565b9055611430565b610a2b565b50949897909692959784878a517f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb339180610ae98a8a83611604565b0390a43b610af657888851f35b8751948593849363bc197c8160e01b98898652338b87015260248601526044850160a0905260a48501610b28916112e5565b82858203016064860152610b3b916112e5565b90838203016084840152610b4e91611200565b0381885a94602095f1859181610bd7575b50610bc25750506001610b7061169f565b6308c379a014610b8d575b61032057505b82808080808080888851f35b610b956116bd565b80610ba05750610b7b565b61038991506020935193849362461bcd60e51b85528401526024830190611200565b6001600160e01b031916036103d75750610b81565b610bf091925060203d811161045c5761044d8183611181565b9086610b5f565b508386526001602090815287872033885290528686205460ff16610a05565b8380fd5b80fd5b509190346104d45760031991608036840112610c1a57610c3b611150565b9267ffffffffffffffff602435818111610c1657610c5c9036908801611269565b9560443582811161048257610c749036908301611269565b9160643590811161048257610c8c90369083016112c7565b610c94611319565b6001600160a01b03871693610caa851515611629565b610cb789518551146115a7565b855b8951811015610cfe5780610cd0610cf99287611455565b51610cdb828d611455565b51895260208981528a8a2090898b5252610aa18a8a2091825461159b565b610cb9565b50859894919392969782878a517f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb339180610d3a8a8d83611604565b0390a43b610d4757858851f35b8695610d9895610da7610d88936020978c51998a988997889663bc197c8160e01b9e8f8952339089015288602489015260a0604489015260a48801906112e5565b90848783030160648801526112e5565b91848303016084850152611200565b03925af1859181610e09575b50610df45750506001610dc461169f565b6308c379a014610de1575b61032057505b38828180808080858851f35b610de96116bd565b80610ba05750610dcf565b6001600160e01b031916036103d75750610dd5565b610e2291925060203d811161045c5761044d8183611181565b9038610db3565b5050346104d4576020908160031936011261018457805183819490600254610e5081611371565b91828552600191878382169182600014610eec575050600114610e90575b5050506108f59291610e81910385611181565b51928284938452830190611200565b9190869350600283527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5b828410610ed45750505082010181610e816108f5610e6e565b8054848a018601528895508794909301928101610ebb565b60ff19168782015293151560051b86019093019350849250610e8191506108f59050610e6e565b509190346104d4576020806003193601126101845767ffffffffffffffff908435828111610482573660238201121561048257610f5990369060248189013591016111b9565b94610f62611319565b85519283116110a05750610f77600254611371565b601f811161103e575b5080601f8311600114610fbc5750839482939492610fb1575b50508160011b916000199060031b1c19161760025551f35b015190503880610f99565b60028552601f198316957f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace929186905b8882106110265750508360019596971061100d575b505050811b0160025551f35b015160001960f88460031b161c19169055388080611001565b80600185968294968601518155019501930190610fec565b600285527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f840160051c810191838510611096575b601f0160051c01905b81811061108b5750610f80565b85815560010161107e565b9091508190611075565b634e487b7160e01b855260419052602484fd5b503461018457602036600319011261018457359063ffffffff60e01b82168092036101845760209250636cdb3d1360e11b821491821561110f575b82156110fe575b50519015158152f35b6301ffc9a760e01b149150386110f5565b6303a24d0760e21b811492506110ee565b5050346104d457806003193601126104d457602090611149611140611150565b602435906113ab565b9051908152f35b600435906001600160a01b038216820361116657565b600080fd5b602435906001600160a01b038216820361116657565b90601f8019910116810190811067ffffffffffffffff8211176111a357604052565b634e487b7160e01b600052604160045260246000fd5b92919267ffffffffffffffff82116111a357604051916111e3601f8201601f191660200184611181565b829481845281830111611166578281602093846000960137010152565b91908251928382526000905b84821061123957509280602093941161122c575b601f01601f1916010190565b6000838284010152611220565b9060209081808285010151908286010152019061120c565b67ffffffffffffffff81116111a35760051b60200190565b81601f820112156111665780359161128083611251565b9261128e6040519485611181565b808452602092838086019260051b820101928311611166578301905b8282106112b8575050505090565b813581529083019083016112aa565b9080601f83011215611166578160206112e2933591016111b9565b90565b90815180825260208080930193019160005b828110611305575050505090565b8351855293810193928101926001016112f7565b6003546001600160a01b0316330361132d57565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b90600182811c921680156113a1575b602083101461138b57565b634e487b7160e01b600052602260045260246000fd5b91607f1691611380565b6001600160a01b03169081156113d857600052600060205260406000209060005260205260406000205490565b60405162461bcd60e51b815260206004820152602a60248201527f455243313135353a2061646472657373207a65726f206973206e6f742061207660448201526930b634b21037bbb732b960b11b6064820152608490fd5b600019811461143f5760010190565b634e487b7160e01b600052601160045260246000fd5b80518210156114695760209160051b010190565b634e487b7160e01b600052603260045260246000fd5b1561148657565b60405162461bcd60e51b815260206004820152602e60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201526d195c881bdc88185c1c1c9bdd995960921b6064820152608490fd5b156114e957565b60405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604482015264647265737360d81b6064820152608490fd5b1561154357565b60405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201526939103a3930b739b332b960b11b6064820152608490fd5b8119811161143f570190565b156115ae57565b60405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b6064820152608490fd5b909161161b6112e2936040845260408401906112e5565b9160208184039101526112e5565b1561163057565b60405162461bcd60e51b815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f206164647265736044820152607360f81b6064820152608490fd5b9081602091031261116657516001600160e01b0319811681036111665790565b60009060033d116116ac57565b905060046000803e60005160e01c90565b600060443d106112e257604051600319913d83016004833e815167ffffffffffffffff918282113d60248401111761171b57818401948551938411611723573d8501016020848701011161171b57506112e292910160200190611181565b949350505050565b50949350505050565b604051906040820182811067ffffffffffffffff8211176111a3576040526001825260208201602036823782511561146957529056fea26469706673582212200a692fcef65bd2716a8da92ee00978818055579d7ccf3d1ac8d378df8c3066d064736f6c634300080f0033";

type ERC1155MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155Mock__factory extends ContractFactory {
  constructor(...args: ERC1155MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC1155Mock> {
    return super.deploy(overrides || {}) as Promise<ERC1155Mock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC1155Mock {
    return super.attach(address) as ERC1155Mock;
  }
  override connect(signer: Signer): ERC1155Mock__factory {
    return super.connect(signer) as ERC1155Mock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155MockInterface {
    return new utils.Interface(_abi) as ERC1155MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155Mock {
    return new Contract(address, _abi, signerOrProvider) as ERC1155Mock;
  }
}