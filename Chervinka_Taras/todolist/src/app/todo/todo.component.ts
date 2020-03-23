import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { Task } from '../interfaces/task';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  disabled: boolean;
  tasks: Task[];
  taskName: string;
  index: number;
  idForTask: number;


  constructor() {
  }

  ngOnInit() {
    this.idForTask = 0;
    this.taskName = '';
    this.tasks = [];
  }

  addTask(): void {
    if (this.taskName.trim().length === 0) {
      this.disabled = false;
      return;
    }
    this.tasks.push({
      id: this.idForTask,
      name: this.taskName,
      completed: false,
      editing: false
    });
    this.idForTask++;
    this.taskName = '';
  }
  editTask(task: Task) {
    task.editing = true;
    return;
  }

  doneEdit(task: Task) {
    task.editing = false;
    return;
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    return;
  }

}
