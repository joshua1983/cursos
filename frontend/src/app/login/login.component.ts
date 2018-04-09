import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AutenticacionService } from '../_services/autenticacion.service';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit{
    model: any = {};
    loading = false;
    error = '';

    constructor(
        private router:Router,
        private autenticacionService:AutenticacionService
    ){}

    ngOnInit(){
        this.autenticacionService.logout();
    }

    login(){
        this.loading = true;
        this.autenticacionService.login(this.model.usuario, this.model.password)
            .subscribe(result => {
                if (result === true){
                    this.router.navigate(['/']);
                }else{
                    this.error = 'Usuario o contraseña invalido';
                    this.loading = false;
                }
            });
    }
}