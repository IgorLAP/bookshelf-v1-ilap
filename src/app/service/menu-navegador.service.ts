import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MenuNavegador } from './../models/menuNavegador';

@Injectable({
  providedIn: 'root'
})
export class MenuNavegadorService {

  private readonly urlAPI = 'assets/menuNavegador.json';

  constructor(private http: HttpClient) { }

  listagemMenuNavegador(){
    return this.http.get<MenuNavegador[]>(this.urlAPI);
  }
}
