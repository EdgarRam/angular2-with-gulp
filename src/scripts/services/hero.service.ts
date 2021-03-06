import { Injectable } from '@angular/core';

import { Hero } from '../class/hero';
import { HEROES } from '../mocks/mock-heroes';


@Injectable()
export class HeroService {
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }


    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }


    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then( heroes =>
                heroes.find( hero => hero.id === id)
            );
    }

}
