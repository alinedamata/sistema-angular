import { CommonModule, NgIf } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ListaDialogComponent } from './lista-dialog/lista-dialog.component';


@NgModule({
  declarations: [
    ListaTarefasComponent,
    ListaDialogComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,    
    NgIf,
    MatDialogModule
  ],
  exports: [ListaTarefasComponent],
  providers: [],
})
export class TarefasModulo{}
