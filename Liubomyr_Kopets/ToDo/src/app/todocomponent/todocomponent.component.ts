import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todocomponent',
  templateUrl: './todocomponent.component.html',
  styleUrls: ['./todocomponent.component.scss']
})
export class TodocomponentComponent {
  @Input() items: string;
  @Output() editItem = new EventEmitter();
  @Output() delItem = new EventEmitter();
  @Output() checkItem = new EventEmitter();

  isCheck = false;

  isDeleted() {
    this.delItem.emit();
  }

  isEdited() {
    this.editItem.emit();
  }

  checked() {
    if (this.isCheck) {
      this.isCheck = false;
    } else {
        this.isCheck = true;
        this.checkItem.emit();
      }
    }
}

