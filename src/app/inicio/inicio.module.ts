import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePrincipalComponent } from './home-principal/home-principal.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    HomePrincipalComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule
  
  ],
  exports:[ HomePrincipalComponent,
    LoginComponent,
    CadastroComponent]
})
export class InicioModule { }
