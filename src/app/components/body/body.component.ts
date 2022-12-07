import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent   {

  mostrar = true;

  frase: any = {
    mensaje: 'Un gran poder requiere una gran responsalibidad',
    autor:'Ben Parker'
  };

  personajes: string[] = ["Spiderman", "Venon", "Dr Octopus"]

mostrarOcultar(){
  this.mostrar = !this.mostrar
}
}
