import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HabitacionCrudService } from 'src/app/services/habitacion-crud.service';
//import { Habitacion } from '../../../models/habitacionmodel';

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.component.html',
  styleUrls: ['./habitacion.component.scss'],
})
export class HabitacionComponent implements OnInit {
  habitacion1:undefined;
  Habitaciones1:any;
  habitaciones1:any;
  habitacion:any;
  data: any;
  dat=false;
//Botones
  disp: "Disponible";
  limp: "Limpiando";
  ocup: "Ocupado";
  estado:any;
  
//Informacion obtenida de la base de datos
    id:string;
    numero:string;
    tipo:string;
    estatus:string;
    orden:string;

  x = this.route.snapshot.params.habitacionId;
  constructor(
    private route: ActivatedRoute,
    public habitacionCrudService: HabitacionCrudService,
    ) { }

  ngOnInit() {
    this.habitacion1 = this.route.snapshot.params.habitacionId;
    this.habitacionCrudService.getUsers().subscribe((response) => {
      this.Habitaciones1 = response;
      this.habitaciones1 = this.Habitaciones1.filter((habitacion: { numero: undefined; }) => habitacion.numero == this.habitacion1);
      console.log(this.habitaciones1);
      this.id = this.habitaciones1[0]._id.toString();
      this.numero = this.habitaciones1[0].numero.toString();
      this.tipo = this.habitaciones1[0].tipo.toString();
      this.estatus = this.habitaciones1[0].estatus.toString();
      this.orden = this.habitaciones1[0].orden.toString();
    });
  }
  insertar(){
    
  }
  disponible(){
    //console.log(dato);
    let valor = confirm("Cambiar estado a disponible");
    if (valor == true) {
    this.habitacionCrudService.updateUser(this.id, {
  estatus: "Disponible",
  _id: this.habitaciones1[0]._id,
  numero: this.habitaciones1[0].numero,
  tipo: this.habitaciones1[0].tipo,
  orden: this.habitaciones1[0].orden,
})
    .subscribe(() => {
      location.reload();
    });
      alert("Cambio Realizado");
    } else {
      alert("Campo no cambiado");
    }
  }
  ocupado(){
        //console.log(dato);
        let valor = confirm("Cambiar estado a Ocupado");
        if (valor == true) {
        this.habitacionCrudService.updateUser(this.id, {
      estatus: "Ocupado",
      _id: this.habitaciones1[0]._id,
      numero: this.habitaciones1[0].numero,
      tipo: this.habitaciones1[0].tipo,
      orden: this.habitaciones1[0].orden,
    })
        .subscribe(() => {
          location.reload();
        });
          alert("Cambio Realizado");
        } else {
          alert("Campo no cambiado");
        }
  }
  limpiando(){
       //console.log(dato);
       let valor = confirm("Cambiar estado a Limpiando");
       if (valor == true) {
       this.habitacionCrudService.updateUser(this.id, {
     estatus: "Limpiando",
     _id: this.habitaciones1[0]._id,
     numero: this.habitaciones1[0].numero,
     tipo: this.habitaciones1[0].tipo,
     orden: this.habitaciones1[0].orden,
   })
       .subscribe(() => {
         location.reload();
       });
         alert("Cambio Realizado");
       } else {
         alert("Campo no cambiado");
       }
  }
  
  }

