import { BaseContract } from "ethers";
import { ethers, upgrades } from "hardhat";
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
  AssetAuctionV1__factory as AssetAuctionV1Factory,
  PaymentsResolverOperationsV1__factory as PaymentsResolverOperationsV1Factory,
  ProtocolSettingsV1,
  ProtocolSettingsV1__factory as ProtocolSettingsV1Factory,
  PaymentsResolverOperationsV1,
  AssetSwapV1,
  AssetSwapV1__factory as AssetSwapV1Factory,
  NeatFiProtocolTreasuryV1,
  NeatFiProtocolTreasuryV1__factory as NeatFiProtocolTreasuryV1Factory,
  NeatFiV1__factory as NeatFiV1Factory,
  NeatFiV1,
  AssetAuctionV1,
  NeatSwapImplementationV1,
  NeatSwapImplementationV1__factory as NeatSwapImplementationV1Factory,
} from "src/types";

export const deployActorFactorV1 = async (): Promise<ActorFactoryV1> => {
  const actorFactoryV1Factory = (await ethers.getContractFactory(
    "ActorFactoryV1"
  )) as ActorFactoryV1Factory;
  const actorFactoryV1 = (await upgrades.deployProxy(actorFactoryV1Factory, {
    kind: "uups",
  })) as ActorFactoryV1;
  await actorFactoryV1.deployed();

  return actorFactoryV1;
};

export const deployNeatFiProtocolStorageV1 = async (
  maxTokenNumberValue: number = 10
): Promise<NeatFiProtocolStorageV1> => {
  const neatFiProtocolStorageV1Factory = (await ethers.getContractFactory(
    "NeatFiProtocolStorageV1"
  )) as NeatFiProtocolStorageV1Factory;
  const neatFiProtocolStorageV1 = (await upgrades.deployProxy(
    neatFiProtocolStorageV1Factory,
    [maxTokenNumberValue],
    { kind: "uups" }
  )) as NeatFiProtocolStorageV1;
  await neatFiProtocolStorageV1.deployed();

  return neatFiProtocolStorageV1;
};

export const deployAssetTransferV1 = async (
  neatFiProtocolStorageV1: NeatFiProtocolStorageV1
): Promise<AssetTransferV1> => {
  const assetTransferV1Factory = (await ethers.getContractFactory(
    "AssetTransferV1"
  )) as AssetTransferV1Factory;
  const assetTransferV1 = (await upgrades.deployProxy(
    assetTransferV1Factory,
    [neatFiProtocolStorageV1.address],
    { kind: "uups" }
  )) as AssetTransferV1;
  await assetTransferV1.deployed();

  return assetTransferV1;
};

export const deployAssetAuctionV1 = async (
  neatFiProtocolStorageV1: NeatFiProtocolStorageV1,
  assetTransferV1: AssetTransferV1
): Promise<AssetAuctionV1> => {
  const assetAuctionV1Factory = (await ethers.getContractFactory(
    "AssetAuctionV1"
  )) as AssetAuctionV1Factory;

  const assetAuctionV1 = (await upgrades.deployProxy(
    assetAuctionV1Factory,
    [neatFiProtocolStorageV1.address, assetTransferV1.address],
    {
      kind: "uups",
      timeout: 120000,
      pollingInterval: 10000,
    }
  )) as AssetAuctionV1;

  await assetAuctionV1.deployed();

  return assetAuctionV1;
};

export const deployAssetSellV1 = async (
  neatFiProtocolStorageV1: NeatFiProtocolStorageV1,
  assetTransferV1: AssetTransferV1
): Promise<AssetSellV1> => {
  const assetSellV1Factory = (await ethers.getContractFactory(
    "AssetSellV1"
  )) as AssetSellV1Factory;
  const assetSellV1 = (await upgrades.deployProxy(
    assetSellV1Factory,
    [neatFiProtocolStorageV1.address, assetTransferV1.address],
    { kind: "uups" }
  )) as AssetSellV1;
  await assetSellV1.deployed();

  return assetSellV1;
};

export const deployAssetSwapV1 = async (
  neatFiProtocolStorageV1: NeatFiProtocolStorageV1,
  assetTransferV1: AssetTransferV1
): Promise<AssetSwapV1> => {
  const assetSwapV1Factory = (await ethers.getContractFactory(
    "AssetSwapV1"
  )) as AssetSwapV1Factory;

  const assetSwapV1 = (await upgrades.deployProxy(
    assetSwapV1Factory,
    [neatFiProtocolStorageV1.address, assetTransferV1.address],
    { kind: "uups" }
  )) as AssetSwapV1;

  await assetSwapV1.deployed();

  return assetSwapV1;
};

export const deployPaymentsResolverOperationsV1 = async (
  protocolSettingsV1: ProtocolSettingsV1
): Promise<PaymentsResolverOperationsV1> => {
  const paymentResolverOperationsV1Factory = (await ethers.getContractFactory(
    "PaymentsResolverOperationsV1"
  )) as PaymentsResolverOperationsV1Factory;

  const paymentResolverOperationsV1 = (await upgrades.deployProxy(
    paymentResolverOperationsV1Factory,
    [protocolSettingsV1.address],
    { kind: "uups" }
  )) as PaymentsResolverOperationsV1;

  await paymentResolverOperationsV1.deployed();

  return paymentResolverOperationsV1;
};

export const deployProtocolSettingsV1 =
  async (): Promise<ProtocolSettingsV1> => {
    const protocolSettingsV1Factory = (await ethers.getContractFactory(
      "ProtocolSettingsV1"
    )) as ProtocolSettingsV1Factory;

    const protocolSettingsV1 = (await upgrades.deployProxy(
      protocolSettingsV1Factory,
      [3000000000000000, 15, 15, 15, 700],
      {
        kind: "uups",
        timeout: 120000,
        pollingInterval: 10000,
      }
    )) as ProtocolSettingsV1;

    await protocolSettingsV1.deployed();

    return protocolSettingsV1;
  };

