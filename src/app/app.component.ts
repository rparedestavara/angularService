import { Component } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  precio=100;
  msj_precio="error";
  calcular(){
    if(this.precio<0){
      this.msj_precio="ok";
      };
    };
  }
