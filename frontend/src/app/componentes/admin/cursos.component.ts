import { Component, OnInit } from '@angular/core';


@Component({
    moduleId: module.id,
    templateUrl: 'cursos.component.html'
})
export class CursosComponent implements OnInit{
    
    /*
    * 1= admin
    * 2= estudiante
    */
   tipo:number = 1;

    constructor(){}

    ngOnInit(){
        
    }
}