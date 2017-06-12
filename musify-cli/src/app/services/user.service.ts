/**
 * Created by jgm16 on 09/06/2017.
 */

import {Injectable} from '@angular/core'; //
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map'; //Mapear objetos
import {Observable} from 'rxjs/Observable'; //recoge respuestas cuando se hace una peticion al servidor.
import {GLOBAL} from './global';

//Patron decorador,para permitir que luego
//por medio de inyeccion de dependecia se pueda inyectar en otras clases.
@Injectable()
export class UserService {

  public url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

  signup(){
   return 'Hola';
  }
}
