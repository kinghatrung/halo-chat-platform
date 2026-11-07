import { redisClient } from '@/config/redis';

const onlineKey = (userId: string) => `online:${userId}`;

export const addUserSocket = async (userId: string, socketId: string) => {
  const before = await redisClient.scard(onlineKey(userId));
  await redisClient.sadd(onlineKey(userId), socketId);
  return { wasOffline: before === 0 };
};

export const removeUserSocket = async (userId: string, socketId: string) => {
  await redisClient.srem(onlineKey(userId), socketId);
  const remaining = await redisClient.scard(onlineKey(userId));
  return { isNowOffline: remaining === 0 };
};

export const isUserOnline = async (userId: string) => {
  const count = await redisClient.scard(onlineKey(userId));
  return count > 0;
};

// shortcut: wipes presence of every instance on startup, fine for one API process; with several
// instances, keep socket sets per instance (online:<instanceId>:<userId>) and clear only your own.
export const clearAllOnlineUsers = async () => {
  // SCAN instead of KEYS: KEYS blocks Redis while it walks the whole keyspace.
  for await (const keys of redisClient.scanStream({ match: 'online:*', count: 500 })) {
    if (keys.length > 0) await redisClient.del(...(keys as string[]));
  }
};
