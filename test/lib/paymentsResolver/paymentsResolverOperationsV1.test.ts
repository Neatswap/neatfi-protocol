import { expect } from 'chai';
import { BigNumberish, Signer } from 'ethers';
import { ethers, upgrades } from 'hardhat';
import {
  PaymentsResolverOperationsV1,
  PaymentsResolverOperationsV1__factory as PaymentsResolverOperationsV1Factory,
  ProtocolSettingsV1,
  ProtocolSettingsV1__factory as ProtocolSettingsV1Factory,
} from 'src/types';

describe('PaymentsResolverOperationsV1', () => {
  let deployer: Signer;
  let deployerAddress: string;

  let protocolAdmin: Signer;
  let protocolAdminAddress: string;

  let nonAdmin: Signer;
  let nonAdminAddress: string;

  let paymentsResolverOperationsV1: PaymentsResolverOperationsV1;
  let paymentsResolverOperationsV1Factory: PaymentsResolverOperationsV1Factory;

  let protocolSettingsV1: ProtocolSettingsV1;
  let protocolSettingsV1Factory: ProtocolSettingsV1Factory;

  let protocolAdminRole: string;
  let authorizedOperatorRole: string;

  const swapProtocolFeeValue = 1000000000;
  const sellProtocolFeeValue = 1000000000;
  const dutchAuctiouProtocolFeeNumeratorValue = 1000;
  const englishAuctionProtocolFeeNumeratorValue = 1000;

  beforeEach(async () => {
    [deployer, protocolAdmin, nonAdmin] = await ethers.getSigners();

    deployerAddress = await deployer.getAddress();
    protocolAdminAddress = await protocolAdmin.getAddress();
    nonAdminAddress = await nonAdmin.getAddress();

    protocolSettingsV1Factory = (await ethers.getContractFactory('ProtocolSettingsV1'));

    protocolSettingsV1 = await upgrades.deployProxy(
      protocolSettingsV1Factory,
      [
        swapProtocolFeeValue,
        sellProtocolFeeValue,
        dutchAuctiouProtocolFeeNumeratorValue,
        englishAuctionProtocolFeeNumeratorValue,
      ],
      { kind: 'uups' },
    ) as ProtocolSettingsV1;

    paymentsResolverOperationsV1Factory = (await ethers.getContractFactory('PaymentsResolverOperationsV1'));

    paymentsResolverOperationsV1 = await upgrades.deployProxy(
      paymentsResolverOperationsV1Factory,
      [
        protocolSettingsV1.address,
      ],
      { kind: 'uups' },
    ) as PaymentsResolverOperationsV1;

    protocolAdminRole = await paymentsResolverOperationsV1.PROTOCOL_ADMIN();
    authorizedOperatorRole = await paymentsResolverOperationsV1.AUTHORIZED_OPERATOR();

    await paymentsResolverOperationsV1
      .connect(deployer)
      .grantRole(protocolAdminRole, protocolAdminAddress);

    await paymentsResolverOperationsV1
      .connect(deployer)
      .grantRole(authorizedOperatorRole, deployerAddress);
  });

  describe('englishAuctionFeeResolver', () => {
    const settlementValue = 1000000000;

    context('when the caller is an authorized operator', () => {
      it('returns the earnings', async () => {
        const result = await paymentsResolverOperationsV1
          .englishAuctionFeeResolver(settlementValue);

        console.log(result);
      });
    });

    context('when the caller is not an authorized operator', () => {
      it('returns an error', async () => {
        await expect(
          paymentsResolverOperationsV1.connect(nonAdmin)
            .englishAuctionFeeResolver(settlementValue),
        )
          .to.be.revertedWith(`'AccessControl: account ${nonAdminAddress.toLowerCase()} is missing role ${authorizedOperatorRole}`);
      });
    });
  });

  describe('dutchAuctionFeeResolver', () => {
    const settlementValue = 1000000000;

    context('when the caller is an authorized operator', () => {
      it('returns the earnings', async () => {
        const result = await paymentsResolverOperationsV1
          .dutchAuctionFeeResolver(settlementValue);

        console.log(result);
      });
    });

    context('when the caller is not an authorized operator', () => {
      it('returns an error', async () => {
        await expect(
          paymentsResolverOperationsV1.connect(nonAdmin)
            .dutchAuctionFeeResolver(settlementValue),
        )
          .to.be.revertedWith(`'AccessControl: account ${nonAdminAddress.toLowerCase()} is missing role ${authorizedOperatorRole}`);
      });
    });
  });

  describe.only('sellFeeResolver', () => {
    let settlementValue: BigNumberish;

    beforeEach(() => {
      settlementValue = '1000000000000000000000000000';
    });

    context('when the caller is an authorized operator', () => {
      it('returns the earnings', async () => {
        const result = await paymentsResolverOperationsV1
          .sellFeeResolver(settlementValue);

        console.log(result);
      });
    });

    context('when the caller is not an authorized operator', () => {
      it('returns an error', async () => {
        await expect(
          paymentsResolverOperationsV1.connect(nonAdmin)
            .dutchAuctionFeeResolver(settlementValue),
        )
          .to.be.revertedWith(`'AccessControl: account ${nonAdminAddress.toLowerCase()} is missing role ${authorizedOperatorRole}`);
      });
    });
  });

  describe.only('swapFeeResolver', () => {
    context('when the caller is an authorized operator', () => {
      it('returns the swap fee', async () => {
        const result = await paymentsResolverOperationsV1
          .callStatic
          .swapFeeResolver();

        expect(result).to.eq(swapProtocolFeeValue);
      });
    });

    context('when the caller is not an authorized operator', () => {
      it('returns an error', async () => {
        await expect(
          paymentsResolverOperationsV1.connect(nonAdmin)
            .swapFeeResolver(),
        )
          .to.be.revertedWith(`'AccessControl: account ${nonAdminAddress.toLowerCase()} is missing role ${authorizedOperatorRole}`);
      });
    });
  });

  describe('updateProtocolSettingsAddress', () => {
    const newSwapProtocolFeeValue = 1000000001;
    const newSellProtocolFeeValue = 3000000001;
    const newDutchAuctiouProtocolFeeNumeratorValue = 1000000001;
    const newEnglishAuctionProtocolFeeNumeratorValue = 1000000001;

    let newProtocolSettingsV1: ProtocolSettingsV1;

    beforeEach(async () => {
      newProtocolSettingsV1 = await upgrades.deployProxy(
        protocolSettingsV1Factory,
        [
          newSwapProtocolFeeValue,
          newSellProtocolFeeValue,
          newDutchAuctiouProtocolFeeNumeratorValue,
          newEnglishAuctionProtocolFeeNumeratorValue,
        ],
        { kind: 'uups' },
      ) as ProtocolSettingsV1;
    });

    context('when the caller is a protocol admin', () => {
      it('updates the protocol settings address', async () => {
        await paymentsResolverOperationsV1
          .connect(protocolAdmin)
          .updateProtocolSettingsAddress(newProtocolSettingsV1.address);

        const result = await paymentsResolverOperationsV1
          .callStatic
          .swapFeeResolver();

        expect(result).to.eq(newSwapProtocolFeeValue);
      });
    });

    context('when the caller is not a protocol admin', () => {
      it('returns an error', async () => {
        await expect(
          paymentsResolverOperationsV1.connect(nonAdmin)
            .updateProtocolSettingsAddress(newProtocolSettingsV1.address),
        )
          .to.be.revertedWith(`'AccessControl: account ${nonAdminAddress.toLowerCase()} is missing role ${protocolAdminRole}`);
      });
    });
  });
});
