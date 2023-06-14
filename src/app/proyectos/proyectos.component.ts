import { Component } from '@angular/core';

import { Proyecto } from '../proyectos/proyecto.class';
import { CrudServiceService } from '../servicios/crud-service.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  constructor(private crud:CrudServiceService){

    this.crud.obtenerDatos().subscribe(
    data=>{console.log(data)
    this.proyectos=Object.values(data); 
    this.crud.setDatos(this.proyectos);
 });
  }


nombre:string="";
empresa:string="";
costo:number=0;
index:number=0;
proyectos:Proyecto[]=[];

insertarProyecto(){
  let proyecto:Proyecto=new Proyecto(this.nombre,this.empresa,this.costo)
this.crud.insertarProyecto(proyecto);


}
}
