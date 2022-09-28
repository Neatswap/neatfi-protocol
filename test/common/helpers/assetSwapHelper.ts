import { Signer } from "ethers";
import {
  AssetSwapV1,
  AssetTransferV1,
  NeatFiProtocolStorageV1,
} from "src/types";

const grantRoles = async (
  neatFiProtocolStorageV1: NeatFiProtocolStorageV1,
  assetTransferV1: AssetTransferV1,
  assetSwapV1: AssetSwapV1,
  deployer: Signer,
  deployerAddress: string,
  protocolAdminAddress: string
) => {
  const authorizedOperatorRole = await assetSwapV1.AUTHORIZED_OPERATOR();
  const protocolAdminRole = await assetSwapV1.PROTOCOL_ADMIN();

  await neatFiProtocolStorageV1
    .connect(deployer)
    .grantRole(authorizedOperatorRole, deployerAddress);

  await neatFiProtocolStorageV1.grantRole(
    authorizedOperatorRole,
    assetSwapV1.address
  );
  await neatFiProtocolStorageV1.grantRole(
    authorizedOperatorRole,
    assetTransferV1.address
  );
  await assetTransferV1.grantRole(authorizedOperatorRole, assetSwapV1.address);

  await assetSwapV1.grantRole(authorizedOperatorRole, deployerAddress);
  await assetSwapV1.grantRole(protocolAdminRole, protocolAdminAddress);
};

export default grantRoles;
