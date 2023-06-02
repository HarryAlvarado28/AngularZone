import { Pipe, PipeTransform } from '@angular/core';
import {Lista} from "../../models";

/**
 * Generated class for the FiltroCompletadoPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'filtroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(listas: Lista[], completada: boolean) {
    return listas.filter( lista => {
      return lista.terminada === completada;
    });
    //return value.toLowerCase();
  }
}
