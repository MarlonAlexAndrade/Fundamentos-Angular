import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endereco } from '../modelo/Endereco';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http:HttpClient) { }

  buscarCep(cep:string):Observable<Endereco>{
    return this.http.get<Endereco>('https://viacep.com.br/ws/'+cep+'/json/');
  }
}
