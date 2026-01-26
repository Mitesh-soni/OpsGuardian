import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class KafkaConsumer {

  // alert-service consuming parsed logs
  @EventPattern('opsguardian.logs.parsed')
  async handleParsedLog(@Payload() message: any) {
    const data = JSON.parse(message.value.toString());
    console.log('📄 Parsed log received:', data);

    // create alert logic here
  }

  // alert-service consuming incidents (optional)
  @EventPattern('opsguardian.incidents')
  async handleIncident(@Payload() message: any) {
    const data = JSON.parse(message.value.toString());
    console.log('📟 Incident update:', data);
  }
}
