import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondPipe'
})
export class SecondPipePipe implements PipeTransform {

  transform(value: string, prefix: string, second: string): string {
    return `${prefix} ${second} ${value}`;
  }

}
