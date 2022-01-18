import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { MenuNavegador } from './../models/menuNavegador';
import { MenuNavegadorService } from './../service/menu-navegador.service';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent {

  usuario = {username: 'Igor Pedrosa', icone: 'remember_me'};
  tituloNav = 'BookShelf v1';
  tituloBarra = '[Sua estante virtual]';
  iconeGeral = '../../assets/images/ShelfBook.png';
  wIcone = 80;
  hIcone = 80;
  //Controle das rotas do menu
  itensMenu$: Observable<MenuNavegador[]>

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor
  (
    private breakpointObserver: BreakpointObserver,
    private menuNavegadorService: MenuNavegadorService
  ) {
    this.itensMenu$ = menuNavegadorService.listagemMenuNavegador()
    .pipe(
      catchError(err=>{
        return of ([])
      })
    )
  }

}
