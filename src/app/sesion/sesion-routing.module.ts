import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SesionPage } from './sesion.page';

const routes: Routes = [
  {
    path: '',
    component: SesionPage
  },
  {
    path: 'nuevousuario',
    loadChildren: () => import('./nuevousuario/nuevousuario.module').then( m => m.NuevousuarioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SesionPageRoutingModule {}
