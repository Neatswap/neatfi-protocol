/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IAssetSell,
  IAssetSellInterface,
} from "../../../interfaces/moduleInterfaces/IAssetSell";

const _abi = [
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
];

export class IAssetSell__factory {
  static readonly abi = _abi;
  static createInterface(): IAssetSellInterface {
    return new utils.Interface(_abi) as IAssetSellInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAssetSell {
    return new Contract(address, _abi, signerOrProvider) as IAssetSell;
  }
}
