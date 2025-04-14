import { Inject, Injectable } from '@nestjs/common';
import { CustomTransportClient } from './custom-transport-client';
import { ClientRedis } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('MATH_SERVICE') private readonly redisClient: ClientRedis,
  ) {}

  async add(a: number, b: number): Promise<number> {
    console.log('Client Service Requested');

    const client = new CustomTransportClient();
    client
      .send('{"cmd": "add"}', { a, b })
      .subscribe((response) => console.log(response));

    return a + b;
  }
}
