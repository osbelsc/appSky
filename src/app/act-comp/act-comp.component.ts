import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../servicios/crud-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from '../proyectos/proyecto.class';
import { DataService } from '../servicios/data.service';


@Component({
  selector: 'app-act-comp',
  templateUrl: './act-comp.component.html',
  styleUrls: ['./act-comp.component.css']
})
export class ActCompComponent implements OnInit {
  nombre:string="";
  empresa:string="";
  costo:number=0;
  index:number=0;
  proyectos:Proyecto[]=[];

  constructor(private Crud:CrudServiceService ,
    private route : ActivatedRoute,
    private router:Router,
    private dta:DataService
    ){
  
  }
  ngOnInit(): void {
    this.proyectos=this.Crud.proyectos
    this.index = this.route.snapshot.params["id"];
    let proyectoAct:Proyecto = this.Crud.foundProyect(this.index);
    this.nombre=proyectoAct.nombre;
    this.empresa=proyectoAct.empresa;
    this.costo=proyectoAct.costo;
  }
 

 
 
  actualizarProyecto(){
     let proyecto =new Proyecto(this.nombre,this.empresa,this.costo);
     this.Crud.actualizaProyecto(this.index,proyecto);
     this.router.navigate(['proyectos']);
     
  }
  eliminarProyecto(){
     this.Crud.eliminaProyecto(this.index);
     this.router.navigate(['proyectos']);
  }
 
}
