import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  //boa prática nas variaveis de endpoint
  private readonly urlAPI = '../../../assets/generos.json';

  constructor() { }

  listagemGeneros(){

  }
}
