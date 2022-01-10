import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //rota | //conferindo se a rota está correta | //quando digitar corretamente irá abrir o modulo cdd - ao entrar na primeira página irá para cdd
  {path: '', pathMatch: 'full', redirectTo: 'cdd'},
  {
    //organizando o que o path cdd irá retornar
    path: 'cdd',
    //onde importar a rota | Promise()
    loadChildren: () => import('./cdd/cdd.module').then(m => m.CddModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
