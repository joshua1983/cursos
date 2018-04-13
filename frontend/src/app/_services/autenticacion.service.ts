import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AutenticacionService{
    public token:string;

    constructor(private http:Http){
        var usuarioActual = JSON.parse(localStorage.getItem('currentUser'));
        this.token = usuarioActual && usuarioActual.token;
    }

    login(user: string, pass: string): Observable<boolean>{
        
        return this.http.post('http://localhost:8080/index.php/welcome/login', JSON.stringify({
            usuario: user,
            password: pass
        })).map((response: Response) =>{
            console.log(response);
            let responseJson = response.json();
            if (responseJson.token){
                this.token = responseJson.token;
                localStorage.setItem('currentUser', JSON.stringify({
                    usuario: user,
                    token: responseJson.token,
                    tipo: responseJson.tipo
                }));
                return true;
            }else{
                return false;
            }
        });
    }

    logout(): void{
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}