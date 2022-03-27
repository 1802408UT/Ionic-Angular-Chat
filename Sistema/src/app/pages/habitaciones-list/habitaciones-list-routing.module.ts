import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HabitacionComponent } from './habitacion/habitacion.component';

import { HabitacionesListComponent } from './habitaciones-list.component';

const routes: Routes = [
  {
    path: '',
    component: HabitacionesListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'habitaciones/:habitacionId',
    component: HabitacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabitacionesListPageRoutingModule {}
