import { Injectable, OnModuleInit } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService implements OnModuleInit {
  private client: ClientProxy;

  onModuleInit(): any {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: { host: '127.0.0.1', port: 3001 },
    });
  }

  async add(a: number, b: number): Promise<number> {
    console.log('Client Service Requested');
    return lastValueFrom(this.client.send<number>({ cmd: 'add' }, { a, b }));
  }
}
