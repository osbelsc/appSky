import { Injectable } from '@angular/core';
import { Proyecto } from '../proyectos/proyecto.class';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  
  constructor(private dta:DataService) { 

  }
  nombre:string="";
  empresa:string="";
  costo:number=0;
  proyectos:Proyecto[]=[];
  
    setDatos(proyectos:Proyecto[]){
    this.proyectos=proyectos
    }
    obtenerDatos(){
    return this.dta.obtenerProyectos();
    }
  
    insertarProyecto(proyecto:Proyecto){
    this.proyectos.push(proyecto);
    this.dta.guardarProyecto(this.proyectos);
    
    
    }

    actualizaProyecto(index:number,proyecto:Proyecto){
      this.dta.actualizarProyecto(index,proyecto);
    }

    eliminaProyecto(index:number){
      this.proyectos.splice(index,1)
      this.dta.eliminarProyecto(index);
      this.dta.guardarProyecto(this.proyectos)

    }

    foundProyect(index:number){
      let proyectoSend:Proyecto =this.proyectos[index];
      return proyectoSend;
    }
}
