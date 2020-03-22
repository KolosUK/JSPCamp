import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todocomponent',
  templateUrl: './todocomponent.component.html',
  styleUrls: ['./todocomponent.component.scss']
})
export class TodocomponentComponent {
  @Input() item: string;
  @Output() editItem = new EventEmitter();
  @Output() deleteItem = new EventEmitter();
  @Output() check = new EventEmitter();

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
