import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { IProduct, CreateProducto, UpdateProducto } from '../Model/producto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-accion-producto',
  templateUrl: './accion-producto.component.html',
  styleUrls: ['./accion-producto.component.css']
})
export class AccionProductoComponent {
  title: string = ""
  price: number = 0;
  description: string = "";
  index: number = 0;
  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) {

  }
  Productos: IProduct[] = [];

  ngOnInit(): void {
    //get products
    this.api.getProducto().subscribe(
      data => { this.Productos = data },
      error => { error }
    );
    this.index = this.route.snapshot.params["id"];
  }
  actualizarProyecto() {
    let newProducto = this.Productos[this.index];
    this.api.updateProductPUT(this.index, newProducto);
    this.router.navigate(['producto']);

  }
  eliminarProyecto() {
    this.api.deleteProduct(this.index);
    this.router.navigate(['proyectos']);
  }
}
