import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Type } from '@nestjs/common/interfaces/type.interface';
import { DynamicModule } from '@nestjs/common/interfaces/modules/dynamic-module.interface';
import { ForwardReference } from '@nestjs/common/interfaces/modules/forward-reference.interface';
import { ClientsModule, Transport } from '@nestjs/microservices';

const imports: Array<
  Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference
> = [
  ClientsModule.register([
    {
      name: 'MATH_SERVICE',
      transport: Transport.REDIS,
      options: {
        host: '127.0.0.1',
        port: 6379,
        username: 'default',
        password: 'password',
      },
    },
  ]),
];

@Module({
  imports: [...imports],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
