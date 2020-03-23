import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {

  title = 'todo';
  inputText: string;
  itemsList: string[] = [];
  isEdit = false;
  indexEdit: number;
  addOrSaveToList() {
    if (!this.isEdit) {
      this.itemsList.push(this.inputText) ;
      this.inputText = '';
    } else {
    this.itemsList[this.indexEdit] = this.inputText;
    this.isEdit = false;
    this.inputText = '';
    }
  }
  itemEdit(index: number) {
    this.inputText = this.itemsList[index];
    this.isEdit = true;
    this.indexEdit = index;
  }
  itemDelete(index: number) {
    this.itemsList.splice(index, 1);
    this.itemCheck(index);
  }
  itemCheck(index: number) {
    if (this.isEdit && index === this.indexEdit) {
        this.inputText = '';
        this.isEdit = false;
    }
  }
}
