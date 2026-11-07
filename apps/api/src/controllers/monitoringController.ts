import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { redisClient } from '@/config/redis';
import { register } from '@/config/metrics';

const monitoringController = {
  health: async (_req: Request, res: Response) => {
    const mongoOk = mongoose.connection.readyState === 1;

    let redisOk = false;
    try {
      redisOk = (await redisClient.ping()) === 'PONG';
    } catch {
      redisOk = false;
    }

    const healthy = mongoOk && redisOk;
    return res.status(healthy ? 200 : 503).json({
      status: healthy ? 'ok' : 'degraded',
      uptime: process.uptime(),
      dependencies: {
        mongo: mongoOk ? 'ok' : 'down',
        redis: redisOk ? 'ok' : 'down',
      },
    });
  },

  metrics: async (req: Request, res: Response) => {
    // Metrics expose route names and traffic. Scrapers send "Authorization: Bearer $METRICS_TOKEN";
    // without a token configured the endpoint is open only outside production.
    const token = process.env.METRICS_TOKEN;
    const allowed = token
      ? req.headers.authorization === `Bearer ${token}`
      : process.env.NODE_ENV !== 'production';
    if (!allowed) {
      return res.status(403).json({ success: false, message: 'Forbidden' });
    }

    res.set('Content-Type', register.contentType);
    return res.send(await register.metrics());
  },
};

export default monitoringController;
