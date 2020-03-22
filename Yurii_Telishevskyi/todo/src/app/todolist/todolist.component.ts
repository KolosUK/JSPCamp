import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {

  inputTask: string;
  list: string[] = [];
  indexEdit: number;
  isEdit = false;
  addToList() {
    if (!this.isEdit) {
      this.list.push(this.inputTask) ;
      this.inputTask = '';
    } else {
    this.list[this.indexEdit] = this.inputTask;
    this.isEdit = false;
    this.inputTask = '';
  }
}

  editItem(index: number) {
    this.inputTask = this.list[index];
    this.isEdit = true;
    this.indexEdit = index;
  }
  deleteItem(index: number) {
    this.list.splice(index, 1);
    this.checking(index);
  }
  checking(index: number) {
    if (this.isEdit && index === this.indexEdit) {
        this.inputTask = '';
        this.isEdit = false;
    }
  }
}
