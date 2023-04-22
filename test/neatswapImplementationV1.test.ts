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
  deployERC721Mock,
  deployERC1155Mock,
} from "./common/helpers/deploymentHelper";

import ONE_DAY_IN_MILLI_SECS from "./common/constants/time";
import { buildToken } from "./common/helpers/tokenHelper";
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
    const erc721Mock = await deployERC721Mock();
    const erc1155Mock = await deployERC1155Mock();
    const mockNeatToken = await deployERC20Mock(deployerAddress);

    const neatFiProtocolTreasuryV1 = await deployNeatFiProtocolTreasuryV1(
      mockNeatToken
    );

    const data = "0x6f72646572";

    await erc20Mock
      .connect(makerNonAdmin)
      .mint(makerNonAdminAddress, "1000000000000000000000");
    await erc20Mock
      .connect(makerNonAdmin)
      .mint(bidderAddress, "1000000000000000000000");
    await erc721Mock.safeMint(makerNonAdminAddress, 0);
    await erc1155Mock.mint(makerNonAdminAddress, 0, 10, data);

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

    await assetTransferV1.grantRole(
      authorizedOperatorRole,
      assetSwapV1.address
    );
    await assetTransferV1.grantRole(
      authorizedOperatorRole,
      assetSellV1.address
    );
    await assetTransferV1.grantRole(
      authorizedOperatorRole,
      assetAuctionV1.address
    );

    await neatFiProtocolStorageV1.grantRole(
      authorizedOperatorRole,
      assetSwapV1.address
    );

    await neatFiProtocolStorageV1.grantRole(
      authorizedOperatorRole,
      assetSellV1.address
    );

    await neatFiProtocolStorageV1.grantRole(
      authorizedOperatorRole,
      assetAuctionV1.address
    );

    await assetSwapV1.grantRole(authorizedOperatorRole, neatFiV1.address);
    await assetSellV1.grantRole(authorizedOperatorRole, neatFiV1.address);
    await assetAuctionV1.grantRole(authorizedOperatorRole, neatFiV1.address);
    await neatFiProtocolStorageV1.grantRole(
      authorizedOperatorRole,
      neatFiV1.address
    );
    await neatFiProtocolStorageV1.grantRole(
      authorizedOperatorRole,
      deployerAddress
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

    await neatFiProtocolStorageV1.grantRole(
      authorizedOperatorRole,
      assetTransferV1.address
    );

    await neatFiV1.grantRole(protocolAdminRole, protocolAdminAddress);
    await actorFactoryV1.grantRole(protocolAdminRole, protocolAdminAddress);
    await actorFactoryV1.grantRole(authorizedOperatorRole, deployerAddress);

    const defaultAdminRole = await neatSwap.DEFAULT_ADMIN_ROLE();

    // grant approvals on token contracts
    await erc20Mock
      .connect(makerNonAdmin)
      .approve(assetTransferV1.address, "10000000000000000000000000000");

    await erc20Mock
      .connect(bidder)
      .approve(assetTransferV1.address, "10000000000000000000000000000");

    await erc721Mock
      .connect(makerNonAdmin)
      .setApprovalForAll(assetTransferV1.address, true);

    await erc1155Mock
      .connect(makerNonAdmin)
      .setApprovalForAll(assetTransferV1.address, true);

    // get actor key
    await neatSwap.requestActorKey();

    await actorFactoryV1
      .connect(protocolAdmin)
      .approveAndGenerateActorKey(neatSwap.address);

    const actorKey = await (
      await actorFactoryV1.actorInfo(neatSwap.address)
    ).actorKey;

    const erc20Token = buildToken(erc20Mock, 0, 100, TokenType.ERC20);
    const erc721Token = buildToken(erc721Mock, 0, 0, TokenType.ERC721);
    const erc1155Token = buildToken(erc1155Mock, 0, 5, TokenType.ERC1155);

    const mockActorKey =
      "0x289ee93e07df6282d6aa058d1080e7eb2f905bd675a2071583a40b1cb3c96baa";

    return {
      erc20Token,
      erc721Token,
      erc1155Token,
      bidder,
      deployer,
      bidderAddress,
      protocolAdmin,
      protocolAdminAddress,
      makerNonAdmin,
      makerNonAdminAddress,
      deployerAddress,
      assetSellV1,
      assetSwapV1,
      assetAuctionV1,
      actorFactoryV1,
      neatFiProtocolStorageV1,
      data,
      actorKey,
      neatSwap,
      defaultAdminRole,
      mockActorKey,
      erc721Mock,
      erc20Mock,
      erc1155Mock,
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
  });

  describe("makeOrder", () => {
    context("when order data is valid", () => {
      it("creates an order", async () => {
        const {
          erc20Token,
          makerNonAdmin,
          neatSwap,
          actorKey,
          deployer,
          makerNonAdminAddress,
          neatFiProtocolStorageV1,
        } = await loadFixture(deployNeatSwapImplementationV1);

        const makeOrderTx = await neatSwap
          .connect(makerNonAdmin)
          .makeOrder(
            [erc20Token],
            AssetOrderType.SELL,
            (await time.latest()) + (30 * ONE_DAY_IN_MILLI_SECS) / 1000,
            "1000000000000000000",
            actorKey
          );

        const receipt = await makeOrderTx.wait();

        const { orderHash } = receipt.events[1].args;

        const order = await neatFiProtocolStorageV1
          .connect(deployer)
          .getOrder(orderHash);

        expect(order.maker).to.eq(makerNonAdminAddress);
        expect(order.status).to.eq(AssetOrderStatus.OPEN);
      });
    });
    context("when order type is SWAP and the msg.value is correct", () => {
      it("creates an order", async () => {
        const {
          erc20Token,
          makerNonAdmin,
          neatSwap,
          actorKey,
          deployer,
          makerNonAdminAddress,
          neatFiProtocolStorageV1,
        } = await loadFixture(deployNeatSwapImplementationV1);

        const makeOrderTx = await neatSwap
          .connect(makerNonAdmin)
          .makeOrder(
            [erc20Token],
            AssetOrderType.SWAP,
            (await time.latest()) + (30 * ONE_DAY_IN_MILLI_SECS) / 1000,
            "1000000000000000000",
            actorKey,
            { value: "3000000000000000" }
          );

        const receipt = await makeOrderTx.wait();

        const { orderHash } = receipt.events[3].args;

        const order = await neatFiProtocolStorageV1
          .connect(deployer)
          .getOrder(orderHash);

        expect(order.maker).to.eq(makerNonAdminAddress);
        expect(order.status).to.eq(AssetOrderStatus.OPEN);
      });
    });
    context("when order type is SWAP and the msg.value is wrong", () => {
      it("returns an error", async () => {
        const { erc20Token, makerNonAdmin, neatSwap, actorKey } =
          await loadFixture(deployNeatSwapImplementationV1);

        await expect(
          neatSwap
            .connect(makerNonAdmin)
            .makeOrder(
              [erc20Token],
              AssetOrderType.SWAP,
              (await time.latest()) + (30 * ONE_DAY_IN_MILLI_SECS) / 1000,
              "1000000000000000000",
              actorKey,
              { value: "5000000000000000" }
            )
        ).to.be.revertedWith(
          "NeatFiProtocolOperationsUpgradeable::_makeOrder: wrong value for SWAP protocol fee."
        );
      });
    });
    context("for non-SWAP orders with non 0 msg.value", () => {
      it("returns an error", async () => {
        const { erc20Token, makerNonAdmin, neatSwap, actorKey } =
          await loadFixture(deployNeatSwapImplementationV1);

        await expect(
          neatSwap
            .connect(makerNonAdmin)
            .makeOrder(
              [erc20Token],
              AssetOrderType.SELL,
              (await time.latest()) + (30 * ONE_DAY_IN_MILLI_SECS) / 1000,
              "1000000000000000000",
              actorKey,
              { value: "5000000000000000" }
            )
        ).to.be.revertedWith(
          "NeatFiProtocolOperationsUpgradeable::_makeOrder: value should be 0."
        );
      });
    });
  });

  describe("makeBid", () => {
    context("when data is correct", () => {
      it("creates a BID type order for a SWAP type order", async () => {
        const {
          erc721Token,
          makerNonAdmin,
          neatSwap,
          actorKey,
          bidder,
          erc20Token,
          assetSwapV1,
        } = await loadFixture(deployNeatSwapImplementationV1);

        const makeOrderTx = await neatSwap
          .connect(makerNonAdmin)
          .makeOrder(
            [erc721Token],
            AssetOrderType.SWAP,
            (await time.latest()) + (30 * ONE_DAY_IN_MILLI_SECS) / 1000,
            0,
            actorKey,
            { value: "3000000000000000" }
          );

        const makeOrderTxReceipt = await makeOrderTx.wait();

        const { orderHash } = makeOrderTxReceipt.events[3].args;

        const makeBidTx = await neatSwap
          .connect(bidder)
          .makeBid([erc20Token], orderHash, actorKey);

        const makeBidTxReceipt = await makeBidTx.wait();

        expect(await assetSwapV1.bidsByOrder(orderHash, 0)).to.eq(
          makeBidTxReceipt.events[2].args.orderHash
        );
      });
    });
    context("when order is not valid", () => {
      it("returns an error", async () => {
        const {
          erc721Token,
          makerNonAdmin,
          neatSwap,
          actorKey,
          bidder,
          erc20Token,
        } = await loadFixture(deployNeatSwapImplementationV1);

        const makeOrderTx = await neatSwap
          .connect(makerNonAdmin)
          .makeOrder(
            [erc721Token],
            AssetOrderType.SWAP,
            (await time.latest()) + (30 * ONE_DAY_IN_MILLI_SECS) / 1000,
            0,
            actorKey,
            { value: "3000000000000000" }
          );

        const makeOrderTxReceipt = await makeOrderTx.wait();

        const { orderHash } = makeOrderTxReceipt.events[3].args;

        time.increaseTo((await time.latest()) + 100 * ONE_DAY_IN_MILLI_SECS);

        await expect(
          neatSwap.connect(bidder).makeBid([erc20Token], orderHash, actorKey)
        ).to.be.revertedWith(
          "AssetSwapOperationsUpgradeable::_makeBid: invalid order."
        );
      });
    });
    context("when order type is not SWAP", () => {
      it("returns an error", async () => {
        const {
          erc721Token,
          makerNonAdmin,
          neatSwap,
          actorKey,
          bidder,
          erc20Token,
        } = await loadFixture(deployNeatSwapImplementationV1);

        const makeOrderTx = await neatSwap
          .connect(makerNonAdmin)
          .makeOrder(
            [erc721Token],
            AssetOrderType.SELL,
            (await time.latest()) + (30 * ONE_DAY_IN_MILLI_SECS) / 1000,
            0,
            actorKey
          );

        const makeOrderTxReceipt = await makeOrderTx.wait();

        const { orderHash } = makeOrderTxReceipt.events[1].args;

        await expect(
          neatSwap.connect(bidder).makeBid([erc20Token], orderHash, actorKey)
        ).to.be.revertedWith(
          "AssetSwapOperationsUpgradeable::_makeBid: wrong order type."
        );
      });
    });
    context("when bidder is the order maker", () => {
      it("returns an error", async () => {
        const { erc721Token, makerNonAdmin, neatSwap, actorKey, erc20Token } =
          await loadFixture(deployNeatSwapImplementationV1);

        const makeOrderTx = await neatSwap
          .connect(makerNonAdmin)
          .makeOrder(
            [erc721Token],
            AssetOrderType.SWAP,
            (await time.latest()) + (30 * ONE_DAY_IN_MILLI_SECS) / 1000,
            0,
            actorKey,
            { value: "3000000000000000" }
          );

        const makeOrderTxReceipt = await makeOrderTx.wait();

        const { orderHash } = makeOrderTxReceipt.events[3].args;

        await expect(
          neatSwap
            .connect(makerNonAdmin)
            .makeBid([erc20Token], orderHash, actorKey)
        ).to.be.revertedWith(
          "AssetSwapOperationsUpgradeable::_makeBid: self-bidding is not available."
        );
      });
    });
  });

  describe("cancelOrder", () => {
    context("when order is valid", () => {
      it("changes the order status to CANCELLED", async () => {
        const {
          erc721Token,
          makerNonAdmin,
          neatSwap,
          actorKey,
          neatFiProtocolStorageV1,
        } = await loadFixture(deployNeatSwapImplementationV1);

        const makeOrderTx = await neatSwap
          .connect(makerNonAdmin)
          .makeOrder(
            [erc721Token],
            AssetOrderType.SWAP,
            (await time.latest()) + (30 * ONE_DAY_IN_MILLI_SECS) / 1000,
            0,
            actorKey,
            { value: "3000000000000000" }
          );

        const makeOrderTxReceipt = await makeOrderTx.wait();

        const { orderHash } = makeOrderTxReceipt.events[3].args;

        await neatSwap.connect(makerNonAdmin).cancelOrder(orderHash);

        const order = await neatFiProtocolStorageV1.getOrder(orderHash);

        expect(order.status).to.eq(AssetOrderStatus.CANCELLED);
      });
    });

    context("when caller is not the order maker", () => {
      it("returns an error", async () => {
        const { erc721Token, makerNonAdmin, neatSwap, bidder, actorKey } =
          await loadFixture(deployNeatSwapImplementationV1);

        const makeOrderTx = await neatSwap
          .connect(makerNonAdmin)
          .makeOrder(
            [erc721Token],
            AssetOrderType.SWAP,
            (await time.latest()) + (30 * ONE_DAY_IN_MILLI_SECS) / 1000,
            0,
            actorKey,
            { value: "3000000000000000" }
          );

        const makeOrderTxReceipt = await makeOrderTx.wait();

        const { orderHash } = makeOrderTxReceipt.events[3].args;

        await expect(
          neatSwap.connect(bidder).cancelOrder(orderHash)
        ).to.be.revertedWith(
          "AssetStorageOperationsUpgradeable::_isValidOwner: claimant address is not the order maker."
        );
      });
    });
  });

  describe("approveAndResolveSwap", () => {
    context("when SWAP order has a valid bid", () => {
      it("changes the order status to CLOSED and transfers the token assets", async () => {
        const {
          erc721Token,
          makerNonAdmin,
          makerNonAdminAddress,
          neatSwap,
          actorKey,
          bidder,
          bidderAddress,
          erc20Token,
          erc721Mock,
          data,
        } = await loadFixture(deployNeatSwapImplementationV1);

        const makeOrderTx = await neatSwap
          .connect(makerNonAdmin)
          .makeOrder(
            [erc721Token],
            AssetOrderType.SWAP,
            (await time.latest()) + (30 * ONE_DAY_IN_MILLI_SECS) / 1000,
            0,
            actorKey,
            { value: "3000000000000000" }
          );

        const makeOrderTxReceipt = await makeOrderTx.wait();

        const { orderHash } = makeOrderTxReceipt.events[3].args;

        expect(await erc721Mock.ownerOf(erc721Token.tokenId)).to.eq(
          makerNonAdminAddress
        );

        const makeBidTx = await neatSwap
          .connect(bidder)
          .makeBid([erc20Token], orderHash, actorKey);

        const makeBidTxReceipt = await makeBidTx.wait();

        await neatSwap
          .connect(makerNonAdmin)
          .approveAndResolveSwap(
            orderHash,
            makeBidTxReceipt.events[2].args.orderHash,
            data,
            data
          );

        expect(await erc721Mock.ownerOf(erc721Token.tokenId)).to.eq(
          bidderAddress
        );
      });
    });
    context("when order is not valid", () => {
      it("returns an error", async () => {
        const {
          erc721Token,
          makerNonAdmin,
          neatSwap,
          actorKey,
          bidder,
          erc20Token,
          data,
        } = await loadFixture(deployNeatSwapImplementationV1);

        const makeOrderTx = await neatSwap
          .connect(makerNonAdmin)
          .makeOrder(
            [erc721Token],
            AssetOrderType.SWAP,
            (await time.latest()) + (10 * ONE_DAY_IN_MILLI_SECS) / 1000,
            0,
            actorKey,
            { value: "3000000000000000" }
          );

        const makeOrderTxReceipt = await makeOrderTx.wait();

        const { orderHash } = makeOrderTxReceipt.events[3].args;

        const makeBidTx = await neatSwap
          .connect(bidder)
          .makeBid([erc20Token], orderHash, actorKey);

        const makeBidTxReceipt = await makeBidTx.wait();

        time.increaseTo((await time.latest()) + 20 * ONE_DAY_IN_MILLI_SECS);

        await expect(
          neatSwap
            .connect(makerNonAdmin)
            .approveAndResolveSwap(
              orderHash,
              makeBidTxReceipt.events[2].args.orderHash,
              data,
              data
            )
        ).to.be.revertedWith(
          "AssetSwapOperationsUpgradeable::_approveAndResolveSwap: invalid order."
        );
      });
    });
  });

  describe("buyItNow", () => {
    context("when the order is valid", () => {
      it("changes the order status to CLOSED and transfers token assets", async () => {
        const {
          erc721Token,
          erc721Mock,
          makerNonAdmin,
          neatSwap,
          actorKey,
          bidder,
          bidderAddress,
          data,
          neatFiProtocolStorageV1,
          deployer,
        } = await loadFixture(deployNeatSwapImplementationV1);

        const makeOrderTx = await neatSwap
          .connect(makerNonAdmin)
          .makeOrder(
            [erc721Token],
            AssetOrderType.SELL,
            (await time.latest()) + (10 * ONE_DAY_IN_MILLI_SECS) / 1000,
            "3000000000000000",
            actorKey
          );

        const makeOrderTxReceipt = await makeOrderTx.wait();

        const { orderHash } = makeOrderTxReceipt.events[1].args;

        await neatSwap
          .connect(bidder)
          .buyItNow(orderHash, data, { value: "3000000000000000" });

        expect(await erc721Mock.ownerOf(erc721Token.tokenId)).to.eq(
          bidderAddress
        );

        expect(
          await (
            await neatFiProtocolStorageV1.connect(deployer).getOrder(orderHash)
          ).status
        ).to.eq(AssetOrderStatus.CLOSED);
      });
    });
    context("when buyer is the order maker", () => {
      it("returns an error", async () => {
        const { erc721Token, makerNonAdmin, neatSwap, actorKey, data } =
          await loadFixture(deployNeatSwapImplementationV1);

        const makeOrderTx = await neatSwap
          .connect(makerNonAdmin)
          .makeOrder(
            [erc721Token],
            AssetOrderType.SELL,
            (await time.latest()) + (10 * ONE_DAY_IN_MILLI_SECS) / 1000,
            "3000000000000000",
            actorKey
          );

        const makeOrderTxReceipt = await makeOrderTx.wait();

        const { orderHash } = makeOrderTxReceipt.events[1].args;

        await expect(
          neatSwap
            .connect(makerNonAdmin)
            .buyItNow(orderHash, data, { value: "3000000000000000" })
        ).to.be.revertedWith(
          "AssetSellOperationsUpgradeable::_buyItNow: buyer can not be the order maker"
        );
      });
    });
    context("when order type is wrong", () => {
      it("returns an error", async () => {
        const { erc721Token, makerNonAdmin, bidder, neatSwap, actorKey, data } =
          await loadFixture(deployNeatSwapImplementationV1);

        const makeOrderTx = await neatSwap
          .connect(makerNonAdmin)
          .makeOrder(
            [erc721Token],
            AssetOrderType.DUTCH_AUCTION,
            (await time.latest()) + (10 * ONE_DAY_IN_MILLI_SECS) / 1000,
            "3000000000000000",
            actorKey
          );

        const makeOrderTxReceipt = await makeOrderTx.wait();

        const { orderHash } = makeOrderTxReceipt.events[1].args;

        await expect(
          neatSwap
            .connect(bidder)
            .buyItNow(orderHash, data, { value: "3000000000000000" })
        ).to.be.revertedWith(
          "AssetSellOperationsUpgradeable::_buyItNow: wrong order type."
        );
      });
    });
    context("when purchase value is wrong", () => {
      it("returns an error", async () => {
        const { erc721Token, makerNonAdmin, bidder, neatSwap, actorKey, data } =
          await loadFixture(deployNeatSwapImplementationV1);

        const makeOrderTx = await neatSwap
          .connect(makerNonAdmin)
          .makeOrder(
            [erc721Token],
            AssetOrderType.SELL,
            (await time.latest()) + (10 * ONE_DAY_IN_MILLI_SECS) / 1000,
            "3000000000000000",
            actorKey
          );

        const makeOrderTxReceipt = await makeOrderTx.wait();

        const { orderHash } = makeOrderTxReceipt.events[1].args;

        await expect(
          neatSwap
            .connect(bidder)
            .buyItNow(orderHash, data, { value: "2000000000000000" })
        ).to.be.revertedWith(
          "AssetSellOperationsUpgradeable::_buyItNow: wrong purchase value."
        );
      });
    });
  });
  describe("decreaseDucthAuctionPrice", () => {
    context("when order is correct", () => {
      it("decreases the price", async () => {
        const {
          erc721Token,
          neatFiProtocolStorageV1,
          makerNonAdmin,
          neatSwap,
          actorKey,
        } = await loadFixture(deployNeatSwapImplementationV1);

        const makeOrderTx = await neatSwap
          .connect(makerNonAdmin)
          .makeOrder(
            [erc721Token],
            AssetOrderType.DUTCH_AUCTION,
            (await time.latest()) + (10 * ONE_DAY_IN_MILLI_SECS) / 1000,
            "3000000000000000",
            actorKey
          );

        const makeOrderTxReceipt = await makeOrderTx.wait();

        const { orderHash } = makeOrderTxReceipt.events[1].args;

        await neatSwap
          .connect(makerNonAdmin)
          .decreaseDucthAuctionPrice(orderHash, "2000000000000000");

        const order = await neatFiProtocolStorageV1.getOrder(orderHash);

        expect(order.endPrice).to.eq("2000000000000000");
      });
    });
    context("when order type is wrong", () => {
      it("returns an error", async () => {
        const { erc721Token, makerNonAdmin, neatSwap, actorKey } =
          await loadFixture(deployNeatSwapImplementationV1);

        const makeOrderTx = await neatSwap
          .connect(makerNonAdmin)
          .makeOrder(
            [erc721Token],
            AssetOrderType.ENGLISH_AUCTION,
            (await time.latest()) + (10 * ONE_DAY_IN_MILLI_SECS) / 1000,
            "3000000000000000",
            actorKey
          );

        const makeOrderTxReceipt = await makeOrderTx.wait();

        const { orderHash } = makeOrderTxReceipt.events[1].args;

        await expect(
          neatSwap
            .connect(makerNonAdmin)
            .decreaseDucthAuctionPrice(orderHash, "2000000000000000")
        ).to.be.revertedWith(
          "AssetAuctionOperationsUpgradeable::_decreaseDucthAuctionPrice: wrong order type."
        );
      });
    });
    context("when price value is wrong", () => {
      it("returns an error", async () => {
        const { erc721Token, makerNonAdmin, neatSwap, actorKey } =
          await loadFixture(deployNeatSwapImplementationV1);

        const makeOrderTx = await neatSwap
          .connect(makerNonAdmin)
          .makeOrder(
            [erc721Token],
            AssetOrderType.DUTCH_AUCTION,
            (await time.latest()) + (10 * ONE_DAY_IN_MILLI_SECS) / 1000,
            "3000000000000000",
            actorKey
          );

        const makeOrderTxReceipt = await makeOrderTx.wait();

        const { orderHash } = makeOrderTxReceipt.events[1].args;

        await expect(
          neatSwap
            .connect(makerNonAdmin)
            .decreaseDucthAuctionPrice(orderHash, "5000000000000000")
        ).to.be.revertedWith(
          "AssetAuctionOperationsUpgradeable::_decreaseDucthAuctionPrice: price can only be decreased."
        );
      });
    });
  });
  describe("_increaseEnglishAuctionPrice", () => {
    context("when order is correct", () => {
      it("decreases the price", async () => {
        const {
          erc721Token,
          neatFiProtocolStorageV1,
          makerNonAdmin,
          neatSwap,
          actorKey,
        } = await loadFixture(deployNeatSwapImplementationV1);

        const makeOrderTx = await neatSwap
          .connect(makerNonAdmin)
          .makeOrder(
            [erc721Token],
            AssetOrderType.ENGLISH_AUCTION,
            (await time.latest()) + (10 * ONE_DAY_IN_MILLI_SECS) / 1000,
            "3000000000000000",
            actorKey
          );

        const makeOrderTxReceipt = await makeOrderTx.wait();

        const { orderHash } = makeOrderTxReceipt.events[1].args;

        await neatSwap
          .connect(makerNonAdmin)
          .increaseEnglishAuctionPrice(orderHash, "5000000000000000");

        const order = await neatFiProtocolStorageV1.getOrder(orderHash);

        expect(order.endPrice).to.eq("5000000000000000");
      });
    });
    context("when order type is wrong", () => {
      it("returns an error", async () => {
        const { erc721Token, makerNonAdmin, neatSwap, actorKey } =
          await loadFixture(deployNeatSwapImplementationV1);

        const makeOrderTx = await neatSwap
          .connect(makerNonAdmin)
          .makeOrder(
            [erc721Token],
            AssetOrderType.DUTCH_AUCTION,
            (await time.latest()) + (10 * ONE_DAY_IN_MILLI_SECS) / 1000,
            "3000000000000000",
            actorKey
          );

        const makeOrderTxReceipt = await makeOrderTx.wait();

        const { orderHash } = makeOrderTxReceipt.events[1].args;

        await expect(
          neatSwap
            .connect(makerNonAdmin)
            .increaseEnglishAuctionPrice(orderHash, "5000000000000000")
        ).to.be.revertedWith(
          "AssetAuctionOperationsUpgradeable::_increaseEnglishAuctionPrice: wrong order type."
        );
      });
    });
    context("when price value is wrong", () => {
      it("returns an error", async () => {
        const { erc721Token, makerNonAdmin, neatSwap, actorKey } =
          await loadFixture(deployNeatSwapImplementationV1);

        const makeOrderTx = await neatSwap
          .connect(makerNonAdmin)
          .makeOrder(
            [erc721Token],
            AssetOrderType.ENGLISH_AUCTION,
            (await time.latest()) + (10 * ONE_DAY_IN_MILLI_SECS) / 1000,
            "3000000000000000",
            actorKey
          );

        const makeOrderTxReceipt = await makeOrderTx.wait();

        const { orderHash } = makeOrderTxReceipt.events[1].args;

        await expect(
          neatSwap
            .connect(makerNonAdmin)
            .increaseEnglishAuctionPrice(orderHash, "1000000000000000")
        ).to.be.revertedWith(
          "AssetAuctionOperationsUpgradeable::_increaseEnglishAuctionPrice: price can only be increased."
        );
      });
    });
  });

  describe("bidForEnglishAuction", () => {
    context("when the order is correct", () => {
      it("records a bid in native tokens", async () => {
        const {
          erc721Token,
          deployer,
          assetAuctionV1,
          makerNonAdmin,
          neatSwap,
          bidder,
          bidderAddress,
          actorKey,
        } = await loadFixture(deployNeatSwapImplementationV1);

        const makeOrderTx = await neatSwap
          .connect(makerNonAdmin)
          .makeOrder(
            [erc721Token],
            AssetOrderType.ENGLISH_AUCTION,
            (await time.latest()) + (10 * ONE_DAY_IN_MILLI_SECS) / 1000,
            "3000000000000000",
            actorKey
          );

        const makeOrderTxReceipt = await makeOrderTx.wait();

        const { orderHash } = makeOrderTxReceipt.events[1].args;

        await neatSwap
          .connect(bidder)
          .bidForEnglishAuction(orderHash, "5000000000000000");

        expect(
          await assetAuctionV1.connect(deployer).lastBidderForOrder(orderHash)
        ).to.eq(bidderAddress);
      });
    });
  });

  describe("bidForDutchAuction", () => {
    context("when the order is correct", () => {
      it("records a bid in native tokens", async () => {
        const {
          erc721Token,
          deployer,
          assetAuctionV1,
          makerNonAdmin,
          neatSwap,
          bidder,
          bidderAddress,
          actorKey,
        } = await loadFixture(deployNeatSwapImplementationV1);

        const makeOrderTx = await neatSwap
          .connect(makerNonAdmin)
          .makeOrder(
            [erc721Token],
            AssetOrderType.DUTCH_AUCTION,
            (await time.latest()) + (10 * ONE_DAY_IN_MILLI_SECS) / 1000,
            "3000000000000000",
            actorKey
          );

        const makeOrderTxReceipt = await makeOrderTx.wait();

        const { orderHash } = makeOrderTxReceipt.events[1].args;

        await neatSwap
          .connect(bidder)
          .bidForDutchAuction(orderHash, "2000000000000000");

        expect(
          await assetAuctionV1.connect(deployer).lastBidderForOrder(orderHash)
        ).to.eq(bidderAddress);
      });
    });
  });

  describe("approveLastBid", () => {
    context("when the order is correct", () => {
      it("approves the last bid for the order", async () => {
        const { erc721Token, makerNonAdmin, neatSwap, bidder, actorKey } =
          await loadFixture(deployNeatSwapImplementationV1);

        const makeOrderTx = await neatSwap
          .connect(makerNonAdmin)
          .makeOrder(
            [erc721Token],
            AssetOrderType.ENGLISH_AUCTION,
            (await time.latest()) + (10 * ONE_DAY_IN_MILLI_SECS) / 1000,
            "3000000000000000",
            actorKey
          );

        const makeOrderTxReceipt = await makeOrderTx.wait();

        const { orderHash } = makeOrderTxReceipt.events[1].args;

        await neatSwap
          .connect(bidder)
          .bidForEnglishAuction(orderHash, "5000000000000000");

        await expect(neatSwap.connect(makerNonAdmin).approveLastBid(orderHash))
          .to.not.be.reverted;
      });
    });
  });

  describe("claimEnglishAuction", () => {
    context("when order is valid and has a bid", () => {
      it("transfers the token assets and changes the order status", async () => {
        const {
          erc721Token,
          deployer,
          data,
          makerNonAdmin,
          erc721Mock,
          neatFiProtocolStorageV1,
          neatSwap,
          bidder,
          bidderAddress,
          actorKey,
        } = await loadFixture(deployNeatSwapImplementationV1);

        const makeOrderTx = await neatSwap
          .connect(makerNonAdmin)
          .makeOrder(
            [erc721Token],
            AssetOrderType.ENGLISH_AUCTION,
            (await time.latest()) + (10 * ONE_DAY_IN_MILLI_SECS) / 1000,
            "3000000000000000",
            actorKey
          );

        const makeOrderTxReceipt = await makeOrderTx.wait();

        const { orderHash } = makeOrderTxReceipt.events[1].args;

        await neatSwap
          .connect(bidder)
          .bidForEnglishAuction(orderHash, "5000000000000000");

        await neatSwap.connect(makerNonAdmin).approveLastBid(orderHash);

        await neatSwap
          .connect(bidder)
          .claimEnglishAuction(orderHash, data, { value: "5000000000000000" });

        const order = await neatFiProtocolStorageV1
          .connect(deployer)
          .getOrder(orderHash);

        expect(await erc721Mock.ownerOf(erc721Token.tokenId)).to.eq(
          bidderAddress
        );

        expect(order.status).to.eq(AssetOrderStatus.CLOSED);
      });
    });
  });

  describe("claimDutchAuction", () => {
    context("when order is valid and has a bid", () => {
      it("transfers the token assets and changes the order status", async () => {
        const {
          erc721Token,
          deployer,
          data,
          makerNonAdmin,
          erc721Mock,
          neatFiProtocolStorageV1,
          neatSwap,
          bidder,
          bidderAddress,
          actorKey,
        } = await loadFixture(deployNeatSwapImplementationV1);

        const makeOrderTx = await neatSwap
          .connect(makerNonAdmin)
          .makeOrder(
            [erc721Token],
            AssetOrderType.DUTCH_AUCTION,
            (await time.latest()) + (10 * ONE_DAY_IN_MILLI_SECS) / 1000,
            "3000000000000000",
            actorKey
          );

        const makeOrderTxReceipt = await makeOrderTx.wait();

        const { orderHash } = makeOrderTxReceipt.events[1].args;

        await neatSwap
          .connect(bidder)
          .bidForDutchAuction(orderHash, "2000000000000000");

        await neatSwap.connect(makerNonAdmin).approveLastBid(orderHash);

        await neatSwap
          .connect(bidder)
          .claimDutchAuction(orderHash, data, { value: "2000000000000000" });

        const order = await neatFiProtocolStorageV1
          .connect(deployer)
          .getOrder(orderHash);

        expect(await erc721Mock.ownerOf(erc721Token.tokenId)).to.eq(
          bidderAddress
        );

        expect(order.status).to.eq(AssetOrderStatus.CLOSED);
      });
    });
  });
});
