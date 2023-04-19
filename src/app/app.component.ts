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
  /*aqui comenzo la clase, hablamos de los objetos*/
  /*comenzamos a definir objetos, animales,  dentro de un arreglo */
  animales = [  /* este simbolo [] marca el arreglo, como en grafica todo lo que este adentro hace parte dle arreglo*/
  { /*este simbolo{}marca el objeto,los objetos se separan con comas asi: {},{}*/
    nombre: "perro",
    imagen:"https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQkrjYxSfSHeCEA7hkPy8e2JphDsfFHZVKqx-3t37E4XKr-AT7DML8IwtwY0TnZsUcQ",
    peso_promedio: "20kg",
    numero_patas:4,
    color_predominante: "cafesito",
    alimentacion: "onnivoro",
    habitat: "ciudad",
    volador: "no",
  },
  { 
    nombre: "Sante_Sante",
    imagen:"//t3.gstatic.com/licensed-image?q=tbn:ANd9GcRoT6NNDUONDQmlthWrqIi_frTjsjQT4UZtsJsuxqxLiaFGNl5s3_pBIVxS6-VsFUP",
    peso_promedio: "4kg",
    numero_patas:4,
    color_predominante: "todos",
    alimentacion: "onnivoro",
    habitat: "ciudad",
    volador: "no",
  },
  {
    nombre: "Marti_cebra",
    imagen:"//t3.gstatic.com/licensed-image?q=tbn:ANd9GcRoT6NNDUONDQmlthWrqIi_frTjsjQT4UZtsJsuxqxLiaFGNl5s3_pBIVxS6-VsFUP",
    peso_promedio: "4kg",
    numero_patas:"4",
    color_predominante: "negro",
    alimentacion: "herbiboro",
    habitat: "madagascar",
    volador: "no",
  },
  {
    nombre: "Gloria_hipopotamo",
    imagen:"//t3.gstatic.com/licensed-image?q=tbn:ANd9GcRoT6NNDUONDQmlthWrqIi_frTjsjQT4UZtsJsuxqxLiaFGNl5s3_pBIVxS6-VsFUP",
    peso_promedio: "1400kg",
    numero_patas:4,
    color_predominante: "gris",
    alimentacion: "onnivoro",
    habitat: "madagascar",
    volador: "no",
  },
  {
    nombre:"Alex_Leon",
    imagen:"https://i.pinimg.com/originals/61/4f/9a/614f9ab2b8ea893cea52a8bc3e8d44e8.jpg",
    peso_promedio: "150kg",
    numero_patas:4,
    color_predominante: "amarillo",
    alimentacion: "carnivoro",
    habitat: "madagascar",
    volador: "no,"
  },
  {
    nombre:"Covalsqui_Pinguino",
    imagen:"https://img2.freepng.es/20171218/df4/madagascar-penguins-png-5a378c564ecf11.8342367515135898463228.jpg",
    peso_promedio: "40kg",
    numero_patas:2,
    color_predominante: "negro",
    alimentacion: "carnivoro",
    habitat: "madagascar",
    volador: "no",
  },
  {
    nombre:"Melman_Jirafa",
    imagen:"https://static.wikia.nocookie.net/doblaje/images/b/b9/MelmanCharacterMadagascar03.png/revision/latest?cb=20190624012212&path-prefix=es",
    peso_promedio: "1200kg",
    numero_patas:4,
    color_predominante: "amarillo",
    alimentacion: "herbivoro",
    habitat: "madagascar",
    volador: "no",
  },
{
    nombre:"Rokect_Mapache",
    imagen:"https://i0.wp.com/plexmx.info/wp-content/uploads/2023/03/FsUcrneXsAAxMz7.jpg?ssl=1",
    peso_promedio: "6kg",
    numero_patas:4,
    color_predominante: "cafe",
    alimentacion: "carnivoro",
    habitat: "Bosque",
    volador: "no",
  } 
];




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









