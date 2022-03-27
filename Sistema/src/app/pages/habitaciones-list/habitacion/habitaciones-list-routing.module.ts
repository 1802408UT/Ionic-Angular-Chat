import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HabitacionComponent } from './habitacion.component';



const routes: Routes = [
  {
    path: '',
    component: HabitacionComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule],
  exports: [RouterModule],
})
export class HabitacionRoutingModule {}
