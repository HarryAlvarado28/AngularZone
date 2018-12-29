import { Router, Routes } from '@angular/router';
import {UsuarioNuevoComponent} from './usuario-nuevo.component';
import {UsuarioEditarComponent} from './usuario-editar.component';
import {UsuarioDetalleComponent} from './usuario-detalle.component';

export const USUARIO_ROUTES: Routes = [

  {path: 'nuevo', component: UsuarioNuevoComponent },
  {path: 'editar', component: UsuarioEditarComponent },
  {path: 'detalle', component: UsuarioDetalleComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'detalle'},
  { path: '**', pathMatch: 'full', redirectTo: ''}

  ];
