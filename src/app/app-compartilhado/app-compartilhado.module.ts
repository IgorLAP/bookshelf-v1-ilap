import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppDialogosComponent } from './app-dialogos/app-dialogos.component';
import { PipesPipe } from './app-pipes/pipes.pipe';



@NgModule({
  //precisa usar internamente
  declarations: [
    AppDialogosComponent,
    PipesPipe
  ],
  //vem de fora para meu module
  imports: [
    CommonModule
  ],
  //exportar para outros lugares da aplicação
  exports: [
    AppDialogosComponent,
    PipesPipe
  ]
})
export class AppCompartilhadoModule { }
