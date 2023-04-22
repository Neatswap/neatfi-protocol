import { PaymentsResolverOperationsV1 } from "src/types";

const grantRoles = async (
  paymentsResolverOperationsV1: PaymentsResolverOperationsV1,
  deployerAddress: string,
  protocolAdminAddress: string
) => {
  const authorizedOperatorRole =
    await paymentsResolverOperationsV1.AUTHORIZED_OPERATOR();
  const protocolAdminRole = await paymentsResolverOperationsV1.PROTOCOL_ADMIN();

  await paymentsResolverOperationsV1.grantRole(
    authorizedOperatorRole,
    deployerAddress
  );
  await paymentsResolverOperationsV1.grantRole(
    protocolAdminRole,
    protocolAdminAddress
  );
};

export default grantRoles;
