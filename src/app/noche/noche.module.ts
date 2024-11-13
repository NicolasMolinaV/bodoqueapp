import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NochePageRoutingModule } from './noche-routing.module';

import { NochePage } from './noche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NochePageRoutingModule
  ],
  declarations: [NochePage]
})
export class NochePageModule {}
