import { Inject, Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AutenticacionService } from '../_services/autenticacion.service';
import { Nivel, Pagina } from '../_models/index';

@Injectable()
export class PaginaService{
    constructor(
        private http:Http,
        private autenticacionService: AutenticacionService
    ){}

    getPaginas(): Observable<Pagina[]>{
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.autenticacionService.token });
        let options = new RequestOptions({ headers: headers });
        return this.http.get('http://localhost:8080/index.php/paginas/getPaginas', options)
            .map((response:Response) => response.json());

    }

    guardarPagina(pagina:Pagina):Observable<String>{
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.autenticacionService.token });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:8080/index.php/paginas/nuevaPagina', pagina, options)
            .map((response:Response) => response.json());

    }
}