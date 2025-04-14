import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'echo' })
  echo(data: string) {
    console.log('Server Custom Transport echo: ', data);
  }

  @MessagePattern({ cmd: 'add' })
  add(data: { a: number; b: number }) {
    console.log('Server Custom Transport Requested');
    return this.appService.add(data);
  }
}
