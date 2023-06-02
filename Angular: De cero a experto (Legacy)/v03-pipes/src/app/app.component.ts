import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre = 'Harry';
  nombreCompleto = 'harry b AlVArado U';
  arreglo = [1,2,3,4,5,6,7,8,9,10]
  PI = Math.PI;
  a = 0.285;
  salario = 12345.6;
  heroe = {
    nombre: "Clar Ken",
    clase: "Superman",
    edad: 34,
    dirección: {
      calle: "Primera",
      casa: 14
    }
  };
  valorDePromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('llego la data'),3600);
  })
  fecha = new Date();
  video = 'IvTio0FJf6Y';
  activar = true;
}
