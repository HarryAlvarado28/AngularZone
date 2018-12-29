import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroe2',
  templateUrl: './heroe2.component.html'
})

export class Heroe2Component implements OnInit {

  heroes:any[] = [];
  termino:string;

  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroe(params['termino']);
      console.log(this.heroes);
    });
  }
}
