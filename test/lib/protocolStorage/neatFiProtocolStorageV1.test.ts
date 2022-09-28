import { expect } from "chai";
import { ethers } from "hardhat";
import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";

import {
  deployERC20Mock,
  deployNeatFiProtocolStorageV1,
} from "../../common/helpers/deploymentHelper";

import { grantRoles } from "../../common/helpers/neatFiProtocolStorageHelper";
import { buildToken } from "../../common/helpers/tokenHelper";
import { buildMakeOrder } from "../../common/helpers/neatFiProtocolStorageHelper";
import AssetOrderType from "../../common/enums/assetOrderType";
import ONE_DAY_IN_MILLI_SECS from "../../common/constants/time";
import AssetOrderStatus from "../../common/enums/assetOrderStatus";

describe("NeatFiProtocolStorageV1", () => {
  const deployNeatFiProtocolStorageV1Fixture = async () => {
    const [deployer, protocolAdmin, nonAdmin] = await ethers.getSigners();

    const deployerAddress = await deployer.getAddress();
    const protocolAdminAddress = await protocolAdmin.getAddress();
    const nonAdminAddress = await nonAdmin.getAddress();

    const neatFiProtocolStorageV1 = await deployNeatFiProtocolStorageV1();

    const protocolAdminRole = await neatFiProtocolStorageV1.PROTOCOL_ADMIN();
    const authorizedOperatorRole =
      await neatFiProtocolStorageV1.AUTHORIZED_OPERATOR();

    const erc20Mock = await deployERC20Mock(nonAdminAddress);

    await grantRoles(
      neatFiProtocolStorageV1,
      deployer,
      deployerAddress,
      protocolAdminAddress
    );

    const mockActorKey =
      "0x289ee93e07df6282d6aa058d1080e7eb2f905bd675a2071583a40b1cb3c96baa";

    const token = buildToken(erc20Mock);

    const makeOrder = buildMakeOrder(
      mockActorKey,
      [token],
      neatFiProtocolStorageV1,
      nonAdminAddress
    );

    const data = "0x6f72646572";

    return {
      deployer,
      protocolAdmin,
      protocolAdminAddress,
      protocolAdminRole,
      nonAdmin,
      nonAdminAddress,
      deployerAddress,
      erc20Mock,
      neatFiProtocolStorageV1,
      data,
      token,
      mockActorKey,
      authorizedOperatorRole,
      makeOrder,
    };
  };

  describe("setMaxTokenNumber", () => {
    context("when caller is a protocol admin", () => {
      it("sets the maximum number of allowed token assets per order.", async () => {
        const { protocolAdmin, neatFiProtocolStorageV1 } = await loadFixture(
          deployNeatFiProtocolStorageV1Fixture
        );

        await neatFiProtocolStorageV1
          .connect(protocolAdmin)
          .setMaxTokenNumber(11);

        const newMaxTokenNumber =
          await neatFiProtocolStorageV1.maxTokenNumber();

        expect(newMaxTokenNumber).to.eq(11);
      });
    });

    context("when caller is not a protocol admin", () => {
      it("fails to set the max token number", async () => {
        const {
          nonAdmin,
          nonAdminAddress,
          neatFiProtocolStorageV1,
          protocolAdminRole,
        } = await loadFixture(deployNeatFiProtocolStorageV1Fixture);

        await expect(
          neatFiProtocolStorageV1.connect(nonAdmin).setMaxTokenNumber(11)
        ).to.be.revertedWith(
          `'AccessControl: account ${nonAdminAddress.toLowerCase()} is missing role ${protocolAdminRole}`
        );
      });
    });
  });

  describe("makeOrder", () => {
    context("if order data is correct", () => {
      it("creates an Order Struct record", async () => {
        const { neatFiProtocolStorageV1, nonAdminAddress, makeOrder } =
          await loadFixture(deployNeatFiProtocolStorageV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.SELL);

        const order = await neatFiProtocolStorageV1.getOrder(orderHash);

        expect(order.maker).to.eq(nonAdminAddress);
      });
    });
  });

  describe("isValidOrder", () => {
    context("if order data is valid", () => {
      it("confirms the validity of the order", async () => {
        const { neatFiProtocolStorageV1, deployer, makeOrder } =
          await loadFixture(deployNeatFiProtocolStorageV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.SELL);

        await time.increaseTo(
          (await time.latest()) + 15 * ONE_DAY_IN_MILLI_SECS
        );

        expect(
          await neatFiProtocolStorageV1
            .connect(deployer)
            .callStatic.isValidOrder(orderHash)
        ).to.be.true;
      });
    });

    context("if the block.timestamp is less than the listing time", () => {
      it("fails the order validity confirmation", async () => {
        const { neatFiProtocolStorageV1, deployer, makeOrder } =
          await loadFixture(deployNeatFiProtocolStorageV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.SELL);

        await time.increaseTo(
          (await time.latest()) + 2 * ONE_DAY_IN_MILLI_SECS
        );

        await expect(
          neatFiProtocolStorageV1.connect(deployer).isValidOrder(orderHash)
        ).to.be.revertedWith(
          "AssetStorageOperationsUpgradeable::_isValidOrder: invalid order - order is not ready for operations."
        );
      });
    });

    context("if order status is not OPEN", () => {
      it("fails the order validity confirmation", async () => {
        const { neatFiProtocolStorageV1, deployer, makeOrder } =
          await loadFixture(deployNeatFiProtocolStorageV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.SELL);

        await time.increaseTo(
          (await time.latest()) + 15 * ONE_DAY_IN_MILLI_SECS
        );

        await neatFiProtocolStorageV1.changeOrderStatus(
          orderHash,
          AssetOrderStatus.CLOSED
        );

        await expect(
          neatFiProtocolStorageV1.connect(deployer).isValidOrder(orderHash)
        ).to.be.revertedWith(
          "AssetStorageOperationsUpgradeable::_isValidOrder: invalid order - order status is not OPEN"
        );
      });
    });

    context("if block.timestamp exceeds the order expiration time", () => {
      it("changes the order status to EXPIRED", async () => {
        const { neatFiProtocolStorageV1, deployer, makeOrder } =
          await loadFixture(deployNeatFiProtocolStorageV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.SELL);

        await time.increaseTo(
          (await time.latest()) + 30 * ONE_DAY_IN_MILLI_SECS
        );

        await neatFiProtocolStorageV1.connect(deployer).isValidOrder(orderHash);

        const order = await neatFiProtocolStorageV1
          .connect(deployer)
          .getOrder(orderHash);

        expect(order.status).to.eq(AssetOrderStatus.EXPIRED);
      });
    });
  });

  describe("isValidActorKey", () => {
    context("when order data is correct", () => {
      it("confirms the validity of the actor key", async () => {
        const { neatFiProtocolStorageV1, deployer, mockActorKey, makeOrder } =
          await loadFixture(deployNeatFiProtocolStorageV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.SELL);

        expect(
          await neatFiProtocolStorageV1
            .connect(deployer)
            .callStatic.isValidActorKey(orderHash, mockActorKey)
        ).to.be.true;
      });
    });

    context("when wrong actor key is provided", () => {
      it("fails to check the validity of the actor key", async () => {
        const { neatFiProtocolStorageV1, deployer, makeOrder } =
          await loadFixture(deployNeatFiProtocolStorageV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.SELL);

        await expect(
          neatFiProtocolStorageV1
            .connect(deployer)
            .isValidActorKey(
              orderHash,
              "0xe715763811e36d111cbd9467245ed02b3ee3f82f4c9864f2fdbcb968d6fd602d"
            )
        ).to.be.revertedWith(
          "AssetStorageOperationsUpgradeable::_isValidActorKey: order and actor key mismtach."
        );
      });
    });
  });

  describe("isValidOwner", () => {
    context("when claimant address is the order maker", () => {
      it("confirms the ownership of the order", async () => {
        const {
          neatFiProtocolStorageV1,
          deployer,
          nonAdminAddress,
          makeOrder,
        } = await loadFixture(deployNeatFiProtocolStorageV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.SELL);

        expect(
          await neatFiProtocolStorageV1
            .connect(deployer)
            .callStatic.isValidOwner(orderHash, nonAdminAddress)
        ).to.be.true;
      });
    });

    context("when claimant address is not the order maker", () => {
      it("fails the ownership check", async () => {
        const {
          neatFiProtocolStorageV1,
          deployer,
          deployerAddress,
          makeOrder,
        } = await loadFixture(deployNeatFiProtocolStorageV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.SELL);

        await expect(
          neatFiProtocolStorageV1
            .connect(deployer)
            .isValidOwner(orderHash, deployerAddress)
        ).to.be.revertedWith(
          "AssetStorageOperationsUpgradeable::_isValidOwner: claimant address is not the order maker."
        );
      });
    });
  });

  describe("changeOrderStartPrice", () => {
    context("when caller is the order maker", () => {
      it("changes the order start price", async () => {
        const { neatFiProtocolStorageV1, deployer, makeOrder } =
          await loadFixture(deployNeatFiProtocolStorageV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.SELL);

        await neatFiProtocolStorageV1
          .connect(deployer)
          .changeOrderStartPrice(orderHash, "2000000000000000000");

        const order = await neatFiProtocolStorageV1
          .connect(deployer)
          .getOrder(orderHash);

        expect(order.startPrice).to.eq("2000000000000000000");
      });
    });

    context("if the new price is too big", () => {
      it("fails to change the order price", async () => {
        const { neatFiProtocolStorageV1, deployer, makeOrder } =
          await loadFixture(deployNeatFiProtocolStorageV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.SELL);

        await expect(
          neatFiProtocolStorageV1
            .connect(deployer)
            .changeOrderStartPrice(orderHash, "200000000000000000000000000000")
        ).to.be.revertedWith("LimitsCheck:isWithinLimits: value is too large.");
      });
    });

    context("if the new price is too small", () => {
      it("fails to change the order price", async () => {
        const { neatFiProtocolStorageV1, deployer, makeOrder } =
          await loadFixture(deployNeatFiProtocolStorageV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.SELL);

        await expect(
          neatFiProtocolStorageV1
            .connect(deployer)
            .changeOrderStartPrice(
              orderHash,
              ethers.utils.parseEther("0.0000000000005")
            )
        ).to.be.revertedWith("LimitsCheck:isWithinLimits: value is too small.");
      });
    });
  });

  describe("changeOrderEndPrice", () => {
    context("when caller is the order maker", () => {
      it("changes the order end price", async () => {
        const { neatFiProtocolStorageV1, deployer, makeOrder } =
          await loadFixture(deployNeatFiProtocolStorageV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.SELL);

        await neatFiProtocolStorageV1
          .connect(deployer)
          .changeOrderEndPrice(orderHash, "2000000000000000000");

        const order = await neatFiProtocolStorageV1
          .connect(deployer)
          .getOrder(orderHash);

        expect(order.endPrice).to.eq("2000000000000000000");
      });
    });

    context("if the new price is too big", () => {
      it("fails to change the order price", async () => {
        const { neatFiProtocolStorageV1, deployer, makeOrder } =
          await loadFixture(deployNeatFiProtocolStorageV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.SELL);

        await expect(
          neatFiProtocolStorageV1
            .connect(deployer)
            .changeOrderEndPrice(orderHash, "200000000000000000000000000000")
        ).to.be.revertedWith("LimitsCheck:isWithinLimits: value is too large.");
      });
    });

    context("if the new price is too small", () => {
      it("fails to change the order price", async () => {
        const { neatFiProtocolStorageV1, deployer, makeOrder } =
          await loadFixture(deployNeatFiProtocolStorageV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.SELL);

        await expect(
          neatFiProtocolStorageV1
            .connect(deployer)
            .changeOrderEndPrice(
              orderHash,
              ethers.utils.parseEther("0.0000000000005")
            )
        ).to.be.revertedWith("LimitsCheck:isWithinLimits: value is too small.");
      });
    });
  });

  describe("changeOrderStatus", () => {
    context("if the caller is an authorized operator", () => {
      it("changes the order status", async () => {
        const { neatFiProtocolStorageV1, deployer, makeOrder } =
          await loadFixture(deployNeatFiProtocolStorageV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.SELL);

        await neatFiProtocolStorageV1
          .connect(deployer)
          .changeOrderStatus(orderHash, AssetOrderStatus.CLOSED);

        const order = await neatFiProtocolStorageV1
          .connect(deployer)
          .getOrder(orderHash);

        expect(order.status).to.eq(AssetOrderStatus.CLOSED);
      });
    });

    context("if the caller is not an authorized operator", () => {
      it("fails to change the order status", async () => {
        const {
          neatFiProtocolStorageV1,
          nonAdmin,
          nonAdminAddress,
          authorizedOperatorRole,
          makeOrder,
        } = await loadFixture(deployNeatFiProtocolStorageV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.SELL);

        await expect(
          neatFiProtocolStorageV1
            .connect(nonAdmin)
            .changeOrderStatus(orderHash, AssetOrderStatus.CLOSED)
        ).to.be.revertedWith(
          `'AccessControl: account ${nonAdminAddress.toLowerCase()} is missing role ${authorizedOperatorRole}`
        );
      });
    });
  });

  describe("changeOrderExpirationTime", () => {
    context("if the caller is an authorized operator", () => {
      it("changes the order expiration time", async () => {
        const { neatFiProtocolStorageV1, deployer, makeOrder } =
          await loadFixture(deployNeatFiProtocolStorageV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.SELL);

        const newExpirationTime =
          (await time.latest()) + 15 * ONE_DAY_IN_MILLI_SECS;

        await neatFiProtocolStorageV1
          .connect(deployer)
          .changeOrderExpirationTime(orderHash, newExpirationTime);

        const order = await neatFiProtocolStorageV1
          .connect(deployer)
          .getOrder(orderHash);

        expect(order.expirationTime).to.eq(newExpirationTime);
      });
    });

    context("if the caller is not an authorized operator", () => {
      it("fails to change the order expiration time", async () => {
        const {
          neatFiProtocolStorageV1,
          nonAdmin,
          nonAdminAddress,
          authorizedOperatorRole,
          makeOrder,
        } = await loadFixture(deployNeatFiProtocolStorageV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.SELL);

        const newExpirationTime =
          (await time.latest()) + 15 * ONE_DAY_IN_MILLI_SECS;

        await expect(
          neatFiProtocolStorageV1
            .connect(nonAdmin)
            .changeOrderExpirationTime(orderHash, newExpirationTime)
        ).to.be.revertedWith(
          `'AccessControl: account ${nonAdminAddress.toLowerCase()} is missing role ${authorizedOperatorRole}`
        );
      });
    });
  });
});
