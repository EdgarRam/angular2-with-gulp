import { Component, Input, OnInit } from '@angular/core';

import { Hero } from '../class/hero';
import { HeroService } from '../services/hero.service';


@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: '/components/dashboard.html',
    styles: [ `
        .col-1-4{
            width: 25%;
            float: left;
            padding: 15px;
            text-decoration: none;
        }

        .module.hero {
            background: #DCDCDC;
            text-align: center;
        }

        .module.hero h4{
            margin: 0;
            padding: 1.33em 0;
        }
        .module.hero:hover{
            opacity: 0.5;
        }
    `]
})


export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
