import { time } from "@nomicfoundation/hardhat-network-helpers";
import { Signer } from "ethers";
import { ActorFactoryV1, NeatFiProtocolStorageV1 } from "src/types";
import { AssetStructsUpgradeable } from "src/types/NeatFiV1";

import ONE_DAY_IN_MILLI_SECS from "../constants/time";
import AssetOrderType from "../enums/assetOrderType";

export const buildMakeOrder =
  (
    actorKey: string,
    tokens: AssetStructsUpgradeable.TokenStruct[],
    neatFiProtocolStorageV1: NeatFiProtocolStorageV1,
    maker: string,
    startPrice: string = "100000000000000000",
    endPrice: string = "100000000000000000"
  ) =>
  async (
    orderType: AssetOrderType = AssetOrderType.SELL
  ): Promise<{
    orderHash: string;
    purchaseValue: string;
    listingTime: number;
  }> => {
    const listingTime = (await time.latest()) + 10 * ONE_DAY_IN_MILLI_SECS;
    const expirationTime = listingTime + 10 * ONE_DAY_IN_MILLI_SECS;

    const orderTransaction = await neatFiProtocolStorageV1.makeOrder(
      tokens,
      orderType,
      maker,
      listingTime,
      expirationTime,
      startPrice,
      endPrice,
      actorKey
    );
    const orderTransactionDetails = await orderTransaction.wait();

    const { orderHash } = orderTransactionDetails.events[0].args;

    return { orderHash, purchaseValue: endPrice, listingTime };
  };

export const grantRoles = async (
  neatFiProtocolStorageV1: NeatFiProtocolStorageV1,
  deployer: Signer,
  deployerAddress: string,
  protocolAdminAddress: string
) => {
  const authorizedOperatorRole =
    await neatFiProtocolStorageV1.AUTHORIZED_OPERATOR();
  const protocolAdminRole = await neatFiProtocolStorageV1.PROTOCOL_ADMIN();

  await neatFiProtocolStorageV1
    .connect(deployer)
    .grantRole(authorizedOperatorRole, deployerAddress);

  await neatFiProtocolStorageV1
    .connect(deployer)
    .grantRole(protocolAdminRole, protocolAdminAddress);
};
