import { Component } from '@angular/core';

//creamos la clase para angular 
@Component({
    selector: 'app-contador',
    template: `
            
        <h1> {{ titulo }} </h1>
        <h3>La base es: <strong> {{ base }} </strong></h3>

        <button (click)="acumular( base )"> + {{ base }}</button>

        <span> {{ numero }} </span>

        <button (click)="acumular( -base )"> - {{ base }} </button>
    
    `
})

//creamos la clase
export class ContadorComponent {

    titulo: string = 'Contador App';
    numero: number = 10;
    base  : number = 5;

    //METODOS EN EL COMPONENTE
/*  
    sumar(){
        this.numero +=  1; 
        }

    restar(){
        this.numero -= 1;
    } 
    
*/


    acumular( valor: number ) {
        this.numero += valor;
    }

}