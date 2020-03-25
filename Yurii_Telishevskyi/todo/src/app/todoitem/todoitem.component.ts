import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todocomponent',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.scss']
})
export class TodoitemComponent {
  @Input() item: string;
  @Output() editItem = new EventEmitter<void>();
  @Output() deleteItem = new EventEmitter<void>();
  @Output() check = new EventEmitter<void>();

  isChecked = false;

  deleteTask() {
    this.deleteItem.emit();
  }

  editTask() {
    this.editItem.emit();
  }

  checked() {
    if (this.isChecked) {
      this.isChecked = false;
    } else {
        this.isChecked = true;
        this.check.emit();
      }
    }
}
