import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Atividade1Component } from './atividade1/atividade1.component';
import { Atividade2Component } from './atividade2/atividade2.component';
import { Atividade3Component } from './atividade3/atividade3.component';
import { Atividade4Component } from './atividade4/atividade4.component';

const routes: Routes = [
  {path:'atividade1', component:Atividade1Component},
  {path:'atividade2', component:Atividade2Component},
  {path:'atividade3', component:Atividade3Component},
  {path:'atividade4', component:Atividade4Component},
  {path:'', redirectTo:'atividade1', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
