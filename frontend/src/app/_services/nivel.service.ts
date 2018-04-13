import { Inject, Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AutenticacionService } from '../_services/autenticacion.service';
import { Nivel } from '../_models/index';

@Injectable()
export class NivelesService{
    constructor(
        private http:Http,
        private autenticacionService: AutenticacionService
    ){}

    getNiveles(): Observable<Nivel[]>{
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.autenticacionService.token });
        let options = new RequestOptions({ headers: headers });
        return this.http.get('http://localhost:8080/index.php/niveles/getNiveles', options)
            .map((response:Response) => response.json());

    }
}