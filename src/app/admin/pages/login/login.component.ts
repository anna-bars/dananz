import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators,  ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';

interface Token {
  token: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup = this.fb.group({
    email: ["", [Validators.required,Validators.minLength(7),
  Validators.maxLength(23),  Validators.pattern(/^eve.holt@reqres.in/)]],
    password: ["", [Validators.required, Validators.minLength(4),
      Validators.maxLength(15), Validators.pattern(/^cityslicka/)]]
  })
  user : {email:string, password: string } = {
    email: '',
    password: ''
  };
  tokenData!: Token | any;
  constructor(public fb: FormBuilder,
    private req: RequestService,
     private router: Router){}

  send(){
    this.user.email = this.form.value.email;
    this.user.password = this.form.value.password;
    this.req.post(environment.login.get, this.user).subscribe((res: Token | any) => {
      this.tokenData = res;
      localStorage.setItem('token', this.tokenData.token)
    })
    this.router.navigate(['admin/account'])
  }
  fill(){
    this.form.setValue({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      });
  }
}
