/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IAccessControlUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControlUpgradeable__factory>;
    getContractFactory(
      name: "IActorFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IActorFactory__factory>;
    getContractFactory(
      name: "IAssetTransfer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAssetTransfer__factory>;
    getContractFactory(
      name: "INeatFi",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INeatFi__factory>;
    getContractFactory(
      name: "IAssetAuction",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAssetAuction__factory>;
    getContractFactory(
      name: "IAssetSell",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAssetSell__factory>;
    getContractFactory(
      name: "IAssetSwap",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAssetSwap__factory>;
    getContractFactory(
      name: "IPaymentsResolver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPaymentsResolver__factory>;
    getContractFactory(
      name: "IProtocolSettings",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IProtocolSettings__factory>;
    getContractFactory(
      name: "IBeaconUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBeaconUpgradeable__factory>;
    getContractFactory(
      name: "INeatFiProtocolStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INeatFiProtocolStorage__factory>;
    getContractFactory(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165Upgradeable__factory>;
    getContractFactory(
      name: "AccessControlUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControlUpgradeable__factory>;
    getContractFactory(
      name: "RoleConstantsUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RoleConstantsUpgradeable__factory>;
    getContractFactory(
      name: "ActorFactoryEventsUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ActorFactoryEventsUpgradeable__factory>;
    getContractFactory(
      name: "ActorFactoryOperationsUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ActorFactoryOperationsUpgradeable__factory>;
    getContractFactory(
      name: "ActorFactoryStorageUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ActorFactoryStorageUpgradeable__factory>;
    getContractFactory(
      name: "ActorFactoryV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ActorFactoryV1__factory>;
    getContractFactory(
      name: "AssetTransferOperationsUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AssetTransferOperationsUpgradeable__factory>;
    getContractFactory(
      name: "AssetTransferV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AssetTransferV1__factory>;
    getContractFactory(
      name: "AssetAuctionEventsUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AssetAuctionEventsUpgradeable__factory>;
    getContractFactory(
      name: "AssetAuctionOperationsUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AssetAuctionOperationsUpgradeable__factory>;
    getContractFactory(
      name: "AssetAuctionStorageUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AssetAuctionStorageUpgradeable__factory>;
    getContractFactory(
      name: "AssetAuctionV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AssetAuctionV1__factory>;
    getContractFactory(
      name: "AssetSellOperationsUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AssetSellOperationsUpgradeable__factory>;
    getContractFactory(
      name: "AssetSellV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AssetSellV1__factory>;
    getContractFactory(
      name: "AssetSwapEventsUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AssetSwapEventsUpgradeable__factory>;
    getContractFactory(
      name: "AssetSwapOperationsUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AssetSwapOperationsUpgradeable__factory>;
    getContractFactory(
      name: "AssetSwapStorageUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AssetSwapStorageUpgradeable__factory>;
    getContractFactory(
      name: "AssetSwapV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AssetSwapV1__factory>;
    getContractFactory(
      name: "PaymentsResolverOperationsUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PaymentsResolverOperationsUpgradeable__factory>;
    getContractFactory(
      name: "PaymentsResolverOperationsV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PaymentsResolverOperationsV1__factory>;
    getContractFactory(
      name: "NeatFiProtocolOperationsUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NeatFiProtocolOperationsUpgradeable__factory>;
    getContractFactory(
      name: "ProtocolSettingsV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProtocolSettingsV1__factory>;
    getContractFactory(
      name: "AssetEventsUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AssetEventsUpgradeable__factory>;
    getContractFactory(
      name: "AssetMappingsUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AssetMappingsUpgradeable__factory>;
    getContractFactory(
      name: "AssetStorageSettingsUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AssetStorageSettingsUpgradeable__factory>;
    getContractFactory(
      name: "AssetStorageOperationsUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AssetStorageOperationsUpgradeable__factory>;
    getContractFactory(
      name: "NeatFiProtocolStorageV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NeatFiProtocolStorageV1__factory>;
    getContractFactory(
      name: "NeatFiProtocolTreasuryV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NeatFiProtocolTreasuryV1__factory>;
    getContractFactory(
      name: "ERC1967UpgradeUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967UpgradeUpgradeable__factory>;
    getContractFactory(
      name: "UUPSUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UUPSUpgradeable__factory>;
    getContractFactory(
      name: "ERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165Upgradeable__factory>;
    getContractFactory(
      name: "ERC20Mock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Mock__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "NeatFiV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NeatFiV1__factory>;
    getContractFactory(
      name: "NeatSwapImplementationV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NeatSwapImplementationV1__factory>;

    getContractAt(
      name: "IAccessControlUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControlUpgradeable>;
    getContractAt(
      name: "IActorFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IActorFactory>;
    getContractAt(
      name: "IAssetTransfer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAssetTransfer>;
    getContractAt(
      name: "INeatFi",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INeatFi>;
    getContractAt(
      name: "IAssetAuction",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAssetAuction>;
    getContractAt(
      name: "IAssetSell",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAssetSell>;
    getContractAt(
      name: "IAssetSwap",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAssetSwap>;
    getContractAt(
      name: "IPaymentsResolver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPaymentsResolver>;
    getContractAt(
      name: "IProtocolSettings",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IProtocolSettings>;
    getContractAt(
      name: "IBeaconUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBeaconUpgradeable>;
    getContractAt(
      name: "INeatFiProtocolStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INeatFiProtocolStorage>;
    getContractAt(
      name: "IERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC165Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165Upgradeable>;
    getContractAt(
      name: "AccessControlUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControlUpgradeable>;
    getContractAt(
      name: "RoleConstantsUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RoleConstantsUpgradeable>;
    getContractAt(
      name: "ActorFactoryEventsUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ActorFactoryEventsUpgradeable>;
    getContractAt(
      name: "ActorFactoryOperationsUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ActorFactoryOperationsUpgradeable>;
    getContractAt(
      name: "ActorFactoryStorageUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ActorFactoryStorageUpgradeable>;
    getContractAt(
      name: "ActorFactoryV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ActorFactoryV1>;
    getContractAt(
      name: "AssetTransferOperationsUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AssetTransferOperationsUpgradeable>;
    getContractAt(
      name: "AssetTransferV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AssetTransferV1>;
    getContractAt(
      name: "AssetAuctionEventsUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AssetAuctionEventsUpgradeable>;
    getContractAt(
      name: "AssetAuctionOperationsUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AssetAuctionOperationsUpgradeable>;
    getContractAt(
      name: "AssetAuctionStorageUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AssetAuctionStorageUpgradeable>;
    getContractAt(
      name: "AssetAuctionV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AssetAuctionV1>;
    getContractAt(
      name: "AssetSellOperationsUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AssetSellOperationsUpgradeable>;
    getContractAt(
      name: "AssetSellV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AssetSellV1>;
    getContractAt(
      name: "AssetSwapEventsUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AssetSwapEventsUpgradeable>;
    getContractAt(
      name: "AssetSwapOperationsUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AssetSwapOperationsUpgradeable>;
    getContractAt(
      name: "AssetSwapStorageUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AssetSwapStorageUpgradeable>;
    getContractAt(
      name: "AssetSwapV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AssetSwapV1>;
    getContractAt(
      name: "PaymentsResolverOperationsUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PaymentsResolverOperationsUpgradeable>;
    getContractAt(
      name: "PaymentsResolverOperationsV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PaymentsResolverOperationsV1>;
    getContractAt(
      name: "NeatFiProtocolOperationsUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NeatFiProtocolOperationsUpgradeable>;
    getContractAt(
      name: "ProtocolSettingsV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ProtocolSettingsV1>;
    getContractAt(
      name: "AssetEventsUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AssetEventsUpgradeable>;
    getContractAt(
      name: "AssetMappingsUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AssetMappingsUpgradeable>;
    getContractAt(
      name: "AssetStorageSettingsUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AssetStorageSettingsUpgradeable>;
    getContractAt(
      name: "AssetStorageOperationsUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AssetStorageOperationsUpgradeable>;
    getContractAt(
      name: "NeatFiProtocolStorageV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NeatFiProtocolStorageV1>;
    getContractAt(
      name: "NeatFiProtocolTreasuryV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NeatFiProtocolTreasuryV1>;
    getContractAt(
      name: "ERC1967UpgradeUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967UpgradeUpgradeable>;
    getContractAt(
      name: "UUPSUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UUPSUpgradeable>;
    getContractAt(
      name: "ERC165Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165Upgradeable>;
    getContractAt(
      name: "ERC20Mock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Mock>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "NeatFiV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NeatFiV1>;
    getContractAt(
      name: "NeatSwapImplementationV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NeatSwapImplementationV1>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
