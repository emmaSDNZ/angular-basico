import { Component } from '@angular/core';


//el decorador esta requiriendo 2 argumentos
//1) SELECTOR: nombre del componente debe ser igual al tag del html
//2) contraparte del HTML // template o templateURL  me especifica donde esta
//el archivo html
@Component(
  {
  selector: 'app-root',
  templateUrl: 'app.component.html'
 }
)

export class AppComponent {
    

  
}
