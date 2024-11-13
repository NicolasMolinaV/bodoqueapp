import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NochePage } from './noche.page';

const routes: Routes = [
  {
    path: '',
    component: NochePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NochePageRoutingModule {}
