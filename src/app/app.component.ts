import { Component } from '@angular/core';
import Task from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = new Array();
  taskName: string;

  constructor() {
    this.tasks.push(new Task(0, 'task to do'));
  }

  onCreateButtonClick() {
    this.tasks.push(new Task(this.tasks.length, this.taskName));
    this.taskName = '';
  }

  onDelete(id: number) {
    console.log('delete item', id);
    this.tasks = this.tasks.filter(el => el.id != id);
    console.log('all tasks', this.tasks);
  }
}