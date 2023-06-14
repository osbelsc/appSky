import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { IProduct, CreateProducto, UpdateProducto } from '../Model/producto';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  title: string = ""
  price: number = 0;
  description: string = "";
  image: string = "";
  images: string[] = [];
  criterio: string = "";
  constructor(private api: ApiService) {
  }
  Productos: IProduct[] = [];


  ngOnInit(): void {
    //get products
    this.api.getProducto().subscribe(
      data => { this.Productos = data },
      error => { error }
    );
  }

  createProduct(): void {
    this.images.push(this.image);
    const body: CreateProducto = {
      title: this.title,
      price: this.price,
      description: this.description,
      images: this.image,
      idCategory: '1'
    };
    this.api.createProduct(body)
      .subscribe((p: IProduct) => {
        // Guardamos el nuevo producto, en el Array de productos junto con los otros.
        this.Productos.push(p);
      });
  }
  
  updateProduct(idProduct: number): void {
    const body: UpdateProducto = {
      
      
    };
    this.api.updateProductPUT(idProduct, body)
      .subscribe(p => {
        // Reemplazamos el producto actualizado en el Array de productos
        const index = this.Productos.findIndex(product => product.id === p.id);
        this.Productos[index] = p;
      });
      
    
}
deleteProduct(idProduct: number): void {
  this.api.deleteProduct(idProduct)
    .subscribe(p => {
      if (p) {
        // Borramos el producto del Array de productos
        const index = this.Productos.findIndex(product => product.id === idProduct);
        this.Productos.splice(index, 1);
      }
    });
}
}


