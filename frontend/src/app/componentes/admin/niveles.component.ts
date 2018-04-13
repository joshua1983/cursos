import { Component, OnInit } from '@angular/core';


import { Usuario, Nivel } from '../../_models/index';
import { UsuarioService, NivelesService } from '../../_services/index';
import { MenuAdminComponent } from '../../componentes/admin/index';

@Component({
    moduleId: module.id,
    templateUrl: 'niveles.component.html'
})
export class NivelComponent implements OnInit{
    niveles: Nivel[] = [];
    /*
    * 1= admin
    * 2= estudiante
    */
   tipo:number = 1;

    constructor(private usuarioServicio: UsuarioService,
        private nivelServicio: NivelesService){}

    ngOnInit(){
        this.nivelServicio.getNiveles()
            .subscribe(niveles => {
                this.niveles = niveles
            });
    }
}