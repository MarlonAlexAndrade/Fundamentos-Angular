import { Component } from '@angular/core';
import { Produto } from '../modelo/Produto';
import { ProdutosService } from '../servicos/produtos.service';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.component.html',
  styleUrls: ['./pagina3.component.css']
})
export class Pagina3Component {

  //Objeto do tipo produto
  produto = new Produto();

  // Vetor de produtos
  vetor: Produto[] = [];

  // Construtor
  constructor(private servico: ProdutosService) { }

  // Inicialização do componente
  ngOnInit(){
    this.obterProdutos();
  }

  //Selecionar produtor
  obterProdutos():void{
    this.servico.selecionar().subscribe(retorno => this.vetor = retorno);
  }

  // Cadastrar produto
  cadastrarProduto():void{
    this.servico.cadastrar(this.produto).subscribe(retorno => this.vetor.push(retorno));
  }

}
