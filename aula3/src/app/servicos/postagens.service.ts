import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Postagem } from '../modelo/Postagem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostagensService {

  //URL da API
  url:string = 'https://jsonplaceholder.typicode.com/posts';

  // Construtor
  constructor(private http:HttpClient) { }

  //Função para listar toda as postagens
  listar():Observable<Postagem[]>{
    return this.http.get<Postagem[]>(this.url);
  }
}
