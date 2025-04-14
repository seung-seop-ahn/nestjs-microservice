import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MathController } from './math.controller';
import { MathService } from './math.service';

@Module({
  imports: [],
  controllers: [AppController, MathController],
  providers: [AppService, MathService],
})
export class AppModule {}
