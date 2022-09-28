import { Signer } from "ethers";
import {
  AssetAuctionV1,
  AssetTransferV1,
  NeatFiProtocolStorageV1,
} from "src/types";

const grantRoles = async (
  neatFiProtocolStorageV1: NeatFiProtocolStorageV1,
  assetTransferV1: AssetTransferV1,
  assetAuctionV1: AssetAuctionV1,
  deployer: Signer,
  deployerAddress: string,
  protocolAdminAddress: string
) => {
  const authorizedOperatorRole = await assetAuctionV1.AUTHORIZED_OPERATOR();
  const protocolAdminRole = await assetAuctionV1.PROTOCOL_ADMIN();

  await neatFiProtocolStorageV1
    .connect(deployer)
    .grantRole(authorizedOperatorRole, deployerAddress);

  await neatFiProtocolStorageV1.grantRole(
    authorizedOperatorRole,
    assetAuctionV1.address
  );
  await neatFiProtocolStorageV1.grantRole(
    authorizedOperatorRole,
    assetTransferV1.address
  );
  await assetTransferV1.grantRole(
    authorizedOperatorRole,
    assetAuctionV1.address
  );

  await assetAuctionV1.grantRole(authorizedOperatorRole, deployerAddress);
  await assetAuctionV1.grantRole(protocolAdminRole, protocolAdminAddress);
};

export default grantRoles;
