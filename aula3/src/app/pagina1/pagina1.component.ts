import { Component } from '@angular/core';
import { Pessoa } from '../modelo/Pessoa';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component {

  // JSON
  vetor:Pessoa[] = [
    {'nome':'Ralf', 'cidade':'Blumenau'},
    {'nome':'Ricardo', 'cidade':'Florianópolis'},
    {'nome':'Larissa', 'cidade':'Blumenau'},
    {'nome':'Jéssica', 'cidade':'Blumenau'},
    {'nome':'Caio', 'cidade':'São Paulo'}
  ]
}
