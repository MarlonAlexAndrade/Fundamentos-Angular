import { Component } from '@angular/core';
import { Postagem } from '../modelo/Postagem';
import { PostagensService } from '../servicos/postagens.service';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component {

  //Vetor 
  postagens:Postagem[] = [];
  //Construtor
  constructor(private servico:PostagensService){}

  //Função para executar quando o componente for criado
  ngOnInit(){
    this.obterPostagens();
  }

  // Função para obter as postagens
  obterPostagens():void{
    this.servico.listar().subscribe(retorno => this.postagens = retorno);
  }

}
