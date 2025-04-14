import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  add({ a, b }: { a: number; b: number }) {
    console.log('Server Custom Transport Service Requested');
    return a + b;
  }
}
