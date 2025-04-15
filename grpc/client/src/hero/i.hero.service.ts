import { Observable } from 'rxjs';

export interface IHero {
  id: number;
  name: string;
}

export interface IHeroById {
  id: number;
}

export interface IHeroService {
  findOne(data: IHeroById): Observable<IHero>;
}
