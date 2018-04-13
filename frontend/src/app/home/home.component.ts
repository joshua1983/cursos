import { Component, OnInit } from '@angular/core';


import { Usuario } from '../_models/index';
import { UsuarioService } from '../_services/index';
import { MenuAdminComponent } from '../componentes/admin/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit{
    users: Usuario[] = [];
    /*
    * 1= admin
    * 2= estudiante
    */
   tipo:number = 1;

    constructor(private usuarioServicio: UsuarioService){}

    ngOnInit(){
        this.usuarioServicio.getUsuarios()
            .subscribe(usuarios => {
                this.users = usuarios
            });
    }
}