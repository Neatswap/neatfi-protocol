/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPaymentsResolver,
  IPaymentsResolverInterface,
} from "../../../interfaces/paymentsResolverInterfaces/IPaymentsResolver";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "dutchAuctionFeeResolver",
    outputs: [
      {
        internalType: "uint256",
        name: "makerEarnings",
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
        name: "value",
        type: "uint256",
      },
    ],
    name: "englishAuctionFeeResolver",
    outputs: [
      {
        internalType: "uint256",
        name: "makerEarnings",
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
        name: "value",
        type: "uint256",
      },
    ],
    name: "sellFeeResolver",
    outputs: [
      {
        internalType: "uint256",
        name: "makerEarnings",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "swapFeeResolver",
    outputs: [
      {
        internalType: "uint256",
        name: "feeToBePaid",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IPaymentsResolver__factory {
  static readonly abi = _abi;
  static createInterface(): IPaymentsResolverInterface {
    return new utils.Interface(_abi) as IPaymentsResolverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPaymentsResolver {
    return new Contract(address, _abi, signerOrProvider) as IPaymentsResolver;
  }
}
