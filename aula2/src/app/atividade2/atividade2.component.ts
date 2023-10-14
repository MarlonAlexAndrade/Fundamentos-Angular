import { Component } from '@angular/core';

@Component({
  selector: 'app-atividade2',
  templateUrl: './atividade2.component.html',
  styleUrls: ['./atividade2.component.css']
})
export class Atividade2Component {
 numero: number = 0;
 tabuada: string = "";
 vetor: string[] = [];

calculoTabuada():void{
  for(let i=1;i <= 10; i++){
    this.tabuada = (this.numero * i)+" ";
    this.vetor.push(this.tabuada);
  }
}

}
