import { Module } from '@nestjs/common';
import { HeroController } from './hero.controller';

@Module({
  controllers: [HeroController],
  providers: [],
  exports: [],
})
export class HeroModule {}
