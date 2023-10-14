import { Component } from '@angular/core';
import { Pessoa } from '../modelo/Pessoa';

@Component({
  selector: 'app-componente5',
  templateUrl: './componente5.component.html',
  styleUrls: ['./componente5.component.css']
})
export class Componente5Component {

//Criar objeto do tipo Pessoa
p = new Pessoa();


//Vetor 
vetor:Pessoa[] = [];

// Função de cadastro
cadastrar():void{
  //cadastrar pessoa no vetor
  this.vetor.push(this.p);

  //Limpar os conteúdos do objeto p
  this.p = new Pessoa();
}

}
