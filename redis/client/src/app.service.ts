import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject('MATH_SERVICE') private redisClient: ClientProxy) {}

  async add(a: number, b: number): Promise<number> {
    console.log('Client Service Requested');
    return lastValueFrom(
      this.redisClient.send<number>({ cmd: 'add' }, { a, b }),
    );
  }
}
