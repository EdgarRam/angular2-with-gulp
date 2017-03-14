import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HeroDetailComponent } from '../components/hero-detail.component';
import { HeroesComponent }     from '../components/heroes.component';
import { DashboardComponent }     from '../components/dashboard.component';
import { Accordion }     from '../components/accordion.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'accordion',     component: Accordion }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
