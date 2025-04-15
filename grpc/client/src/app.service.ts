import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { IHero, IHeroService } from './hero/i.hero.service';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService implements OnModuleInit {
  private heroService: IHeroService;

  onModuleInit() {
    this.heroService = this.client.getService<IHeroService>('HeroService');
  }

  constructor(@Inject('HERO_PACKAGE') private readonly client: ClientGrpc) {}

  async findHero(id: number): Promise<IHero> {
    return lastValueFrom(this.heroService.findOne({ id }));
  }
}
