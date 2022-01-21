import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { AppLoginComponent } from './../app-login/app-login.component';
import { MenuNavegador } from './../models/menuNavegador';
import { AuthFirebaseService } from './../service/auth-firebase.service';
import { MenuNavegadorService } from './../service/menu-navegador.service';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent {

  logoMenu = '../../assets/images/logoBS4.png';
  usuario$ = this.authFirebase.usuarioLogado$;
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
    private telaLogin: MatDialog,
    private rotas: Router,
    private authFirebase: AuthFirebaseService,
    private menuNavegadorService: MenuNavegadorService
  ) {
    this.itensMenu$ = menuNavegadorService.listagemMenuNavegador()
    .pipe(
      catchError(err=>{
        return of ([])
      })
    )
  }

  abrirLogin(erroMsg: string){
    this.telaLogin.open(AppLoginComponent,{
      data: erroMsg
    })
  }

  abrirLogout(){
    this.authFirebase.logout().subscribe(()=>{
      this.rotas.navigate([''])
    })
  }

}
