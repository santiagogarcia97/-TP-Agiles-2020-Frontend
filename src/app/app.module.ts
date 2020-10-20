import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';

@NgModule({
  declarations: [
    AppComponent,
    AhorcadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
