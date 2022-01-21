import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

import { AuthFirebaseService } from './../service/auth-firebase.service';

export function passwordMatchValidator(): ValidatorFn{
  return(control: AbstractControl): ValidationErrors | null => {
    const senha = control.get('password')?.value;
    const confirma = control.get('confirmPassword')?.value;
    if(senha && confirma && senha !== confirma){
      return {
        //quando retornar true ele mostra a msg de erro
        //a senha não está confirmada e sim o erro, não estão iguais
        // passwordConfirmed: true
        errorConfirmed: true
      }
    }
    return null;
  }
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  formularioCadastro = this.loginBuilder.group({
    //.required validando se está preenchido, .email verificando o formato
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
   }, {validators: passwordMatchValidator()});
   //verificação de todas as validações e depois vai para a função dentro do objeto validators

  constructor
  (
    private loginBuilder: FormBuilder,
    private auth: AuthFirebaseService,
    private toast: HotToastService,
    private rotas: Router
  ) { }

  ngOnInit(): void {
  }

  get name(){
    return this.formularioCadastro.get('name');
  }

  get email(){
    return this.formularioCadastro.get('email');
  }

  get password(){
    return this.formularioCadastro.get('password');
  }

  get confirmPassword(){
    return this.formularioCadastro.get('confirmPassword')
  }

  enviarCadastro(){
    if(!this.formularioCadastro.valid){
      return;
    }
    const {name, email, password} = this.formularioCadastro.value;
    this.auth.cadastrarUsuario(name, email, password)
    .pipe(
      this.toast.observe({
        success: 'Cadastro realizado, bem vindo ao BookShelf',
        loading: 'Carregando...',
        error: ({message}) => `Houve um problema: #BS${message}`
      })
    ).subscribe(()=>{
      this.rotas.navigate(['/'])
    })
  }

}
