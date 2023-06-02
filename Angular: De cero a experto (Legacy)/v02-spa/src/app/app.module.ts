import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Routas
import { APP_ROUTING } from './app.routes';

// Servicios
import {HeroesService} from './servicios/heroes.service';
// Componentes
import { AppComponent } from './app.component';
import { SharedComponent } from './components/shared/shared.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { Heroe2Component } from './components/heroe2/heroe2.component';
import { HeroeTargetaComponent } from './components/heroe-targeta/heroe-targeta.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    Heroe2Component,
    HeroeTargetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
