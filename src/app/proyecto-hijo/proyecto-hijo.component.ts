import { Component, Input } from '@angular/core';
import { Proyecto } from '../proyectos/proyecto.class';

@Component({
  selector: 'app-proyecto-hijo',
  templateUrl: './proyecto-hijo.component.html',
  styleUrls: ['./proyecto-hijo.component.css']
})
export class ProyectoHijoComponent {

  @Input() proyectoH : Proyecto;
  @Input() indice : number;
 constructor(){

 }
 
}
