import { Pipe, PipeTransform } from '@angular/core';
import {repeat} from 'rxjs/operators';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean): any {

    if(activar){
      return '*'.repeat(value.length);
    }

    return value;
  }

}
