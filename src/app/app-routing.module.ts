import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';

import { CadastroComponent } from './cadastro/cadastro.component';
import { FeedComponent } from './feed/feed.component';

//proteção das rotas, só adentra com Login
const enviarSemLogin = () => redirectUnauthorizedTo(['/cadastro']);

const routes: Routes = [
  //rota | //conferindo se a rota está correta | //quando digitar corretamente irá abrir o modulo cdd - ao entrar na primeira página irá para cdd
  {path: '', pathMatch: 'full', redirectTo: 'cadastro'},
  {
    //ROTA DE UM COMPONENTE
    path: 'feed',
    component: FeedComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    //ROTA DE UM MODULO
    //organizando o que o path cdd irá retornar
    path: 'cdd',
    //onde importar a rota | Promise()
    loadChildren: () => import('./cdd/cdd.module').then(m => m.CddModule),
    ...canActivate(enviarSemLogin)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
