/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  RoleConstantsUpgradeable,
  RoleConstantsUpgradeableInterface,
} from "../../../lib/access/RoleConstantsUpgradeable";

const _abi = [
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
];

const _bytecode =
  "0x6080806040523461001657610124908161001c8239f35b600080fdfe6080806040526004361015601257600080fd5b600090813560e01c9081630153432d1460b257508063153d7334146079576394658d7e14603e57600080fd5b346076578060031936011260765760206040517f0245b6cbab6b03e029f6c88bff9595f9f5c30170f52598c3459ee71476ad59c18152f35b80fd5b50346076578060031936011260765760206040517fec67990198cb34a8467e86e518c87d52127fe5b916e0095d8047a8355e37f63e8152f35b90503460ea578160031936011260ea57807fdb1507a7bd981676c03bdaae9e28ab8baadf8a4eee150a8b6a2dd2713db13a6460209252f35b5080fdfea2646970667358221220c2a574f917049c3312e10357f8ce73db1d3f73b158190aa362bc17bb1ef1526064736f6c634300080f0033";

type RoleConstantsUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RoleConstantsUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RoleConstantsUpgradeable__factory extends ContractFactory {
  constructor(...args: RoleConstantsUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RoleConstantsUpgradeable> {
    return super.deploy(overrides || {}) as Promise<RoleConstantsUpgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RoleConstantsUpgradeable {
    return super.attach(address) as RoleConstantsUpgradeable;
  }
  override connect(signer: Signer): RoleConstantsUpgradeable__factory {
    return super.connect(signer) as RoleConstantsUpgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RoleConstantsUpgradeableInterface {
    return new utils.Interface(_abi) as RoleConstantsUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RoleConstantsUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RoleConstantsUpgradeable;
  }
}
