import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NomolestarPage } from './nomolestar.page';

const routes: Routes = [
  {
    path: '',
    component: NomolestarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NomolestarPageRoutingModule {}
