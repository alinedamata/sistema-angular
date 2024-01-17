import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {


  rotaApi: string = "http://localhost:3005/tarefas";

  constructor(private httpCLient: HttpClient) { }

  listarTarefas(): Observable<Tarefa[]>{
    return this.httpCLient.get<Tarefa[]>(this.rotaApi);
  }

  adicionarTarefa(tarefa: Tarefa){
    return this.httpCLient.post<Tarefa>(this.rotaApi, tarefa);
  }

  deletarTarefa(id: string){
    const rotaDeletar = this.rotaApi + `/${id}`
    return this.httpCLient.delete<any>(rotaDeletar);
  }

  concluirTarefa(tarefa: Tarefa){
    const rotaDeletar = this.rotaApi + `/${tarefa.id}`
    return this.httpCLient.put<any>(rotaDeletar, tarefa);
  }
}
