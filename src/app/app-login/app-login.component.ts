import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent {
  formularioLogin = this.loginBuilder.group({
    //.required validando se está preenchido, .email verificando o formato
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
   });

  hasUnitNumber = false;

  constructor(private loginBuilder: FormBuilder) {}

  onSubmit() {
    console.log(this.formularioLogin);
  }
}
