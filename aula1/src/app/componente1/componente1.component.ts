import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component {

// Variável boolan (true/false)
quadrado = true;
//Função clique
 clicar(){
  this.quadrado = !this.quadrado;
}
}
