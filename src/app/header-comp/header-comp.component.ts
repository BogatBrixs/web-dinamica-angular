import { Component } from '@angular/core';


@Component({
  selector: 'app-header-comp',
  templateUrl: './header-comp.component.html',
  styleUrls: ['./header-comp.component.css']
})
export class HeaderCompComponent {

  texto:string = " ";

  saludar() {
    this.texto = "hola";  
  }

}
