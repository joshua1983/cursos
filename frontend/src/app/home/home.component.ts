import { Component, OnInit } from '@angular/core';


import { Usuario } from '../_models/index';
import { UsuarioService } from '../_services/index';
import { MenuAdminComponent } from '../componentes/admin/index';
import { MenuEstComponent } from '../componentes/estudiante/index';

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
   usuario:Usuario;

    constructor(private usuarioServicio: UsuarioService){
        let usuario = this.usuarioServicio.getUsuarioActual();
        this.usuario = usuario;
    }

    ngOnInit(){
        if (this.usuario.tipo == 1){
            this.usuarioServicio.getUsuarios()
                .subscribe(usuarios => {
                    this.users = usuarios
                });
        }
    }
}