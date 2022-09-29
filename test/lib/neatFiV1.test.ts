import { expect } from "chai";
import { ethers } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";

import {
  deployNeatFiV1,
  deployERC20Mock,
  deployNeatFiProtocolStorageV1,
  deployActorFactorV1,
  deployAssetSwapV1,
  deployAssetSellV1,
  deployAssetAuctionV1,
  deployAssetTransferV1,
  deployProtocolSettingsV1,
  deployPaymentsResolverOperationsV1,
  deployNeatFiProtocolTreasuryV1,
} from "../common/helpers/deploymentHelper";

import { grantRoles } from "../common/helpers/neatFiHelper";

describe("NeatFiV1", () => {
  const deployNeatFiV1Fixture = async () => {
    const [deployer, protocolAdmin, nonAdmin, bidder] =
      await ethers.getSigners();

    const deployerAddress = await deployer.getAddress();
    const protocolAdminAddress = await protocolAdmin.getAddress();
    const nonAdminAddress = await nonAdmin.getAddress();
    const bidderAddress = await bidder.getAddress();

    const mockNeatToken = await deployERC20Mock(deployerAddress);
    const actorFactoryV1 = await deployActorFactorV1();
    const neatFiProtocolStorageV1 = await deployNeatFiProtocolStorageV1();
    const assetTransferV1 = await deployAssetTransferV1(
      neatFiProtocolStorageV1
    );
    const assetSwapV1 = await deployAssetSwapV1(
      neatFiProtocolStorageV1,
      assetTransferV1
    );
    const assetAuctionV1 = await deployAssetAuctionV1(
      neatFiProtocolStorageV1,
      assetTransferV1
    );
    const assetSellV1 = await deployAssetSellV1(
      neatFiProtocolStorageV1,
      assetTransferV1
    );
    const protocolSettingsV1 = await deployProtocolSettingsV1();
    const paymentsResolverOperationsV1 =
      await deployPaymentsResolverOperationsV1(protocolSettingsV1);
    const neatFiProtocolTreasuryV1 = await deployNeatFiProtocolTreasuryV1(
      mockNeatToken
    );

    const neatFiV1 = await deployNeatFiV1(
      assetSwapV1,
      assetSellV1,
      assetAuctionV1,
      paymentsResolverOperationsV1,
      protocolSettingsV1,
      neatFiProtocolStorageV1,
      actorFactoryV1,
      neatFiProtocolTreasuryV1
    );

    await grantRoles(
      neatFiV1,
      assetTransferV1,
      assetSwapV1,
      assetSellV1,
      assetAuctionV1,
      deployer,
      deployerAddress,
      protocolAdminAddress
    );

    const authorizedOperatorRole = await neatFiV1.AUTHORIZED_OPERATOR();
    const protocolAdminRole = await neatFiV1.PROTOCOL_ADMIN();

    await mockNeatToken
      .connect(deployer)
      .approve(neatFiProtocolTreasuryV1.address, "1000000000000000000000000");

    return {
      deployer,
      protocolAdmin,
      nonAdmin,
      bidder,
      deployerAddress,
      protocolAdminAddress,
      nonAdminAddress,
      bidderAddress,
      mockNeatToken,
      neatFiV1,
      neatFiProtocolStorageV1,
      actorFactoryV1,
      assetTransferV1,
      assetSwapV1,
      assetSellV1,
      assetAuctionV1,
      protocolSettingsV1,
      paymentsResolverOperationsV1,
      neatFiProtocolTreasuryV1,
      authorizedOperatorRole,
      protocolAdminRole,
    };
  };

  describe("setSwapModule", () => {
    context("when caller is a protocol admin", () => {
      it("sets the new address for the asset swap module", async () => {
        const { protocolAdmin, neatFiV1 } = await loadFixture(
          deployNeatFiV1Fixture
        );

        await expect(
          neatFiV1.connect(protocolAdmin).setSwapModule(neatFiV1.address)
        ).to.not.be.reverted;
      });
    });
    context("when caller is not an admin", () => {
      it("returns an error", async () => {
        const { deployer, deployerAddress, protocolAdminRole, neatFiV1 } =
          await loadFixture(deployNeatFiV1Fixture);

        await expect(
          neatFiV1.connect(deployer).setSwapModule(neatFiV1.address)
        ).to.be.revertedWith(
          `AccessControl: account ${deployerAddress.toLowerCase()} is missing role ${protocolAdminRole}`
        );
      });
    });
  });

  describe("setSellModule", () => {
    context("when caller is a protocol admin", () => {
      it("sets the new address for the asset sell module", async () => {
        const { protocolAdmin, neatFiV1 } = await loadFixture(
          deployNeatFiV1Fixture
        );

        await expect(
          neatFiV1.connect(protocolAdmin).setSellModule(neatFiV1.address)
        ).to.not.be.reverted;
      });
    });
    context("when caller is not an admin", () => {
      it("returns an error", async () => {
        const { deployer, deployerAddress, protocolAdminRole, neatFiV1 } =
          await loadFixture(deployNeatFiV1Fixture);

        await expect(
          neatFiV1.connect(deployer).setSellModule(neatFiV1.address)
        ).to.be.revertedWith(
          `AccessControl: account ${deployerAddress.toLowerCase()} is missing role ${protocolAdminRole}`
        );
      });
    });
  });

  describe("setAuctionModule", () => {
    context("when caller is a protocol admin", () => {
      it("sets the new address for the asset auction module", async () => {
        const { protocolAdmin, neatFiV1 } = await loadFixture(
          deployNeatFiV1Fixture
        );

        await expect(
          neatFiV1.connect(protocolAdmin).setAuctionModule(neatFiV1.address)
        ).to.not.be.reverted;
      });
    });
    context("when caller is not an admin", () => {
      it("returns an error", async () => {
        const { deployer, deployerAddress, protocolAdminRole, neatFiV1 } =
          await loadFixture(deployNeatFiV1Fixture);

        await expect(
          neatFiV1.connect(deployer).setAuctionModule(neatFiV1.address)
        ).to.be.revertedWith(
          `AccessControl: account ${deployerAddress.toLowerCase()} is missing role ${protocolAdminRole}`
        );
      });
    });
  });

  describe("setPaymentsResolver", () => {
    context("when caller is a protocol admin", () => {
      it("sets the new address for the payments resolver module", async () => {
        const { protocolAdmin, neatFiV1 } = await loadFixture(
          deployNeatFiV1Fixture
        );

        await expect(
          neatFiV1.connect(protocolAdmin).setPaymentsResolver(neatFiV1.address)
        ).to.not.be.reverted;
      });
    });
    context("when caller is not an admin", () => {
      it("returns an error", async () => {
        const { deployer, deployerAddress, protocolAdminRole, neatFiV1 } =
          await loadFixture(deployNeatFiV1Fixture);

        await expect(
          neatFiV1.connect(deployer).setPaymentsResolver(neatFiV1.address)
        ).to.be.revertedWith(
          `AccessControl: account ${deployerAddress.toLowerCase()} is missing role ${protocolAdminRole}`
        );
      });
    });
  });

  describe("setProtocolStorage", () => {
    context("when caller is a protocol admin", () => {
      it("sets the new address for the protocol storage module", async () => {
        const { protocolAdmin, neatFiV1 } = await loadFixture(
          deployNeatFiV1Fixture
        );

        await expect(
          neatFiV1.connect(protocolAdmin).setProtocolStorage(neatFiV1.address)
        ).to.not.be.reverted;
      });
    });
    context("when caller is not an admin", () => {
      it("returns an error", async () => {
        const { deployer, deployerAddress, protocolAdminRole, neatFiV1 } =
          await loadFixture(deployNeatFiV1Fixture);

        await expect(
          neatFiV1.connect(deployer).setProtocolStorage(neatFiV1.address)
        ).to.be.revertedWith(
          `AccessControl: account ${deployerAddress.toLowerCase()} is missing role ${protocolAdminRole}`
        );
      });
    });
  });

  describe("setProtocolSettings", () => {
    context("when caller is a protocol admin", () => {
      it("sets the new address for the protocol settings module", async () => {
        const { protocolAdmin, neatFiV1 } = await loadFixture(
          deployNeatFiV1Fixture
        );

        await expect(
          neatFiV1.connect(protocolAdmin).setProtocolSettings(neatFiV1.address)
        ).to.not.be.reverted;
      });
    });
    context("when caller is not an admin", () => {
      it("returns an error", async () => {
        const { deployer, deployerAddress, protocolAdminRole, neatFiV1 } =
          await loadFixture(deployNeatFiV1Fixture);

        await expect(
          neatFiV1.connect(deployer).setProtocolSettings(neatFiV1.address)
        ).to.be.revertedWith(
          `AccessControl: account ${deployerAddress.toLowerCase()} is missing role ${protocolAdminRole}`
        );
      });
    });
  });

  describe("setProtocolTreasury", () => {
    context("when caller is a protocol admin", () => {
      it("sets the new address for the protocol treasury module", async () => {
        const { protocolAdmin, neatFiV1 } = await loadFixture(
          deployNeatFiV1Fixture
        );

        await expect(
          neatFiV1.connect(protocolAdmin).setProtocolTreasury(neatFiV1.address)
        ).to.not.be.reverted;
      });
    });
    context("when caller is not an admin", () => {
      it("returns an error", async () => {
        const { deployer, deployerAddress, protocolAdminRole, neatFiV1 } =
          await loadFixture(deployNeatFiV1Fixture);

        await expect(
          neatFiV1.connect(deployer).setProtocolTreasury(neatFiV1.address)
        ).to.be.revertedWith(
          `AccessControl: account ${deployerAddress.toLowerCase()} is missing role ${protocolAdminRole}`
        );
      });
    });
  });

  describe("setActorFactory", () => {
    context("when caller is a protocol admin", () => {
      it("sets the new address for the actor factory module", async () => {
        const { protocolAdmin, neatFiV1 } = await loadFixture(
          deployNeatFiV1Fixture
        );

        await expect(
          neatFiV1.connect(protocolAdmin).setActorFactory(neatFiV1.address)
        ).to.not.be.reverted;
      });
    });
    context("when caller is not an admin", () => {
      it("returns an error", async () => {
        const { deployer, deployerAddress, protocolAdminRole, neatFiV1 } =
          await loadFixture(deployNeatFiV1Fixture);

        await expect(
          neatFiV1.connect(deployer).setActorFactory(neatFiV1.address)
        ).to.be.revertedWith(
          `AccessControl: account ${deployerAddress.toLowerCase()} is missing role ${protocolAdminRole}`
        );
      });
    });
  });

  describe("getSwapProtocolFee", () => {
    it("returns the protocol fee for swap order creation", async () => {
      const { deployer, neatFiV1 } = await loadFixture(deployNeatFiV1Fixture);

      expect(
        await neatFiV1.connect(deployer).callStatic.getSwapProtocolFee()
      ).to.eq("3000000000000000");
    });
  });
});
