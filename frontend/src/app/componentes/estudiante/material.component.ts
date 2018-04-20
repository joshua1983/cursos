import { Component, OnInit } from '@angular/core';

import { MenuEstComponent } from './menu.component';
import { PaginaService } from '../../_services/pagina.service';
import { Pagina } from '../../_models/pagina';

@Component({
    moduleId: module.id,
    templateUrl: 'material.component.html'
})
export class MaterialComponent implements OnInit{
    paginas:Pagina[];
    /*
    * 1= admin
    * 2= estudiante
    */

    constructor(private servicioPagina:PaginaService){}

    ngOnInit(){
        this.getPaginas();
    }

    getPaginas(){
        this.servicioPagina.getPaginas().subscribe( paginas => {
            this.paginas = paginas;
        } )
    }
}