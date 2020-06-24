import { Pipe, PipeTransform } from '@angular/core';
import { Sortable } from './sorter';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {
  transform(value: Sortable): unknown {
    return value.sorted ? 'green' : value.isMin ? 'blue' : value.checked ? 'red' : 'grey';
  }
}
