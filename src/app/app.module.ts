import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';

import { HelperService } from './api.service';
import {HttpClientModule} from '@angular/common/http';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HelperService],
  bootstrap: [AppComponent]
})

export class AppModule {
}