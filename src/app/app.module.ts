import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule, LoginRoutingModule } from './autenticacao';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    LoginModule,
    LoginRoutingModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
