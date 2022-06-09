import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../model/product";

@Pipe({
  name: 'arraySplicer',
  pure: false
})
export class ArraySplicerPipe implements PipeTransform {

  transform(value: Product[], query:string): Product[] {
    return value.filter((el) => el.productName.toLowerCase().search(query.toLowerCase()) !== -1);
  }

}
