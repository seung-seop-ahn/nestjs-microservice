import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'add' })
  async add(data: { a: number; b: number }): Promise<number> {
    console.log('Server Redis Requested');
    return this.appService.add(data);
  }
}
