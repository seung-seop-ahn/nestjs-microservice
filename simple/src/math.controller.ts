import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MathService } from './math.service';

@Controller()
export class MathController {
  constructor(private readonly mathService: MathService) {}

  @MessagePattern({ cmd: 'add' })
  add(data: { a: number; b: number }) {
    console.log('Server TCP Requested');
    return this.mathService.add(data);
  }
}
