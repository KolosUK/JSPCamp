import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-item-add',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  itemCreated = false;

  constructor() {}

  ngOnInit(): void {}

  onCreateButtonClick() {
    this.itemCreated = true;
  }
}
