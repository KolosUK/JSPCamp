import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodocomponentComponent } from './todocomponent/todocomponent.component';
import { TodolistsComponent } from './todolists/todolists.component';

@NgModule({
  declarations: [
    AppComponent,
    TodocomponentComponent,
    TodolistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
