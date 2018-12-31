export class Marcador {
  public lat: number;
  public lng: number;

  public titulo = 'Sin Titulo';
  public desc = 'Sin Descripción';

  constructor(lat: number, lng: number){
    this.lat = lat;
    this.lng = lng;
  }
}
