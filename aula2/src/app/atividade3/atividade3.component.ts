import { Component } from '@angular/core';

@Component({
  selector: 'app-atividade3',
  templateUrl: './atividade3.component.html',
  styleUrls: ['./atividade3.component.css']
})
export class Atividade3Component {
  numero: number = 0;
  option: string = "";

  calcularParcela():void{
    if(this.numero >= 100 && this.option == "vista"){
      this.numero = this.numero * 0.9;
  }else{
    this.numero;
  }
}

}
