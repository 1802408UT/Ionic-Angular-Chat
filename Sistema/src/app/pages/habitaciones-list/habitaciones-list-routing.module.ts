import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabitacionesListComponent } from './habitaciones-list.component';

const routes: Routes = [
  {
    path: '',
    component: HabitacionesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabitacionesListPageRoutingModule {}
