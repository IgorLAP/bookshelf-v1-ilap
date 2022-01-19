import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AuthFirebaseService } from './../service/auth-firebase.service';

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

  constructor
  (
    private loginBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public conteudo: string,
    private authFirebase: AuthFirebaseService
  ) {}

  get email(){
    return this.formularioLogin.get('email');
  }

  get senha(){
    return this.formularioLogin.get('senha');
  }

  onSubmit() {
    console.log(this.formularioLogin);
  }
}
