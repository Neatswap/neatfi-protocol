/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ERC721Mock,
  ERC721MockInterface,
} from "../../../mocks/ERC721Mock.sol/ERC721Mock";

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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        internalType: "address",
        name: "owner",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeMint",
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
        name: "tokenId",
        type: "uint256",
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
        name: "tokenId",
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
    name: "symbol",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
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
];

const _bytecode =
  "0x60803462000354576001600160401b03906040818101838111838210176200033e578152600782526020916626bcaa37b5b2b760c91b83820152815193828501858110828211176200033e57835260038552624d544b60e81b8486015281518181116200033e576000948554916001948584811c9416801562000333575b838510146200031f578190601f94858111620002cc575b508390858311600114620002685789926200025c575b5050600019600383901b1c191690851b1786555b8651928311620002485783548481811c911680156200023d575b828210146200022957828111620001e1575b50809183116001146200017a5750849582939495926200016e575b5050600019600383901b1c191690821b1790555b60068054336001600160a01b03198216811790925591519290916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09084a36111e690816200035a8239f35b01519050388062000105565b90601f198316968487528287209287905b898210620001c9575050838596979810620001af575b505050811b01905562000119565b015160001960f88460031b161c19169055388080620001a1565b8087859682949686015181550195019301906200018b565b8487528187208380860160051c8201928487106200021f575b0160051c019085905b82811062000213575050620000ea565b88815501859062000203565b92508192620001fa565b634e487b7160e01b87526022600452602487fd5b90607f1690620000d8565b634e487b7160e01b86526041600452602486fd5b015190503880620000aa565b898052848a208894509190601f1984168b5b87828210620002b557505084116200029b575b505050811b018655620000be565b015160001960f88460031b161c191690553880806200028d565b8385015186558b979095019493840193016200027a565b9091508880528389208580850160051c82019286861062000315575b918991869594930160051c01915b8281106200030657505062000094565b8b8155859450899101620002f6565b92508192620002e8565b634e487b7160e01b88526022600452602488fd5b93607f16936200007d565b634e487b7160e01b600052604160045260246000fd5b600080fdfe6080604081815260048036101561001557600080fd5b600092833560e01c90816301ffc9a714610a7c5750806306fdde03146109b1578063081812fc14610991578063095ea7b31461082357806323b872dd146107fd57806342842e0e146107ca5780636352211e1461079957806370a0823114610703578063715018a6146106a35780638da5cb5b1461067a57806395d89b4114610564578063a1448194146103f2578063a22cb46514610323578063b88d4fde1461026e578063c87b56dd146101fe578063e985e9c5146101ac5763f2fde38b146100de57600080fd5b346101a85760203660031901126101a8576100f7610b39565b6100ff610c0f565b6001600160a01b03908116918215610156575060065492826bffffffffffffffffffffffff60a01b8516176006555192167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08484a3f35b608490602085519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b8280fd5b5050346101fa57806003193601126101fa5760ff816020936101cc610b39565b6101d4610b54565b6001600160a01b0391821683526005875283832091168252855220549151911615158152f35b5080fd5b509190346101fa5760203660031901126101fa5761023d61023861026a9435600052600260205260018060a01b0360406000205416151590565b610c67565b81815161024981610b9f565b5280519161025683610b9f565b825251918291602083526020830190610ae8565b0390f35b50346101a85760803660031901126101a857610288610b39565b610290610b54565b906044356064359367ffffffffffffffff851161031f573660238601121561031f57840135926102bf84610bf3565b926102cc87519485610bd1565b84845287366024878901011161031c576020866103149760246103199a0183890137860101526103046102ff8433610df1565b610d17565b61030f838383610e5f565b611125565b610dcd565b51f35b80fd5b8680fd5b50346101a857816003193601126101a85761033c610b39565b602435908115158092036103ee576001600160a01b0316913383146103ab5750338452600560205282842082855260205282842060ff1981541660ff831617905582519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a351f35b606490602085519162461bcd60e51b8352820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152fd5b8480fd5b50346101a857816003193601126101a85761040b610b39565b60243590610417610c0f565b83519261042384610b9f565b8584526001600160a01b038216908115610521576000848152600260205260409020546001600160a01b03166104de5781875260036020528587208054909160011982116104cb57509380926103199694926001610314970190558189526002602052878920816bffffffffffffffffffffffff60a01b825416179055887fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef818a51a4611009565b634e487b7160e01b895260119052602488fd5b606490602087519162461bcd60e51b8352820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152fd5b606490602087519162461bcd60e51b8352820152602060248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152fd5b50913461031c578060031936011261031c578151918160019283549384811c91818616958615610670575b602096878510811461065d578899509688969785829a5291826000146106365750506001146105db575b50505061026a92916105cc910385610bd1565b51928284938452830190610ae8565b91908693508083527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b82841061061e57505050820101816105cc61026a6105b9565b8054848a018601528895508794909301928101610605565b60ff19168782015293151560051b860190930193508492506105cc915061026a90506105b9565b634e487b7160e01b835260228a52602483fd5b92607f169261058f565b5050346101fa57816003193601126101fa5760065490516001600160a01b039091168152602090f35b5050346101fa57816003193601126101fa576106bd610c0f565b600680546001600160a01b0319811690915590519082906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08284a3f35b508290346101fa5760203660031901126101fa576001600160a01b03610727610b39565b169081156107445760208480858581526003845220549051908152f35b608490602085519162461bcd60e51b8352820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152fd5b50913461031c57602036600319011261031c57506107b960209235610cb3565b90516001600160a01b039091168152f35b5050346101fa576103196103146107e036610b6a565b908551926107ed84610b9f565b8784526103046102ff8433610df1565b5050346101fa5761031961081036610b6a565b9161081e6102ff8433610df1565b610e5f565b50346101a857816003193601126101a85761083c610b39565b602435916001600160a01b0390818061085486610cb3565b1693169280841461094457803314908115610925575b50156108bc5783865260205283852080546001600160a01b0319168317905561089283610cb3565b169251927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258585a4f35b608490602086519162461bcd60e51b8352820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c00006064820152fd5b90508652600560205284862033875260205260ff85872054163861086a565b855162461bcd60e51b8152602081840152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608490fd5b50913461031c57602036600319011261031c57506107b960209235610cd9565b50913461031c578060031936011261031c5781519181825492600184811c91818616958615610a72575b602096878510811461065d578899509688969785829a529182600014610636575050600114610a175750505061026a92916105cc910385610bd1565b91908693508280527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5635b828410610a5a57505050820101816105cc61026a6105b9565b8054848a018601528895508794909301928101610a41565b92607f16926109db565b925050346101a85760203660031901126101a8573563ffffffff60e01b81168091036101a857602092506380ac58cd60e01b8114908115610ad7575b8115610ac6575b5015158152f35b6301ffc9a760e01b14905038610abf565b635b5e139f60e01b81149150610ab8565b91908251928382526000905b848210610b21575092806020939411610b14575b601f01601f1916010190565b6000838284010152610b08565b90602090818082850101519082860101520190610af4565b600435906001600160a01b0382168203610b4f57565b600080fd5b602435906001600160a01b0382168203610b4f57565b6060906003190112610b4f576001600160a01b03906004358281168103610b4f57916024359081168103610b4f579060443590565b6020810190811067ffffffffffffffff821117610bbb57604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff821117610bbb57604052565b67ffffffffffffffff8111610bbb57601f01601f191660200190565b6006546001600160a01b03163303610c2357565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b15610c6e57565b60405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e20494400000000000000006044820152606490fd5b6000908152600260205260409020546001600160a01b0316610cd6811515610c67565b90565b600081815260026020526040902054610cfc906001600160a01b03161515610c67565b6000908152600460205260409020546001600160a01b031690565b15610d1e57565b60405162461bcd60e51b815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201526d1c881b9bdc88185c1c1c9bdd995960921b6064820152608490fd5b60809060208152603260208201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b60608201520190565b15610dd457565b60405162461bcd60e51b815280610ded60048201610d7a565b0390fd5b906001600160a01b038080610e0584610cb3565b16931691838314938415610e38575b508315610e22575b50505090565b610e2e91929350610cd9565b1614388080610e1c565b909350600052600560205260406000208260005260205260ff604060002054169238610e14565b610e6883610cb3565b6001600160a01b039291831691908316829003610fb6578216918215610f6557600084815260046020526040812080546001600160a01b03199081169091559091610eb286610cb3565b16908583604051937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258286a4838352600360205260408320805460018110610f515760001901905584835260036020526040832080546001198111610f515760010190558583526002602052604083208054909116851790557fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9190a4565b634e487b7160e01b85526011600452602485fd5b60405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608490fd5b9192600092909190803b1561111b57611057946040518092630a85bd0160e11b9485835233600484015287602484015260448301526080606483015281878160209a8b966084830190610ae8565b03926001600160a01b03165af18491816110db575b506110ca575050503d6000146110c2573d61108681610bf3565b906110946040519283610bd1565b81528091833d92013e5b805191826110bf5760405162461bcd60e51b815280610ded60048201610d7a565b01fd5b50606061109e565b6001600160e01b0319161492509050565b9091508581813d8311611114575b6110f38183610bd1565b810103126103ee57516001600160e01b0319811681036103ee57903861106c565b503d6110e9565b5050915050600190565b9293600093909291803b156111a55794849161117f9660405180948193630a85bd0160e11b9788845233600485015260018060a01b0380921660248501526044840152608060648401528260209b8c976084830190610ae8565b0393165af18491816110db57506110ca575050503d6000146110c2573d61108681610bf3565b50505091505060019056fea2646970667358221220a07bb6aee71c69b0f1ba40dc7191d3ca243ba34cb878ce50b484ce616cebaa1264736f6c634300080f0033";

type ERC721MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721Mock__factory extends ContractFactory {
  constructor(...args: ERC721MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721Mock> {
    return super.deploy(overrides || {}) as Promise<ERC721Mock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC721Mock {
    return super.attach(address) as ERC721Mock;
  }
  override connect(signer: Signer): ERC721Mock__factory {
    return super.connect(signer) as ERC721Mock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721MockInterface {
    return new utils.Interface(_abi) as ERC721MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Mock {
    return new Contract(address, _abi, signerOrProvider) as ERC721Mock;
  }
}