import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Generos } from '../modelos/generos';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  //boa prática nas variaveis de endpoint
  private readonly urlAPI = '/assets/generos.json';

  //tipagem para requisições http
  constructor(private clienteDados: HttpClient) { }

  listagemGeneros(){
    //buscando o metodo get do passado pela variavel
    return this.clienteDados.get<Generos[]>(this.urlAPI);
  }
}
