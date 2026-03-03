import { Module, Global } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Redis from 'ioredis';
import { RedisService } from './redis.service';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: 'REDIS_CLIENT',
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const redisHost = config.get<string>('REDIS_HOST') || 'localhost';
        const redisPort = config.get<number>('REDIS_PORT') || 6379;
        const redisPassword = config.get<string>('REDIS_PASSWORD');

        console.log(`[Incident-Service] Connecting to Redis at ${redisHost}:${redisPort}`);

        const client = new Redis({
          host: redisHost,
          port: redisPort,
          password: redisPassword,
          lazyConnect: true,
          maxRetriesPerRequest: 3,
          retryStrategy: (times) => {
            if (times > 3) {
              console.error('❌ [Incident-Service] Redis max retries reached. Stopping reconnection.');
              return null; // Stop retrying
            }
            const delay = Math.min(times * 1000, 3000);
            return delay;
          },
        });

        client.connect().catch((err) => {
          console.error('❌ [Incident-Service] Redis connection failed:', err.message);
        });

        client.on('connect', () => {
          console.log('✅ [Incident-Service] Redis connected');
        });

        client.on('ready', () => {
          console.log('✅ [Incident-Service] Redis ready');
        });

        client.on('error', (err) => {
          console.error('❌ [Incident-Service] Redis error:', err.message);
        });

        return client;
      },
    },
    RedisService,
  ],
  exports: [RedisService],
})
export class RedisModule { }
