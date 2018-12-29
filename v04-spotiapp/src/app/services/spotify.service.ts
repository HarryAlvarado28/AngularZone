import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log('Spotify servicios!!!:...');
  }

  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQCZqDu2OYwDYqG8sfGj3AHAvLotOAwjB4KsX2D7oG3G4dKZKy7zwJQ7C1QpMYg_7ARDZxW95qcEnALpWrY'
    });

    return this.http.get(url,{headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases').pipe(map(data => data['albums'].items));

  }

  getArtistas(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map(data => data['artists'].items));
    //this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{headers})
  }

  getArtista(id:string){
    return this.getQuery(`artists/${id}`);//.pipe(map(data => data['artists'].items));
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map(data => data['tracks'].items));
  }
}
