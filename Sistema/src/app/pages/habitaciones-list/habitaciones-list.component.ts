import { Component, OnInit } from '@angular/core';
import { HabitacionCrudService } from './../../services/habitacion-crud.service';

@Component({
  selector: 'app-habitaciones-list',
  templateUrl: './habitaciones-list.component.html',
  styleUrls: ['./habitaciones-list.component.scss'],
})
export class HabitacionesListComponent implements OnInit {

 
  Habitaciones: any = [];

  constructor( public habitacionCrudService: HabitacionCrudService ) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.habitacionCrudService.getUsers().subscribe((response) => {
      this.Habitaciones = response;
    })
  }

  removeUser(user, i) {
    if (window.confirm('Are you sure')) {
      this.habitacionCrudService.deleteUser(user._id)
      .subscribe(() => {
          this.Habitaciones.splice(i, 1);
          console.log('Habitacion deleted!')
        }
      )
    }
    location.reload();
  }

}
