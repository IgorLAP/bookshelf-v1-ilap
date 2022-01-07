import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClassesComponent } from './classes/classes.component';

const routes: Routes = [
  {path: '', component: ClassesComponent} //esse componente será exibido para a tal rota
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CddRoutingModule { }
