import { Component } from '@angular/core';
import Task from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks = [];
  taskName: string;

  onCreateButtonClick() {
    this.tasks.push(new Task(this.taskName));
  }
}
