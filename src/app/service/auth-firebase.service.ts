import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authState } from 'rxfire/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {

  //checar qual o estado da autenticação
  usuarioLogado$ = authState(this.usuarioFb);

  constructor(private usuarioFb: Auth) { }

  login(usuarioEmail: string, usuarioSenha: string){
    return from(signInWithEmailAndPassword(this.usuarioFb, usuarioEmail, usuarioSenha))
  }

  logout(){
    return from(this.usuarioFb.signOut());
  }
}
