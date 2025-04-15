import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { IHeroById } from './interfaces/i.hero-by-id';
import { IHero } from './interfaces/i.hero';

@Controller()
export class HeroController {
  @GrpcMethod('HeroService', 'FindOne')
  findOne(data: IHeroById): IHero {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id)!;
  }
}
