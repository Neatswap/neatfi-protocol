import { ethers, upgrades } from 'hardhat';
import {
  ActorFactoryV1,
  ActorFactoryV1__factory as ActorFactoryV1Factory,
  AssetSellV1,
  AssetSellV1__factory as AssetSellV1Factory,
  NeatFiProtocolStorageV1,
  NeatFiProtocolStorageV1__factory as NeatFiProtocolStorageV1Factory,
  AssetTransferV1,
  AssetTransferV1__factory as AssetTransferV1Factory,
  ERC20Mock,
} from 'src/types';

export const deployActorFactorV1 = async (): Promise<ActorFactoryV1> => {
  const actorFactoryV1Factory = await ethers.getContractFactory('ActorFactoryV1') as ActorFactoryV1Factory;
  const actorFactoryV1 = await upgrades.deployProxy(
    actorFactoryV1Factory,
    { kind: 'uups' },
  ) as ActorFactoryV1;
  await actorFactoryV1.deployed();

  return actorFactoryV1;
};

export const deployNeatFiProtocolStorageV1 = async (
  maxTokenNumberValue: number = 10,
): Promise<NeatFiProtocolStorageV1> => {
  const neatFiProtocolStorageV1Factory = await ethers.getContractFactory('NeatFiProtocolStorageV1') as NeatFiProtocolStorageV1Factory;
  const neatFiProtocolStorageV1 = await upgrades.deployProxy(
    neatFiProtocolStorageV1Factory,
    [maxTokenNumberValue],
    { kind: 'uups' },
  ) as NeatFiProtocolStorageV1;
  await neatFiProtocolStorageV1.deployed();

  return neatFiProtocolStorageV1;
};

export const deployAssetTransferV1 = async (
  neatFiProtocolStorageV1: NeatFiProtocolStorageV1,
): Promise<AssetTransferV1> => {
  const assetTransferV1Factory = await ethers.getContractFactory('AssetTransferV1') as AssetTransferV1Factory;
  const assetTransferV1 = await upgrades.deployProxy(
    assetTransferV1Factory,
    [neatFiProtocolStorageV1.address],
    { kind: 'uups' },
  ) as AssetTransferV1;
  await assetTransferV1.deployed();

  return assetTransferV1;
};

export const deployAssetSellV1 = async (
  neatFiProtocolStorageV1: NeatFiProtocolStorageV1,
  assetTransferV1: AssetTransferV1,
): Promise<AssetSellV1> => {
  const assetSellV1Factory = await ethers.getContractFactory('AssetSellV1') as AssetSellV1Factory;
  const assetSellV1 = await upgrades.deployProxy(
    assetSellV1Factory,
    [neatFiProtocolStorageV1.address, assetTransferV1.address],
    { kind: 'uups' },
  ) as AssetSellV1;
  await assetSellV1.deployed();

  return assetSellV1;
};

export const deployERC20Mock = async (
  initialAccount: string,
  initialBalance: number = 1024,
): Promise<ERC20Mock> => {
  const ERC20MockFactory = await ethers.getContractFactory('ERC20Mock');
  const erc20Mock = await ERC20MockFactory.deploy('Test', 'T', initialAccount, initialBalance);
  await erc20Mock.deployed();

  return erc20Mock;
};
