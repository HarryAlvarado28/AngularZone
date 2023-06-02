import { Component } from '@angular/core';

import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent  {

  constructor(public _cs: ChatService) { }

  ingregar(proveedor: string){
    console.log(proveedor);
    this._cs.login(proveedor);
  }

}
