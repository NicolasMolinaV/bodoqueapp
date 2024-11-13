import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscenariosPage } from './escenarios.page';

const routes: Routes = [
  {
    path: '',
    component: EscenariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscenariosPageRoutingModule {}
