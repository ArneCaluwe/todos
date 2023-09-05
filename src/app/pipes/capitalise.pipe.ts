import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalise',
  standalone: true,
})
export class CapitalisePipe implements PipeTransform {
  transform(value: string, ..._: unknown[]): unknown {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
