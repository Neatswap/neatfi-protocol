import { expect } from "chai";
import { ethers } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";

import {
  deployProtocolSettingsV1,
  deployPaymentsResolverOperationsV1,
} from "../../common/helpers/deploymentHelper";
import grantRoles from "../../common/helpers/paymentsResolverOperationsHelper";

describe("PaymentsResolverOperationsV1", () => {
  const deployPaymentsResolverOperationsV1Fixture = async () => {
    const [deployer, protocolAdmin, nonAdmin] = await ethers.getSigners();

    const deployerAddress = await deployer.getAddress();
    const protocolAdminAddress = await protocolAdmin.getAddress();
    const nonAdminAddress = await nonAdmin.getAddress();

    const protocolSettingsV1 = await deployProtocolSettingsV1();
    const paymentsResolverOperationsV1 =
      await deployPaymentsResolverOperationsV1(protocolSettingsV1);

    const authorizedOperatorRole =
      await paymentsResolverOperationsV1.AUTHORIZED_OPERATOR();

    const protocolAdminRole =
      await paymentsResolverOperationsV1.PROTOCOL_ADMIN();

    await grantRoles(
      paymentsResolverOperationsV1,
      deployerAddress,
      protocolAdminAddress
    );

    return {
      deployer,
      nonAdmin,
      protocolAdmin,
      protocolAdminAddress,
      paymentsResolverOperationsV1,
      protocolAdminRole,
      nonAdminAddress,
      deployerAddress,
      authorizedOperatorRole,
    };
  };

  describe("updateProtocolSettingsAddress", () => {
    context("when caller is a protocol admin", () => {
      it("updates the address of the protocol settings", async () => {
        const { protocolAdmin, paymentsResolverOperationsV1 } =
          await loadFixture(deployPaymentsResolverOperationsV1Fixture);

        // using paymentsResolverOperationsV1.address for test purposes
        await expect(
          paymentsResolverOperationsV1
            .connect(protocolAdmin)
            .updateProtocolSettingsAddress(paymentsResolverOperationsV1.address)
        ).to.not.be.reverted;
      });
    });

    context("when caller is not a protocol admin", () => {
      it("fails to update the protocol settings address", async () => {
        const {
          nonAdmin,
          nonAdminAddress,
          protocolAdminRole,
          paymentsResolverOperationsV1,
        } = await loadFixture(deployPaymentsResolverOperationsV1Fixture);

        // using paymentsResolverOperationsV1.address for test purposes
        await expect(
          paymentsResolverOperationsV1
            .connect(nonAdmin)
            .updateProtocolSettingsAddress(paymentsResolverOperationsV1.address)
        ).to.be.revertedWith(
          `AccessControl: account ${nonAdminAddress.toLowerCase()} is missing role ${protocolAdminRole}`
        );
      });
    });
  });

  describe("englishAuctionFeeResolver", () => {
    context("when caller is an authorized operator", () => {
      it("returns the maker earnings for an english auction", async () => {
        const { deployer, paymentsResolverOperationsV1 } = await loadFixture(
          deployPaymentsResolverOperationsV1Fixture
        );

        const value = ethers.utils.parseEther("1");

        const makerEarnings = await paymentsResolverOperationsV1
          .connect(deployer)
          .callStatic.englishAuctionFeeResolver(value);

        expect(makerEarnings).to.eq("985000000000000000");
      });
    });
    context("when caller is not authorized", () => {
      it("returns an error", async () => {
        const {
          nonAdmin,
          authorizedOperatorRole,
          nonAdminAddress,
          paymentsResolverOperationsV1,
        } = await loadFixture(deployPaymentsResolverOperationsV1Fixture);

        const value = ethers.utils.parseEther("1");

        await expect(
          paymentsResolverOperationsV1
            .connect(nonAdmin)
            .callStatic.englishAuctionFeeResolver(value)
        ).to.be.revertedWith(
          `AccessControl: account ${nonAdminAddress.toLowerCase()} is missing role ${authorizedOperatorRole}`
        );
      });
    });
  });

  describe("dutchAuctionFeeResolver", () => {
    context("when caller is an authorized operator", () => {
      it("returns the maker earnings for a dutch auction", async () => {
        const { deployer, paymentsResolverOperationsV1 } = await loadFixture(
          deployPaymentsResolverOperationsV1Fixture
        );

        const value = ethers.utils.parseEther("1");

        const makerEarnings = await paymentsResolverOperationsV1
          .connect(deployer)
          .callStatic.dutchAuctionFeeResolver(value);

        expect(makerEarnings).to.eq("985000000000000000");
      });
    });
    context("when caller is not authorized", () => {
      it("returns an error", async () => {
        const {
          nonAdmin,
          authorizedOperatorRole,
          nonAdminAddress,
          paymentsResolverOperationsV1,
        } = await loadFixture(deployPaymentsResolverOperationsV1Fixture);

        const value = ethers.utils.parseEther("1");

        await expect(
          paymentsResolverOperationsV1
            .connect(nonAdmin)
            .callStatic.dutchAuctionFeeResolver(value)
        ).to.be.revertedWith(
          `AccessControl: account ${nonAdminAddress.toLowerCase()} is missing role ${authorizedOperatorRole}`
        );
      });
    });
  });

  describe("sellFeeResolver", () => {
    context("when caller is an authorized operator", () => {
      it("returns the maker earnings for a sell order", async () => {
        const { deployer, paymentsResolverOperationsV1 } = await loadFixture(
          deployPaymentsResolverOperationsV1Fixture
        );

        const value = ethers.utils.parseEther("1");

        const makerEarnings = await paymentsResolverOperationsV1
          .connect(deployer)
          .callStatic.sellFeeResolver(value);

        expect(makerEarnings).to.eq("985000000000000000");
      });
    });
    context("when caller is not authorized", () => {
      it("returns an error", async () => {
        const {
          nonAdmin,
          authorizedOperatorRole,
          nonAdminAddress,
          paymentsResolverOperationsV1,
        } = await loadFixture(deployPaymentsResolverOperationsV1Fixture);

        const value = ethers.utils.parseEther("1");

        await expect(
          paymentsResolverOperationsV1
            .connect(nonAdmin)
            .callStatic.sellFeeResolver(value)
        ).to.be.revertedWith(
          `AccessControl: account ${nonAdminAddress.toLowerCase()} is missing role ${authorizedOperatorRole}`
        );
      });
    });
  });

  describe.only("swapFeeResolver", () => {
    context("when caller is an authorized operator", () => {
      it("returns the maker earnings for a swap order", async () => {
        const { deployer, paymentsResolverOperationsV1 } = await loadFixture(
          deployPaymentsResolverOperationsV1Fixture
        );

        const feeToBePaid = await paymentsResolverOperationsV1
          .connect(deployer)
          .callStatic.swapFeeResolver();

        expect(feeToBePaid).to.eq("3000000000000000");
      });
    });
    context("when caller is not authorized", () => {
      it("returns an error", async () => {
        const {
          nonAdmin,
          authorizedOperatorRole,
          nonAdminAddress,
          paymentsResolverOperationsV1,
        } = await loadFixture(deployPaymentsResolverOperationsV1Fixture);

        await expect(
          paymentsResolverOperationsV1
            .connect(nonAdmin)
            .callStatic.swapFeeResolver()
        ).to.be.revertedWith(
          `AccessControl: account ${nonAdminAddress.toLowerCase()} is missing role ${authorizedOperatorRole}`
        );
      });
    });
  });
});
