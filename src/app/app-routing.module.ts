import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [authGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'buscar',
    loadChildren: () => import('./buscar/buscar.module').then( m => m.BuscarPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'escenarios',
    loadChildren: () => import('./escenarios/escenarios.module').then( m => m.EscenariosPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'noche',
    loadChildren: () => import('./noche/noche.module').then( m => m.NochePageModule),
    canActivate: [authGuard]
  },
  {
    path: 'fueradecasa',
    loadChildren: () => import('./fueradecasa/fueradecasa.module').then( m => m.FueradecasaPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'nomolestar',
    loadChildren: () => import('./nomolestar/nomolestar.module').then( m => m.NomolestarPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'restablecer',
    loadChildren: () => import('./restablecer/restablecer.module').then( m => m.RestablecerPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
