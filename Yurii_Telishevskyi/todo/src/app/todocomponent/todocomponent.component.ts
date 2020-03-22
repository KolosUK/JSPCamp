import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todocomponent',
  templateUrl: './todocomponent.component.html',
  styleUrls: ['./todocomponent.component.scss']
})
export class TodocomponentComponent {
  @Input() items: string;
  @Output() editItem = new EventEmitter();
  @Output() deleteItem = new EventEmitter();
  @Output() check = new EventEmitter();

  onGood = false;

  isDeleted() {
    this.deleteItem.emit();
  }

  isEdited() {
    this.editItem.emit();
  }

  checked() {
    if (this.onGood) {
      this.onGood = false;
    } else {
        this.onGood = true;
        this.check.emit();
      }
    }
}
