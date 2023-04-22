import { expect } from "chai";
import { Signer } from "ethers";
import { ethers, upgrades } from "hardhat";
import {
  ActorFactoryV1,
  ActorFactoryV1__factory as ActorFactoryV1Factory,
} from "src/types";

describe("ActorFactoryV1", () => {
  let deployer: Signer;
  let deployerAddress: string;

  let protocolAdmin: Signer;
  let protocolAdminAddress: string;

  let nonAdmin: Signer;
  let nonAdminAddress: string;

  let actorFactoryV1: ActorFactoryV1;
  let actorFactoryV1Factory: ActorFactoryV1Factory;

  // using the same actor conract for mocking
  // an actor
  let actor: ActorFactoryV1;
  let actorAddress: string;

  beforeEach(async () => {
    [deployer, protocolAdmin, nonAdmin] = await ethers.getSigners();

    deployerAddress = await deployer.getAddress();
    protocolAdminAddress = await protocolAdmin.getAddress();
    nonAdminAddress = await nonAdmin.getAddress();

    actorFactoryV1Factory = await ethers.getContractFactory("ActorFactoryV1");

    actorFactoryV1 = (await upgrades.deployProxy(actorFactoryV1Factory, {
      kind: "uups",
    })) as ActorFactoryV1;

    actor = (await upgrades.deployProxy(actorFactoryV1Factory, {
      kind: "uups",
    })) as ActorFactoryV1;

    actorAddress = actor.address;

    const protocolAdminRole = await actorFactoryV1.PROTOCOL_ADMIN();
    const authorizedOperatorRole = await actorFactoryV1.AUTHORIZED_OPERATOR();

    await actorFactoryV1
      .connect(deployer)
      .grantRole(protocolAdminRole, protocolAdminAddress);
    await actorFactoryV1
      .connect(deployer)
      .grantRole(authorizedOperatorRole, deployerAddress);
  });

  describe("requestActorKey", () => {
    context("when the address is valid", () => {
      it("creates the actor with the correct status", async () => {
        await actorFactoryV1.connect(deployer).requestActorKey(actorAddress);
        const actorInfo = await actorFactoryV1.actorInfo(actorAddress);

        expect(actorInfo.actorStatus).to.eq(0);
      });

      it("creates the actor with the correct address", async () => {
        await actorFactoryV1.connect(deployer).requestActorKey(actorAddress);
        const actorInfo = await actorFactoryV1.actorInfo(actorAddress);

        expect(actorInfo.actorContract).to.eq(actorAddress);
      });

      it("creates the actor with the correct key", async () => {
        await actorFactoryV1.connect(deployer).requestActorKey(actorAddress);
        const actorInfo = await actorFactoryV1.actorInfo(actorAddress);

        expect(actorInfo.actorKey).to.include("0x0");
      });

      it("emits an ActorKeyRequested event", async () => {
        await expect(actorFactoryV1.requestActorKey(actorAddress))
          .to.emit(actorFactoryV1, "ActorKeyRequested")
          .withArgs(actorAddress);
      });
    });

    context("when the address is not a smart contract", () => {
      it("returns an error", async () => {
        await expect(
          actorFactoryV1.connect(deployer).requestActorKey(protocolAdminAddress)
        ).to.be.revertedWith(
          "ActorFactoryOperationsUpgradeable::_requestActorKey: actor address is not a smart contract."
        );
      });
    });
  });

  describe("approveAndGenerateActorKey", () => {
    context("when the address is valid", () => {
      beforeEach(async () => {
        await actorFactoryV1.connect(deployer).requestActorKey(actorAddress);
      });

      it("changes the actor status to active", async () => {
        await actorFactoryV1
          .connect(protocolAdmin)
          .approveAndGenerateActorKey(actorAddress);
        const actorInfo = await actorFactoryV1.actorInfo(actorAddress);

        expect(actorInfo.actorStatus).to.eq(1);
      });

      it("generates a key for the actor", async () => {
        await actorFactoryV1
          .connect(protocolAdmin)
          .approveAndGenerateActorKey(actorAddress);
        const actorInfo = await actorFactoryV1.actorInfo(actorAddress);

        expect(actorInfo.actorKey).to.not.include("0x0");
      });

      it("returns the actor key", async () => {
        const res = await actorFactoryV1
          .connect(protocolAdmin)
          .approveAndGenerateActorKey(actorAddress);

        expect(res.data).to.be.a("string");
      });

      it("emits an actor key created event", async () => {
        await expect(
          actorFactoryV1
            .connect(protocolAdmin)
            .approveAndGenerateActorKey(actorAddress)
        ).to.emit(actorFactoryV1, "ActorKeyCreated");
      });
    });

    context("when the key was already generated", () => {
      beforeEach(async () => {
        await actorFactoryV1.connect(deployer).requestActorKey(actorAddress);
      });

      it("returns an error", async () => {
        await actorFactoryV1
          .connect(protocolAdmin)
          .approveAndGenerateActorKey(actorAddress);

        await expect(
          actorFactoryV1
            .connect(protocolAdmin)
            .approveAndGenerateActorKey(actorAddress)
        ).to.be.revertedWith(
          "ActorFactoryOperationsUpgradeable::_approveAndGenerateActorKey: actor key already generated."
        );
      });
    });

    context("when the caller is not a protocol admin", () => {
      beforeEach(async () => {
        await actorFactoryV1.connect(deployer).requestActorKey(actorAddress);
      });

      it("returns an error", async () => {
        const protocolAdminRole = await actorFactoryV1.PROTOCOL_ADMIN();

        await expect(
          actorFactoryV1
            .connect(nonAdmin)
            .approveAndGenerateActorKey(actorAddress)
        ).to.be.revertedWith(
          `'AccessControl: account ${nonAdminAddress.toLowerCase()} is missing role ${protocolAdminRole}`
        );
      });
    });
  });

  describe("inactivateActor", () => {
    context("when the address is valid and the actor vas active", () => {
      beforeEach(async () => {
        await actorFactoryV1.connect(deployer).requestActorKey(actorAddress);
        await actorFactoryV1
          .connect(protocolAdmin)
          .approveAndGenerateActorKey(actorAddress);
      });

      it("deactivates the actor", async () => {
        await actorFactoryV1
          .connect(protocolAdmin)
          .inactivateActor(actorAddress);
        const actorInfo = await actorFactoryV1.actorInfo(actorAddress);

        expect(actorInfo.actorStatus).to.eq(2);
      });

      it("emits an actor inactivated event", async () => {
        await expect(
          actorFactoryV1.connect(protocolAdmin).inactivateActor(actorAddress)
        )
          .to.emit(actorFactoryV1, "ActorInactivated")
          .withArgs(actorAddress);
      });
    });

    context("when actor was already inactive", () => {
      beforeEach(async () => {
        await actorFactoryV1.connect(deployer).requestActorKey(actorAddress);
        await actorFactoryV1
          .connect(protocolAdmin)
          .approveAndGenerateActorKey(actorAddress);
        await actorFactoryV1
          .connect(protocolAdmin)
          .inactivateActor(actorAddress);
      });

      it("returns an error", async () => {
        await expect(
          actorFactoryV1.connect(protocolAdmin).inactivateActor(actorAddress)
        ).to.be.revertedWith(
          "ActorFactoryOperationsUpgradeable::_inactivateActor: actor is already inactive"
        );
      });
    });

    context("when actor has not been approved yet", () => {
      beforeEach(async () => {
        await actorFactoryV1.connect(deployer).requestActorKey(actorAddress);
      });

      it("returns an error", async () => {
        await expect(
          actorFactoryV1.connect(protocolAdmin).inactivateActor(actorAddress)
        ).to.be.revertedWith(
          "ActorFactoryOperationsUpgradeable::_inactivateActor: actor is not approved yet"
        );
      });
    });

    context("when the caller is not a protocol admin", () => {
      beforeEach(async () => {
        await actorFactoryV1.connect(deployer).requestActorKey(actorAddress);
      });

      it("returns an error", async () => {
        const protocolAdminRole = await actorFactoryV1.PROTOCOL_ADMIN();

        await expect(
          actorFactoryV1
            .connect(nonAdmin)
            .approveAndGenerateActorKey(actorAddress)
        ).to.be.revertedWith(
          `'AccessControl: account ${nonAdminAddress.toLowerCase()} is missing role ${protocolAdminRole}`
        );
      });
    });
  });

  describe("activateActor", () => {
    context("when the address is valid and the actor was inactive", () => {
      beforeEach(async () => {
        await actorFactoryV1.connect(deployer).requestActorKey(actorAddress);
        await actorFactoryV1
          .connect(protocolAdmin)
          .approveAndGenerateActorKey(actorAddress);
        await actorFactoryV1
          .connect(protocolAdmin)
          .inactivateActor(actorAddress);
      });

      it("activates the actor", async () => {
        await actorFactoryV1.connect(protocolAdmin).activateActor(actorAddress);
        const actorInfo = await actorFactoryV1.actorInfo(actorAddress);

        expect(actorInfo.actorStatus).to.eq(1);
      });

      it("emits an actor activated event", async () => {
        await expect(
          actorFactoryV1.connect(protocolAdmin).activateActor(actorAddress)
        )
          .to.emit(actorFactoryV1, "ActorActivated")
          .withArgs(actorAddress);
      });
    });

    context("when actor was already active", () => {
      beforeEach(async () => {
        await actorFactoryV1.connect(deployer).requestActorKey(actorAddress);
        await actorFactoryV1
          .connect(protocolAdmin)
          .approveAndGenerateActorKey(actorAddress);
      });

      it("returns an error", async () => {
        await expect(
          actorFactoryV1.connect(protocolAdmin).activateActor(actorAddress)
        ).to.be.revertedWith(
          "ActorFactoryOperationsUpgradeable::_activateActor: actor is already active"
        );
      });
    });

    context("when actor has not been approved yet", () => {
      beforeEach(async () => {
        await actorFactoryV1.connect(deployer).requestActorKey(actorAddress);
      });

      it("returns an error", async () => {
        await expect(
          actorFactoryV1.connect(protocolAdmin).activateActor(actorAddress)
        ).to.be.revertedWith(
          "ActorFactoryOperationsUpgradeable::_activateActor: actor is not approved yet"
        );
      });
    });

    context("when the caller is not a protocol admin", () => {
      beforeEach(async () => {
        await actorFactoryV1.connect(deployer).requestActorKey(actorAddress);
      });

      it("returns an error", async () => {
        const protocolAdminRole = await actorFactoryV1.PROTOCOL_ADMIN();

        await expect(
          actorFactoryV1
            .connect(nonAdmin)
            .approveAndGenerateActorKey(actorAddress)
        ).to.be.revertedWith(
          `'AccessControl: account ${nonAdminAddress.toLowerCase()} is missing role ${protocolAdminRole}`
        );
      });
    });
  });

  describe("getActorKey", () => {
    context("when the address is valid and the actor exists", () => {
      beforeEach(async () => {
        await actorFactoryV1.connect(deployer).requestActorKey(actorAddress);
        await actorFactoryV1
          .connect(protocolAdmin)
          .approveAndGenerateActorKey(actorAddress);
      });

      it("returns the actor key", async () => {
        const actorInfo = await actorFactoryV1.actorInfo(actorAddress);

        expect(await actorFactoryV1.getActorKey(actorAddress)).to.eq(
          actorInfo.actorKey
        );
      });
    });

    context("when actor was not approved", () => {
      beforeEach(async () => {
        await actorFactoryV1.connect(deployer).requestActorKey(actorAddress);
      });

      it("returns an error", async () => {
        await expect(
          actorFactoryV1.connect(protocolAdmin).getActorKey(actorAddress)
        ).to.be.revertedWith(
          "ActorFactoryOperationsUpgradeable::_getActorKey: actor key is 0x0."
        );
      });
    });
  });
});
