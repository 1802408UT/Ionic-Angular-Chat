import { Component, NgZone, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { UserCrudService } from './../services/user-crud.service';

@Component({
  selector: 'app-habitacion',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  id: any;

  constructor(
    private userCrudService: UserCrudService,
    private activatedRoute: ActivatedRoute,
    private zone: NgZone,
    public formBuilder: FormBuilder,
    private router: Router
    ) {
      this.userForm = this.formBuilder.group({
        name: [''],
        email: ['']
      })
     }

  ngOnInit() {
   
    }
    onSubmit() {
      console.log(this.userForm.valid);
      if (!this.userForm.valid) {
        return false;
      } else {
        this.userCrudService.getUsers().subscribe(
          (data: any) => {
            console.log(data);
            console.log(this.userForm.value.name);
            console.log(this.userForm.value.email);
            let user = data.find(user => user.name === this.userForm.value.name);
            if (user) {
              if (user.email === this.userForm.value.email) {
                this.zone.run(() => {
                  localStorage.setItem('user', JSON.stringify(user));
                  this.router.navigate(['/home']);
                });
              } else {
                alert('Password is incorrect');
              }
            } else {
              alert('User not found');
            }
          }
      
        );
      }
    }
    
  }
