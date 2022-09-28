import { expect } from "chai";
import { ethers } from "hardhat";
import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";

import {
  deployNeatFiProtocolTreasuryV1,
  deployERC20Mock,
} from "../../common/helpers/deploymentHelper";
import {
  grantRoles,
  buildLockNeatTokens,
} from "../../common/helpers/neatFiProtocolTreasuryHelper";
import ONE_DAY_IN_MILLI_SECS from "../../common/constants/time";

describe("NeatFiProtocolTreasuryV1", () => {
  const deployNeatFiProtocolTreasuryV1Fixture = async () => {
    const [deployer, protocolAdmin, neatHolder, protocolTreasurer] =
      await ethers.getSigners();

    const deployerAddress = await deployer.getAddress();
    const protocolAdminAddress = await protocolAdmin.getAddress();
    const neatHolderAddress = await neatHolder.getAddress();
    const protocolTreasurerAddress = await protocolTreasurer.getAddress();

    const mockNeatToken = await deployERC20Mock(deployerAddress);
    const neatFiProtocolTreasuryV1 = await deployNeatFiProtocolTreasuryV1(
      mockNeatToken
    );

    const authorizedOperatorRole =
      await neatFiProtocolTreasuryV1.AUTHORIZED_OPERATOR();
    const protocolAdminRole = await neatFiProtocolTreasuryV1.PROTOCOL_ADMIN();
    const protocolTreasurerRole =
      await neatFiProtocolTreasuryV1.PROTOCOL_TREASURER();

    await mockNeatToken.mint(deployerAddress, "1000000000000000000000");
    await mockNeatToken.mint(neatHolderAddress, "5000000000000000000000");

    await mockNeatToken
      .connect(neatHolder)
      .approve(neatFiProtocolTreasuryV1.address, "5000000000000000000000000");

    await mockNeatToken
      .connect(neatHolder)
      .approve(neatFiProtocolTreasuryV1.address, "5000000000000000000000000");

    await grantRoles(
      neatFiProtocolTreasuryV1,
      deployer,
      deployerAddress,
      protocolAdminAddress,
      protocolTreasurerAddress
    );

    const makeLocker = buildLockNeatTokens(
      neatHolder,
      neatFiProtocolTreasuryV1
    );

    return {
      makeLocker,
      protocolTreasurer,
      protocolTreasurerAddress,
      protocolTreasurerRole,
      authorizedOperatorRole,
      protocolAdminRole,
      deployer,
      deployerAddress,
      neatHolder,
      neatHolderAddress,
      protocolAdmin,
      protocolAdminAddress,
      mockNeatToken,
      neatFiProtocolTreasuryV1,
    };
  };

  describe("receive", () => {
    it("emits EtherReceived upon receiving Ether", async () => {
      const { deployer, neatFiProtocolTreasuryV1 } = await loadFixture(
        deployNeatFiProtocolTreasuryV1Fixture
      );

      await expect(
        deployer.sendTransaction({
          to: neatFiProtocolTreasuryV1.address,
          value: ethers.utils.parseEther("1.0"),
        })
      )
        .to.emit(neatFiProtocolTreasuryV1, "EtherReceived")
        .withArgs(deployer.address, ethers.utils.parseEther("1.0"));
    });
  });

  describe("updateVestingEscrowAddress", () => {
    context("when caller is a protocol admin", () => {
      it("updates the vesting escrow contract address", async () => {
        const { protocolAdmin, neatFiProtocolTreasuryV1 } = await loadFixture(
          deployNeatFiProtocolTreasuryV1Fixture
        );

        await expect(
          neatFiProtocolTreasuryV1
            .connect(protocolAdmin)
            .updateVestingEscrowAddress(neatFiProtocolTreasuryV1.address)
        ).to.not.be.reverted;
      });
    });
    context("when caller is not a protocol admin", () => {
      it("returns an error", async () => {
        const {
          neatHolder,
          neatHolderAddress,
          protocolAdminRole,
          neatFiProtocolTreasuryV1,
        } = await loadFixture(deployNeatFiProtocolTreasuryV1Fixture);

        await expect(
          neatFiProtocolTreasuryV1
            .connect(neatHolder)
            .updateVestingEscrowAddress(neatFiProtocolTreasuryV1.address)
        ).to.be.revertedWith(
          `AccessControl: account ${neatHolderAddress.toLowerCase()} is missing role ${protocolAdminRole}`
        );
      });
    });
  });

  describe("updateProtocolSettingsAddress", () => {
    context("when caller is a protocol admin", () => {
      it("updates the protocol settings contract address", async () => {
        const { protocolAdmin, neatFiProtocolTreasuryV1 } = await loadFixture(
          deployNeatFiProtocolTreasuryV1Fixture
        );

        await expect(
          neatFiProtocolTreasuryV1
            .connect(protocolAdmin)
            .updateProtocolSettingsAddress(neatFiProtocolTreasuryV1.address)
        ).to.not.be.reverted;
      });
    });
    context("when caller is not a protocol admin", () => {
      it("returns an error", async () => {
        const {
          neatHolder,
          neatHolderAddress,
          protocolAdminRole,
          neatFiProtocolTreasuryV1,
        } = await loadFixture(deployNeatFiProtocolTreasuryV1Fixture);

        await expect(
          neatFiProtocolTreasuryV1
            .connect(neatHolder)
            .updateProtocolSettingsAddress(neatFiProtocolTreasuryV1.address)
        ).to.be.revertedWith(
          `AccessControl: account ${neatHolderAddress.toLowerCase()} is missing role ${protocolAdminRole}`
        );
      });
    });
  });

  describe("getBalance", () => {
    it("returns the treasury balance", async () => {
      const { deployer, neatFiProtocolTreasuryV1 } = await loadFixture(
        deployNeatFiProtocolTreasuryV1Fixture
      );

      const value = ethers.utils.parseEther("1.0");

      await deployer.sendTransaction({
        to: neatFiProtocolTreasuryV1.address,
        value: value,
      });

      expect(await neatFiProtocolTreasuryV1.getBalance()).to.eq(
        "1000000000000000000"
      );
    });
  });

  describe("getNeatTokenBalance", () => {
    it("returns the treasury balance of mock neat tokens", async () => {
      const { mockNeatToken, neatFiProtocolTreasuryV1 } = await loadFixture(
        deployNeatFiProtocolTreasuryV1Fixture
      );

      await mockNeatToken.mint(
        neatFiProtocolTreasuryV1.address,
        "100000000000000000000"
      );

      const balance =
        await neatFiProtocolTreasuryV1.callStatic.getNeatTokenBalance();

      expect(balance).to.eq("100000000000000000000");
    });
  });

  describe("lockNeatTokens", () => {
    context("if locker data is correct", () => {
      it("locks the tokens in a locker", async () => {
        const { neatHolder, neatFiProtocolTreasuryV1 } = await loadFixture(
          deployNeatFiProtocolTreasuryV1Fixture
        );

        await expect(
          neatFiProtocolTreasuryV1
            .connect(neatHolder)
            .lockNeatTokens(
              "100000000000000000000",
              (30 * ONE_DAY_IN_MILLI_SECS) / 1000
            )
        ).to.emit(neatFiProtocolTreasuryV1, "LockerCreated");
      });
    });
    context("if locker period is wrong", () => {
      it("returns an error", async () => {
        const { neatHolder, neatFiProtocolTreasuryV1 } = await loadFixture(
          deployNeatFiProtocolTreasuryV1Fixture
        );

        await expect(
          neatFiProtocolTreasuryV1
            .connect(neatHolder)
            .lockNeatTokens(
              "100000000000000000000",
              (31 * ONE_DAY_IN_MILLI_SECS) / 1000
            )
        ).to.be.revertedWith(
          "ProtocolTreasuryOperationsUpgradeable::_lockNeatTokens: wrong lock period."
        );
      });
    });
    context("if token amount is wrong", () => {
      it("returns an error", async () => {
        const { neatHolder, neatFiProtocolTreasuryV1 } = await loadFixture(
          deployNeatFiProtocolTreasuryV1Fixture
        );

        await expect(
          neatFiProtocolTreasuryV1
            .connect(neatHolder)
            .lockNeatTokens(
              "110000000000000000000",
              (30 * ONE_DAY_IN_MILLI_SECS) / 1000
            )
        ).to.be.revertedWith(
          "ProtocolTreasuryOperationsUpgradeable::_lockNeatTokens: wrong amount of tokens to lock."
        );
      });
    });
  });

  describe("unlockNeatTokens", () => {
    context("if locker is available to unlock", () => {
      it("unlocks the locked tokens", async () => {
        const { makeLocker, neatHolder, neatFiProtocolTreasuryV1 } =
          await loadFixture(deployNeatFiProtocolTreasuryV1Fixture);

        const { lockerHash } = await makeLocker();

        // locker matures
        time.increaseTo((await time.latest()) + 40 * ONE_DAY_IN_MILLI_SECS);

        await expect(
          neatFiProtocolTreasuryV1
            .connect(neatHolder)
            .unlockNeatTokens(lockerHash)
        ).to.emit(neatFiProtocolTreasuryV1, "LockerUnlocked");
      });
    });
    context("if unlocking time is wrong", () => {
      it("returns an error", async () => {
        const { makeLocker, neatHolder, neatFiProtocolTreasuryV1 } =
          await loadFixture(deployNeatFiProtocolTreasuryV1Fixture);

        const { lockerHash } = await makeLocker();

        await expect(
          neatFiProtocolTreasuryV1
            .connect(neatHolder)
            .unlockNeatTokens(lockerHash)
        ).to.be.revertedWith(
          "ProtocolTreasuryOperationsUpgradeable::_unlockNeatTokens: can't unlock this locker yet."
        );
      });
    });
    context("if caller is not the locker creator", () => {
      it("returns an error", async () => {
        const { makeLocker, deployer, neatFiProtocolTreasuryV1 } =
          await loadFixture(deployNeatFiProtocolTreasuryV1Fixture);

        const { lockerHash } = await makeLocker();

        // locker matures
        time.increaseTo((await time.latest()) + 40 * ONE_DAY_IN_MILLI_SECS);

        await expect(
          neatFiProtocolTreasuryV1
            .connect(deployer)
            .unlockNeatTokens(lockerHash)
        ).to.be.revertedWith(
          "ProtocolTreasuryOperationsUpgradeable::_unlockNeatTokens: token holder authentication fail."
        );
      });
    });
  });

  describe("extendLockPeriod", () => {
    context("when data is valid", () => {
      it("extends a locker's extension period", async () => {
        const { makeLocker, neatHolder, neatFiProtocolTreasuryV1 } =
          await loadFixture(deployNeatFiProtocolTreasuryV1Fixture);

        const { lockerHash } = await makeLocker();

        const lockerBeforeExtension = await neatFiProtocolTreasuryV1.getLocker(
          lockerHash
        );

        const currentExtensionPeriod =
          lockerBeforeExtension.availableToUnlockAt;

        await neatFiProtocolTreasuryV1
          .connect(neatHolder)
          .extendLockPeriod(lockerHash, (30 * ONE_DAY_IN_MILLI_SECS) / 1000);

        const lockerAfterExtension = await neatFiProtocolTreasuryV1.getLocker(
          lockerHash
        );

        expect(
          Number(currentExtensionPeriod) + (30 * ONE_DAY_IN_MILLI_SECS) / 1000
        ).to.eq(Number(lockerAfterExtension.availableToUnlockAt));
      });
    });
    context("when locker's extension period has passed", () => {
      it("increases the extension period", async () => {
        const { makeLocker, neatHolder, neatFiProtocolTreasuryV1 } =
          await loadFixture(deployNeatFiProtocolTreasuryV1Fixture);

        const { lockerHash } = await makeLocker();

        time.increaseTo((await time.latest()) + 40 * ONE_DAY_IN_MILLI_SECS);

        await neatFiProtocolTreasuryV1
          .connect(neatHolder)
          .extendLockPeriod(lockerHash, (30 * ONE_DAY_IN_MILLI_SECS) / 1000);

        const lockerAfterExtension = await neatFiProtocolTreasuryV1.getLocker(
          lockerHash
        );

        expect(
          Number(lockerAfterExtension.availableToUnlockAt)
        ).to.be.greaterThan(
          (await time.latest()) + (29 * ONE_DAY_IN_MILLI_SECS) / 1000
        );
      });
    });
    context("when the extension period is wrong", () => {
      it("returns an error", async () => {
        const { makeLocker, neatHolder, neatFiProtocolTreasuryV1 } =
          await loadFixture(deployNeatFiProtocolTreasuryV1Fixture);

        const { lockerHash } = await makeLocker();

        await expect(
          neatFiProtocolTreasuryV1
            .connect(neatHolder)
            .extendLockPeriod(lockerHash, (31 * ONE_DAY_IN_MILLI_SECS) / 1000)
        ).to.be.revertedWith(
          "ProtocolTreasuryOperationsUpgradeable::_extendLockPeriod: wrong extension period."
        );
      });
    });
  });

  describe("getAllLockersByAddress", () => {
    it("returns all lockers of an address", async () => {
      const { makeLocker, neatHolder, neatFiProtocolTreasuryV1 } =
        await loadFixture(deployNeatFiProtocolTreasuryV1Fixture);

      await makeLocker();

      time.increaseTo((await time.latest()) + 1 * ONE_DAY_IN_MILLI_SECS);

      await makeLocker();

      const lockers = await neatFiProtocolTreasuryV1
        .connect(neatHolder)
        .getAllLockersByAddress();

      expect(lockers.length).to.eq(2);
    });
  });

  describe("getActiveLockersByAddress", () => {
    it("only returns active lockers of an address", async () => {
      const { makeLocker, neatHolder, neatFiProtocolTreasuryV1 } =
        await loadFixture(deployNeatFiProtocolTreasuryV1Fixture);

      await makeLocker();

      time.increaseTo((await time.latest()) + 50 * ONE_DAY_IN_MILLI_SECS);

      await makeLocker();

      time.increaseTo((await time.latest()) + 30 * ONE_DAY_IN_MILLI_SECS);

      await makeLocker();

      const lockers = await neatFiProtocolTreasuryV1
        .connect(neatHolder)
        .getActiveLockersByAddress();

      expect(lockers.length).to.eq(1);
    });
  });

  describe("getTotlaLockedNeats", () => {
    it("returns the sum of total locked tokens in all lockers", async () => {
      const { makeLocker, neatHolder, neatFiProtocolTreasuryV1 } =
        await loadFixture(deployNeatFiProtocolTreasuryV1Fixture);

      await makeLocker();

      await makeLocker();

      await makeLocker();

      const allLockedNeats = await neatFiProtocolTreasuryV1
        .connect(neatHolder)
        .getTotlaLockedNeats();

      expect(allLockedNeats).to.eq("300000000000000000000");
    });
  });

  describe("generateDistributionPool", () => {
    context("when caller is a protocol treasurer", () => {
      it("generates the distribution pool", async () => {
        const { protocolTreasurer, deployer, neatFiProtocolTreasuryV1 } =
          await loadFixture(deployNeatFiProtocolTreasuryV1Fixture);

        await deployer.sendTransaction({
          to: neatFiProtocolTreasuryV1.address,
          value: ethers.utils.parseEther("1.0"),
        });

        await neatFiProtocolTreasuryV1
          .connect(protocolTreasurer)
          .generateDistributionPool();

        expect(
          await neatFiProtocolTreasuryV1.currentFeeDistributionPool()
        ).to.eq(ethers.utils.parseEther("0.7"));
      });
    });
    context("when caller is not a protocol treasurer", () => {
      it("returns an error", async () => {
        const {
          protocolAdmin,
          protocolTreasurerRole,
          protocolAdminAddress,
          neatFiProtocolTreasuryV1,
        } = await loadFixture(deployNeatFiProtocolTreasuryV1Fixture);

        await expect(
          neatFiProtocolTreasuryV1
            .connect(protocolAdmin)
            .generateDistributionPool()
        ).to.be.revertedWith(
          `AccessControl: account ${protocolAdminAddress.toLowerCase()} is missing role ${protocolTreasurerRole}`
        );
      });
    });
  });

  describe("claimYield", () => {
    context("when pool is generated", () => {
      it("claims the protocol fee yield", async () => {
        const {
          deployer,
          neatHolder,
          protocolTreasurer,
          neatFiProtocolTreasuryV1,
          makeLocker,
        } = await loadFixture(deployNeatFiProtocolTreasuryV1Fixture);

        await deployer.sendTransaction({
          to: neatFiProtocolTreasuryV1.address,
          value: ethers.utils.parseEther("1.0"),
        });

        const holderBalanceBefore = await neatHolder.getBalance();

        await makeLocker();

        time.increaseTo((await time.latest()) + 40 * ONE_DAY_IN_MILLI_SECS);

        await makeLocker();

        await makeLocker();

        time.increaseTo((await time.latest()) + 1 * ONE_DAY_IN_MILLI_SECS);

        await neatFiProtocolTreasuryV1
          .connect(protocolTreasurer)
          .generateDistributionPool();

        await neatFiProtocolTreasuryV1.connect(neatHolder).claimYield();

        const holderBalanceAfter = await neatHolder.getBalance();

        expect(Number(holderBalanceBefore)).to.be.greaterThan(
          Number(holderBalanceAfter)
        );
      });
    });
    context("when pool is not generated", () => {
      it("returns an error", async () => {
        const { neatHolder, neatFiProtocolTreasuryV1 } = await loadFixture(
          deployNeatFiProtocolTreasuryV1Fixture
        );

        await expect(
          neatFiProtocolTreasuryV1.connect(neatHolder).claimYield()
        ).to.be.revertedWith(
          "ProtocolTreasuryOperationsUpgradeable::_claimYield: the first pool is not yet generated."
        );
      });
    });
    context("when yield is already claimed", () => {
      it("returns an error", async () => {
        const {
          deployer,
          neatHolder,
          protocolTreasurer,
          neatFiProtocolTreasuryV1,
          makeLocker,
        } = await loadFixture(deployNeatFiProtocolTreasuryV1Fixture);

        await deployer.sendTransaction({
          to: neatFiProtocolTreasuryV1.address,
          value: ethers.utils.parseEther("1.0"),
        });

        await makeLocker();

        time.increaseTo((await time.latest()) + 1 * ONE_DAY_IN_MILLI_SECS);

        await neatFiProtocolTreasuryV1
          .connect(protocolTreasurer)
          .generateDistributionPool();

        await neatFiProtocolTreasuryV1.connect(neatHolder).claimYield();

        await expect(
          neatFiProtocolTreasuryV1.connect(neatHolder).claimYield()
        ).to.be.revertedWith(
          "ProtocolTreasuryOperationsUpgradeable::_claimYield: yield can not be claimed yet."
        );
      });
    });
  });
  describe("withdraw", () => {
    context("when conditions are valid", () => {
      it("withdraws Ether from the Treasury balance", async () => {
        const {
          deployer,
          protocolTreasurer,
          protocolTreasurerAddress,
          neatFiProtocolTreasuryV1,
        } = await loadFixture(deployNeatFiProtocolTreasuryV1Fixture);

        await deployer.sendTransaction({
          to: neatFiProtocolTreasuryV1.address,
          value: ethers.utils.parseEther("1.0"),
        });

        await expect(
          neatFiProtocolTreasuryV1
            .connect(protocolTreasurer)
            .withdraw(protocolTreasurerAddress, ethers.utils.parseEther("0.5"))
        ).to.not.be.reverted;
      });
    });
    context("when withdrawal address is 0x0", () => {
      it("returns an error", async () => {
        const { protocolTreasurer, neatFiProtocolTreasuryV1 } =
          await loadFixture(deployNeatFiProtocolTreasuryV1Fixture);

        await expect(
          neatFiProtocolTreasuryV1
            .connect(protocolTreasurer)
            .withdraw(
              "0x0000000000000000000000000000000000000000",
              ethers.utils.parseEther("0.5")
            )
        ).to.be.revertedWith(
          "ProtocolTreasuryOperationsUpgradeable::_withdraw: withdrawal address can not be 0."
        );
      });
    });
    context("when withdrawal amount is not correct", () => {
      it("returns an error", async () => {
        const {
          deployer,
          protocolTreasurer,
          protocolTreasurerAddress,
          neatFiProtocolTreasuryV1,
        } = await loadFixture(deployNeatFiProtocolTreasuryV1Fixture);

        await deployer.sendTransaction({
          to: neatFiProtocolTreasuryV1.address,
          value: ethers.utils.parseEther("1.0"),
        });

        await expect(
          neatFiProtocolTreasuryV1
            .connect(protocolTreasurer)
            .withdraw(protocolTreasurerAddress, ethers.utils.parseEther("1.5"))
        ).to.be.revertedWith(
          "ProtocolTreasuryOperationsUpgradeable::_withdraw: incorrect withdrawal amount."
        );
      });
    });
  });
});
