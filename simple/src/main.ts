import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 3001,
    },
  });

  await app.startAllMicroservices();
  await app.listen(3000);

  console.log('=========================================');
  console.log('HTTP Client: http://127.0.0.1:3000');
  console.log('TCP Server: 127.0.0.1:3001');
  console.log('=========================================');
}

bootstrap();
