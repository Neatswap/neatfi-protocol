import { expect } from "chai";
import { ethers } from "hardhat";
import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";

import {
  deployActorFactorV1,
  deployAssetSellV1,
  deployAssetTransferV1,
  deployERC20Mock,
  deployNeatFiProtocolStorageV1,
} from "../../../common/helpers/deploymentHelper";
import grantRoles from "../../../common/helpers/assetSellHelper";
import requestActorKey from "../../../common/helpers/actorFactoryHelper";

import { buildToken } from "../../../common/helpers/tokenHelper";
import { buildMakeOrder } from "../../../common/helpers/neatFiProtocolStorageHelper";

import ONE_DAY_IN_MILLI_SECS from "../../../common/constants/time";
import AssetOrderStatus from "../../../common/enums/assetOrderStatus";
import AssetOrderType from "../../../common/enums/assetOrderType";

describe("AssetSellV1", () => {
  const deployAssetSellV1Fixture = async () => {
    const [deployer, protocolAdmin, nonAdmin] = await ethers.getSigners();

    const deployerAddress = await deployer.getAddress();
    const protocolAdminAddress = await protocolAdmin.getAddress();
    const nonAdminAddress = await nonAdmin.getAddress();

    const actorFactoryV1 = await deployActorFactorV1();
    const neatFiProtocolStorageV1 = await deployNeatFiProtocolStorageV1();
    const assetTransferV1 = await deployAssetTransferV1(
      neatFiProtocolStorageV1
    );
    const assetSellV1 = await deployAssetSellV1(
      neatFiProtocolStorageV1,
      assetTransferV1
    );
    const erc20Mock = await deployERC20Mock(nonAdminAddress);

    await grantRoles(
      actorFactoryV1,
      neatFiProtocolStorageV1,
      assetTransferV1,
      assetSellV1,
      deployer,
      deployerAddress,
      protocolAdminAddress,
      nonAdminAddress
    );

    await erc20Mock.connect(nonAdmin).approve(assetTransferV1.address, 128);

    const actorInfo = await requestActorKey(actorFactoryV1);
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
    };
  };

  describe("buyItNow", () => {
    context("when the buyer is not an authorized operator", () => {
      it("returns an error", async () => {
        const {
          nonAdminAddress,
          data,
          protocolAdmin,
          protocolAdminAddress,
          assetSellV1,
          makeOrder,
        } = await loadFixture(deployAssetSellV1Fixture);

        const { orderHash, purchaseValue, listingTime } = await makeOrder();

        const authorizedOperatorRole = await assetSellV1.AUTHORIZED_OPERATOR();

        await time.increaseTo(listingTime + 11 * ONE_DAY_IN_MILLI_SECS);

        await expect(
          assetSellV1
            .connect(protocolAdmin)
            .buyItNow(orderHash, purchaseValue, nonAdminAddress, data)
        ).to.be.revertedWith(
          `'AccessControl: account ${protocolAdminAddress.toLowerCase()} is missing role ${authorizedOperatorRole}`
        );
      });
    });

    context("when the buyer is the order maker", () => {
      it("returns an error", async () => {
        const { nonAdminAddress, data, nonAdmin, assetSellV1, makeOrder } =
          await loadFixture(deployAssetSellV1Fixture);

        const { orderHash, purchaseValue, listingTime } = await makeOrder(
          AssetOrderType.SELL
        );

        await time.increaseTo(listingTime);

        await expect(
          assetSellV1
            .connect(nonAdmin)
            .buyItNow(orderHash, purchaseValue, nonAdminAddress, data)
        ).to.be.revertedWith(
          "AssetSellOperationsUpgradeable::_buyItNow: buyer can not be the order maker"
        );
      });
    });

    context("when the order is not valid", () => {
      it("returns an error", async () => {
        const { buyer, data, assetSellV1, makeOrder } = await loadFixture(
          deployAssetSellV1Fixture
        );

        const { orderHash, purchaseValue, listingTime } = await makeOrder();

        await time.increaseTo(listingTime + 11 * ONE_DAY_IN_MILLI_SECS);

        await expect(
          assetSellV1.buyItNow(orderHash, purchaseValue, buyer, data)
        ).to.be.revertedWith(
          "AssetSellOperationsUpgradeable::_buyItNow: invalid order."
        );
      });
    });

    context("when the order type is not SELL", () => {
      it("returns an error", async () => {
        const { buyer, data, assetSellV1, makeOrder } = await loadFixture(
          deployAssetSellV1Fixture
        );

        const { orderHash, purchaseValue, listingTime } = await makeOrder(
          AssetOrderType.SWAP
        );

        await time.increaseTo(listingTime + 5 * ONE_DAY_IN_MILLI_SECS);

        await expect(
          assetSellV1.buyItNow(orderHash, purchaseValue, buyer, data)
        ).to.be.revertedWith(
          "AssetSellOperationsUpgradeable::_buyItNow: wrong order type."
        );
      });
    });

    context("when the order purchase value is wrong", () => {
      it("returns an error", async () => {
        const { buyer, data, assetSellV1, makeOrder } = await loadFixture(
          deployAssetSellV1Fixture
        );

        const {
          orderHash,
          purchaseValue: correctPurchaseValue,
          listingTime,
        } = await makeOrder();

        await time.increaseTo(listingTime + 5 * ONE_DAY_IN_MILLI_SECS);

        const wrongPurchaseValue = correctPurchaseValue + 32;

        await expect(
          assetSellV1.buyItNow(orderHash, wrongPurchaseValue, buyer, data)
        ).to.be.revertedWith(
          "AssetSellOperationsUpgradeable::_buyItNow: wrong purchase value."
        );
      });
    });

    context("when the order is valid", () => {
      it("changes the order status to CLOSED", async () => {
        const {
          nonAdmin,
          buyer,
          data,
          neatFiProtocolStorageV1,
          assetSellV1,
          makeOrder,
        } = await loadFixture(deployAssetSellV1Fixture);

        const { orderHash, purchaseValue, listingTime } = await makeOrder();

        await time.increaseTo(listingTime + 5 * ONE_DAY_IN_MILLI_SECS);

        await assetSellV1.buyItNow(orderHash, purchaseValue, buyer, data);

        const order = await neatFiProtocolStorageV1.getOrder(orderHash);

        expect(order.status).to.eq(AssetOrderStatus.CLOSED);
      });

      it("emits OrderStatusChanged event", async () => {
        const { buyer, data, neatFiProtocolStorageV1, assetSellV1, makeOrder } =
          await loadFixture(deployAssetSellV1Fixture);

        const { orderHash, purchaseValue, listingTime } = await makeOrder();

        await time.increaseTo(listingTime + 5 * ONE_DAY_IN_MILLI_SECS);

        await expect(
          assetSellV1.buyItNow(orderHash, purchaseValue, buyer, data)
        ).to.emit(neatFiProtocolStorageV1, "OrderStatusChanged");
      });

      it("transfers funds to the buyer", async () => {
        const {
          buyer,
          data,
          erc20Mock,
          assetSellV1,
          deployer,
          nonAdmin,
          token,
          makeOrder,
        } = await loadFixture(deployAssetSellV1Fixture);

        const { orderHash, purchaseValue, listingTime } = await makeOrder();

        await time.increaseTo(listingTime + 5 * ONE_DAY_IN_MILLI_SECS);

        await expect(() =>
          assetSellV1.buyItNow(orderHash, purchaseValue, buyer, data)
        ).to.changeTokenBalances(
          erc20Mock,
          [nonAdmin, deployer],
          [-token.amount, token.amount]
        );
      });

      it("emits Transfer event", async () => {
        const {
          buyer,
          data,
          erc20Mock,
          assetSellV1,
          nonAdminAddress,
          deployerAddress,
          token,
          makeOrder,
        } = await loadFixture(deployAssetSellV1Fixture);

        const { orderHash, purchaseValue, listingTime } = await makeOrder();

        await time.increaseTo(listingTime + 5 * ONE_DAY_IN_MILLI_SECS);

        await expect(
          assetSellV1.buyItNow(orderHash, purchaseValue, buyer, data)
        )
          .to.emit(erc20Mock, "Transfer")
          .withArgs(nonAdminAddress, deployerAddress, token.amount);
      });
    });
  });

  describe("updateNeatFiProtocolStorageAddress", () => {
    context("when the user is not a protocol admin", () => {
      it("returns an error", async () => {
        const { assetSellV1, nonAdmin, nonAdminAddress } = await loadFixture(
          deployAssetSellV1Fixture
        );

        const protocolAdminRole = await assetSellV1.PROTOCOL_ADMIN();

        await expect(
          assetSellV1
            .connect(nonAdmin)
            .updateNeatFiProtocolStorageAddress(
              "0x9be634797af98cb560db23260b5f7c6e98accacf"
            )
        ).to.be.revertedWith(
          `'AccessControl: account ${nonAdminAddress.toLowerCase()} is missing role ${protocolAdminRole}`
        );
      });
    });

    context("when the user is a protocol admin", () => {
      it("returns no error", async () => {
        const { assetSellV1, protocolAdmin } = await loadFixture(
          deployAssetSellV1Fixture
        );

        await expect(
          assetSellV1
            .connect(protocolAdmin)
            .updateNeatFiProtocolStorageAddress(
              "0x9be634797af98cb560db23260b5f7c6e98accacf"
            )
        ).to.not.be.reverted;
      });
    });
  });

  describe("updateAssetTransferAddress", () => {
    context("when the user is not a protocol admin", () => {
      it("returns an error", async () => {
        const { assetSellV1, nonAdmin, nonAdminAddress } = await loadFixture(
          deployAssetSellV1Fixture
        );

        const protocolAdminRole = await assetSellV1.PROTOCOL_ADMIN();

        await expect(
          assetSellV1
            .connect(nonAdmin)
            .updateAssetTransferAddress(
              "0x9be634797af98cb560db23260b5f7c6e98accacf"
            )
        ).to.be.revertedWith(
          `'AccessControl: account ${nonAdminAddress.toLowerCase()} is missing role ${protocolAdminRole}`
        );
      });
    });

    context("when the user is a protocol admin", () => {
      it("returns no error", async () => {
        const { assetSellV1, protocolAdmin } = await loadFixture(
          deployAssetSellV1Fixture
        );

        await expect(
          assetSellV1
            .connect(protocolAdmin)
            .updateAssetTransferAddress(
              "0x9be634797af98cb560db23260b5f7c6e98accacf"
            )
        ).to.not.be.reverted;
      });
    });
  });
});
