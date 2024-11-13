import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FueradecasaPageRoutingModule } from './fueradecasa-routing.module';

import { FueradecasaPage } from './fueradecasa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FueradecasaPageRoutingModule
  ],
  declarations: [FueradecasaPage]
})
export class FueradecasaPageModule {}
