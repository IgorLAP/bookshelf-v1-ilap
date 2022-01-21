import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { authState } from 'rxfire/auth';
import { from, switchMap } from 'rxjs';

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

  cadastrarUsuario(name: string, email: string, password: string){
    return from(createUserWithEmailAndPassword(this.usuarioFb, email, password))
    .pipe(
      //mapeando os arquivos para fazer uma troca dentro deles
      switchMap(({user}) => updateProfile(user, {
        displayName: name
      }))
    )
  }
}
