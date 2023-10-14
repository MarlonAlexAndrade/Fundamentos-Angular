import { Component } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component {

  // Manipular conteúdo digitado no input
  texto = "";

  // Vetor de termos digitados
  termos:string[] = [];

  // Função para cadastrar os termos no vetor
  cadastrar(){
    // Cadastrar no vetor
    this.termos.push(this.texto);

    // Limpar o conteúdo a variável texto
    this.texto = "";
  }
}
