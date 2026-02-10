import { Inject, Injectable, Logger, OnModuleInit, Optional } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaService implements OnModuleInit {
  private readonly logger = new Logger(KafkaService.name);
  private readonly enabled = process.env.KAFKA_ENABLED === 'true';

  constructor(
    @Optional()
    @Inject('KAFKA_CLIENT')
    private readonly kafkaClient: ClientKafka,
  ) { }

  async onModuleInit() {
    if (!this.enabled || !this.kafkaClient) {
      this.logger.warn('Kafka is DISABLED');
      return;
    }

    // 🔑 REQUIRED for consumers
    this.kafkaClient.subscribeToResponseOf('opsguardian.alerts');
    this.kafkaClient.subscribeToResponseOf('opsguardian.incidents');
    this.kafkaClient.subscribeToResponseOf('opsguardian.logs.parsed');

    await this.kafkaClient.connect();
    this.logger.log('Kafka connected & subscribed');
  }

  emit(topic: string, payload: any) {
    if (!this.enabled || !this.kafkaClient) return;

    return this.kafkaClient.emit(topic, {
      key: payload?.id?.toString(),
      value: JSON.stringify(payload),
    });
  }
}
