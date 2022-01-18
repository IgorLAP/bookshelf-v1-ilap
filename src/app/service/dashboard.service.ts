import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Dashboard } from './../models/dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private arrMoth: string[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  private readonly urlAPI = 'assets/dashboard.json';

  constructor(private http: HttpClient) { }

  listagemDashboard(){
    return this.http.get<Dashboard[]>(this.urlAPI)
    .pipe(
      //não reenviar requisições
      first(),
      //podemos alocar não o Observable, mas padronizado pela interface com o tap
      tap(pretty => {
        //Mês interativo
        pretty.find(i => i.title === 'O melhor livro de ')!.title += `${this.arrMoth[new Date().getMonth()]}`;
      })
    )
  }
}
