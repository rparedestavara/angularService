import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }
  getUsuarios(){
    return ["camas","maletas","celulares"];
  }
  setUsuario(usuario){
    console.log(usuario);
  }
}
