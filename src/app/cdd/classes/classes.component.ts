import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// rxjs responsável pelo pacote de comunicações do Angular
import { catchError, Observable, of } from 'rxjs';

import { AppDialogosComponent } from './../../app-compartilhado/app-dialogos/app-dialogos.component';
import { Generos } from './../modelos/generos';
import { GenerosService } from './../service/generos.service';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  //por ter se comunicado com o http precisa ser marcado como Observable, que deve se encaixar na tipagem <> Array de tipos Generos
  livrosGenero$: Observable<Generos[]>;

  //ordem de exibição na tela será guiada por aqui, independente da ordem no html
  visaoColunas=['_idGenero', 'nomeGenero', 'decimalGenero'];

  constructor
  (
    private generosService: GenerosService,
    public dialogo: MatDialog
  ) {
    this.livrosGenero$ = generosService.listagemGeneros()
    .pipe(
      catchError(error=>{
        this.abrirDialogoErro(`Erro ao carregar a tabela: #BS - ${error.status}`)
        return of([])
      })
    );
   }

  abrirDialogoErro(erroMsg: string){
    this.dialogo.open(AppDialogosComponent,{data: erroMsg});
  }

  ngOnInit(): void {
  }

}
