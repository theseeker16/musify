import { Component } from '@angular/core';
import { User } from './models/User';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title = 'Musify';
  public user: User
  /**
   *   identity comprueba los datos del usuario logeado,
       Van todos los datos dentro de identity, se guarda en el local storage
   */
  public identity;
  public token;

  constructor(){
    this.user = new User('','','','','','ROLE_USER','');

  }

}
