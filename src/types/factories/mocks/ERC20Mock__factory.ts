/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BigNumberish,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { ERC20Mock, ERC20MockInterface } from "../../mocks/ERC20Mock";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "initialAccount",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "initialBalance",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
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
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        name: "value",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approveInternal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferInternal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60406080815262000fa6803803806200001881620003d8565b9283398101608082820312620003d35781516001600160401b039190828111620003d357816200004a918501620003fe565b6020918285015190848211620003d35762000067918601620003fe565b848601516001600160a01b0381169591929190869003620003d3576060015193815192818411620002e557603654936001938486811c96168015620003c8575b87871014620002c4578190601f9687811162000371575b5087908783116001146200030757600092620002fb575b5050600019600383901b1c191690841b176036555b8051918211620002e5576037548381811c91168015620002da575b86821014620002c45784811162000278575b5084908483116001146200020e5792829391839260009462000202575b50501b916000199060031b1c1916176037555b8315620001c057506035549082198211620001aa57826000937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9301603555848452603382528584208181540190558551908152a351610b249081620004828239f35b634e487b7160e01b600052601160045260246000fd5b6064925084519162461bcd60e51b8352600483015260248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fd5b01519250388062000134565b90601f19831691603760005283876000209360005b898883831062000260575050501062000246575b505050811b0160375562000147565b015160001960f88460031b161c1916905538808062000237565b86860151885590960195948501948793500162000223565b6037600052856000208580850160051c820192888610620002ba575b0160051c019084905b828110620002ad57505062000117565b600081550184906200029d565b9250819262000294565b634e487b7160e01b600052602260045260246000fd5b90607f169062000105565b634e487b7160e01b600052604160045260246000fd5b015190503880620000d5565b90869350601f198316916036600052896000209260005b8b8282106200035a575050841162000340575b505050811b01603655620000ea565b015160001960f88460031b161c1916905538808062000331565b8385015186558a979095019493840193016200031e565b9091506036600052876000208780850160051c8201928a8610620003be575b918891869594930160051c01915b828110620003ae575050620000be565b600081558594508891016200039e565b9250819262000390565b95607f1695620000a7565b600080fd5b6040519190601f01601f191682016001600160401b03811183821017620002e557604052565b81601f82011215620003d3578051906001600160401b038211620002e55760209062000433601f8401601f19168301620003d8565b93838552828483010111620003d35782906000905b8383831062000468575050116200045e57505090565b6000918301015290565b819350828193920101518282880101520183916200044856fe608060408181526004918236101561001657600080fd5b600092833560e01c91826306fdde03146106db57508163095ea7b3146106b157816318160ddd14610692578163222f5be01461067957816323b872dd146105bf578163313ce567146105a3578163395093511461055357816340c10f191461049457816356189cb41461047857816370a082311461044057816395d89b411461031f5781639dc29fac146101f8578163a457c2d71461015057508063a9059cbb146101205763dd62ed3e146100ca57600080fd5b3461011c578060031936011261011c576100e261080a565b6001600160a01b036024358181169290839003610118579160209491849316825260348552828220908252845220549051908152f35b8480fd5b5080fd5b503461011c578060031936011261011c5760209061014961013f61080a565b602435903361087c565b5160018152f35b905082346101f557826003193601126101f55761016b61080a565b918360243592338152603460205281812060018060a01b03861682526020522054908282106101a45760208561014985850387336109ec565b608490602086519162461bcd60e51b8352820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152fd5b80fd5b90503461031b578160031936011261031b5761021261080a565b6001600160a01b0316906024359082156102ce5782855260336020528385205490828210610280575060208284937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef938896875260338452038686205580603554036035558551908152a351f35b608490602086519162461bcd60e51b8352820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152fd5b608490602085519162461bcd60e51b8352820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152fd5b8280fd5b83833461011c578160031936011261011c5780519082603754600181811c90808316928315610436575b60209384841081146104235783885290811561040757506001146103b1575b505050829003601f01601f191682019267ffffffffffffffff84118385101761039e575082918261039a9252826107b3565b0390f35b634e487b7160e01b815260418552602490fd5b603787529192508591837f42a7b7dd785cd69714a189dffb3fd7d7174edc9ece837694ce50f7078f7c31ae5b8385106103f35750505050830101858080610368565b8054888601830152930192849082016103dd565b60ff1916878501525050151560051b8401019050858080610368565b634e487b7160e01b895260228a52602489fd5b91607f1691610349565b50503461011c57602036600319011261011c5760209181906001600160a01b0361046861080a565b1681526033845220549051908152f35b50503461011c5761049161048b36610825565b916109ec565b51f35b90503461031b578160031936011261031b576104ae61080a565b6001600160a01b03169060243590821561051057507fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6020826104f4879460355461085a565b603555848452603382528584208181540190558551908152a351f35b606490602085519162461bcd60e51b8352820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fd5b50503461011c578060031936011261011c5761014960209261059c61057661080a565b338352603486528483206001600160a01b0382168452865291849020546024359061085a565b90336109ec565b50503461011c578160031936011261011c576020905160128152f35b905082346101f557826105d136610825565b6001600160a01b0383168552603460209081528486203387529052929093205491939091906001820161060d575b60208661014987878761087c565b848210610636575091839161062b60209695610149950333836109ec565b9193948193506105ff565b606490602087519162461bcd60e51b8352820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152fd5b50503461011c5761049161068c36610825565b9161087c565b50503461011c578160031936011261011c576020906035549051908152f35b50503461011c578060031936011261011c576020906101496106d161080a565b60243590336109ec565b8490843461031b578260031936011261031b5782603654600181811c908083169283156107a9575b602093848410811461042357838852908115610407575060011461075357505050829003601f01601f191682019267ffffffffffffffff84118385101761039e575082918261039a9252826107b3565b603687529192508591837f4a11f94e20a93c79f6ec743a1954ec4fc2c08429ae2122118bf234b2185c81b85b8385106107955750505050830101858080610368565b80548886018301529301928490820161077f565b91607f1691610703565b919091602080825283519081818401526000945b8286106107f45750508060409394116107e7575b601f01601f1916010190565b60008382840101526107db565b85810182015184870160400152948101946107c7565b600435906001600160a01b038216820361082057565b600080fd5b6060906003190112610820576001600160a01b0390600435828116810361082057916024359081168103610820579060443590565b81198111610866570190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03908116918215610999571691821561094857600082815260336020526040812054918083106108f457604082827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef95876020965260338652038282205586815220818154019055604051908152a3565b60405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608490fd5b60405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608490fd5b6001600160a01b03908116918215610a9d5716918215610a4d5760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260348252604060002085600052825280604060002055604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608490fd5b60405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608490fdfea264697066735822122083cb4af15e6a19d49dc71a1b4b9868a1294c61fd25acf8a88ff768457a32e08964736f6c634300080f0033";

type ERC20MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Mock__factory extends ContractFactory {
  constructor(...args: ERC20MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    initialAccount: PromiseOrValue<string>,
    initialBalance: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20Mock> {
    return super.deploy(
      name,
      symbol,
      initialAccount,
      initialBalance,
      overrides || {}
    ) as Promise<ERC20Mock>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    initialAccount: PromiseOrValue<string>,
    initialBalance: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      initialAccount,
      initialBalance,
      overrides || {}
    );
  }
  override attach(address: string): ERC20Mock {
    return super.attach(address) as ERC20Mock;
  }
  override connect(signer: Signer): ERC20Mock__factory {
    return super.connect(signer) as ERC20Mock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20MockInterface {
    return new utils.Interface(_abi) as ERC20MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Mock {
    return new Contract(address, _abi, signerOrProvider) as ERC20Mock;
  }
}
