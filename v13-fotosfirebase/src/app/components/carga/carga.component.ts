import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: []
})
export class CargaComponent implements OnInit {

  private CARPETA_IMAGENES = 'img';

  constructor(private db: AngularFirestore) { }

  private guardarImange(imagen: {nombre: string, url: string}){
    this.db.collection(`/${this.CARPETA_IMAGENES}`)
      .add(imagen);
  }
  ngOnInit() {
  }

}
