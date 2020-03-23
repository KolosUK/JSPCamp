import { Component, EventEmitter, Input, Output } from '@angular/core';
import Task from '../task';

@Component({
  selector: 'app-task-in-list',
  templateUrl: './task-in-list.component.html',
  styleUrls: ['./task-in-list.component.css']
})
export class TaskInListComponent {
  @Input() task: Task;
  @Output() deleteItem = new EventEmitter<number>();
  isEditMode: boolean;
  editedTaskName: string;

  onEditClick() {
    this.isEditMode = true;
    this.editedTaskName = this.task.name;
  }

  onSaveClick() {
    this.task.name = this.editedTaskName;
    this.isEditMode = false;
  }

  onDeleteClick() {
    this.deleteItem.emit(this.task.id);
  }

  onDoneChange() {
    this.task.isDone = !this.task.isDone;
  }
}
