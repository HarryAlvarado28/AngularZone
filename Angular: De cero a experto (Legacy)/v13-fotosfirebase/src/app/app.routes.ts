import { Routes, RouterModule } from '@angular/router';
//import { NgModule } from '@angular/core';

import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';


const RUTAS: Routes = [
  { path: 'fotos', component: FotosComponent },
  { path: 'carga', component: CargaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'fotos' },
];

// @NgModule({
//   imports: [RouterModule.forChild(RUTAS)],
//   exports: [RouterModule]
// })
export const APP_ROUTES = RouterModule.forRoot(RUTAS);
