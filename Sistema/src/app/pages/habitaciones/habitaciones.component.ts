import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HabitacionCrudService } from 'src/app/services/habitacion-crud.service';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.scss'],
})
export class HabitacionesComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private userCrudService: HabitacionCrudService    
  ) {
    this.userForm = this.formBuilder.group({
      numero: [''],
      tipo: [''],
      estatus: [''],
      orden: ['']
    })
  }

  ngOnInit() { }

  onSubmit() {
    if (!this.userForm.valid) {
      return false;
    } else {
      this.userCrudService.createUser(this.userForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.userForm.reset();
            this.router.navigate(['/habitaciones-list']);
          })
        });
    }
  }
}
