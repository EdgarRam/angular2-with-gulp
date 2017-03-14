import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



import { AppComponent }  from '../components/app.component';
import { HeroDetailComponent } from '../components/hero-detail.component';
import { HeroesComponent }     from '../components/heroes.component';
import { DashboardComponent }     from '../components/dashboard.component';
import { Accordion }     from '../components/accordion.component';
import { Navigation }     from '../components/nav.component';

import { HeroService } from '../services/hero.service';
import { AppRoutingModule }     from './routing.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    Accordion,
    Navigation
  ],
  providers: [
    HeroService,
    //used to configure the Location service to represent its state in the hash fragment of the browser's URL.
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
    location: Location;
    constructor(location: Location) {
        this.location = location;
    }
}
