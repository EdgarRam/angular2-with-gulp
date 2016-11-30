import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';


import { AppComponent }   from '../components/app.component';
import { HeroDetailComponent }   from '../components/hero-detail.component';
import { HeroesComponent }   from '../components/heroes.component';
import { DashboardComponent }   from '../components/dashboard.component';


import { HeroService  }   from '../services/hero.srv';
// import { enableProdMode }      from '@angular/core';
// enableProdMode();



@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: 'heroes',
                component: HeroesComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/dashboard'
            }
        ])
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap:    [
        AppComponent
    ]
})


export class AppModule { }
