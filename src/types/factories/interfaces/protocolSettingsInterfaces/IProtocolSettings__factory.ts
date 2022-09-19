/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IProtocolSettings,
  IProtocolSettingsInterface,
} from "../../../interfaces/protocolSettingsInterfaces/IProtocolSettings";

const _abi = [
  {
    inputs: [],
    name: "getActorEarningsNumerator",
    outputs: [
      {
        internalType: "uint256",
        name: "actorEarningsNumerator",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDutchAuctionProtocolFeeNumerator",
    outputs: [
      {
        internalType: "uint256",
        name: "dutchAuctionFeeNumerator",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEnglishAuctionProtocolFeeNumerator",
    outputs: [
      {
        internalType: "uint256",
        name: "englishAuctionFeeNumerator",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getProtocolFeeDistributionNumerator",
    outputs: [
      {
        internalType: "uint256",
        name: "protocolFeeDistributionNumerator",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSellProtocolFeeNumerator",
    outputs: [
      {
        internalType: "uint256",
        name: "sellProtocolFeeNumerator",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSwapProtocolFee",
    outputs: [
      {
        internalType: "uint256",
        name: "swapProtocolFee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IProtocolSettings__factory {
  static readonly abi = _abi;
  static createInterface(): IProtocolSettingsInterface {
    return new utils.Interface(_abi) as IProtocolSettingsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IProtocolSettings {
    return new Contract(address, _abi, signerOrProvider) as IProtocolSettings;
  }
}