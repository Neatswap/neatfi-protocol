import { expect } from "chai";
import { ethers } from "hardhat";
import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";

import {
  deployAssetSwapV1,
  deployAssetTransferV1,
  deployERC20Mock,
  deployNeatFiProtocolStorageV1,
} from "../../../common/helpers/deploymentHelper";
import grantRoles from "../../../common/helpers/assetSwapHelper";
import { buildToken } from "../../../common/helpers/tokenHelper";
import { buildMakeOrder } from "../../../common/helpers/neatFiProtocolStorageHelper";
import ONE_DAY_IN_MILLI_SECS from "../../../common/constants/time";
import AssetOrderStatus from "../../../common/enums/assetOrderStatus";
import AssetOrderType from "../../../common/enums/assetOrderType";

describe.only("AssetSwapV1", () => {
  const deployAssetSwapV1Fixture = async () => {
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
    const assetSwapV1 = await deployAssetSwapV1(
      neatFiProtocolStorageV1,
      assetTransferV1
    );
    const erc20Mock = await deployERC20Mock(nonAdminAddress);

    await grantRoles(
      neatFiProtocolStorageV1,
      assetTransferV1,
      assetSwapV1,
      deployer,
      deployerAddress,
      protocolAdminAddress
    );

    const protocolAdminRole = await assetSwapV1.PROTOCOL_ADMIN();

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
      bidder,
      mockActorKey,
      protocolAdmin,
      protocolAdminAddress,
      nonAdmin,
      assetSwapV1,
      protocolAdminRole,
      nonAdminAddress,
      deployerAddress,
      erc20Mock,
      neatFiProtocolStorageV1,
      bidderAddress,
      data,
      assetTransferV1,
      token,
      makeOrder,
    };
  };

  describe("updateNeatFiProtocolStorageAddress", () => {
    context("when caller is a protocol admin", () => {
      it("updates the address of the protocol storage", async () => {
        const { protocolAdmin, assetSwapV1 } = await loadFixture(
          deployAssetSwapV1Fixture
        );

        // using assetSwapV1.address for test purposes
        await expect(
          assetSwapV1
            .connect(protocolAdmin)
            .updateNeatFiProtocolStorageAddress(assetSwapV1.address)
        ).to.not.be.reverted;
      });
    });

    context("when caller is not a protocol admin", () => {
      it("fails to update the protocol storage address", async () => {
        const { nonAdmin, nonAdminAddress, protocolAdminRole, assetSwapV1 } =
          await loadFixture(deployAssetSwapV1Fixture);

        // using assetSwapV1.address for test purposes
        await expect(
          assetSwapV1
            .connect(nonAdmin)
            .updateNeatFiProtocolStorageAddress(assetSwapV1.address)
        ).to.be.revertedWith(
          `AccessControl: account ${nonAdminAddress.toLowerCase()} is missing role ${protocolAdminRole}`
        );
      });
    });
  });

  describe("updateAssetTransferAddress", () => {
    context("when caller is a protocol admin", () => {
      it("updates the address of the asset transfer module", async () => {
        const { protocolAdmin, assetSwapV1 } = await loadFixture(
          deployAssetSwapV1Fixture
        );

        // using assetSwapV1.address for test purposes
        await expect(
          assetSwapV1
            .connect(protocolAdmin)
            .updateAssetTransferAddress(assetSwapV1.address)
        ).to.not.be.reverted;
      });
    });

    context("when caller is not a protocol admin", () => {
      it("fails to update the asset transfer module address", async () => {
        const { nonAdmin, nonAdminAddress, protocolAdminRole, assetSwapV1 } =
          await loadFixture(deployAssetSwapV1Fixture);

        // using assetSwapV1.address for test purposes
        await expect(
          assetSwapV1
            .connect(nonAdmin)
            .updateAssetTransferAddress(assetSwapV1.address)
        ).to.be.revertedWith(
          `AccessControl: account ${nonAdminAddress.toLowerCase()} is missing role ${protocolAdminRole}`
        );
      });
    });
  });

  describe("makeBid", () => {
    context("when bid data is correct", () => {
      it("emits BidForOrder event", async () => {
        const {
          deployer,
          token,
          assetSwapV1,
          mockActorKey,
          bidderAddress,
          makeOrder,
        } = await loadFixture(deployAssetSwapV1Fixture);

        const { orderHash, listingTime } = await makeOrder(AssetOrderType.SWAP);

        await time.increaseTo(listingTime + 2 * ONE_DAY_IN_MILLI_SECS);

        await expect(
          assetSwapV1
            .connect(deployer)
            .makeBid(
              bidderAddress,
              [token],
              (await time.latest()) + 1 * ONE_DAY_IN_MILLI_SECS,
              orderHash,
              mockActorKey
            )
        ).to.emit(assetSwapV1, "BidForOrder");
      });
    });
    context("when order type is not SWAP", () => {
      it("fails to create a bid", async () => {
        const {
          deployer,
          token,
          assetSwapV1,
          mockActorKey,
          bidderAddress,
          makeOrder,
        } = await loadFixture(deployAssetSwapV1Fixture);

        const { orderHash, listingTime } = await makeOrder(AssetOrderType.SELL);

        await time.increaseTo(listingTime + 2 * ONE_DAY_IN_MILLI_SECS);

        await expect(
          assetSwapV1
            .connect(deployer)
            .makeBid(
              bidderAddress,
              [token],
              (await time.latest()) + 1 * ONE_DAY_IN_MILLI_SECS,
              orderHash,
              mockActorKey
            )
        ).to.be.revertedWith(
          "AssetSwapOperationsUpgradeable::_makeBid: wrong order type."
        );
      });
    });
    context("when order is invalid", () => {
      it("fails to create a bid", async () => {
        const {
          deployer,
          token,
          assetSwapV1,
          mockActorKey,
          bidderAddress,
          makeOrder,
        } = await loadFixture(deployAssetSwapV1Fixture);

        const { orderHash, listingTime } = await makeOrder(AssetOrderType.SWAP);

        // making the order expired
        await time.increaseTo(listingTime + 20 * ONE_DAY_IN_MILLI_SECS);

        await expect(
          assetSwapV1
            .connect(deployer)
            .makeBid(
              bidderAddress,
              [token],
              (await time.latest()) + 1 * ONE_DAY_IN_MILLI_SECS,
              orderHash,
              mockActorKey
            )
        ).to.be.revertedWith(
          "AssetSwapOperationsUpgradeable::_makeBid: invalid order."
        );
      });
    });
    context("when bidder is the order maker", () => {
      it("fails to create a bid", async () => {
        const {
          deployer,
          token,
          assetSwapV1,
          mockActorKey,
          nonAdminAddress,
          makeOrder,
        } = await loadFixture(deployAssetSwapV1Fixture);

        const { orderHash, listingTime } = await makeOrder(AssetOrderType.SWAP);

        await time.increaseTo(listingTime + 2 * ONE_DAY_IN_MILLI_SECS);

        await expect(
          assetSwapV1
            .connect(deployer)
            .makeBid(
              nonAdminAddress,
              [token],
              (await time.latest()) + 1 * ONE_DAY_IN_MILLI_SECS,
              orderHash,
              mockActorKey
            )
        ).to.be.revertedWith(
          "AssetSwapOperationsUpgradeable::_makeBid: self-bidding is not available."
        );
      });
    });
  });

  describe("approveAndResolveSwap", () => {
    context("when order has a bid", () => {
      it("resolves and changes the status of a SWAP order", async () => {
        const {
          deployer,
          token,
          assetSwapV1,
          mockActorKey,
          erc20Mock,
          bidderAddress,
          bidder,
          nonAdminAddress,
          nonAdmin,
          assetTransferV1,
          data,
          makeOrder,
        } = await loadFixture(deployAssetSwapV1Fixture);

        const { orderHash, listingTime } = await makeOrder(AssetOrderType.SWAP);

        await time.increaseTo(listingTime);

        await assetSwapV1
          .connect(deployer)
          .makeBid(
            bidderAddress,
            [token],
            (await time.latest()) + 1 * ONE_DAY_IN_MILLI_SECS,
            orderHash,
            mockActorKey
          );

        const bidHash = await assetSwapV1.bidsByOrder(orderHash, 0);

        await erc20Mock
          .connect(nonAdmin)
          .mint(bidderAddress, "5000000000000000000");

        const bidderBalance = await erc20Mock.balanceOf(bidderAddress);

        await erc20Mock
          .connect(bidder)
          .approve(assetTransferV1.address, bidderBalance);

        await erc20Mock
          .connect(nonAdmin)
          .approve(assetTransferV1.address, token.amount);

        await time.increaseTo(
          (await time.latest()) + 2 * ONE_DAY_IN_MILLI_SECS
        );

        await assetSwapV1
          .connect(deployer)
          .approveAndResolveSwap(
            nonAdminAddress,
            orderHash,
            bidHash,
            data,
            data
          );

        expect(await assetSwapV1.swapEscrowParties(orderHash)).to.eq(bidHash);
      });
    });
    context("when order is not valid", () => {
      it("fails to resolve the swap", async () => {
        const {
          deployer,
          token,
          assetSwapV1,
          mockActorKey,
          bidderAddress,
          nonAdminAddress,
          data,
          makeOrder,
        } = await loadFixture(deployAssetSwapV1Fixture);

        const { orderHash, listingTime } = await makeOrder(AssetOrderType.SWAP);

        await time.increaseTo(listingTime);

        await assetSwapV1
          .connect(deployer)
          .makeBid(
            bidderAddress,
            [token],
            (await time.latest()) + 1 * ONE_DAY_IN_MILLI_SECS,
            orderHash,
            mockActorKey
          );

        const bidHash = await assetSwapV1.bidsByOrder(orderHash, 0);

        await time.increaseTo(
          (await time.latest()) + 20 * ONE_DAY_IN_MILLI_SECS
        );

        await expect(
          assetSwapV1
            .connect(deployer)
            .approveAndResolveSwap(
              nonAdminAddress,
              orderHash,
              bidHash,
              data,
              data
            )
        ).to.be.revertedWith(
          "AssetSwapOperationsUpgradeable::_approveAndResolveSwap: invalid order."
        );
      });
    });
    context("when the resolver is not the order maker", () => {
      it("fails to resolve the swap", async () => {
        const {
          deployer,
          token,
          assetSwapV1,
          mockActorKey,
          bidderAddress,
          deployerAddress,
          data,
          makeOrder,
        } = await loadFixture(deployAssetSwapV1Fixture);

        const { orderHash, listingTime } = await makeOrder(AssetOrderType.SWAP);

        await time.increaseTo(listingTime);

        await assetSwapV1
          .connect(deployer)
          .makeBid(
            bidderAddress,
            [token],
            (await time.latest()) + 1 * ONE_DAY_IN_MILLI_SECS,
            orderHash,
            mockActorKey
          );

        const bidHash = await assetSwapV1.bidsByOrder(orderHash, 0);

        await time.increaseTo(
          (await time.latest()) + 2 * ONE_DAY_IN_MILLI_SECS
        );

        await expect(
          assetSwapV1
            .connect(deployer)
            .approveAndResolveSwap(
              deployerAddress,
              orderHash,
              bidHash,
              data,
              data
            )
        ).to.be.revertedWith(
          "AssetStorageOperationsUpgradeable::_isValidOwner: claimant address is not the order maker."
        );
      });
    });
  });
});
