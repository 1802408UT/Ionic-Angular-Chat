import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { HabitacionCrudService } from '../services/habitacion-crud.service';
import { ResourceLoader } from '@angular/compiler';


@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})

export class UpdatePage implements OnInit {

  updateUserFg: FormGroup;
  id: any;

  constructor(
    private userCrudService: HabitacionCrudService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.fetchUser(this.id);
    this.updateUserFg = this.formBuilder.group({
      numero: [''],
      tipo: [''],
      estatus: [''],
      orden: ['']
    })
  }

  fetchUser(id) {
    this.userCrudService.getUser(id).subscribe((data) => {
      this.updateUserFg.setValue({
        numero: data['numero'],
        tipo: data['tipo'],
        estatus: data['estatus'],
        orden: data['orden']
      });
    });
  }

  onSubmit() {
    if (!this.updateUserFg.valid) {
      return false;
    } else {
      this.userCrudService.updateUser(this.id, this.updateUserFg.value)
        .subscribe(() => {
          this.updateUserFg.reset();
          this.router.navigate(['/habitaciones-list']);
          location.reload();
        })
    }
  }

}
