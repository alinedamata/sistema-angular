import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePrincipalComponent } from './inicio/home-principal/home-principal.component';
import { LoginComponent } from './inicio/login/login.component';
import { BoardComponent } from './game-memory/board/board.component';
import { GameComponent } from './puzzle/game/game.component';
import { CadastroComponent } from './inicio/cadastro/cadastro.component';
import { AcessosComponent } from './acessos/acessos.component';
import { ListaTarefasComponent } from './tarefas/lista-tarefas/lista-tarefas.component';

const routes: Routes = [
  { path: "", component: HomePrincipalComponent },
  { path: "login", component: LoginComponent },
  { path: "cadastro", component: CadastroComponent },
  { path: "jogo-memoria", component: BoardComponent },
  { path: "quebra-cabeca", component: GameComponent },
  { path: 'acessos', component: AcessosComponent},
  { path: 'tarefas', component: ListaTarefasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
