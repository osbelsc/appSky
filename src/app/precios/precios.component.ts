import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css']
})
export class PreciosComponent {
constructor(private route:Router){

}
regresaHome(){
  this.route.navigate(["home"]);
}
}
