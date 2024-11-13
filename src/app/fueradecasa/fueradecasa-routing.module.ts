import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FueradecasaPage } from './fueradecasa.page';

const routes: Routes = [
  {
    path: '',
    component: FueradecasaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FueradecasaPageRoutingModule {}
