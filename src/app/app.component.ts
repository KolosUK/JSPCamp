import { Component } from '@angular/core';
import Task from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = new Array();

  onTaskCreate(task: Task) {
    this.tasks.push(task);
  }

  onTaskDelete(id: number) {
    this.tasks = this.tasks.filter(el => el.id !== id);
  }
}
