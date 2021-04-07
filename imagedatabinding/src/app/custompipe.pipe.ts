import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product/iProduct';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: Product[], args: number): Product[] {
    if(!args)
    {
      return value;
    }
    return value.filter(item=>(item.Price>= args));
  }
}


