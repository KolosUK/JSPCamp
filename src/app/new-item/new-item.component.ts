import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-item-add',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  allowNewItem = false;
  itemCreationStatus = 'No item was created';
  serverName = 'Test task';
  itemCreated = false;

  constructor() {}

  ngOnInit(): void {}

  onCreateButtonClick() {
    this.itemCreated = true;
    this.itemCreationStatus = `Item was created. Name is ${this.serverName}`;
  }

  onUpdateItemName(event: MouseEvent) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
