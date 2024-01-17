import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioService } from '../inicio.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  hide = true;
  usuario = {
    nome: '',
    email:'',
    senha:''
  }

  constructor( 
    private route: Router, 
    private usuarioService: UsuarioService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }

  openSnackBar() {
    this._snackBar.open('Preenche todos os campos', 'OK');
  }

  cadastrarUsuario() {
    if(this.usuario.nome && this.usuario.email && this.usuario.senha){
      this.usuarioService.criarUsuario(this.usuario).subscribe({
        next:() => this.confirmBox(), 
        error:()=> console.log('deu erro')
      })  
    } else{
      this.openSnackBar()
    }
  }


  confirmBox() {
    
    const html = `<div id="preview-alert-teste">
    <img src="../assets/alert.svg">
    <p>Conta cadastrada!</p>
    </div>`;
    Swal.fire({
      confirmButtonText: 'Iniciar',
      html: html,
      buttonsStyling: false,
      customClass: {
        confirmButton: 'teste-confirmButton',
        actions: 'teste-actions',
      },
    }).then(resultado=>{
      if (resultado.isConfirmed){
        this.route.navigate(["acessos"])
      }
    })
  }

 
}

