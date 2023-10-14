import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Endereco } from '../modelo/Endereco';
import { CepService } from '../servicos/cep.service';


@Component({
  selector: 'app-atividade2',
  templateUrl: './atividade2.component.html',
  styleUrls: ['./atividade2.component.css']
})
export class Atividade2Component {
  cep: string = '';

  endereco = new Endereco();
  
  constructor(private servico:CepService){}

  verificar():void{
    this.servico.buscarCep(this.cep).subscribe(retorno => this.endereco = retorno)
  }

}
