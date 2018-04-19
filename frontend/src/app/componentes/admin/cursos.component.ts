import { Component, OnInit } from '@angular/core';

import { NgxEditorModule } from 'ngx-editor';

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
   tipo:number = 1;

    constructor(){}

    ngOnInit(){
        
    }
}