import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { Pagina3Component } from './pagina3/pagina3.component';
import { Pagina404Component } from './pagina404/pagina404.component';

const routes: Routes = [
  {path:'pagina1', component:Pagina1Component},
  {path:'pagina2', component:Pagina2Component},
  {path:'pagina3', component:Pagina3Component},
  {path:'', redirectTo:'pagina1', pathMatch:'full'},
  {path:'**', component:Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
