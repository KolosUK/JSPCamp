import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewItemComponent } from './new-item/new-item.component';
import { TaskItemComponent } from './task-item/task-item.component';

@NgModule({
  declarations: [AppComponent, NewItemComponent, TaskItemComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
