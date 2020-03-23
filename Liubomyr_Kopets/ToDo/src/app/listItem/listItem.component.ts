import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-listitem',
  templateUrl: './listItem.component.html',
  styleUrls: ['./listItem.component.scss']
})
export class ListItemComponent {
  @Input() item: string;
  @Output() editItem = new EventEmitter<void>();
  @Output() deleteItem = new EventEmitter<void>();
  @Output() checkItem = new EventEmitter<void>();

  isCheck = false;
  itemDelete() {
    this.deleteItem.emit();
  }
  itemEdit() {
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
