import { Injectable } from '@nestjs/common';

@Injectable()
export class MathService {
  add({ a, b }: { a: number; b: number }) {
    console.log('Server TCP Service Requested');
    return a + b;
  }
}
