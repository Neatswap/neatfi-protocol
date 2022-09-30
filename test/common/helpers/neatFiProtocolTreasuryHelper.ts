import { Signer } from "ethers";
import { NeatFiProtocolTreasuryV1 } from "src/types";
import ONE_DAY_IN_MILLI_SECS from "../constants/time";

export const grantRoles = async (
  neatFiProtocolTreasuryV1: NeatFiProtocolTreasuryV1,
  deployer: Signer,
  deployerAddress: string,
  protocolAdminAddress: string,
  protocolTreasurerAddress: string
) => {
  const authorizedOperatorRole =
    await neatFiProtocolTreasuryV1.AUTHORIZED_OPERATOR();
  const protocolAdminRole = await neatFiProtocolTreasuryV1.PROTOCOL_ADMIN();
  const protocolTreasurerRole =
    await neatFiProtocolTreasuryV1.PROTOCOL_TREASURER();

  await neatFiProtocolTreasuryV1
    .connect(deployer)
    .grantRole(authorizedOperatorRole, deployerAddress);

  await neatFiProtocolTreasuryV1.grantRole(
    protocolAdminRole,
    protocolAdminAddress
  );

  await neatFiProtocolTreasuryV1.grantRole(
    protocolTreasurerRole,
    protocolTreasurerAddress
  );
};

export const buildLockNeatTokens =
  (
    neatHolder: Signer,
    neatFiProtocolTreasuryV1: NeatFiProtocolTreasuryV1,
    tokenAmount: string = "100000000000000000000",
    lockPeriod: number = (30 * ONE_DAY_IN_MILLI_SECS) / 1000
  ) =>
  async (): Promise<{ lockerHash: string }> => {
    const lockTokensTx = await neatFiProtocolTreasuryV1
      .connect(neatHolder)
      .lockNeatTokens(tokenAmount, lockPeriod);

    const receipt = await lockTokensTx.wait();

    const { lockerHash } = receipt.events[0].args;

    return { lockerHash };
  };
