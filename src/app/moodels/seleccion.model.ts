export interface equipo {
    Nombre: string;
    Nombre_del_pais:string;
    Nombre_alternativo:string[];
    Colores: string[];
    Titulos_ganados: Titulo[];
    Nombre_Capitan: string;
    Nombre_entrenador: string;
    Logo: string;
    Abreviacion: string;
    Goleador: Goleador[];
    estadio: Estadio;
}

export interface Titulo {
    Nombre: string;
}

export interface Goleador {
    Nombre: string;
    Goles: number;
}

export interface Estadio  {
    Nombre:string;
    Apodo: string;
    Capasidad: number;
}


