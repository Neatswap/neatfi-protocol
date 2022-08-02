/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IBeaconUpgradeable,
  IBeaconUpgradeableInterface,
} from "../../../interfaces/proxyInterfaces/IBeaconUpgradeable";

const _abi = [
  {
    inputs: [],
    name: "implementation",
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
];

export class IBeaconUpgradeable__factory {
  static readonly abi = _abi;
  static createInterface(): IBeaconUpgradeableInterface {
    return new utils.Interface(_abi) as IBeaconUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBeaconUpgradeable {
    return new Contract(address, _abi, signerOrProvider) as IBeaconUpgradeable;
  }
}
