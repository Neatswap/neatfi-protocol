import { Signer } from "ethers";
import {
  ActorFactoryV1,
  AssetAuctionV1,
  AssetSellV1,
  AssetSwapV1,
  AssetTransferV1,
  NeatFiProtocolStorageV1,
  NeatFiProtocolTreasuryV1,
  NeatFiV1,
  PaymentsResolverOperationsV1,
  ProtocolSettingsV1,
} from "src/types";

export const grantRoles = async (
  neatFiV1: NeatFiV1,
  assetTransferV1: AssetTransferV1,
  assetSwapV1: AssetSwapV1,
  assetSellV1: AssetSellV1,
  assetAuctionV1: AssetAuctionV1,
  deployer: Signer,
  deployerAddress: string,
  protocolAdminAddress: string
) => {
  const authorizedOperatorRole = await neatFiV1.AUTHORIZED_OPERATOR();
  const protocolAdminRole = await neatFiV1.PROTOCOL_ADMIN();

  await neatFiV1
    .connect(deployer)
    .grantRole(authorizedOperatorRole, deployerAddress);

  await neatFiV1.grantRole(protocolAdminRole, protocolAdminAddress);

  await assetTransferV1.grantRole(authorizedOperatorRole, assetSwapV1.address);
  await assetTransferV1.grantRole(
    authorizedOperatorRole,
    assetAuctionV1.address
  );
  await assetTransferV1.grantRole(authorizedOperatorRole, assetSellV1.address);
};
