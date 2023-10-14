import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { Atividade1Component } from './atividade1/atividade1.component';
import { Atividade2Component } from './atividade2/atividade2.component';
import { Atividade3Component } from './atividade3/atividade3.component';
import { Atividade4Component } from './atividade4/atividade4.component';
import { FormsModule } from '@angular/forms';
import { MediaPipe } from './pipes/media.pipe';
import { ImcPipe } from './pipes/imc.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    Atividade1Component,
    Atividade2Component,
    Atividade3Component,
    Atividade4Component,
    MediaPipe,
    ImcPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
