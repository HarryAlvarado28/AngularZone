import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private router:ActivatedRoute) {
    this.router.params.subscribe(parametros => {
      console.log("Ruta PADRE");
      console.log(parametros)
    })
  }

  ngOnInit() {
  }

}
