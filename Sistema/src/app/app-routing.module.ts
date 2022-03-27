import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'habitaciones-list', 
    pathMatch: 'full'
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'update/:id',
    loadChildren: () => import('./update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'create-habitaciones',
    loadChildren: () => import('./pages/habitaciones/habitaciones.module').then( m => m.CreateHPageModule)
  },
  {
    path: 'habitaciones-list',
    loadChildren: () => import('./pages/habitaciones-list/habitaciones-list.module').then( m => m.CreateHListPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LogingModule)
  },
  {
    path: 'habitaciones/:habitacionId',
    loadChildren: () => import('./pages/habitaciones-list/habitacion/habitaciones-list-routing.module').then( m => m.HabitacionRoutingModule)
  },
  {
    path: 'updatehabitaciones/:id',
    loadChildren: () => import('./updateh/update.module').then( m => m.UpdatePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
