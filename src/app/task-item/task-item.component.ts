import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  taskId: number = 1;
  taskName: string = 'Buy baking soda';
  // username: string = '';
  checkStatus: string = 'checked';

  constructor() {}

  // onCheckboxClick() {
  //   return this.checkStatus === 'checked' ? 'line-through' : 'none';
  // }

  // getTextDecoration() {
  //   this.taskIsDone = true;
  //   return;
  // }

  ngOnInit(): void {}
}
