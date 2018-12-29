import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  mostrar = true;

  frase: any = {
    mensaje: 'El conocimiento es poder!',
    autor: 'Yo mismo'
  }

  peliculas: string[] = ['La Liga de la Justicia', 'Los Vengadores','Superman', 'Dios no esta muerto', 'La era del Hielo','Busqueda Implacable'];
}
