import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { Heroe2Component } from './components/heroe2/heroe2.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'heroe/:name', component: HeroeComponent },
  { path: 'heroe2/:termino', component: Heroe2Component }
  /*,
  { path: '**', pathMath: 'full', redirectTo: 'home' }*/

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
