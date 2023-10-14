import { Component } from '@angular/core';
import { Criptomoedas } from '../modelo/Criptomoedas';
import { CriptomoedasService } from '../servicos/criptomoedas.service';

@Component({
  selector: 'app-atividade4',
  templateUrl: './atividade4.component.html',
  styleUrls: ['./atividade4.component.css']
})
export class Atividade4Component {

  btc = new Criptomoedas();
  ada = new Criptomoedas();
  doge = new Criptomoedas();
  eth = new Criptomoedas();

  teste:number = 0;

  constructor(private obter:CriptomoedasService) {}

  obterBtc(){
    setInterval(() => {
      this.obter.buscarBTC().subscribe(retorno => this.btc = retorno)
      console.log(this.btc.last)
    }, 5000);
  }
  obterAda(){
    this.obter.buscarADA().subscribe(retorno => this.ada = retorno)
  }
  obterDoge(){
    this.obter.buscarDOGE().subscribe(retorno => this.doge = retorno)
  }
  obterEth(){
    this.obter.buscarETH().subscribe(retorno => this.eth = retorno)
  }

  ngOnInit(){
    this.obterBtc();
  }
  

}
