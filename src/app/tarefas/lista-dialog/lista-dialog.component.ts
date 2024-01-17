import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ListaTarefasComponent } from '../lista-tarefas/lista-tarefas.component';
import { FormControl } from '@angular/forms';
import { Tarefa } from '../tarefa.model';
import { TarefasService } from '../tarefas.service';

@Component({
  selector: 'app-lista-dialog',
  templateUrl: './lista-dialog.component.html',
  styleUrls: ['./lista-dialog.component.css']
})
export class ListaDialogComponent {
  nomeTarefa: FormControl = new FormControl([""]);



  constructor(  private tarefaService: TarefasService,
    public dialogRef: MatDialogRef<ListaDialogComponent>){}


  ngOnInit(): void {
  }
  adicionarTarefa(){
    this.dialogRef.close(this.nomeTarefa.value);

  }
    cancel(): void {
      this.dialogRef.close();
    }
  }
