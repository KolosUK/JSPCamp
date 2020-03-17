import { Component, Input } from '@angular/core';
import Task from '../task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task: Task;
  isEditMode: boolean = false;
  editedTaskName: string;

  onEditClick() {
    this.isEditMode = true;
    this.editedTaskName = this.task.name;
  }

  onSaveClick() {
    this.task.name = this.editedTaskName;
    this.isEditMode = false;
  }
}
