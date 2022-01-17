import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeedComponent } from './feed/feed.component';

const routes: Routes = [
  //rota | //conferindo se a rota está correta | //quando digitar corretamente irá abrir o modulo cdd - ao entrar na primeira página irá para cdd
  {path: '', pathMatch: 'full', redirectTo: 'feed'},
  {
    //ROTA DE UM COMPONENTE
    path: 'feed',
    component: FeedComponent
  },
  {
    //ROTA DE UM MODULO
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
