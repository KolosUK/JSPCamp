import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks-to-do-list',
  templateUrl: './tasks-to-do-list.component.html',
  styleUrls: ['./tasks-to-do-list.component.css']
})
export class TasksToDoListComponent {
  taskId: number = 1;
  taskName: string = 'Buy baking soda';
  username: string = '';
}
