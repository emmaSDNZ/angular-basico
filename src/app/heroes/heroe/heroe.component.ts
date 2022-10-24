import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{ 

    nombre: string = 'Ironman';
    edad  : number = 45

    //Un get es una propiedad que es procesada
    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    //metodo
    obtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad }`;
    }
    //cuando una funcion no retorna nada, su tipo es void
    cambiarNombre():void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        console.log('hey...');
        this.edad = 30;
    }

}