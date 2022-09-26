import { expect } from "chai";
import { ethers } from "hardhat";
import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";

import {
  deployERC20Mock,
  deployNeatFiProtocolStorageV1,
  deployAssetTransferV1,
} from "../../common/helpers/deploymentHelper";

import buildToken from "../../common/helpers/tokenHelper";
import buildMakeOrder from "../../common/helpers/neatFiProtocolStorageHelper";
import AssetOrderStatus from "../../common/enums/assetOrderStatus";
import AssetOrderType from "../../common/enums/assetOrderType";
import ONE_DAY_IN_MILLI_SECS from "../../common/constants/time";

describe("AssetTransferV1", () => {
  const deployAssetTransfer = async () => {
    const [deployer, protocolAdmin, nonAdmin] = await ethers.getSigners();

    const deployerAddress = await deployer.getAddress();
    const protocolAdminAddress = await protocolAdmin.getAddress();
    const nonAdminAddress = await nonAdmin.getAddress();

    const neatFiProtocolStorageV1 = await deployNeatFiProtocolStorageV1(10);

    const assetTransferV1 = await deployAssetTransferV1(
      neatFiProtocolStorageV1
    );

    const erc20Mock = await deployERC20Mock(nonAdminAddress);

    const authorizedOperatorRole = await assetTransferV1.AUTHORIZED_OPERATOR();

    await assetTransferV1
      .connect(deployer)
      .grantRole(authorizedOperatorRole, deployerAddress);

    await neatFiProtocolStorageV1
      .connect(deployer)
      .grantRole(authorizedOperatorRole, deployerAddress);

    await neatFiProtocolStorageV1
      .connect(deployer)
      .grantRole(authorizedOperatorRole, assetTransferV1.address);

    await erc20Mock.connect(nonAdmin).approve(assetTransferV1.address, 1000000);

    const token = buildToken(erc20Mock);

    const mockActorKey =
      "0x289ee93e07df6282d6aa058d1080e7eb2f905bd675a2071583a40b1cb3c96baa";

    const makeOrder = buildMakeOrder(
      mockActorKey,
      [token],
      neatFiProtocolStorageV1,
      nonAdminAddress
    );

    const data = "0x6f72646572";

    return {
      data,
      deployer,
      assetTransferV1,
      protocolAdmin,
      protocolAdminAddress,
      nonAdmin,
      nonAdminAddress,
      deployerAddress,
      erc20Mock,
      neatFiProtocolStorageV1,
      token,
      makeOrder,
    };
  };

  describe("transferResolver", () => {
    context("when the order escrow is valid", () => {
      it("transfers the token assets of the order.", async () => {
        const {
          deployer,
          nonAdminAddress,
          neatFiProtocolStorageV1,
          assetTransferV1,
          makeOrder,
          data,
          deployerAddress,
          erc20Mock,
        } = await loadFixture(deployAssetTransfer);

        const { orderHash, listingTime } = await makeOrder(AssetOrderType.SELL);

        const order = await neatFiProtocolStorageV1.getOrder(orderHash);

        await time.increaseTo(listingTime + 5 * ONE_DAY_IN_MILLI_SECS);

        await assetTransferV1
          .connect(deployer)
          .transferResolver(order, nonAdminAddress, deployerAddress, data);

        const balanceOfDeployer = await erc20Mock
          .connect(deployer)
          .balanceOf(deployerAddress);

        expect(balanceOfDeployer).to.eq("100");
      });
    });
  });
});
