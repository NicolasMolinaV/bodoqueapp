import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NomolestarPageRoutingModule } from './nomolestar-routing.module';

import { NomolestarPage } from './nomolestar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NomolestarPageRoutingModule
  ],
  declarations: [NomolestarPage]
})
export class NomolestarPageModule {}
