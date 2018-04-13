import { Component, OnInit } from '@angular/core';


@Component({
    moduleId: module.id,
    templateUrl: 'pruebas.component.html'
})
export class PruebasComponent implements OnInit{
    
    /*
    * 1= admin
    * 2= estudiante
    */
   tipo:number = 1;

    constructor(){}

    ngOnInit(){
        
    }
}