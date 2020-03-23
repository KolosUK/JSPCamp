import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskToAddComponent } from './task-to-add/task-to-add.component';
import { TaskInListComponent } from './task-in-list/task-in-list.component';

@NgModule({
  declarations: [AppComponent, TaskToAddComponent, TaskInListComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
