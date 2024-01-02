import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstpipe'
})
export class FirstpipePipe implements PipeTransform {

  transform(a: string): string {
    return a.split('').reverse().join('');
  }

}
