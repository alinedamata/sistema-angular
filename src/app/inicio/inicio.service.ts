import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, Usuario } from './usuario.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  rotaApi: string = `${environment.baseUrl}usuario/cadastrar`;

  constructor(private httpCLient: HttpClient) { }


  criarUsuario( usuario: Usuario){
    return this.httpCLient.post<Usuario>(this.rotaApi, usuario);
  }
  login( usuario: Login){
    const rota = `${environment.baseUrl}login`;
    return this.httpCLient.post<Usuario>(rota, usuario);
  }
}
