import { Component, OnInit } from '@angular/core';

import { NgxEditorModule } from 'ngx-editor';
import { Pagina } from '../../_models';
import { PaginaService } from '../../_services';

@Component({
    moduleId: module.id,
    templateUrl: 'cursos.component.html'
})
export class CursosComponent implements OnInit{
    
    /*
    * 1= admin
    * 2= estudiante
    */
   htmlContent:any;
   pagina:Pagina;
   titulo:string;
   contenido:string;

    constructor(private servicioPagina:PaginaService){}

    ngOnInit(){
        
    }

    guardarPagina(){
        this.pagina = new Pagina();
        this.pagina.titulo = this.titulo;
        this.pagina.contenido = this.htmlContent;
        console.log(this.pagina);
        this.servicioPagina.guardarPagina(this.pagina).subscribe( respuesta => {
            console.log(respuesta);
        } );
    }
}