import { Component } from '@angular/core';

import { PendientesPage } from "../pendientes/pendientes.component";
import { TerminadosPage } from "../terminados/terminados.component";
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendientesPage;
  tab2Root = TerminadosPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
