import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  loading: boolean;
  artistas: any[] = [];

  constructor(private spotify: SpotifyService) {  }

  buscar(termino:string){
    console.log(termino);
    this.loading = true;
    this.spotify.getArtistas(termino)
      .subscribe((data:any) => {
        console.log(data);
        this.artistas = data;
        this.loading = false;
      });
  }
}
