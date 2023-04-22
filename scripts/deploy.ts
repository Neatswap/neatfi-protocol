/* eslint-disable no-console */
import { ethers, upgrades } from "hardhat";
import { BigNumber } from "ethers";

const main = async () => {
  const [deployer] = await ethers.getSigners();

  const FEE_DATA: {
    maxFeePerGas: BigNumber;
    maxPriorityFeePerGas: BigNumber;
    gasPrice: BigNumber;
  } = {
    maxFeePerGas: ethers.utils.parseUnits("20", "gwei"),
    maxPriorityFeePerGas: ethers.utils.parseUnits("10", "gwei"),
    gasPrice: ethers.utils.parseUnits("10", "gwei"),
  };

  const provider = await ethers.getDefaultProvider();

  provider.getFeeData = async () => FEE_DATA;

  console.log("Deploying contracts with the CEO account:", deployer.address);

  // Deploying ActorFactoryV1
  console.log("Deploying ActorFactoryV1...");
  const ActorFactoryV1 = await ethers.getContractFactory("ActorFactoryV1");
  const actorFactoryV1 = await upgrades.deployProxy(ActorFactoryV1, {
    kind: "uups",
    timeout: 360000,
    pollingInterval: 10000,
  });

  await actorFactoryV1.deployed();

  console.log("ActorFactoryV1 deployed to:", actorFactoryV1.address);

  // Deploying NeatFiProtocolStorageV1
  console.log("Deploying NeatFiProtocolStorageV1...");
  const NeatFiProtocolStorageV1 = await ethers.getContractFactory(
    "NeatFiProtocolStorageV1"
  );
  const neatFiProtocolStorageV1 = await upgrades.deployProxy(
    NeatFiProtocolStorageV1,
    [10],
    {
      kind: "uups",
      timeout: 360000,
      pollingInterval: 10000,
    }
  );

  await neatFiProtocolStorageV1.deployed();

  console.log(
    "NeatFiProtocolStorageV1 deployed to:",
    neatFiProtocolStorageV1.address
  );

  // Deployng AssetTransferV1
  console.log("Deploying AssetTransferV1...");
  const AssetTransferV1 = await ethers.getContractFactory("AssetTransferV1");
  const assetTransferV1 = await upgrades.deployProxy(
    AssetTransferV1,
    [neatFiProtocolStorageV1.address],
    {
      kind: "uups",
      timeout: 360000,
      pollingInterval: 10000,
    }
  );

  await assetTransferV1.deployed();

  console.log("AssetTransferV1 deployed to:", assetTransferV1.address);

  // Deployng AssetAuctionV1
  console.log("Deploying AssetAuctionV1...");
  const AssetAuctionV1 = await ethers.getContractFactory("AssetAuctionV1");
  const assetAuctionV1 = await upgrades.deployProxy(
    AssetAuctionV1,
    [neatFiProtocolStorageV1.address, assetTransferV1.address],
    {
      kind: "uups",
      timeout: 360000,
      pollingInterval: 10000,
    }
  );

  await assetAuctionV1.deployed();

  console.log("AssetAuctionV1 deployed to:", assetAuctionV1.address);

  // Deployng AssetSellV1
  console.log("Deploying AssetSellV1...");
  const AssetSellV1 = await ethers.getContractFactory("AssetSellV1");
  const assetSellV1 = await upgrades.deployProxy(
    AssetSellV1,
    [neatFiProtocolStorageV1.address, assetTransferV1.address],
    {
      kind: "uups",
      timeout: 360000,
      pollingInterval: 10000,
    }
  );

  await assetSellV1.deployed();

  console.log("AssetSellV1 deployed to:", assetSellV1.address);

  // Deployng AssetSwapV1
  console.log("Deploying AssetSwapV1...");
  const AssetSwapV1 = await ethers.getContractFactory("AssetSwapV1");
  const assetSwapV1 = await upgrades.deployProxy(
    AssetSwapV1,
    [neatFiProtocolStorageV1.address, assetTransferV1.address],
    {
      kind: "uups",
      timeout: 360000,
      pollingInterval: 10000,
    }
  );

  await assetSwapV1.deployed();

  console.log("AssetSwapV1 deployed to:", assetSwapV1.address);

  /**
   * Deployng ProtocolSettingsV1
   *
   * Deployment params:
   *
   * newProtocolFeeDistributionNumerator = 700 (70% from the overall fees are distributed
   *                                            to Neat token holders)
   * newSwapProtocolFeeValue = 3000000000000000 (0.003 Ether for Swap order creation)
   * newSellProtocolFeeValue = 20 (2% from the escrow value)
   * newDutchAuctionProtocolFeeNumeratorValue = 20 (2% from the escrow value)
   * newEnglishAuctionProtocolFeeNumeratorValue = 20 (2% from the escrow value)
   * newActorEarningsNumerator = 700 (70% from the gross protocol fee)
   */
  console.log("Deploying ProtocolSettingsV1...");
  const ProtocolSettingsV1 = await ethers.getContractFactory(
    "ProtocolSettingsV1"
  );
  const protocolSettingsV1 = await upgrades.deployProxy(
    ProtocolSettingsV1,
    [700, 3000000000000000, 20, 20, 20, 700],
    {
      kind: "uups",
      timeout: 360000,
      pollingInterval: 10000,
    }
  );

  await protocolSettingsV1.deployed();

  console.log("ProtocolSettingsV1 deployed to:", protocolSettingsV1.address);

  // Deployng PaymentsResolverOperationsV1
  console.log("Deploying PaymentsResolverOperationsV1...");
  const PaymentsResolverOperationsV1 = await ethers.getContractFactory(
    "PaymentsResolverOperationsV1"
  );
  const paymentsResolverOperationsV1 = await upgrades.deployProxy(
    PaymentsResolverOperationsV1,
    [protocolSettingsV1.address],
    {
      kind: "uups",
      timeout: 360000,
      pollingInterval: 10000,
    }
  );

  await paymentsResolverOperationsV1.deployed();

  console.log(
    "PaymentsResolverOperationsV1 deployed to:",
    paymentsResolverOperationsV1.address
  );

  // Deployng NeatFiProtocolTreasuryV1
  console.log("Deploying NeatFiProtocolTreasuryV1...");
  const NeatFiProtocolTreasuryV1 = await ethers.getContractFactory(
    "NeatFiProtocolTreasuryV1"
  );
  const neatFiProtocolTreasuryV1 = await upgrades.deployProxy(
    NeatFiProtocolTreasuryV1,
    // TODO: Change the params to neatToken.address and vestingEscrowV1.address
    [
      "0x38790eEc6f999D6D1801e2999b5CD1BF19e2adEe",
      "0x3cE8a7aB0Aac95B9a582A4a9D335Da6bA4D302A5",
      protocolSettingsV1.address,
    ],
    {
      kind: "uups",
      timeout: 360000,
      pollingInterval: 10000,
    }
  );

  await neatFiProtocolTreasuryV1.deployed();

  console.log(
    "NeatFiProtocolTreasuryV1 deployed to:",
    neatFiProtocolTreasuryV1.address
  );

  // Deployng NeatFiV1
  console.log("Deploying NeatFiV1...");
  const NeatFiV1 = await ethers.getContractFactory("NeatFiV1");
  const neatFiV1 = await upgrades.deployProxy(
    NeatFiV1,
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
      timeout: 360000,
      pollingInterval: 10000,
    }
  );

  await neatFiV1.deployed();

  console.log("NeatFiV1 deployed to:", neatFiV1.address);

  // Deployng NeatSwapImplementationV1
  console.log("Deploying NeatSwapImplementationV1...");
  const NeatSwapImplementationV1 = await ethers.getContractFactory(
    "NeatSwapImplementationV1"
  );
  const neatSwapImplementationV1 = await upgrades.deployProxy(
    NeatSwapImplementationV1,
    [neatFiV1.address],
    {
      kind: "uups",
      timeout: 360000,
      pollingInterval: 10000,
    }
  );

  await neatSwapImplementationV1.deployed();

  console.log(
    "NeatSwapImplementationV1 deployed to:",
    neatSwapImplementationV1.address
  );

  // Granting authorization roles

  const PROTOCOL_ADMIN_ROLE = neatFiV1.PROTOCOL_ADMIN();
  const AUTHORIZED_OPERATOR_ROLE = neatFiV1.AUTHORIZED_OPERATOR();
  const PROTOCOL_TREASURER_ROLE = neatFiV1.PROTOCOL_TREASURER();

  console.log(
    "assetTransferV1 receives AUTHORIZED_OPERATOR role in neatFiProtocolStorageV1..."
  );
  const tx00 = await neatFiProtocolStorageV1.grantRole(
    AUTHORIZED_OPERATOR_ROLE,
    assetTransferV1.address
  );
  await tx00.wait();
  console.log(
    await neatFiProtocolStorageV1.hasRole(
      AUTHORIZED_OPERATOR_ROLE,
      assetTransferV1.address
    )
  );

  console.log(
    "assetSwapV1 receives AUTHORIZEd_OPERATOR role in neatFiProtocolStorageV1..."
  );
  const tx01 = await neatFiProtocolStorageV1.grantRole(
    AUTHORIZED_OPERATOR_ROLE,
    assetSwapV1.address
  );
  await tx01.wait();
  console.log(
    await neatFiProtocolStorageV1.hasRole(
      AUTHORIZED_OPERATOR_ROLE,
      assetSwapV1.address
    )
  );

  console.log(
    "assetSellV1 receives AUTHORIZEd_OPERATOR role in neatFiProtocolStorageV1..."
  );
  const tx02 = await neatFiProtocolStorageV1.grantRole(
    AUTHORIZED_OPERATOR_ROLE,
    assetSellV1.address
  );
  await tx02.wait();
  console.log(
    await neatFiProtocolStorageV1.hasRole(
      AUTHORIZED_OPERATOR_ROLE,
      assetSellV1.address
    )
  );

  console.log(
    "assetAuctionV1 receives AUTHORIZEd_OPERATOR role in neatFiProtocolStorageV1..."
  );
  const tx03 = await neatFiProtocolStorageV1.grantRole(
    AUTHORIZED_OPERATOR_ROLE,
    assetAuctionV1.address
  );
  await tx03.wait();
  console.log(
    await neatFiProtocolStorageV1.hasRole(
      AUTHORIZED_OPERATOR_ROLE,
      assetAuctionV1.address
    )
  );

  // NeatFi receives AUTHORIZED_OPERATOR role in protocol modules
  console.log(
    "neatFiV1 receives AUTHORIZED_OPERATOR role in actorFactoryV1..."
  );
  const tx04 = await actorFactoryV1.grantRole(
    AUTHORIZED_OPERATOR_ROLE,
    neatFiV1.address
  );
  await tx04.wait();
  console.log(
    await actorFactoryV1.hasRole(AUTHORIZED_OPERATOR_ROLE, neatFiV1.address)
  );

  console.log(
    "neatFiV1 receives AUTHORIZED_OPERATOR role in neatFiProtocolStorageV1..."
  );
  const tx05 = await neatFiProtocolStorageV1.grantRole(
    AUTHORIZED_OPERATOR_ROLE,
    neatFiV1.address
  );
  await tx05.wait();
  console.log(
    await neatFiProtocolStorageV1.hasRole(
      AUTHORIZED_OPERATOR_ROLE,
      neatFiV1.address
    )
  );

  console.log(
    "neatFiV1 receives AUTHORIZED_OPERATOR role in assetTransferV1..."
  );
  const tx06 = await assetTransferV1.grantRole(
    AUTHORIZED_OPERATOR_ROLE,
    neatFiV1.address
  );
  await tx06.wait();
  console.log(
    await assetTransferV1.hasRole(AUTHORIZED_OPERATOR_ROLE, neatFiV1.address)
  );

  console.log(
    "neatFiV1 receives AUTHORIZED_OPERATOR role in assetAuctionV1..."
  );
  const tx07 = await assetAuctionV1.grantRole(
    AUTHORIZED_OPERATOR_ROLE,
    neatFiV1.address
  );
  await tx07.wait();
  console.log(
    await assetAuctionV1.hasRole(AUTHORIZED_OPERATOR_ROLE, neatFiV1.address)
  );

  console.log("neatFiV1 receives AUTHORIZED_OPERATOR role in assetSellV1...");
  const tx08 = await assetSellV1.grantRole(
    AUTHORIZED_OPERATOR_ROLE,
    neatFiV1.address
  );
  await tx08.wait();
  console.log(
    await assetSellV1.hasRole(AUTHORIZED_OPERATOR_ROLE, neatFiV1.address)
  );

  console.log(
    "neatFiV1 receives AUTHORIZED_OPERATOR role in paymentsResolverOperationsV1..."
  );
  const tx09 = await paymentsResolverOperationsV1.grantRole(
    AUTHORIZED_OPERATOR_ROLE,
    neatFiV1.address
  );
  await tx09.wait();
  console.log(
    await paymentsResolverOperationsV1.hasRole(
      AUTHORIZED_OPERATOR_ROLE,
      neatFiV1.address
    )
  );

  console.log(
    "neatFiV1 receives AUTHORIZED_OPERATOR role in protocolSettingsV1..."
  );
  const tx10 = await protocolSettingsV1.grantRole(
    AUTHORIZED_OPERATOR_ROLE,
    neatFiV1.address
  );
  await tx10.wait();
  console.log(
    await protocolSettingsV1.hasRole(AUTHORIZED_OPERATOR_ROLE, neatFiV1.address)
  );

  // CEO receives the PROTOCOL_TREASURER role
  console.log("CEO receives the PROTOCOL_TREASURER role...");
  const tx11 = await neatFiProtocolTreasuryV1.grantRole(
    PROTOCOL_TREASURER_ROLE,
    deployer.address
  );
  await tx11.wait();
  console.log(
    await neatFiProtocolTreasuryV1.hasRole(
      PROTOCOL_TREASURER_ROLE,
      deployer.address
    )
  );

  // CTO receives PROTOCOL_ADMIN role in protocol modules
  // TODO change ALL of the deployer.address below to the address of the CTO

  console.log("CTO receives the PROTOCOL_ADMIN role in actorFactoryV1...");
  const tx12 = await actorFactoryV1.grantRole(
    PROTOCOL_ADMIN_ROLE,
    "0xE312fC1E85D20a860309066b359c2AF9407762FB"
  );
  await tx12.wait();
  console.log(
    await actorFactoryV1.hasRole(
      PROTOCOL_ADMIN_ROLE,
      "0xE312fC1E85D20a860309066b359c2AF9407762FB"
    )
  );

  console.log(
    "CTO receives the PROTOCOL_ADMIN role in neatFiProtocolStorageV1..."
  );
  const tx13 = await neatFiProtocolStorageV1.grantRole(
    PROTOCOL_ADMIN_ROLE,
    "0xE312fC1E85D20a860309066b359c2AF9407762FB"
  );
  await tx13.wait();
  console.log(
    await neatFiProtocolStorageV1.hasRole(
      PROTOCOL_ADMIN_ROLE,
      "0xE312fC1E85D20a860309066b359c2AF9407762FB"
    )
  );

  console.log("CTO receives the PROTOCOL_ADMIN role in assetTransferV1...");
  const tx14 = await assetTransferV1.grantRole(
    PROTOCOL_ADMIN_ROLE,
    "0xE312fC1E85D20a860309066b359c2AF9407762FB"
  );
  await tx14.wait();
  console.log(
    await assetTransferV1.hasRole(
      PROTOCOL_ADMIN_ROLE,
      "0xE312fC1E85D20a860309066b359c2AF9407762FB"
    )
  );

  console.log("CTO receives the PROTOCOL_ADMIN role in assetAuctionV1...");
  const tx15 = await assetAuctionV1.grantRole(
    PROTOCOL_ADMIN_ROLE,
    "0xE312fC1E85D20a860309066b359c2AF9407762FB"
  );
  await tx15.wait();
  console.log(
    await assetAuctionV1.hasRole(
      PROTOCOL_ADMIN_ROLE,
      "0xE312fC1E85D20a860309066b359c2AF9407762FB"
    )
  );

  console.log("CTO receives the PROTOCOL_ADMIN role in assetSellV1...");
  const tx16 = await assetSellV1.grantRole(
    PROTOCOL_ADMIN_ROLE,
    "0xE312fC1E85D20a860309066b359c2AF9407762FB"
  );
  await tx16.wait();
  console.log(
    await assetSellV1.hasRole(
      PROTOCOL_ADMIN_ROLE,
      "0xE312fC1E85D20a860309066b359c2AF9407762FB"
    )
  );

  console.log("CTO receives the PROTOCOL_ADMIN role in assetSwapV1...");
  const tx17 = await assetSwapV1.grantRole(
    PROTOCOL_ADMIN_ROLE,
    "0xE312fC1E85D20a860309066b359c2AF9407762FB"
  );
  await tx17.wait();
  console.log(
    await assetSwapV1.hasRole(
      PROTOCOL_ADMIN_ROLE,
      "0xE312fC1E85D20a860309066b359c2AF9407762FB"
    )
  );

  console.log(
    "CTO receives the PROTOCOL_ADMIN role in paymentsResolverOperationsV1..."
  );
  const tx18 = await paymentsResolverOperationsV1.grantRole(
    PROTOCOL_ADMIN_ROLE,
    "0xE312fC1E85D20a860309066b359c2AF9407762FB"
  );
  await tx18.wait();
  console.log(
    await paymentsResolverOperationsV1.hasRole(
      PROTOCOL_ADMIN_ROLE,
      "0xE312fC1E85D20a860309066b359c2AF9407762FB"
    )
  );

  console.log("CTO receives the PROTOCOL_ADMIN role in protocolSettingsV1...");
  const tx19 = await protocolSettingsV1.grantRole(
    PROTOCOL_ADMIN_ROLE,
    "0xE312fC1E85D20a860309066b359c2AF9407762FB"
  );
  await tx19.wait();
  console.log(
    await protocolSettingsV1.hasRole(
      PROTOCOL_ADMIN_ROLE,
      "0xE312fC1E85D20a860309066b359c2AF9407762FB"
    )
  );

  console.log(
    "CTO receives the PROTOCOL_ADMIN role in neatFiProtocolTreasuryV1..."
  );
  const tx20 = await neatFiProtocolTreasuryV1.grantRole(
    PROTOCOL_ADMIN_ROLE,
    "0xE312fC1E85D20a860309066b359c2AF9407762FB"
  );
  await tx20.wait();
  console.log(
    await neatFiProtocolTreasuryV1.hasRole(
      PROTOCOL_ADMIN_ROLE,
      "0xE312fC1E85D20a860309066b359c2AF9407762FB"
    )
  );

  console.log("CTO receives the PROTOCOL_ADMIN role in neatFiV1...");
  const tx21 = await neatFiV1.grantRole(
    PROTOCOL_ADMIN_ROLE,
    "0xE312fC1E85D20a860309066b359c2AF9407762FB"
  );
  await tx21.wait();
  console.log(
    await neatFiV1.hasRole(
      PROTOCOL_ADMIN_ROLE,
      "0xE312fC1E85D20a860309066b359c2AF9407762FB"
    )
  );
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
