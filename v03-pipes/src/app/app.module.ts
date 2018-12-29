import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';

/*
  Los ultimos paquetes fueron agregado para cambiar el
  idioma, en español.
*/
import localeEs from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
import {LOCALE_ID} from '@angular/core';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: LOCALE_ID, useValue:"es"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
