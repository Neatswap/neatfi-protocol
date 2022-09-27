import { expect } from "chai";
import { ethers } from "hardhat";
import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";

import {
  deployERC20Mock,
  deployAssetTransferV1,
  deployAssetAuctionV1,
  deployNeatFiProtocolStorageV1,
} from "../../../common/helpers/deploymentHelper";

import grantRoles from "../../../common/helpers/assetAuctionHelper";
import buildToken from "../../../common/helpers/tokenHelper";
import buildMakeOrder from "../../../common/helpers/neatFiProtocolStorageHelper";
import AssetOrderType from "../../../common/enums/assetOrderType";
import ONE_DAY_IN_MILLI_SECS from "../../../common/constants/time";
import AssetOrderStatus from "../../../common/enums/assetOrderStatus";

describe.only("AssetAuctionV1", () => {
  const deployAssetAuctionV1Fixture = async () => {
    const [deployer, protocolAdmin, nonAdmin, bidder] =
      await ethers.getSigners();

    const deployerAddress = await deployer.getAddress();
    const protocolAdminAddress = await protocolAdmin.getAddress();
    const nonAdminAddress = await nonAdmin.getAddress();
    const bidderAddress = await bidder.getAddress();

    const neatFiProtocolStorageV1 = await deployNeatFiProtocolStorageV1();
    const assetTransferV1 = await deployAssetTransferV1(
      neatFiProtocolStorageV1
    );
    const assetAuctionV1 = await deployAssetAuctionV1(
      neatFiProtocolStorageV1,
      assetTransferV1
    );
    const erc20Mock = await deployERC20Mock(nonAdminAddress);

    const authorizedOperatorRole = await assetAuctionV1.AUTHORIZED_OPERATOR();
    const protocolAdminRole = await assetAuctionV1.PROTOCOL_ADMIN();

    await erc20Mock.connect(nonAdmin).approve(assetTransferV1.address, 1000000);

    await grantRoles(
      neatFiProtocolStorageV1,
      assetTransferV1,
      assetAuctionV1,
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
      bidder,
      bidderAddress,
      nonAdmin,
      nonAdminAddress,
      deployerAddress,
      erc20Mock,
      assetAuctionV1,
      neatFiProtocolStorageV1,
      data,
      token,
      mockActorKey,
      authorizedOperatorRole,
      makeOrder,
    };
  };

  describe("updateNeatFiProtocolStorageAddress", () => {
    context("when caller is a protocol admin", () => {
      it("updates the address of the protocol storage", async () => {
        const { protocolAdmin, assetAuctionV1 } = await loadFixture(
          deployAssetAuctionV1Fixture
        );

        // using assetAuctionV1.address for test purposes
        await expect(
          assetAuctionV1
            .connect(protocolAdmin)
            .updateNeatFiProtocolStorageAddress(assetAuctionV1.address)
        ).to.not.be.reverted;
      });
    });

    context("when caller is not a protocol admin", () => {
      it("fails to update the protocol storage address", async () => {
        const { nonAdmin, nonAdminAddress, protocolAdminRole, assetAuctionV1 } =
          await loadFixture(deployAssetAuctionV1Fixture);

        // using assetAuctionV1.address for test purposes
        await expect(
          assetAuctionV1
            .connect(nonAdmin)
            .updateNeatFiProtocolStorageAddress(assetAuctionV1.address)
        ).to.be.revertedWith(
          `AccessControl: account ${nonAdminAddress.toLowerCase()} is missing role ${protocolAdminRole}`
        );
      });
    });
  });

  describe("updateAssetTransferAddress", () => {
    context("when caller is a protocol admin", () => {
      it("updates the address of the asset transfer module", async () => {
        const { protocolAdmin, assetAuctionV1 } = await loadFixture(
          deployAssetAuctionV1Fixture
        );

        // using assetAuctionV1.address for test purposes
        await expect(
          assetAuctionV1
            .connect(protocolAdmin)
            .updateAssetTransferAddress(assetAuctionV1.address)
        ).to.not.be.reverted;
      });
    });

    context("when caller is not a protocol admin", () => {
      it("fails to update the asset transfer module address", async () => {
        const { nonAdmin, nonAdminAddress, protocolAdminRole, assetAuctionV1 } =
          await loadFixture(deployAssetAuctionV1Fixture);

        // using assetAuctionV1.address for test purposes
        await expect(
          assetAuctionV1
            .connect(nonAdmin)
            .updateAssetTransferAddress(assetAuctionV1.address)
        ).to.be.revertedWith(
          `AccessControl: account ${nonAdminAddress.toLowerCase()} is missing role ${protocolAdminRole}`
        );
      });
    });
  });

  describe("decreaseDutchAuctionPrice", () => {
    context("when the order is valid", () => {
      it("decreases the order price", async () => {
        const {
          deployer,
          nonAdminAddress,
          makeOrder,
          assetAuctionV1,
          neatFiProtocolStorageV1,
        } = await loadFixture(deployAssetAuctionV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.DUTCH_AUCTION);

        await time.increaseTo(
          (await time.latest()) + 15 * ONE_DAY_IN_MILLI_SECS
        );

        const newPrice = ethers.utils.parseEther("0.0005");

        await assetAuctionV1
          .connect(deployer)
          .decreaseDucthAuctionPrice(nonAdminAddress, orderHash, newPrice);

        const order = await neatFiProtocolStorageV1
          .connect(deployer)
          .getOrder(orderHash);

        expect(order.endPrice).to.eq(newPrice);
      });
    });

    context("when the order type is not DUTCH_AUCTION", () => {
      it("fails to decrease the order price", async () => {
        const { deployer, nonAdminAddress, makeOrder, assetAuctionV1 } =
          await loadFixture(deployAssetAuctionV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.SWAP);

        await time.increaseTo(
          (await time.latest()) + 15 * ONE_DAY_IN_MILLI_SECS
        );

        const newPrice = ethers.utils.parseEther("0.0005");

        await expect(
          assetAuctionV1
            .connect(deployer)
            .decreaseDucthAuctionPrice(nonAdminAddress, orderHash, newPrice)
        ).to.be.revertedWith(
          "AssetAuctionOperationsUpgradeable::_decreaseDucthAuctionPrice: wrong order type."
        );
      });
    });
    context("when newPrice is more than the endPrice", () => {
      it("fails to decrease the order price", async () => {
        const { deployer, nonAdminAddress, makeOrder, assetAuctionV1 } =
          await loadFixture(deployAssetAuctionV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.DUTCH_AUCTION);

        await time.increaseTo(
          (await time.latest()) + 15 * ONE_DAY_IN_MILLI_SECS
        );

        const newPrice = ethers.utils.parseEther("100");

        await expect(
          assetAuctionV1
            .connect(deployer)
            .decreaseDucthAuctionPrice(nonAdminAddress, orderHash, newPrice)
        ).to.be.revertedWith(
          "AssetAuctionOperationsUpgradeable::_decreaseDucthAuctionPrice: price can only be decreased."
        );
      });
    });
  });

  describe("increaseEnglishAuctionPrice", () => {
    context("when the order is valid", () => {
      it("increases the order price", async () => {
        const {
          deployer,
          nonAdminAddress,
          makeOrder,
          assetAuctionV1,
          neatFiProtocolStorageV1,
        } = await loadFixture(deployAssetAuctionV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.ENGLISH_AUCTION);

        await time.increaseTo(
          (await time.latest()) + 15 * ONE_DAY_IN_MILLI_SECS
        );

        const newPrice = ethers.utils.parseEther("2");

        await assetAuctionV1
          .connect(deployer)
          .increaseEnglishAuctionPrice(nonAdminAddress, orderHash, newPrice);

        const order = await neatFiProtocolStorageV1
          .connect(deployer)
          .getOrder(orderHash);

        expect(order.endPrice).to.eq(newPrice);
      });
    });
    context("when the order type is not ENGLISH_AUCTION", () => {
      it("fails to increase the order price", async () => {
        const { deployer, nonAdminAddress, makeOrder, assetAuctionV1 } =
          await loadFixture(deployAssetAuctionV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.SWAP);

        await time.increaseTo(
          (await time.latest()) + 15 * ONE_DAY_IN_MILLI_SECS
        );

        const newPrice = ethers.utils.parseEther("2");

        await expect(
          assetAuctionV1
            .connect(deployer)
            .increaseEnglishAuctionPrice(nonAdminAddress, orderHash, newPrice)
        ).to.be.revertedWith(
          "AssetAuctionOperationsUpgradeable::_increaseEnglishAuctionPrice: wrong order type."
        );
      });
    });
    context("when newPrice is less than the endPrice", () => {
      it("fails to increase the order price", async () => {
        const { deployer, nonAdminAddress, makeOrder, assetAuctionV1 } =
          await loadFixture(deployAssetAuctionV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.ENGLISH_AUCTION);

        await time.increaseTo(
          (await time.latest()) + 15 * ONE_DAY_IN_MILLI_SECS
        );

        const newPrice = ethers.utils.parseEther("0.00005");

        await expect(
          assetAuctionV1
            .connect(deployer)
            .increaseEnglishAuctionPrice(nonAdminAddress, orderHash, newPrice)
        ).to.be.revertedWith(
          "AssetAuctionOperationsUpgradeable::_increaseEnglishAuctionPrice: price can only be increased."
        );
      });
    });
  });

  describe("bidForEnglishAuction", () => {
    context("when the order is valid", () => {
      it("makes a bid commitment in native tokens for the order", async () => {
        const { bidderAddress, deployer, makeOrder, assetAuctionV1 } =
          await loadFixture(deployAssetAuctionV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.ENGLISH_AUCTION);

        const bidValue = ethers.utils.parseEther("2");

        await time.increaseTo(
          (await time.latest()) + 15 * ONE_DAY_IN_MILLI_SECS
        );

        await assetAuctionV1
          .connect(deployer)
          .bidForEnglishAuction(bidderAddress, orderHash, bidValue);

        const lastBidderAddress = await assetAuctionV1.lastBidderForOrder(
          orderHash
        );

        expect(lastBidderAddress).to.eq(bidderAddress);
      });
    });
    context("when the order type is wrong", () => {
      it("fails to bid for the order", async () => {
        const { deployer, bidderAddress, makeOrder, assetAuctionV1 } =
          await loadFixture(deployAssetAuctionV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.DUTCH_AUCTION);

        const bidValue = ethers.utils.parseEther("2");

        await time.increaseTo(
          (await time.latest()) + 15 * ONE_DAY_IN_MILLI_SECS
        );

        await expect(
          assetAuctionV1
            .connect(deployer)
            .bidForEnglishAuction(bidderAddress, orderHash, bidValue)
        ).to.be.revertedWith(
          "AssetAuctionOperationsUpgradeable::_bidForEnglishAuction: wWrong order type."
        );
      });
    });
    context("when bid value is wrong", () => {
      it("fails to bid for the order", async () => {
        const { deployer, bidderAddress, makeOrder, assetAuctionV1 } =
          await loadFixture(deployAssetAuctionV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.ENGLISH_AUCTION);

        const bidValue = ethers.utils.parseEther("0.00005");

        await time.increaseTo(
          (await time.latest()) + 15 * ONE_DAY_IN_MILLI_SECS
        );

        await expect(
          assetAuctionV1
            .connect(deployer)
            .bidForEnglishAuction(bidderAddress, orderHash, bidValue)
        ).to.be.revertedWith(
          "AssetAuctionOperations::_bidForEnglishAuction: invalid bid value."
        );
      });
    });
  });

  describe("bidForDutchAuction", () => {
    context("when the order is valid", () => {
      it("makes a bid commitment in native tokens for the order", async () => {
        const {
          deployer,
          neatFiProtocolStorageV1,
          bidderAddress,
          makeOrder,
          assetAuctionV1,
        } = await loadFixture(deployAssetAuctionV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.DUTCH_AUCTION);

        const order = await neatFiProtocolStorageV1.getOrder(orderHash);

        await time.increaseTo(
          (await time.latest()) + 15 * ONE_DAY_IN_MILLI_SECS
        );

        await assetAuctionV1
          .connect(deployer)
          .bidForDutchAuction(bidderAddress, orderHash, order.endPrice);

        const lastBidderAddress = await assetAuctionV1.lastBidderForOrder(
          orderHash
        );

        expect(lastBidderAddress).to.eq(bidderAddress);
      });
    });
    context("when the order type is wrong", () => {
      it("fails to bid for the order", async () => {
        const { deployer, bidderAddress, makeOrder, assetAuctionV1 } =
          await loadFixture(deployAssetAuctionV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.ENGLISH_AUCTION);

        await time.increaseTo(
          (await time.latest()) + 15 * ONE_DAY_IN_MILLI_SECS
        );

        await expect(
          assetAuctionV1
            .connect(deployer)
            .bidForDutchAuction(bidderAddress, orderHash, 10)
        ).to.be.revertedWith(
          "AssetAuctionOperationsUpgradeable::_bidForDutchAuction: wWrong order type."
        );
      });
    });
    context("when bid value is wrong", () => {
      it("fails to bid for the order", async () => {
        const { deployer, bidderAddress, makeOrder, assetAuctionV1 } =
          await loadFixture(deployAssetAuctionV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.DUTCH_AUCTION);

        const bidValue = ethers.utils.parseEther("0.00005");

        await time.increaseTo(
          (await time.latest()) + 15 * ONE_DAY_IN_MILLI_SECS
        );

        await expect(
          assetAuctionV1
            .connect(deployer)
            .bidForDutchAuction(bidderAddress, orderHash, bidValue)
        ).to.be.revertedWith(
          "AssetAuctionOperations::_bidForDutchAuction: invalid bid value."
        );
      });
    });
  });
  describe("approveLastBid", () => {
    context("when order is valid and has a valid bid", () => {
      it("changes the order status to PROCESSING", async () => {
        const {
          deployer,
          bidderAddress,
          neatFiProtocolStorageV1,
          makeOrder,
          nonAdminAddress,
          assetAuctionV1,
        } = await loadFixture(deployAssetAuctionV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.ENGLISH_AUCTION);

        const bidValue = ethers.utils.parseEther("2");

        await time.increaseTo(
          (await time.latest()) + 15 * ONE_DAY_IN_MILLI_SECS
        );

        await assetAuctionV1
          .connect(deployer)
          .bidForEnglishAuction(bidderAddress, orderHash, bidValue);

        await time.increaseTo((await time.latest()) + ONE_DAY_IN_MILLI_SECS);

        await assetAuctionV1
          .connect(deployer)
          .approveLastBid(nonAdminAddress, orderHash);

        const order = await neatFiProtocolStorageV1.getOrder(orderHash);

        expect(order.status).to.eq(AssetOrderStatus.PROCESSING);
      });
    });
    context("when the order type is not valid", () => {
      it("fails to approve the last bid", async () => {
        const { deployer, makeOrder, nonAdminAddress, assetAuctionV1 } =
          await loadFixture(deployAssetAuctionV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.SWAP);

        await time.increaseTo(
          (await time.latest()) + 15 * ONE_DAY_IN_MILLI_SECS
        );

        await expect(
          assetAuctionV1
            .connect(deployer)
            .approveLastBid(nonAdminAddress, orderHash)
        ).to.be.revertedWith(
          "AssetAuctionOperations::_approveLastBid: wrong order type."
        );
      });
    });
  });
  describe("claimAuction", () => {
    context("when order is valid", () => {
      it("transfers the tokens to the claimant and native tokens to the maker", async () => {
        const {
          bidderAddress,
          erc20Mock,
          data,
          deployer,
          token,
          makeOrder,
          nonAdminAddress,
          neatFiProtocolStorageV1,
          assetAuctionV1,
        } = await loadFixture(deployAssetAuctionV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.ENGLISH_AUCTION);

        const bidValue = ethers.utils.parseEther("2");

        await time.increaseTo(
          (await time.latest()) + 15 * ONE_DAY_IN_MILLI_SECS
        );

        await assetAuctionV1
          .connect(deployer)
          .bidForEnglishAuction(bidderAddress, orderHash, bidValue);

        await time.increaseTo((await time.latest()) + ONE_DAY_IN_MILLI_SECS);

        await assetAuctionV1
          .connect(deployer)
          .approveLastBid(nonAdminAddress, orderHash);

        await assetAuctionV1
          .connect(deployer)
          .claimAuction(bidderAddress, orderHash, data);

        const order = await neatFiProtocolStorageV1.getOrder(orderHash);

        expect(await erc20Mock.balanceOf(bidderAddress)).to.eq(token.amount);
        expect(order.status).to.eq(AssetOrderStatus.CLOSED);
      });
    });
    context("when claimant is not approved by the maker", () => {
      it("fails order claiming", async () => {
        const {
          bidderAddress,
          deployer,
          data,
          nonAdminAddress,
          makeOrder,
          assetAuctionV1,
          deployerAddress,
        } = await loadFixture(deployAssetAuctionV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.ENGLISH_AUCTION);

        const bidValue = ethers.utils.parseEther("2");

        await time.increaseTo(
          (await time.latest()) + 15 * ONE_DAY_IN_MILLI_SECS
        );

        await assetAuctionV1
          .connect(deployer)
          .bidForEnglishAuction(deployerAddress, orderHash, bidValue);

        await time.increaseTo((await time.latest()) + ONE_DAY_IN_MILLI_SECS);

        await assetAuctionV1
          .connect(deployer)
          .approveLastBid(nonAdminAddress, orderHash);

        await expect(
          assetAuctionV1
            .connect(deployer)
            .claimAuction(bidderAddress, orderHash, data)
        ).to.be.revertedWith(
          "AssetAuctionOperations::_claimAuction: claimant is not the last approved bidder of this auction."
        );
      });
    });
    context("when order status is not PROCESSING", () => {
      it("fails to claim the order", async () => {
        const {
          bidderAddress,
          deployer,
          data,
          nonAdminAddress,
          neatFiProtocolStorageV1,
          makeOrder,
          assetAuctionV1,
        } = await loadFixture(deployAssetAuctionV1Fixture);

        const { orderHash } = await makeOrder(AssetOrderType.ENGLISH_AUCTION);

        const bidValue = ethers.utils.parseEther("2");

        await time.increaseTo(
          (await time.latest()) + 15 * ONE_DAY_IN_MILLI_SECS
        );

        await assetAuctionV1
          .connect(deployer)
          .bidForEnglishAuction(bidderAddress, orderHash, bidValue);

        await time.increaseTo((await time.latest()) + ONE_DAY_IN_MILLI_SECS);

        await assetAuctionV1
          .connect(deployer)
          .approveLastBid(nonAdminAddress, orderHash);

        await time.increaseTo((await time.latest()) + ONE_DAY_IN_MILLI_SECS);

        await neatFiProtocolStorageV1
          .connect(deployer)
          .changeOrderStatus(orderHash, AssetOrderStatus.OPEN);

        await expect(
          assetAuctionV1
            .connect(deployer)
            .claimAuction(bidderAddress, orderHash, data)
        ).to.be.revertedWith(
          "AssetAuctionOperations::_claimAuction: order is not in processing."
        );
      });
    });
  });
});
