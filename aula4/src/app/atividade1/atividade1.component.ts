import { Component } from '@angular/core';
import { Aluno } from '../modelo/Aluno';

@Component({
  selector: 'app-atividade1',
  templateUrl: './atividade1.component.html',
  styleUrls: ['./atividade1.component.css']
})
export class Atividade1Component {

  aluno = new Aluno();

  vetor:Aluno[] = []

  cadastrarAluno():void{
    this.vetor.push(this.aluno)
  }
}
