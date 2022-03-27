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

  habitacion:undefined;
  Habitaciones:any;
  habitaciones:any;
  data: any;
  dat=false;

    id:string;
    numero:string;
    tipo:string;
    estatus:string;
    orden:string;

  x = this.route.snapshot.params.habitacionId;
  constructor(
    private route: ActivatedRoute,
    public habitacionCrudService: HabitacionCrudService
    ) { }

  ngOnInit() {
    this.habitacion = this.route.snapshot.params.habitacionId;
    this.habitacionCrudService.getUsers().subscribe((response) => {
      this.Habitaciones = response;
      this.habitaciones = this.Habitaciones.filter((habitacion) => habitacion.numero == this.habitacion);
      console.log(this.habitaciones);
      console.log(this.habitaciones[0]._id);
      this.id = this.habitaciones[0]._id.toString();
      this.numero = this.habitaciones[0].numero.toString();
      this.tipo = this.habitaciones[0].tipo.toString();
      this.estatus = this.habitaciones[0].estatus.toString();
      this.orden = this.habitaciones[0].orden.toString();
    });
  }
  insertar(){
    
  }
  onclick(){
    
  }

  }

