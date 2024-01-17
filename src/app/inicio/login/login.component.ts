import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioService } from '../inicio.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  usuario = {
    email:'',
    senha:''
  }


  constructor( private route: Router, 
    private usuarioService: UsuarioService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }

  openSnackBar() {
    this._snackBar.open('Preenche todos os campos', 'OK');
  }

  cadastrarUsuario() {
    console.log(this.usuario)
    if( this.usuario.email && this.usuario.senha){
      this.usuarioService.login(this.usuario).subscribe({
        next:() => this.route.navigate(["acessos"])
        , 
        error:()=> console.log('deu erro')
      })  
    } else{
      this.openSnackBar()
    }
  }

  confirmBox() {
    
    const html = `<div id="preview-alert-teste">
    <img src="../assets/alert.svg">
    <p>Bem vindo(a)!</p>
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

