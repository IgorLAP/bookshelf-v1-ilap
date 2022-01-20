import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordMatchValidator(): ValidatorFn{
  return(control: AbstractControl): ValidationErrors | null => {
    const senha = control.get('password')?.value;
    const confirma = control.get('confirmPassword')?.value;
    if(senha && confirma && senha !== confirma){
      return {
        passwordConfirmed: true
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
   }, {validador: passwordMatchValidator()});

  constructor(private loginBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  enviarCadastro(){}

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

}
