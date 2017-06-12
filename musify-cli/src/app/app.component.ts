import {Component, OnInit} from '@angular/core';
import {User} from './models/User';
import {UserService} from './services/user.service';

//Provices contiene todos los servicios
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UserService]
})
export class AppComponent implements OnInit{
  public title = 'Musify';
  public user: User;
  /**
   *   identity comprueba los datos del usuario logeado,
   Van todos los datos dentro de identity, se guarda en el local storage
   */
  public identity;
  public token;

  constructor(private _userService: UserService) {

    this.user = new User('', '', '', '', '', 'ROLE_USER', '');

  }

  //Carga el componente y ejecuta el codigo o instrucciones.
  ngOnInit(){
    var texto = this._userService.signup();
    console.log(texto);
  }

  public onSubmit() {
    console.log(this.user);
  }

}
