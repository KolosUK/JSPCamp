import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent implements OnInit {
  disabled: boolean;
  tasks: Task[];
  taskName: string;
  index: number;
  idForTask: number;

  ngOnInit() {
    this.idForTask = 0;
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
