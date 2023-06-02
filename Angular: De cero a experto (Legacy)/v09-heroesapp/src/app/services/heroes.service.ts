import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe, } from '../interfaces/heroe.interface';
import { map } from 'rxjs/operators';
//import { Observable } from 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesURL = 'https://heroesapp-91841.firebaseio.com/heroes.json';
  heroeURL = 'https://heroesapp-91841.firebaseio.com/heroes/';

  constructor(private httpas:HttpClient) { }

  nuevoHeroe(heroe: Heroe){
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this.httpas.post( this.heroesURL, body, {headers}).pipe(
      map( res => {
        return res;
      })
    );
  }

  actualizarHeroe( heroe:Heroe, key$:string ){
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    let url = `${this.heroeURL}/${key$}.json`;

    return this.httpas.put( url, body, {headers}).pipe(
      map( res => {
        return res;
      })
    );
  }

  getHeroe(key$:string){
    let url = `${this.heroeURL}${key$}.json`;
    return this.httpas.get(url).pipe(
      map( res => {return res;})
    );
  }

  getHeroes(){
      return this.httpas.get(this.heroesURL).pipe(
      map( res => {return res;})
    );
  }

  borrarHeroe(key$:string){
    let url = `${this.heroeURL}${key$}.json`;
    return this.httpas.delete(url).pipe(
      map(res => {return res;})
    );
  }
}
