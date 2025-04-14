import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomTransport } from './custom-transport';
import { MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      strategy: new CustomTransport({
        host: '127.0.0.1',
        port: 6379,
        username: 'default',
        password: 'password',
      }),
    },
  );

  await app.listen();
}

bootstrap();
