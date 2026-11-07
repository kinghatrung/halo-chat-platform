import { redisClient } from '@/config/redis';

// Fixed-window limiter in Redis: shared by every API instance, and keys expire on their own
// (the old in-memory Map was per-process and kept one entry per user forever).
export const isRateLimited = async (key: string, windowMs: number, max: number) => {
  const redisKey = `ratelimit:${key}`;
  const count = await redisClient.incr(redisKey);
  if (count === 1) {
    await redisClient.pexpire(redisKey, windowMs);
  }
  return count > max;
};
