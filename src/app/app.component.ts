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
  isError: boolean = false;
  errorEmptyField: string = 'You have to name your task';

  constructor() {}

  validateInput() {
    if (!this.taskName) {
      this.isError = true;
    } else {
      this.isError = false;
    }
  }

  onCreateButtonClick() {
    this.validateInput();
    if (!this.isError) {
      this.tasks.push(new Task(this.tasks.length, this.taskName));
      this.taskName = '';
    }
  }

  onTaskNameChange(taskName: string): void {
    if (this.taskName) {
      this.validateInput();
    }
  }

  onDelete(id: number) {
    console.log('delete item', id);
    this.tasks = this.tasks.filter(el => el.id != id);
    console.log('all tasks', this.tasks);
  }
}
