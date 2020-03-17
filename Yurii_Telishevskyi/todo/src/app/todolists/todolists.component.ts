import { Component } from '@angular/core';

@Component({
  selector: 'app-todolists',
  templateUrl: './todolists.component.html',
  styleUrls: ['./todolists.component.scss']
})
export class TodolistsComponent {

  title = 'todo';
  todo: string;
  text: string;
  list: string[] = [];
  btnAdd = 'Add';
  i: number;
  addToList() {
    if (this.btnAdd === 'Add') {
      this.list.push(this.todo) ;
      this.todo = '';
    } else {
    this.list[this.i] = this.todo;
    this.btnAdd = 'Add';
    this.todo = '';
  }
}

  edited(index: number) {
    this.todo = this.list[index];
    this.btnAdd = 'Save';
    this.i = index;
  }
  deleted(index: number) {
    this.list.splice(index, 1);
    if ( this.btnAdd === 'Save' && index === this.i) {
      this.todo = '';
      this.btnAdd = 'Add';
    }
  }
  checking(index: number) {
    if (this.btnAdd === 'Save' && index === this.i) {
        this.todo = '';
        this.btnAdd = 'Add';
    }
  }
}
