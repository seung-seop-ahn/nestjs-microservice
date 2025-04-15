import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hero/:id')
  async getHero(@Param('id') id: number) {
    return this.appService.findHero(id);
  }
}
