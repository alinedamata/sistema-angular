import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-acessos',
  templateUrl: './acessos.component.html',
  styleUrls: ['./acessos.component.css']
})
export class AcessosComponent {

  constructor(
    private router: Router
  ) { }

  items = [
    {
      titulo: 'Minhas Tarefa',
      descricao: 'Organize e complete suas tarefas diárias.',
      img: '../assets/tarefas.svg',
      acao:()=>this.router.navigate(["tarefas"])
    },
    {
      titulo: 'Jogo da Memória',
      descricao: 'Estimule as suas habilidades com esse jogo da memória.',
      img: '../assets/memoria.svg',
      acao:()=>this.router.navigate(["jogo-memoria"])
    },
    {
      titulo: 'Quebra-Cabeça',
      descricao: 'Exercite a mente e se divirta com o quebra- cabeça.',
      img: '../assets/cabeca.svg',
      acao:()=>this.router.navigate(["quebra-cabeca"])
    },
  ];
}
