import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Proyecto } from '../proyectos/proyecto.class';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpOs:HttpClient) { }

  obtenerProyectos(){
    return this.httpOs.get('https://appclouds-ab8f1-default-rtdb.firebaseio.com/datos.json')
  }

  guardarProyecto(proyectos:Proyecto[]){

    this.httpOs.put('https://appclouds-ab8f1-default-rtdb.firebaseio.com/datos.json',proyectos).subscribe(
    data=>console.log(data),

    error=>console.log(error),
    );
  }
  
  actualizarProyecto(indice:number,proyecto:Proyecto){
    let urlAct='https://appclouds-ab8f1-default-rtdb.firebaseio.com/datos/'+ indice +'.json'

    this.httpOs.put(urlAct,proyecto).subscribe(
    dta=>console.log(dta),
    error=>console.log(error)
);}

  eliminarProyecto(indice:number){
let urlDelete='https://appclouds-ab8f1-default-rtdb.firebaseio.com/datos/'+ indice +'.json'
this.httpOs.delete(urlDelete).subscribe(
   data=>console.log(data),
   error=>console.log(error)
);

  }

}
