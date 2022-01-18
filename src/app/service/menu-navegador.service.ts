import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { MenuNavegador } from './../models/menuNavegador';

@Injectable({
  providedIn: 'root'
})
export class MenuNavegadorService {

  private readonly urlAPI = 'assets/menuNavegador.json';

  constructor(private http: HttpClient) { }

  listagemMenuNavegador(){
    return this.http.get<MenuNavegador[]>(this.urlAPI)
    .pipe(
      //não reenviar requisições
      first(),
      //podemos alocar não o Observable, mas padronizado pela interface com o tap
      tap(pretty => console.log(pretty))
    )
  }
}
