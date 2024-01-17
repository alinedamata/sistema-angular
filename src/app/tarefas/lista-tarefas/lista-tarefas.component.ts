import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../tarefa.model';
import { TarefasService } from '../tarefas.service';
import {  FormControl} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ListaDialogComponent } from '../lista-dialog/lista-dialog.component';


@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {
  listaTarefas: Tarefa[] = [];
  nomeTarefa: FormControl = new FormControl([""]);
  nomeDaTarefa: string;


  constructor(
    private tarefaService: TarefasService,
    public dialog: MatDialog){}


  ngOnInit(): void {
    this.listarTarefas();
  }
 
  adicionar(): void {
    this.dialog
      .open(ListaDialogComponent)
      .afterClosed()
      .subscribe((result) => {
        if(!!result) this.adicionarTarefa(result)
      });
  }

  adicionarTarefa(nomeDaTarefa: string){
    const tarefa: Tarefa = {
      id: this.listaTarefas.length.toString(),
      nome: nomeDaTarefa,
      concluida: false
    }
    this.tarefaService.adicionarTarefa(tarefa).subscribe(() => this.listarTarefas());
  }

  listarTarefas(){
    this.tarefaService.listarTarefas().subscribe(tarefas => this.listaTarefas = tarefas);
  }

  deletarTarefa(id: string){
    this.tarefaService.deletarTarefa(id).subscribe(() => this.listarTarefas());
  }

  concluirTarefa(tarefa: Tarefa){
    tarefa.concluida = true;
    this.tarefaService.concluirTarefa(tarefa).subscribe(() => this.listarTarefas());
  }





  //Ação de limpar
  clear(){
    this.nomeTarefa.reset();
  }



}