import { Generos } from './../modelos/generos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  livrosGenero: Generos[] = [
    {_idGenero: '0', nomeGenero: 'Generalidades', decimalGenero: '00', livrosGenero: 250},
    {_idGenero: '1', nomeGenero: 'Filosofia e Psicologia', decimalGenero: '00', livrosGenero: 500},
    {_idGenero: '2', nomeGenero: 'Religião', decimalGenero: '00', livrosGenero: 150},
    {_idGenero: '3', nomeGenero: 'Ciências Sociais', decimalGenero: '00', livrosGenero: 505},
    {_idGenero: '4', nomeGenero: 'Línguas', decimalGenero: '00', livrosGenero: 166},
    {_idGenero: '5', nomeGenero: 'Ciências Naturais e Matemáticas', decimalGenero: '00', livrosGenero: 777},
    {_idGenero: '6', nomeGenero: 'Tecnologias e Ciências Aplicadas', decimalGenero: '00', livrosGenero: 999},
    {_idGenero: '7', nomeGenero: 'Artes', decimalGenero: '00', livrosGenero: 654},
    {_idGenero: '8', nomeGenero: 'Literatura e Retórica', decimalGenero: '00', livrosGenero: 123},
    {_idGenero: '9', nomeGenero: 'Geografia, História e Biologia', decimalGenero: '00', livrosGenero: 654}
  ];

  //ordem de exibição na tela será guiada por aqui, independente da ordem no html
  visaoColunas=['_idGenero', 'nomeGenero', 'decimalGenero'];

  constructor() { }

  ngOnInit(): void {
  }

}
