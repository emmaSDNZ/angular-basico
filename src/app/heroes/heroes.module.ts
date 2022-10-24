/*

CommonModule : cuando un modulo usa en ngIF o NG FOR se debe
                USAR COMMONMODULE
*/

import { CommonModule } from '@angular/common';

//importamos el NG MODULE DE CORE
import { NgModule } from '@angular/core';


import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({

    //declaraciones: me dice que cosas lleva el modulo.
    //me especifica que componentes lleva
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],

    //cosas visibles por fuera del modulo 
    exports: [
        ListadoComponent
    ],

    //solo van modulos 
    imports: [
        CommonModule
    ]

})

//exportamos la clase
export class HeroesModule {}

