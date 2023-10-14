import { Pipe, PipeTransform } from '@angular/core';
import { Pessoa } from '../modelo/Pessoa';

@Pipe({
  name: 'cidade'
})
export class CidadePipe implements PipeTransform {

  transform(pessoas:Pessoa[]): Pessoa [] {
    return pessoas.filter(obj => obj.cidade == 'Blumenau');
  }

}
