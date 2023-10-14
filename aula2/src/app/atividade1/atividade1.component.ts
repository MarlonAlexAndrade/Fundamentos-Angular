import { Component } from '@angular/core';

@Component({
  selector: 'app-atividade1',
  templateUrl: './atividade1.component.html',
  styleUrls: ['./atividade1.component.css']
})
export class Atividade1Component {

  // Variáveis numéricas
  numero1: number = 0;
  numero2: number = 0;
  numero3: number = 0;
  menor: number = 0;

  // Função para verificar o menor número
  menorNumero(): void {

    // O primeiro número será o menor
    this.menor = this.numero1;

    // Comparar o menor com o número1
    if (this.numero2 < this.menor) {
      this.menor = this.numero2;
    }

    // Comparar o meor com o número3
    if (this.numero3 < this.menor) {
      this.menor = this.numero3;
    }

  }
}
