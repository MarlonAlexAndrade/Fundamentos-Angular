import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Criptomoedas } from '../modelo/Criptomoedas';

@Injectable({
  providedIn: 'root'
})
export class CriptomoedasService {

  constructor(private http:HttpClient) { }

  buscarBTC():Observable<Criptomoedas>{
    return this.http.get<Criptomoedas>('https://www.mercadobitcoin.net/api/BTC/ticker/');
  }
  buscarADA():Observable<Criptomoedas>{
    return this.http.get<Criptomoedas>('https://www.mercadobitcoin.net/api/ADA/ticker/');
  }
  buscarDOGE():Observable<Criptomoedas>{
    return this.http.get<Criptomoedas>('https://www.mercadobitcoin.net/api/DOGE/ticker/');
  }
  buscarETH():Observable<Criptomoedas>{
    return this.http.get<Criptomoedas>('https://www.mercadobitcoin.net/api/ETH/ticker/');
  }
}
