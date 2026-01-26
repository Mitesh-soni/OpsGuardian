import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  const app = await NestFactory.create(AppModule);

  // 🔑 KAFKA CONSUMER SETUP (MANDATORY)
  if (process.env.KAFKA_ENABLED === 'true') {
    logger.log('Kafka is ENABLED');

    try {
      app.connectMicroservice({
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: process.env.KAFKA_CLIENT_ID || 'analytics-service',
            brokers: (process.env.KAFKA_BROKERS || 'localhost:9092').split(','),
            connectionTimeout: 10000,
            requestTimeout: 30000,
            retry: {
              initialRetryTime: 100,
              retries: 3,
            },
          },
          consumer: {
            groupId: process.env.KAFKA_GROUP_ID || 'analytics-service-group',
            sessionTimeout: 30000,
            heartbeatInterval: 3000,
          },
        },
      });

      // 🚨 WITHOUT THIS → NO CONSUMERS WILL RUN
      await app.startAllMicroservices();
      logger.log('✅ Kafka microservice started successfully');
    } catch (error) {
      logger.error('❌ Failed to start Kafka microservice:', error.message);
      logger.warn('⚠️  Application will continue without Kafka');
    }
  } else {
    logger.warn('Kafka is DISABLED');
  }

  const port = process.env.PORT || 3000;
  await app.listen(port);

  logger.log(`HTTP server running on port ${port}`);
}

bootstrap();
