import { Pipe, PipeTransform } from '@angular/core';
import { Aluno } from '../modelo/Aluno';

@Pipe({
  name: 'media'
})
export class MediaPipe implements PipeTransform {

  transform(obj:Aluno): number {
    return (obj.nota1 + obj.nota2) / 2;
  }

}
