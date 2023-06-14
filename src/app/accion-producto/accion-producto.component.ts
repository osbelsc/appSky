import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { IProduct, CreateProducto, UpdateProducto } from '../Model/producto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-accion-producto',
  templateUrl: './accion-producto.component.html',
  styleUrls: ['./accion-producto.component.css']
})
export class AccionProductoComponent implements OnInit {
  title: string = ""
  price: number = 0;
  description: string = "";
  index: number = 0;
  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) {

  }
  Productos: IProduct[] = [];

  ngOnInit(): void {
    //get products
    this.api.getAllProducto().subscribe(
      data => { this.Productos = data },
      error => { error }
    );
    this.index = this.route.snapshot.params["id"];
    let productoAct:CreateProducto = this.api.foundProduct(this.index);
    this.title=productoAct.title;
    this.price=productoAct.price;
    this.description=productoAct.description;
  }
  actualizarProducto() {
    let newProducto = this.Productos[this.index];
    this.api.updateProductPUT(this.index, newProducto);
    this.router.navigate(['producto']);

  }
  eliminarProducto() {
    this.api.deleteProduct(this.index);
    this.router.navigate(['proyectos']);
  }
  }
  
