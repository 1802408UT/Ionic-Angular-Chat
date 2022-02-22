import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabitacionesListPageRoutingModule } from './habitaciones-list-routing.module';

import { HabitacionesListComponent } from './habitaciones-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabitacionesListPageRoutingModule
  ],
  declarations: [HabitacionesListComponent]
})
export class CreateHListPageModule {}
