/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  AssetSwapOperationsUpgradeable,
  AssetSwapOperationsUpgradeableInterface,
} from "../../../../lib/modules/assetSwap/AssetSwapOperationsUpgradeable";

const _abi = [
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
];

const _bytecode =
  "0x6080806040523461001657610860908161001c8239f35b600080fdfe608060408181526004918236101561001657600080fd5b600092833560e01c9182630153432d146103bd5750816301ffc9a714610367578163153d73341461032c578163248a9ca3146103015781632f2ff15d14610260578163354f93601461022157816336568abe1461019a578163675506231461016e5750806391d148541461013457806394658d7e146100fa578063a217fddf146100e05763d547741f146100a957600080fd5b346100dc576100d96100ba366103f7565b9080855260656020526100d4600185872001543390610457565b61078b565b51f35b5080fd5b50346100dc57816003193601126100dc5751908152602090f35b50346100dc57816003193601126100dc57602090517f0245b6cbab6b03e029f6c88bff9595f9f5c30170f52598c3459ee71476ad59c18152f35b50346100dc5760ff81602093610149366103f7565b908252606586528282206001600160a01b039091168252855220549151911615158152f35b9050346101965760203660031901126101965760209282913581526098845220549051908152f35b8280fd5b905034610196576101aa366103f7565b91336001600160a01b038416036101c65750906100d99161078b565b608490602085519162461bcd60e51b8352820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152fd5b905034610196578160031936011261019657602435903583526097602052818320805482101561025c57835260209283902001549051908152f35b8380fd5b5050346100dc57610270366103f7565b8184526065602052610289600184862001543390610457565b818452606560209081528385206001600160a01b039092168086529190528284205460ff16156102b857505051f35b8184526065602052828420818552602052828420600160ff1982541617905533917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d858551a451f35b9050346101965760203660031901126101965781602093600192358152606585522001549051908152f35b5050346100dc57816003193601126100dc57602090517fec67990198cb34a8467e86e518c87d52127fe5b916e0095d8047a8355e37f63e8152f35b90503461019657602036600319011261019657359063ffffffff60e01b82168092036101965760209250637965db0b60e01b82149182156103ac575b50519015158152f35b6301ffc9a760e01b149150386103a3565b8490346100dc57816003193601126100dc57807fdb1507a7bd981676c03bdaae9e28ab8baadf8a4eee150a8b6a2dd2713db13a6460209252f35b604090600319011261041d57600435906024356001600160a01b038116810361041d5790565b600080fd5b918091926000905b82821061044257501161043b575050565b6000910152565b9150806020918301518186015201829161042a565b6000908082526020606581526040938484209060018060a01b031690818552825260ff85852054161561048b575050505050565b92845192606084019467ffffffffffffffff9585811087821117610777578752602a85528385019187368437855115610763576030835385519160019283101561074f576078602188015360295b8381116106e5575061060f5787519060808201828110898211176106d1578952604282528582019260603685378251156106bd576030845382518110156106bd57607860218401536041905b80821161065157505061060f57916105a49493918893606798995196879361057a8886019a7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008c525180926037880190610422565b8401917001034b99036b4b9b9b4b733903937b6329607d1b60378401525180936048840190610422565b0103602881018552601f199687910116840196848810908811176105fb5750926105f260449593601f938880975262461bcd60e51b8752600487015251809281602488015287870190610422565b01168101030190fd5b634e487b7160e01b81526041600452602490fd5b60648589519062461bcd60e51b825280600483015260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b9091600f811660108110156106a9576f181899199a1a9b1b9c1cb0b131b232b360811b901a6106808486610803565b5360041c918015610695576000190190610525565b634e487b7160e01b87526011600452602487fd5b634e487b7160e01b88526032600452602488fd5b634e487b7160e01b86526032600452602486fd5b634e487b7160e01b86526041600452602486fd5b90600f8116601081101561073b576f181899199a1a9b1b9c1cb0b131b232b360811b901a610713838a610803565b5360041c90801561072757600019016104d9565b634e487b7160e01b86526011600452602486fd5b634e487b7160e01b87526032600452602487fd5b634e487b7160e01b85526032600452602485fd5b634e487b7160e01b84526032600452602484fd5b634e487b7160e01b84526041600452602484fd5b906000918083526065602052604083209160018060a01b03169182845260205260ff6040842054166107bc57505050565b8083526065602052604083208284526020526040832060ff1981541690557ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b3393604051a4565b908151811015610814570160200190565b634e487b7160e01b600052603260045260246000fdfea26469706673582212208e2cf37787d3aefe10634e1fb9fcd5a818a6dea945324848de5a882abe53723864736f6c634300080f0033";

type AssetSwapOperationsUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetSwapOperationsUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetSwapOperationsUpgradeable__factory extends ContractFactory {
  constructor(...args: AssetSwapOperationsUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AssetSwapOperationsUpgradeable> {
    return super.deploy(
      overrides || {}
    ) as Promise<AssetSwapOperationsUpgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AssetSwapOperationsUpgradeable {
    return super.attach(address) as AssetSwapOperationsUpgradeable;
  }
  override connect(signer: Signer): AssetSwapOperationsUpgradeable__factory {
    return super.connect(signer) as AssetSwapOperationsUpgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetSwapOperationsUpgradeableInterface {
    return new utils.Interface(_abi) as AssetSwapOperationsUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetSwapOperationsUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AssetSwapOperationsUpgradeable;
  }
}
