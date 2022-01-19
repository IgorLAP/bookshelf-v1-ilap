import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {

  constructor(private usuarioFb: Auth) { }

  login(usuarioEmail: string, usuarioSenha: string){
    return from(signInWithEmailAndPassword(this.usuarioFb, usuarioEmail, usuarioSenha))
  }

  logout(){
    return from(this.usuarioFb.signOut());
  }
}
