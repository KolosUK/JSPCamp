import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodolistComponent } from './todolist/todolist.component';
import { TodocomponentComponent } from './todocomponent/todocomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodocomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
