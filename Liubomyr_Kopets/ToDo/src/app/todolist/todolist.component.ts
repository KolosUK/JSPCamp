import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {

  title = 'todo';
  inputText: string;
  text: string;
  list: string[] = [];
  isEdit = false;
  indexEdit: number;
  addToList() {
    if (!this.isEdit) {
      this.list.push(this.inputText) ;
      this.inputText = '';
    } else {
    this.list[this.indexEdit] = this.inputText;
    this.isEdit = false;
    this.inputText = '';
  }
}

  itemEdit(index: number) {
    this.inputText = this.list[index];
    this.isEdit = true;
    this.indexEdit = index;
  }
  itemDel(index: number) {
    this.list.splice(index, 1);
    this.itemCheck(index);
  }
  itemCheck(index: number) {
    if (this.isEdit && index === this.indexEdit) {
        this.inputText = '';
        this.isEdit = false;
    }
  }
}
