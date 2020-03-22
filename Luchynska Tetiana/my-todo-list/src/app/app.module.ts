import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo-list/todo.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
