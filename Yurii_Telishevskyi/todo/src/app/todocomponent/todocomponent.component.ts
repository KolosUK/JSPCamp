import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todocomponent',
  templateUrl: './todocomponent.component.html',
  styleUrls: ['./todocomponent.component.scss']
})
export class TodocomponentComponent {
  @Input() items: string;
  @Output() edited = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() check = new EventEmitter();

  isGood = false;

  isDeleted() {
    this.deleted.emit();
  }

  isEdited() {
    this.edited.emit();
  }

  checked() {
    if (this.isGood) {
      this.isGood = false;
    } else {
        this.isGood = true;
        this.check.emit();
      }
    }
}

