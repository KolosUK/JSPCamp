import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-itemcomp',
  templateUrl: './itemcomp.component.html',
  styleUrls: ['./itemcomp.component.scss']
})
export class ItemcompComponent implements OnInit {
  @Input() item: string;
  @Output() editItem = new EventEmitter<void>();
  @Output() delItem = new EventEmitter<void>();
  @Output() checkItem = new EventEmitter<void>();

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

  constructor() { }

  ngOnInit(): void {
  }

}
