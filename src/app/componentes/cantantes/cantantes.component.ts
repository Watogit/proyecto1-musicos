import { Component, OnInit } from '@angular/core';
import { Cantante } from 'src/app/moodels/cantante.model';

@Component({
  selector: 'cantantes',
  templateUrl: './cantantes.component.html',
  styleUrls: ['./cantantes.component.css']
})
export class CantantesComponent implements OnInit {
  cantantes:Cantante []= [
    {
     Nombre: "Criss Cornell",
     Edad:37,
     Vivo:false,
    },
    {
      Nombre: "Michael",
      Edad:48,
      Vivo:false,
    },
    {
      Nombre: "Samurai",
      Edad:27,
      Vivo:false,
    },
    {
      Nombre: "hendrix",
      Edad:28,
      Vivo:false,
    },
  ]
  ngOnInit(): void {
    console. log("hola");
    console. log(this.cantantes[0].Nombre);
    console. log(this.cantantes[0].Nombre. length);
    console. log(this.cantantes[0].Nombre. charAt(1));
    console. log(this.cantantes[0].Nombre.substring(1,4));
    console. log(this.cantantes[0].Nombre.replace("Criss","rojo"));
    console. log(this.cantantes[0].Nombre.toUpperCase());
    console. log(this.cantantes[0].Nombre.concat("Sanches"));
    console. log(this.cantantes[0].Nombre.indexOf("Cornell"));
    console. log(this.cantantes[0].Nombre.includes("Cornell"));
    console. log(this.cantantes[0].Nombre.startsWith("Cor"))
    console. log(this.cantantes);
    console. table(this.cantantes[2]);
    console. table(this.cantantes.length);
    this.cantantes.pop();/*-- elimina ultimo elemento--*/
    this.cantantes.shift();/*-- elimina el primero--*/
    this.cantantes.splice(2,1);/* elimina desde la poscicion 2 un 1 elemento*/
    let nuevoCantante:Cantante= {
      Nombre: "Albertucho",
      Edad:40,
      Vivo:true,
    }
    this. cantantes.push(nuevoCantante);/*--- agrega nuevo objeto al arreglo--*/
    console. log(this.cantantes);
    let nombres= this.cantantes.map(cantante => cantante.Nombre.toUpperCase()).sort().reverse();/*-- espejito espejito--*/
    console. log (nombres);
    let Sumas = this.cantantes.map(cantante=> cantante.Edad+2);
    console. log(Sumas);
    let Raizes = this.cantantes.map(cantante=> Math.sqrt(cantante.Edad));
    console. log(Raizes);
    let Potencia = this.cantantes.map(cantante=> Math.pow(cantante.Edad,2));
    console. log(Potencia);
  }

}
