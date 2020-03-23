import { Component, OnInit } from '@angular/core';
import Task from '../task';

@Component({
  selector: 'app-task-to-add',
  templateUrl: './task-to-add.component.html',
  styleUrls: ['./task-to-add.component.css']
})
export class TaskToAddComponent implements OnInit {
  tasks: Task[] = new Array();
  taskName: string;
  isError = false;
  errorEmptyField = 'You have to name your task';

  validateInput() {
    if (!this.taskName) {
      this.isError = true;
    } else {
      this.isError = false;
    }
  }

  onTaskNameChange(taskName: string): void {
    if (this.taskName) {
      this.validateInput();
    }
  }

  onCreateButtonClick() {
    this.validateInput();
    if (!this.isError) {
      this.tasks.push(new Task(this.tasks.length, this.taskName));
      this.taskName = '';
    }
  }

  onDelete(id: number) {
    this.tasks = this.tasks.filter(el => el.id !== id);
  }

  constructor() {}

  ngOnInit(): void {}
}
