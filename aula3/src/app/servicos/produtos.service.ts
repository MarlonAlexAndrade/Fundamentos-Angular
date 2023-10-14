import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Produto } from '../modelo/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  // Url
  url:string = 'http://localhost:3000/produtos';

  // Construtor
  constructor(private http:HttpClient) { }


  //Selecionar produtos
  selecionar():Observable<Produto[]>{
    return this.http.get<Produto[]>(this.url);
  }

  // Cadastrar produto
  cadastrar(obj:Produto):Observable<Produto>{
    return this.http.post<Produto>(this.url, obj);
  }

}
