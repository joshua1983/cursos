import { Inject, Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AutenticacionService } from '../_services/autenticacion.service';
import { Usuario } from '../_models/usuario';

@Injectable()
export class UsuarioService{
    constructor(
        private http:Http,
        private autenticacionService: AutenticacionService
    ){}

    getUsuarios(): Observable<Usuario[]>{
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.autenticacionService.token });
        let options = new RequestOptions({ headers: headers });
        return this.http.get('http://localhost:8080/index.php/welcome/test', options)
            .map((response:Response) => response.json());

    }

    getUsuarioActual():Usuario{
        let user:Usuario = new Usuario();
        let jsonUser = JSON.parse( localStorage.getItem('currentUser') );
        user.tipo = jsonUser.tipo;
        user.usuario = jsonUser.usuario;
        user.token = jsonUser.token;
        return user;
    }
}