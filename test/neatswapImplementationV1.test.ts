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

import ONE_DAY_IN_MILLI_SECS from "./common/constants/time";
import AssetOrderStatus from "./common/enums/assetOrderStatus";
import AssetOrderType from "./common/enums/assetOrderType";
import TokenType from "./common/enums/tokenType";

describe("NeatSwapImplementationV1", () => {
  const deployNeatSwapImplementationV1 = async () => {
    const [deployer, protocolAdmin, makerNonAdmin, bidder] =
      await ethers.getSigners();

    const deployerAddress = await deployer.getAddress();
    const protocolAdminAddress = await protocolAdmin.getAddress();
    const makerNonAdminAddress = await makerNonAdmin.getAddress();
    const bidderAddress = await bidder.getAddress();

    const actorFactoryV1 = await deployActorFactorV1();
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

    const erc20Mock = await deployERC20Mock(makerNonAdminAddress);
    //const erc721Mock = await deplo
    const mockNeatToken = await deployERC20Mock(deployerAddress);

    const neatFiProtocolTreasuryV1 = await deployNeatFiProtocolTreasuryV1(
      mockNeatToken
    );

    await erc20Mock
      .connect(makerNonAdmin)
      .mint(makerNonAdminAddress, "1000000000000000000000");

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

    // grant roles
    const authorizedOperatorRole = await assetSellV1.AUTHORIZED_OPERATOR();
    const protocolAdminRole = await assetSellV1.PROTOCOL_ADMIN();

    await assetSwapV1.grantRole(authorizedOperatorRole, neatFiV1.address);
    await assetSellV1.grantRole(authorizedOperatorRole, neatFiV1.address);
    await assetAuctionV1.grantRole(authorizedOperatorRole, neatFiV1.address);
    await neatFiProtocolStorageV1.grantRole(
      authorizedOperatorRole,
      neatFiV1.address
    );
    await neatFiProtocolStorageV1.grantRole(
      authorizedOperatorRole,
      neatFiV1.address
    );
    await paymentsResolverOperationsV1.grantRole(
      authorizedOperatorRole,
      neatFiV1.address
    );
    await protocolSettingsV1.grantRole(
      authorizedOperatorRole,
      neatFiV1.address
    );

    await neatFiV1.grantRole(protocolAdminRole, protocolAdminAddress);
    await actorFactoryV1.grantRole(protocolAdminRole, protocolAdminAddress);
    await actorFactoryV1.grantRole(authorizedOperatorRole, deployerAddress);

    const defaultAdminRole = await neatSwap.DEFAULT_ADMIN_ROLE();

    // grant approvals
    await erc20MockOne
      .connect(makerNonAdmin)
      .approve(assetTransferV1.address, "1000000000000000000000000");

    await erc20MockTwo
      .connect(bidder)
      .approve(assetTransferV1.address, "1000000000000000000000000");

    // get actor key
    await neatSwap.requestActorKey();

    await actorFactoryV1
      .connect(protocolAdmin)
      .approveAndGenerateActorKey(neatSwap.address);

    const actorKey = await (
      await actorFactoryV1.actorInfo(neatSwap.address)
    ).actorKey;

    const sellOrderData = [
      [erc20MockOne.address, 0, 100, TokenType.ERC20],
      AssetOrderType.SELL,
      (await time.latest()) + (30 * ONE_DAY_IN_MILLI_SECS) / 1000,
      "1000000000000000000",
      actorKey,
    ];

    const swapOrderData = [
      [erc20MockOne.address, 0, 0, TokenType.ERC721],
      AssetOrderType.SELL,
      (await time.latest()) + (30 * ONE_DAY_IN_MILLI_SECS) / 1000,
      "1000000000000000000",
      actorKey,
    ];

    const data = "0x6f72646572";

    return {
      bidder,
      deployer,
      bidderAddress,
      protocolAdmin,
      protocolAdminAddress,
      makerNonAdmin,
      makerNonAdminAddress,
      deployerAddress,
      erc20Mock,
      assetSellV1,
      actorFactoryV1,
      neatFiProtocolStorageV1,
      data,
      actorKey,
      neatSwap,
      defaultAdminRole,
    };
  };

  describe("receive", () => {
    it("fires an event when this contract receives Ether", async () => {
      const { deployer, neatSwap } = await loadFixture(
        deployNeatSwapImplementationV1
      );

      await expect(
        deployer.sendTransaction({
          to: neatSwap.address,
          value: ethers.utils.parseEther("1.0"),
        })
      )
        .to.emit(neatSwap, "EtherReceived")
        .withArgs(deployer.address, ethers.utils.parseEther("1.0"));
    });
  });

  describe("changeFeeDistributionAddress", () => {
    context(
      "when caller is the default admin of the implementation contract",
      () => {
        it("changes the protocol fee distribution address", async () => {
          const { deployer, neatSwap, actorFactoryV1 } = await loadFixture(
            deployNeatSwapImplementationV1
          );

          //using actorFactoryV1.address for test purpose
          await neatSwap
            .connect(deployer)
            .changeFeeDistributionAddress(actorFactoryV1.address);

          const feeDistributionAddress = await actorFactoryV1
            .connect(deployer)
            .getFeeDistributionAddress(neatSwap.address);

          expect(feeDistributionAddress).to.eq(actorFactoryV1.address);
        });
      }
    );
    context("when caller is not the admin", () => {
      it("returns an error", async () => {
        const {
          makerNonAdmin,
          neatSwap,
          actorFactoryV1,
          defaultAdminRole,
          makerNonAdminAddress,
        } = await loadFixture(deployNeatSwapImplementationV1);

        await expect(
          neatSwap
            .connect(makerNonAdmin)
            .changeFeeDistributionAddress(actorFactoryV1.address)
        ).to.be.revertedWith(
          `AccessControl: account ${makerNonAdminAddress.toLowerCase()} is missing role ${defaultAdminRole}`
        );
      });
    });

    describe("makeOrder", () => {
      context.only("when order data is valid", () => {
        it("creates an order", async () => {
          const { deployer, neatSwap, actorFactoryV1 } = await loadFixture(
            deployNeatSwapImplementationV1
          );
        });
      });
    });
  });

  // swap order but value is wrong case
  // no value case

  // manually create order
  //describe("makeOrder");

  describe("buyItNow", () => {
    context("when the order is valid", () => {
      it("changes the order status to CLOSED", async () => {
        const { data, neatFiProtocolStorageV1, bidder, neatSwap } =
          await loadFixture(deployNeatSwapImplementationV1);
      });
    });
  });
});
