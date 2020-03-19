import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-to-add',
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