export const deployNeatFiProtocolTreasuryV1 =
  async (): Promise<NeatFiProtocolTreasuryV1> => {
    const neatfiProtocolTreasuryV1Factory = (await ethers.getContractFactory(
      "NeatFiProtocolTreasuryV1"
    )) as NeatFiProtocolTreasuryV1Factory;

    const neatFiProtocolTreasuryV1 = (await upgrades.deployProxy(
      neatfiProtocolTreasuryV1Factory,
      // TODO: Change the params to neatToken.address and vestingEscrowV1.address
      [
        "0x38790eEc6f999D6D1801e2999b5CD1BF19e2adEe",
        "0x3cE8a7aB0Aac95B9a582A4a9D335Da6bA4D302A5",
      ],
      {
        kind: "uups",
        timeout: 120000,
        pollingInterval: 10000,
      }
    )) as NeatFiProtocolTreasuryV1;

    await neatFiProtocolTreasuryV1.deployed();

    return neatFiProtocolTreasuryV1;
  };

export const deployNeatFiV1 = async (
  assetSwapV1: AssetSwapV1,
  assetSellV1: AssetSellV1,
  assetAuctionV1: AssetAuctionV1,
  paymentsResolverOperationsV1: PaymentsResolverOperationsV1,
  protocolSettingsV1: ProtocolSettingsV1,
  neatFiProtocolStorageV1: NeatFiProtocolStorageV1,
  actorFactoryV1: ActorFactoryV1,
  neatFiProtocolTreasuryV1: NeatFiProtocolTreasuryV1,
  grantRole: boolean = false
): Promise<NeatFiV1> => {
  const neatFiV1Factory = (await ethers.getContractFactory(
    "NeatFiV1"
  )) as NeatFiV1Factory;

  const neatFiV1 = (await upgrades.deployProxy(
    neatFiV1Factory,
    [
      assetSwapV1.address,
      assetSellV1.address,
      assetAuctionV1.address,
      paymentsResolverOperationsV1.address,
      protocolSettingsV1.address,
      neatFiProtocolStorageV1.address,
      actorFactoryV1.address,
      neatFiProtocolTreasuryV1.address,
    ],
    {
      kind: "uups",
      timeout: 120000,
      pollingInterval: 10000,
    }
  )) as NeatFiV1;

  await neatFiV1.deployed();

  const grantAuthorizedOperator = async (neatFi: NeatFiV1, contract: any) => {
    const authorizedOperatorRole = await contract.AUTHORIZED_OPERATOR();
    contract.grantRole(authorizedOperatorRole, neatFi.address);
  };

  if (grantRole) {
    [
      assetSwapV1,
      assetSellV1,
      assetAuctionV1,
      paymentsResolverOperationsV1,
      protocolSettingsV1,
      neatFiProtocolStorageV1,
      actorFactoryV1,
      neatFiProtocolTreasuryV1,
    ].forEach((contract) => grantAuthorizedOperator(neatFiV1, contract));
  }

  return neatFiV1;
};

export const deployNeatswapImplementationV1 = async (
  neatFiV1: NeatFiV1
): Promise<NeatSwapImplementationV1> => {
  const neatSwapImplementationV1Factory = (await ethers.getContractFactory(
    "NeatSwapImplementationV1"
  )) as NeatSwapImplementationV1Factory;

  const neatSwapImplementationV1 = (await upgrades.deployProxy(
    neatSwapImplementationV1Factory,
    [neatFiV1.address],
    { kind: "uups" }
  )) as NeatSwapImplementationV1;

  await neatSwapImplementationV1.deployed();

  return neatSwapImplementationV1;
};

export const deployNeatSwap = async (): Promise<NeatSwapImplementationV1> => {
  const protocolStorageV1 = await deployNeatFiProtocolStorageV1(10);

  const assetTransferV1 = await deployAssetTransferV1(protocolStorageV1);

  const assetSwapV1 = await deployAssetSwapV1(
    protocolStorageV1,
    assetTransferV1
  );
  const assetSellV1 = await deployAssetSellV1(
    protocolStorageV1,
    assetTransferV1
  );
  const assetAuctionV1 = await deployAssetAuctionV1(
    protocolStorageV1,
    assetTransferV1
  );

  const protocolSettingsV1 = await deployProtocolSettingsV1();

  const paymentsResolverOperationsV1 = await deployPaymentsResolverOperationsV1(
    protocolSettingsV1
  );

  const actorFactoryV1 = await deployActorFactorV1();

  const neatFiProtocolTreasuryV1 = await deployNeatFiProtocolTreasuryV1();

  const neatFiV1 = await deployNeatFiV1(
    assetSwapV1,
    assetSellV1,
    assetAuctionV1,
    paymentsResolverOperationsV1,
    protocolSettingsV1,
    protocolStorageV1,
    actorFactoryV1,
    neatFiProtocolTreasuryV1
  );

  return deployNeatswapImplementationV1(neatFiV1);
};

export const deployERC20Mock = async (
  initialAccount: string,
  initialBalance: number = 1024
): Promise<ERC20Mock> => {
  const ERC20MockFactory = await ethers.getContractFactory("ERC20Mock");
  const erc20Mock = await ERC20MockFactory.deploy(
    "Test",
    "T",
    initialAccount,
    initialBalance
  );
  await erc20Mock.deployed();

  return erc20Mock;
};
