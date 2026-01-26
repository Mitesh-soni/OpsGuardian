import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // Enable CORS
    app.enableCors();

    // Global prefix for all routes
    app.setGlobalPrefix('api');

    const port = process.env.PORT || 12400;
    await app.listen(port);
    console.log(`API Gateway is running on: http://localhost:${port}`);
}
bootstrap();
