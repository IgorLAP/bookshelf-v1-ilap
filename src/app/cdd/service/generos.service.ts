import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';
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
    return this.clienteDados.get<Generos[]>(this.urlAPI)
    //responsável pelo desvio lógico de entrega - atrasando a entrega em 3s
    .pipe(
      //atrasa o return do Observable
      delay(500),
      //Interrompe a solicitação desse endpoint após sua primeira exibição, por padrão ele ficaria solicitando constantemente demandando muita conexão com a net | Evita ataques de DDOS
      first(),
      //desconstroe o Observable em uma padronização similar a nossa interface, generos[], sem estruturas próprias do rxjs de Observable
      tap(apiGeneros => console.log(apiGeneros))
    )
  }
}
