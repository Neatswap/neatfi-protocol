import { expect } from "chai";
import { BigNumberish, Signer } from "ethers";
import { ethers, upgrades } from "hardhat";
import {
  ProtocolSettingsV1,
  ProtocolSettingsV1__factory as ProtocolSettingsV1Factory,
} from "src/types";

describe("ProtocolSettingsV1", () => {
  let deployer: Signer;
  let deployerAddress: string;

  let protocolAdmin: Signer;
  let protocolAdminAddress: string;

  let nonAdmin: Signer;
  let nonAdminAddress: string;

  let protocolSettingsV1: ProtocolSettingsV1;
  let protocolSettingsV1Factory: ProtocolSettingsV1Factory;

  const swapProtocolFeeValue = 1000000000;
  const sellProtocolFeeValue = 15;
  const dutchAuctiouProtocolFeeNumeratorValue = 15;
  const englishAuctionProtocolFeeNumeratorValue = 15;

  beforeEach(async () => {
    [deployer, protocolAdmin, nonAdmin] = await ethers.getSigners();

    deployerAddress = await deployer.getAddress();
    protocolAdminAddress = await protocolAdmin.getAddress();
    nonAdminAddress = await nonAdmin.getAddress();

    protocolSettingsV1Factory = await ethers.getContractFactory(
      "ProtocolSettingsV1"
    );

    protocolSettingsV1 = (await upgrades.deployProxy(
      protocolSettingsV1Factory,
      [
        700,
        swapProtocolFeeValue,
        sellProtocolFeeValue,
        dutchAuctiouProtocolFeeNumeratorValue,
        englishAuctionProtocolFeeNumeratorValue,
        700,
      ],
      { kind: "uups" }
    )) as ProtocolSettingsV1;

    const protocolAdminRole = await protocolSettingsV1.PROTOCOL_ADMIN();
    const authorizedOperatorRole =
      await protocolSettingsV1.AUTHORIZED_OPERATOR();

    await protocolSettingsV1
      .connect(deployer)
      .grantRole(protocolAdminRole, protocolAdminAddress);
    await protocolSettingsV1
      .connect(deployer)
      .grantRole(authorizedOperatorRole, deployerAddress);
  });

  describe("getEnglishAuctionProtocolFeeNumerator", () => {
    it("returns the english auction protocol fee numerator", async () => {
      expect(
        await protocolSettingsV1.getEnglishAuctionProtocolFeeNumerator()
      ).to.eq(englishAuctionProtocolFeeNumeratorValue);
    });
  });

  describe("getDutchAuctionProtocolFeeNumerator", () => {
    it("returns the dutch auction protocol fee numerator", async () => {
      expect(
        await protocolSettingsV1.getDutchAuctionProtocolFeeNumerator()
      ).to.eq(dutchAuctiouProtocolFeeNumeratorValue);
    });
  });

  describe("getSellProtocolFeeNumerator", () => {
    it("returns the sell protocol fee numerator", async () => {
      expect(await protocolSettingsV1.getSellProtocolFeeNumerator()).to.eq(
        sellProtocolFeeValue
      );
    });
  });

  describe("getSwapProtocolFee", () => {
    it("returns the swap protocol fee", async () => {
      expect(await protocolSettingsV1.getSwapProtocolFee()).to.eq(
        swapProtocolFeeValue
      );
    });
  });

  describe("setEnglishAuctionProtocolFeeNumerator", () => {
    const newEnglishAuctionProtocolFeeNumerator = 2;

    context("when the caller is a protocol admin", () => {
      it("sets the english auction protocol fee numerator", async () => {
        await protocolSettingsV1
          .connect(protocolAdmin)
          .setEnglishAuctionProtocolFeeNumerator(
            newEnglishAuctionProtocolFeeNumerator
          );

        expect(
          await protocolSettingsV1.getEnglishAuctionProtocolFeeNumerator()
        ).to.eq(newEnglishAuctionProtocolFeeNumerator);
      });
    });

    context("when the caller is not a protocol admin", () => {
      it("returns an error", async () => {
        const protocolAdminRole = await protocolSettingsV1.PROTOCOL_ADMIN();

        await expect(
          protocolSettingsV1
            .connect(nonAdmin)
            .setEnglishAuctionProtocolFeeNumerator(
              newEnglishAuctionProtocolFeeNumerator
            )
        ).to.be.revertedWith(
          `'AccessControl: account ${nonAdminAddress.toLowerCase()} is missing role ${protocolAdminRole}`
        );
      });
    });
  });

  describe("setDutchAuctionProtocolFeeNumerator", () => {
    const newDutchAuctionProtocolFeeNumerator = 2;

    context("when the caller is a protocol admin", () => {
      it("sets the dutch auction protocol fee numerator", async () => {
        await protocolSettingsV1
          .connect(protocolAdmin)
          .setDutchAuctionProtocolFeeNumerator(
            newDutchAuctionProtocolFeeNumerator
          );

        expect(
          await protocolSettingsV1.getDutchAuctionProtocolFeeNumerator()
        ).to.eq(newDutchAuctionProtocolFeeNumerator);
      });
    });

    context("when the caller is not a protocol admin", () => {
      it("returns an error", async () => {
        const protocolAdminRole = await protocolSettingsV1.PROTOCOL_ADMIN();

        await expect(
          protocolSettingsV1
            .connect(nonAdmin)
            .setDutchAuctionProtocolFeeNumerator(
              newDutchAuctionProtocolFeeNumerator
            )
        ).to.be.revertedWith(
          `'AccessControl: account ${nonAdminAddress.toLowerCase()} is missing role ${protocolAdminRole}`
        );
      });
    });
  });

  describe("setSwapProtocolFee", () => {
    let newSwapProtocolFee: BigNumberish;
    let belowLimitSwapProtocolFee: BigNumberish;
    let aboveLimitSwapProtocolFee: BigNumberish;

    before(() => {
      newSwapProtocolFee = 6000000000;
      belowLimitSwapProtocolFee = 10;
      aboveLimitSwapProtocolFee = "10000000000000000000000000001";
    });

    context("when the caller is a protocol admin", () => {
      context("when the value is within limits", () => {
        it("sets the swap protocol fee", async () => {
          await protocolSettingsV1
            .connect(protocolAdmin)
            .setSwapProtocolFee(newSwapProtocolFee);

          expect(await protocolSettingsV1.getSwapProtocolFee()).to.eq(
            newSwapProtocolFee
          );
        });
      });

      context("when the value is below limits", () => {
        it("reverts with a limit too low error", async () => {
          await expect(
            protocolSettingsV1
              .connect(protocolAdmin)
              .setSwapProtocolFee(belowLimitSwapProtocolFee)
          ).to.be.revertedWith(
            "LimitsCheck:isWithinLimits: value is too small."
          );
        });
      });

      context("when the value is above limits", () => {
        it("reverts with the limit too high error", async () => {
          await expect(
            protocolSettingsV1
              .connect(protocolAdmin)
              .setSwapProtocolFee(aboveLimitSwapProtocolFee)
          ).to.be.revertedWith(
            "LimitsCheck:isWithinLimits: value is too large."
          );
        });
      });
    });

    context("when the caller is not a protocol admin", () => {
      it("returns an error", async () => {
        const protocolAdminRole = await protocolSettingsV1.PROTOCOL_ADMIN();

        await expect(
          protocolSettingsV1
            .connect(nonAdmin)
            .setSwapProtocolFee(newSwapProtocolFee)
        ).to.be.revertedWith(
          `'AccessControl: account ${nonAdminAddress.toLowerCase()} is missing role ${protocolAdminRole}`
        );
      });
    });
  });

  describe("setSellProtocolFee", () => {
    let newSellProtocolFee: BigNumberish;

    before(() => {
      newSellProtocolFee = 20;
    });

    context("when the caller is a protocol admin", () => {
      context("when the value is within limits", () => {
        it("sets the swap protocol fee", async () => {
          await protocolSettingsV1
            .connect(protocolAdmin)
            .setSellProtocolFeeNumerator(newSellProtocolFee);

          expect(await protocolSettingsV1.getSellProtocolFeeNumerator()).to.eq(
            newSellProtocolFee
          );
        });
      });
    });

    context("when the caller is not a protocol admin", () => {
      it("returns an error", async () => {
        const protocolAdminRole = await protocolSettingsV1.PROTOCOL_ADMIN();

        await expect(
          protocolSettingsV1
            .connect(nonAdmin)
            .setSellProtocolFeeNumerator(newSellProtocolFee)
        ).to.be.revertedWith(
          `'AccessControl: account ${nonAdminAddress.toLowerCase()} is missing role ${protocolAdminRole}`
        );
      });
    });
  });
});
