import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioModule } from './inicio/inicio.module';
import { GameMemoryModule } from './game-memory/game-memory.module';
import { PuzzleModule } from './puzzle/puzzle.module';
import { AcessosComponent } from './acessos/acessos.component';
import { TarefasModulo } from './tarefas/tarefas.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AcessosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InicioModule,
    GameMemoryModule,
    PuzzleModule,
    TarefasModulo,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
