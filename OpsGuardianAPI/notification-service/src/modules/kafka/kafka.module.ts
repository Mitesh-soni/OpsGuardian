import { Module, Global, DynamicModule } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { KafkaService } from './kafka.service';
import { KafkaConsumer } from './kafka.consumer';

@Global()
@Module({})
export class KafkaModule {
    static register(): DynamicModule {
        const kafkaEnabled = process.env.KAFKA_ENABLED === 'true';

        if (!kafkaEnabled) {
            return {
                module: KafkaModule,
                providers: [],
                exports: [],
            };
        }

        return {
            module: KafkaModule,
            imports: [
                ConfigModule,
                ClientsModule.registerAsync([
                    {
                        name: 'KAFKA_CLIENT',
                        imports: [ConfigModule],
                        inject: [ConfigService],
                        useFactory: (config: ConfigService) => ({
                            transport: Transport.KAFKA,
                            options: {
                                client: {
                                    clientId: config.get<string>('KAFKA_CLIENT_ID') || 'notification-service-client',
                                    brokers: (config.get<string>('KAFKA_BROKERS') || 'localhost:9092').split(','),
                                    connectionTimeout: 10000,
                                    requestTimeout: 30000,
                                    retry: {
                                        initialRetryTime: 100,
                                        retries: 3,
                                    },
                                },
                                consumer: {
                                    groupId: config.get<string>('KAFKA_GROUP_ID') || 'notification-service-group',
                                    sessionTimeout: 30000,
                                    heartbeatInterval: 3000,
                                },
                            },
                        }),
                    },
                ]),
            ],
            providers: [KafkaService, KafkaConsumer],
            exports: [KafkaService, ClientsModule],
        };
    }
}
