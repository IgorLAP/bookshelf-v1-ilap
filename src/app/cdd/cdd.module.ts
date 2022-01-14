import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../app-compartilhado/app-material/app-material.module';
import { AppCompartilhadoModule } from './../app-compartilhado/app-compartilhado.module';
import { CddRoutingModule } from './cdd-routing.module';
import { ClassesComponent } from './classes/classes.component';


@NgModule({
  declarations: [
    ClassesComponent
  ],
  imports: [
    CommonModule,
    CddRoutingModule,
    AppMaterialModule,
    HttpClientModule,
    AppCompartilhadoModule
  ],
  exports: [
    ClassesComponent
  ]
})
export class CddModule { }
