import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../Model/producto';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform (values: IProduct[], args: string): IProduct[]  {
    let productos:IProduct[]=[];
    for(let i=0; i>=values.length;i++){
      if(values[i].title==args){
        let product=values[i];
        productos.push(product);
      }
      else{
        console.log('no se encontro nada');
        
      }
    }
    return productos;
    }
    
  }


