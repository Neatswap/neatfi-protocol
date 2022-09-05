import { ActorFactoryV1 } from 'src/types';

const requestActorKey = async (actorFactoryV1: ActorFactoryV1) => {
  await actorFactoryV1.requestActorKey(actorFactoryV1.address);

  const actorInfo = await actorFactoryV1.actorInfo(actorFactoryV1.address);

  return actorInfo;
};

export default requestActorKey;
