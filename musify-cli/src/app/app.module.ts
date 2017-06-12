import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';//Nos permite crear formularios y usar two-way data bindings
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  //declartions cargamos componentes y directivas
  declarations: [
    AppComponent
  ],
  // imports cargar modulos del framework y propios
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  //providers cargar servicios
  providers: [],
  //AppComponent es el principal
  bootstrap: [AppComponent]
})
export class AppModule { }
