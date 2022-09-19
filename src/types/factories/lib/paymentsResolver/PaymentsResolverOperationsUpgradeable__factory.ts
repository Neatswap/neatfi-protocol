/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  PaymentsResolverOperationsUpgradeable,
  PaymentsResolverOperationsUpgradeableInterface,
} from "../../../lib/paymentsResolver/PaymentsResolverOperationsUpgradeable";

const _abi = [
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
];

const _bytecode =
  "0x60808060405234610016576107de908161001c8239f35b600080fdfe60806040818152600436101561001457600080fd5b600091823560e01c9081630153432d1461033b5750806301ffc9a7146102e0578063153d7334146102a6578063248a9ca31461027b5780632f2ff15d146101db57806336568abe1461015557806391d148541461011b57806394658d7e146100e1578063a217fddf146100c75763d547741f1461009057600080fd5b346100c3576100c06100a136610375565b9080855260656020526100bb6001858720015433906103d5565b610709565b51f35b5080fd5b50346100c357816003193601126100c35751908152602090f35b50346100c357816003193601126100c357602090517f0245b6cbab6b03e029f6c88bff9595f9f5c30170f52598c3459ee71476ad59c18152f35b50346100c35760ff8160209361013036610375565b908252606586528282206001600160a01b039091168252855220549151911615158152f35b50346100c35761016436610375565b90336001600160a01b0383160361017f57906100c091610709565b825162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608490fd5b50346100c3576101ea36610375565b81845260656020526102036001848620015433906103d5565b818452606560209081528385206001600160a01b039092168086529190528284205460ff161561023257505051f35b8184526065602052828420818552602052828420600160ff1982541617905533917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d858551a451f35b50346100c35760203660031901126100c3576001816020936004358152606585522001549051908152f35b50346100c357816003193601126100c357602090517fec67990198cb34a8467e86e518c87d52127fe5b916e0095d8047a8355e37f63e8152f35b50346100c35760203660031901126100c3576004359063ffffffff60e01b82168092036103375760209250637965db0b60e01b8214918215610326575b50519015158152f35b6301ffc9a760e01b1491503861031d565b8280fd5b8390346100c357816003193601126100c357807fdb1507a7bd981676c03bdaae9e28ab8baadf8a4eee150a8b6a2dd2713db13a6460209252f35b604090600319011261039b57600435906024356001600160a01b038116810361039b5790565b600080fd5b918091926000905b8282106103c05750116103b9575050565b6000910152565b915080602091830151818601520182916103a8565b6000908082526020606581526040938484209060018060a01b031690818552825260ff858520541615610409575050505050565b92845192606084019467ffffffffffffffff95858110878211176106f5578752602a855283850191873684378551156106e157603083538551916001928310156106cd576078602188015360295b838111610663575061058d57875190608082018281108982111761064f5789526042825285820192606036853782511561063b5760308453825181101561063b57607860218401536041905b8082116105cf57505061058d5791610522949391889360679899519687936104f88886019a7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008c5251809260378801906103a0565b8401917001034b99036b4b9b9b4b733903937b6329607d1b603784015251809360488401906103a0565b0103602881018552601f1996879101168401968488109088111761057957509261057060449593601f938880975262461bcd60e51b87526004870152518092816024880152878701906103a0565b01168101030190fd5b634e487b7160e01b81526041600452602490fd5b60648589519062461bcd60e51b825280600483015260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b9091600f81166010811015610627576f181899199a1a9b1b9c1cb0b131b232b360811b901a6105fe8486610781565b5360041c9180156106135760001901906104a3565b634e487b7160e01b87526011600452602487fd5b634e487b7160e01b88526032600452602488fd5b634e487b7160e01b86526032600452602486fd5b634e487b7160e01b86526041600452602486fd5b90600f811660108110156106b9576f181899199a1a9b1b9c1cb0b131b232b360811b901a610691838a610781565b5360041c9080156106a55760001901610457565b634e487b7160e01b86526011600452602486fd5b634e487b7160e01b87526032600452602487fd5b634e487b7160e01b85526032600452602485fd5b634e487b7160e01b84526032600452602484fd5b634e487b7160e01b84526041600452602484fd5b906000918083526065602052604083209160018060a01b03169182845260205260ff60408420541661073a57505050565b8083526065602052604083208284526020526040832060ff1981541690557ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b3393604051a4565b908151811015610792570160200190565b634e487b7160e01b600052603260045260246000fdfea2646970667358221220ae24bae8008d33fd4fd3427a1d0a5794c3eb18e01cc4a314a01a82d0e04e9ba564736f6c634300080f0033";

type PaymentsResolverOperationsUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PaymentsResolverOperationsUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PaymentsResolverOperationsUpgradeable__factory extends ContractFactory {
  constructor(...args: PaymentsResolverOperationsUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PaymentsResolverOperationsUpgradeable> {
    return super.deploy(
      overrides || {}
    ) as Promise<PaymentsResolverOperationsUpgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PaymentsResolverOperationsUpgradeable {
    return super.attach(address) as PaymentsResolverOperationsUpgradeable;
  }
  override connect(
    signer: Signer
  ): PaymentsResolverOperationsUpgradeable__factory {
    return super.connect(
      signer
    ) as PaymentsResolverOperationsUpgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PaymentsResolverOperationsUpgradeableInterface {
    return new utils.Interface(
      _abi
    ) as PaymentsResolverOperationsUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PaymentsResolverOperationsUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PaymentsResolverOperationsUpgradeable;
  }
}