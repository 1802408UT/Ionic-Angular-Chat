import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HabitacionComponent } from './habitacion/habitacion.component';

import { HabitacionesListComponent } from './habitaciones-list.component';

const routes: Routes = [
  {
    path: '',
    component: HabitacionesListComponent
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
