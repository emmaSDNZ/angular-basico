import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitán América'];
  heroeBorrado: string = '';

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
  }


}


/*
DIRECTIVAS ESTRUCTURALES: me permite manipulare el DOM

Directiva *ngFor 
 *ngFor="let heroe of heroes; let i = index" 

Directiva *ngIf
 *ngIf="heroeBorrado; else noBorrado"

el bloque html aparece solo si esta en tru
el ELSE tiene una referencia local 
la referencia: es tomada por el NGtemplate


-> Ng-Template: es un componente de angular
muestra el conetenido basada en la condicion de la 

LA REFERENCIA LOCAL SE IFENTIFICA POR EL NUMERAL #
 
El ngIf-else

*/