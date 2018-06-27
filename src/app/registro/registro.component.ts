import { Component, OnInit } from '@angular/core';
//import { UsuariosService } from './usuarios.service';
import { FormBuilder,Validators } from '@angular/forms';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers:[UsuariosService]
})
export class RegistroComponent implements OnInit {
  public registroForm;
  public usaurios;
  constructor(public fb:FormBuilder,public usuarios:UsuariosService) { 
    this.registroForm=this.fb.group({
      nom:["",Validators.required],
      us:["",Validators.required],
      email:["",Validators.required],
      pass:["",Validators.required]
    })
    this.usaurios=usuarios;
  }

  registro(){
    this.usuarios.setUsuario(this.registroForm.value)
  }

  ngOnInit() {
  }

}
