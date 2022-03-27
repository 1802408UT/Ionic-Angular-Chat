import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HabitacionCrudService } from 'src/app/services/habitacion-crud.service';
import { Habitacion } from '../../../models/habitacionmodel';

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.component.html',
  styleUrls: ['./habitacion.component.scss'],
})
export class HabitacionComponent implements OnInit {

  habitacion:any;
  Habitaciones:any;
  habitaciones:any;
  data: any;
  dat=false;
  x = this.route.snapshot.params.habitacionId;
  constructor(
    private route: ActivatedRoute,
    public habitacionCrudService: HabitacionCrudService
    ) { }

  ngOnInit() {
    this.habitacion = this.route.snapshot.params.habitacionId;
    this.habitacionCrudService.getUsers().subscribe((response) => {
      this.Habitaciones = response;
      console.log(this.Habitaciones);
      this.habitaciones = this.Habitaciones.filter((habitacion) => habitacion.numero == this.habitacion);
      console.log(this.habitaciones);
      this.insertar();  
    });
  }
  insertar(){
    
  }

  }

