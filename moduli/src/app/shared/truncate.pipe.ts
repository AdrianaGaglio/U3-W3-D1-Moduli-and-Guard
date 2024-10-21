import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, arg: number = 30): unknown {
    if (value.length <= arg) {
      return value;
    } else {
      return value.slice(0, arg) + '...';
    }
  }
}
