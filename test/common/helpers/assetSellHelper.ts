import { Signer } from 'ethers';
import {
  ActorFactoryV1,
  AssetSellV1,
  AssetTransferV1,
  NeatFiProtocolStorageV1,
} from 'src/types';

const grantRoles = async (
  actorFactoryV1: ActorFactoryV1,
  neatFiProtocolStorageV1: NeatFiProtocolStorageV1,
  assetTransferV1: AssetTransferV1,
  assetSellV1: AssetSellV1,
  deployer: Signer,
  deployerAddress: string,
  protocolAdminRoleAddress: string,
  nonAdminAddress: string,
) => {
  const authorizedOperatorRole = await assetSellV1.AUTHORIZED_OPERATOR();
  const protocolAdminRole = await assetSellV1.PROTOCOL_ADMIN();

  await actorFactoryV1.connect(deployer).grantRole(authorizedOperatorRole, deployerAddress);
  await neatFiProtocolStorageV1.connect(deployer)
    .grantRole(authorizedOperatorRole, deployerAddress);

  await neatFiProtocolStorageV1.grantRole(authorizedOperatorRole, assetSellV1.address);
  await neatFiProtocolStorageV1.grantRole(authorizedOperatorRole, assetTransferV1.address);
  await assetTransferV1.grantRole(authorizedOperatorRole, assetSellV1.address);

  await assetSellV1.grantRole(authorizedOperatorRole, deployerAddress);
  await assetSellV1.grantRole(protocolAdminRole, protocolAdminRoleAddress);
  await assetSellV1.grantRole(authorizedOperatorRole, nonAdminAddress);
};

export default grantRoles;
