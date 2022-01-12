import { GenerosService } from './../service/generos.service';
import { Generos } from './../modelos/generos';
import { Component, OnInit } from '@angular/core';
// rxjs responsável pelo pacote de comunicações do Angular
import { Observable } from 'rxjs';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  //por ter se comunicado com o http precisa ser marcado como Observable, que deve se encaixar na tipagem <> Array de tipos Generos
  livrosGenero: Observable<Generos[]>;

  //ordem de exibição na tela será guiada por aqui, independente da ordem no html
  visaoColunas=['_idGenero', 'nomeGenero', 'decimalGenero'];

  constructor(private generosService: GenerosService) {
    this.livrosGenero = generosService.listagemGeneros();
   }

  ngOnInit(): void {
  }

}
