import { expect } from "chai";
import { ethers } from "hardhat";
import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";

import {
  deployERC20Mock,
  deployNeatFiProtocolStorageV1,
  deployAssetTransferV1,
  deployAssetSwapV1,
  deployAssetSellV1,
  deployAssetAuctionV1,
  deployPaymentsResolverOperationsV1,
  deployProtocolSettingsV1,
  deployActorFactorV1,
  deployNeatFiProtocolTreasuryV1,
  deployNeatFiV1,
  deployNeatswapImplementationV1,
} from "./common/helpers/deploymentHelper";

import grantRoles from "./common/helpers/assetSellHelper";
import requestActorKey from "./common/helpers/actorFactoryHelper";
import { buildToken } from "./common/helpers/tokenHelper";
import { buildMakeOrder } from "./common/helpers/neatFiProtocolStorageHelper";
import ONE_DAY_IN_MILLI_SECS from "./common/constants/time";
import AssetOrderStatus from "./common/enums/assetOrderStatus";
import AssetOrderType from "./common/enums/assetOrderType";

describe("NeatSwapImplementationV1", () => {
  const deployNeatSwapImplementationV1 = async () => {
    const [deployer, protocolAdmin, nonAdmin] = await ethers.getSigners();

    const deployerAddress = await deployer.getAddress();
    const protocolAdminAddress = await protocolAdmin.getAddress();
    const nonAdminAddress = await nonAdmin.getAddress();

    const neatFiProtocolStorageV1 = await deployNeatFiProtocolStorageV1(10);

    const assetTransferV1 = await deployAssetTransferV1(
      neatFiProtocolStorageV1
    );

    const assetSwapV1 = await deployAssetSwapV1(
      neatFiProtocolStorageV1,
      assetTransferV1
    );
    const assetSellV1 = await deployAssetSellV1(
      neatFiProtocolStorageV1,
      assetTransferV1
    );
    const assetAuctionV1 = await deployAssetAuctionV1(
      neatFiProtocolStorageV1,
      assetTransferV1
    );

    const protocolSettingsV1 = await deployProtocolSettingsV1();

    const paymentsResolverOperationsV1 =
      await deployPaymentsResolverOperationsV1(protocolSettingsV1);

    const actorFactoryV1 = await deployActorFactorV1();

    const erc20Mock = await deployERC20Mock(nonAdminAddress);
    const neatFiProtocolTreasuryV1 = await deployNeatFiProtocolTreasuryV1(
      erc20Mock
    );

    const neatFiV1 = await deployNeatFiV1(
      assetSwapV1,
      assetSellV1,
      assetAuctionV1,
      paymentsResolverOperationsV1,
      protocolSettingsV1,
      neatFiProtocolStorageV1,
      actorFactoryV1,
      neatFiProtocolTreasuryV1,
      true
    );

    const neatSwap = await deployNeatswapImplementationV1(neatFiV1);

    const authorizedOperatorRole = await assetSellV1.AUTHORIZED_OPERATOR();
    const protocolAdminRole = await assetSellV1.PROTOCOL_ADMIN();

    await actorFactoryV1
      .connect(deployer)
      .grantRole(authorizedOperatorRole, deployerAddress);
    await actorFactoryV1
      .connect(deployer)
      .grantRole(protocolAdminRole, protocolAdmin.address);

    await neatFiProtocolStorageV1
      .connect(deployer)
      .grantRole(authorizedOperatorRole, deployerAddress);

    await neatFiProtocolStorageV1.grantRole(
      authorizedOperatorRole,
      assetSellV1.address
    );
    await neatFiProtocolStorageV1.grantRole(
      authorizedOperatorRole,
      assetTransferV1.address
    );
    await assetTransferV1.grantRole(
      authorizedOperatorRole,
      assetSellV1.address
    );

    await assetSellV1.grantRole(authorizedOperatorRole, deployerAddress);
    await assetSellV1.grantRole(protocolAdminRole, protocolAdmin.address);
    await assetSellV1.grantRole(authorizedOperatorRole, nonAdminAddress);

    await erc20Mock.connect(nonAdmin).approve(assetTransferV1.address, 1000000);

    await actorFactoryV1.connect(deployer).requestActorKey(neatSwap.address);
    await actorFactoryV1
      .connect(protocolAdmin)
      .approveAndGenerateActorKey(neatSwap.address);

    const actorInfo = await actorFactoryV1.actorInfo(neatSwap.address);

    const token = buildToken(erc20Mock);

    const makeOrder = buildMakeOrder(
      actorInfo.actorKey,
      [token],
      neatFiProtocolStorageV1,
      nonAdminAddress
    );

    const buyer = deployerAddress;
    const data = "0x6f72646572";

    return {
      deployer,
      protocolAdmin,
      protocolAdminAddress,
      nonAdmin,
      nonAdminAddress,
      deployerAddress,
      erc20Mock,
      assetSellV1,
      neatFiProtocolStorageV1,
      buyer,
      data,
      token,
      makeOrder,
      neatSwap,
    };
  };

  describe("buyItNow", () => {
    context("when the order is valid", () => {
      it("changes the order status to CLOSED", async () => {
        const {
          data,
          neatFiProtocolStorageV1,
          makeOrder,
          protocolAdmin,
          neatSwap,
        } = await loadFixture(deployNeatSwapImplementationV1);

        const { orderHash, purchaseValue, listingTime } = await makeOrder(
          AssetOrderType.SELL
        );

        await time.increaseTo(listingTime + 5 * ONE_DAY_IN_MILLI_SECS);

        await neatSwap
          .connect(protocolAdmin)
          .buyItNow(orderHash, data, { value: purchaseValue });

        const order = await neatFiProtocolStorageV1.getOrder(orderHash);

        expect(order.status).to.eq(AssetOrderStatus.CLOSED);
      });
    });
  });
});
