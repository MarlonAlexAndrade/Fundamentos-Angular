import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Atividade1Component } from './atividade1/atividade1.component';
import { Atividade2Component } from './atividade2/atividade2.component';
import { Atividade3Component } from './atividade3/atividade3.component';
import { Atividade4Component } from './atividade4/atividade4.component';

@NgModule({
  declarations: [
    AppComponent,
    Atividade1Component,
    Atividade2Component,
    Atividade3Component,
    Atividade4Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
