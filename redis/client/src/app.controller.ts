import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('add')
  async add(@Query('a') a: string, @Query('b') b: string): Promise<number> {
    console.log('Client HTTP Requested');
    return this.appService.add(Number(a), Number(b));
  }
}
