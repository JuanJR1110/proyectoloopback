import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevousuarioPageRoutingModule } from './nuevousuario-routing.module';

import { NuevousuarioPage } from './nuevousuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevousuarioPageRoutingModule
  ],
  declarations: [NuevousuarioPage]
})
export class NuevousuarioPageModule {}
