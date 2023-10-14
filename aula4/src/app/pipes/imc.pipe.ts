import { Pipe, PipeTransform } from '@angular/core';
import { Pessoa } from '../modelo/Pessoa';

@Pipe({
  name: 'imc'
})
export class ImcPipe implements PipeTransform {



  transform(imc:number): string {

    if (imc < 18.5) {
      return 'Seu IMC é de:' + imc.toFixed(2) + ' você está abaixo do peso';
    } else if (imc < 25) {
      return 'Seu IMC é de:' + imc.toFixed(2) + ' Peso ideal';
    } else if (imc < 30) {
      return 'Seu IMC é de:' + imc.toFixed(2) + ' Levemente acima do peso';
    } else if (imc < 35) {
      return 'Seu IMC é de:' + imc.toFixed(2) + ' Obesidade grau l';
    } else if (imc < 40) {
      return 'Seu IMC é de:' + imc.toFixed(2) + ' Obesidade grau ll';
    }else{
      return 'Seu IMC é de:' + imc.toFixed(2) + ' Obesidade grau lll';
    }
  }

}
