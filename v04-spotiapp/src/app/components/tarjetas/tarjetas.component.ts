import {Component, Input} from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html'
})
export class TarjetasComponent{

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  verArtista(item: any){
    let artistaId;
    if(item.type === 'artist'){
      artistaId = item.id;
    }else{
      artistaId = item.artists[0].id;
    }
    console.log(artistaId);
    this.router.navigate(['/artist',artistaId]);
  }

}
