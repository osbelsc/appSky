import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { IProducto } from 'src/models/producto';
import { IFrase } from 'src/models/frase.model';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  url = 'http://api.escuelajs.co/api/v1/products';
  pagination = {
    limit: 10,
    offset: 0,
  }
  constructor(private http: HttpClient) { }

  getFrase(): Observable<IFrase> {
    return this.http.get<IFrase>('https://api.chucknorris.io/jokes/random');
  }

  getProducto():Observable<IProducto[]> {
    //const response = this.http.get(`${this.url}?limit=${this.pagination.limit}&offset=${this.pagination.offset}`);
    //console.log('getProducto:');
    //console.log('response=', response);
    let response = this.http.get<IProducto[]>(this.url)
    return response;
  }

  addProducto(body) {
    return this.http.post(this.url, body);

  }


}
