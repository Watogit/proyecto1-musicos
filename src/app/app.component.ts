import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EscalApp';
  edad= 35
  pasaLaMateria: boolean= true;
  dato: any= 46
  contador: number= 0;


  aumentar(){
    this.contador=this.contador + 1;
  }
  disminuir(){
    this.contador=this.contador - 1;
  }
  multiplicar(){
    this.contador=this.contador *2;
  }
  dividir(){
    this.contador=this.contador /2;
  }
  reset(){
    this.contador=0;
  }
  esPar (numero: number):boolean{
    if(numero % 2 === 0)/* === se utilizan para preguntar si es =*/
    {return true;}
    {return false;}
  }
  estudiantes:string[]=["lady","nath","walter","daniela","romario","alejandro","luisa"];
}


