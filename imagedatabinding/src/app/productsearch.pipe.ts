import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product/iProduct';

@Pipe({
  name: 'productsearch'
})
export class ProductsearchPipe implements PipeTransform {

  transform(value: Product[], args: string): Product[] {
    if(!args){
      return value;
    }
    return value.filter(
      item=>item.Title.toLowerCase().indexOf(args.toLowerCase()) >-1)
  }

}




