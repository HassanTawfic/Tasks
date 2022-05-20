import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringConverter'
})
export class StringConverterPipe implements PipeTransform {

  transform(value: string, replacer:string=" "): unknown {
    return value.replace("-",replacer);
  }

}
