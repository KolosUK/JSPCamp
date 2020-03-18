import { Component } from '@angular/core';

@Component({
  selector: 'app-todolists',
  templateUrl: './todolists.component.html',
  styleUrls: ['./todolists.component.scss']
})
export class TodolistsComponent {

  title = 'todo';
  inputText: string;
  text: string;
  list: string[] = [];
  isEdit = false;
  btnAdd = 'Add';
  i: number;
  addToList() {
    if (!this.isEdit) {
      this.list.push(this.inputText) ;
      this.inputText = '';
    } else {
    this.list[this.i] = this.inputText;
    this.isEdit = false;
    this.inputText = '';
  }
}

  itemEdit(index: number) {
    this.inputText = this.list[index];
    this.isEdit = true;
    this.i = index;
  }
  itemDel(index: number) {
    this.list.splice(index, 1);
    this.itemCheck(index);
  }
  itemCheck(index: number) {
    if (this.isEdit && index === this.i) {
        this.inputText = '';
        this.isEdit = false;
    }
  }
}
