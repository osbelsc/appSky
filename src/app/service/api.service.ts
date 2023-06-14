import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct , CreateProducto, UpdateProducto } from '../Model/producto';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url='http://api.escuelajs.co/api/v1/products';

  constructor(private http: HttpClient) { }


  getProducto():Observable<IProduct[]>{
    let data = this.http.get<IProduct[]>(this.url) ;
    return data;
    
  }
  createProduct(body: CreateProducto): Observable<IProduct> {
    return this.http.post<IProduct>(`https://example.com/api/productos`, body);
  }
  putProduct(body:IProduct){
    this.http.put('http://api.escuelajs.co/api/v1/products/api/v1/products/{id}',body);

  }
  updateProductPUT(idProduct: number, body: UpdateProducto): Observable<IProduct> {
    return this.http.put<IProduct>(`https://example.com/api/productos`, body);
  }
  
  deleteProduct(idProduct: number): Observable<boolean> {
    return this.http.delete<boolean>(`https://example.com/api/productos/${idProduct}`);
  }
}
