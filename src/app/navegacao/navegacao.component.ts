import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent {

  usuario = {username: 'Igor Pedrosa', icone: 'remember_me'}
  tituloNav = 'BookShelf v1';
  tituloBarra = '[Sua estante virtual]';
  iconeGeral = '../../assets/images/ShelfBook.png';
  wIcone = 80;
  hIcone = 80;
  //Controle das rotas do menu
  itensMenu = [
    {linkMenu: '/cdd', labelMenu: 'Classes Dewey', show: true},
    {linkMenu: '/feed', labelMenu: 'Feed Notícias', show: true},
    {linkMenu: '/usuario', labelMenu: 'Página Usuário', show: false},
    {linkMenu: '/clube', labelMenu: 'Clubes de Leitura', show: false},
    {linkMenu: '/particular', labelMenu: 'Estante Particular', show: false}
  ]

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
