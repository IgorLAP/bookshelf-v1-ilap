import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

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
    password: new FormControl('', Validators.required)
   });

  hasUnitNumber = false;

  constructor
  (
    private loginBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public conteudo: string,
    private toast: HotToastService,
    private rotas: Router,
    private authFirebase: AuthFirebaseService
  ) {}

  get email(){
    return this.formularioLogin.get('email');
  }

  get senha(){
    return this.formularioLogin.get('senha');
  }

  loginFirebase() {
    if(!this.formularioLogin.valid){
      return;
    }
    const {email, password} = this.formularioLogin.value;
    this.authFirebase.login(email, password)
    .pipe(
      this.toast.observe({
        success: 'Login valido',
        loading: 'Verificando...',
        error: 'Algo deu errado, confira as informações'
      })
    ).subscribe(()=>{
      this.rotas.navigate(['/cdd'])
    })
  }

}
