import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dobrar'
})
export class DobrarPipe implements PipeTransform {

  transform(numero: number): number {
    return numero * 2;
  }

}
