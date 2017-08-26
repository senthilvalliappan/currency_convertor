import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';
import { ExchangeService } from './services/exchange.service';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { MainComponent } from './component/main.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent,MainComponent ],
  bootstrap:    [ AppComponent ],
  providers:	[ExchangeService]
})
export class AppModule { }
