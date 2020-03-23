import { Component, Output, EventEmitter } from '@angular/core';
import Task from '../task';

@Component({
  selector: 'app-task-to-add',
  templateUrl: './task-to-add.component.html',
  styleUrls: ['./task-to-add.component.css']
})
export class TaskToAddComponent {
  @Output() createItem = new EventEmitter<Task>();
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
    this.validateInput();
  }

  onCreateButtonClick() {
    this.validateInput();
    if (!this.isError) {
      this.createItem.emit(new Task(new Date().getTime(), this.taskName));
      this.taskName = '';
    }
  }
}
