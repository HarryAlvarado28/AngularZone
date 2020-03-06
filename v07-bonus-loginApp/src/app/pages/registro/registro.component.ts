import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model'
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel

  constructor() { }

  ngOnInit() {
    this.usuario = new UsuarioModel()
    this.usuario.email = 'harry2alvarado8@gmail.com'
  }

  onSubmit() {
    console.log('Formulario enviado')
    console.log(this.usuario)
  }


}
