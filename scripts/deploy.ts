/* eslint-disable no-console */
import { ethers, upgrades } from 'hardhat';

const main = async () => {
  const ActorFactoryV1 = await ethers.getContractFactory('ActorFactoryV1');
  const actorFactoryV1 = await upgrades.deployProxy(
    ActorFactoryV1,
    { kind: 'uups' },
  );

  await actorFactoryV1.deployed();

  console.log('Actor factory deployed to:', actorFactoryV1.address);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
