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
    imagen:"https://www.eltiempo.com/files/article_main_1200/uploads/2020/12/11/5fd3fa73adf98.jpeg",
    peso_promedio: "4kg",
    numero_patas:4,
    color_predominante: "todos",
    alimentacion: "onnivoro",
    habitat: "ciudad",
    volador: "no",
  },
  {
    nombre: "Marti_cebra",
    imagen:"https://i.ytimg.com/vi/VIgyP3VfTl4/maxresdefault.jpg",
    peso_promedio: "4kg",
    numero_patas:"4",
    color_predominante: "negro",
    alimentacion: "herbiboro",
    habitat: "madagascar",
    volador: "no",
  },
  {
    nombre: "Gloria_hipopotamo",
    imagen:"https://pbs.twimg.com/media/EbESyHdWkAYcMFG.jpg",
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
    imagen:"https://i1.wp.com/cinicosdesinope.com/wp-content/uploads/2015/12/pinguinos-de-madagascar-kowalski.jpg?resize=706%2C738",
    peso_promedio: "40kg",
    numero_patas:2,
    color_predominante: "negro",
    alimentacion: "carnivoro",
    habitat: "madagascar",
    volador: "no",
  },
  {
    nombre:"Melman_Jirafa",
    imagen:"https://i.pinimg.com/originals/e9/8b/b9/e98bb932170a4a9677914f2bb725f190.jpg",
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

  /* aqui comienza clase presentacion----*/
/*
  equipo = {
    Nombre:"Seleccion espanola de Futbol",
    Nombre_del_pais: "Espana",
    Nombre_alternativo: ["La","Roja"],
    Colores: ["amarillo","rojo"],
    Titulos_ganados: [
      {
        Nombre:"Copa del mundo fifa 2010"
      },
      {
        Nombre: "Eurocopa 1964"
      },
      {
        Nombre: "Eurocopa 2008"
      },
      {
        Nombre: "Eurocopa 2012"
      }
    ],
  Nombre_Capitan: "Álvaro Morata",
  Nombre_entrenador: "Luis de la Fuente ",
  Logo: "https://c8.alamy.com/compes/2dbjnp2/logo-del-equipo-nacional-de-futbol-espanol-la-seleccion-espanola-de-futbol-espana-2dbjnp2.jpg",
  Abreviacion: "ESP",
  Goleador: [
    {
      Nombre:"David Villa",
    },
    {
      Goles: 59,
    }
  ], 
  estadio: {
    Nombre:"Estadio La Cartuja de Sevilla",
    Apodo:"La Cartuja",
    Capasidad:	57619,
  },
  Jugadores:[
    {
      Nombre:"Robert",
      Apellido:"Sánchez",
      Edad:25,
      Altura:197,
      Lugar_nacimiento:"Cartagena",
      Posicion:"portero",
      Club:"Brighton & Hove Albion F. C.",
      Numero:1,
    },
    {
      Nombre:"Eric",
      Apellido:"Garcia",
      Edad:22,
      Altura:182,
      Lugar_nacimiento:" Martorell",
      Posicion:"Defensa",
      Club:"F.C Barcelona",
      Numero:3,
    },
    {
      Nombre:"Hugo",
      Apellido:"Guillamón",
      Edad:23,
      Altura:178,
      Lugar_nacimiento:"San Sebastián",
      Posicion:"Defensa",
      Club:"F.C Valencia",
      Numero:15,
    },
    {
      Nombre:,
      Apellido:,
      Edad:,
      Altura:,
      Lugar_nacimiento:,
      Posicion:,
      Club:,
      Numero:,
    },
    
    
  ]

  } */

}











