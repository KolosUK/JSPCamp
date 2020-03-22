import { Component, OnInit } from '@angular/core';
import TodoItem from './todoItem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})

export class TodoComponent {
  isAllowedAdding = true;
  todoList: TodoItem[] = new Array();
  newTodoItem = '';
  constructor() {
    this.todoList.push(new TodoItem(0, 'Drink coffee'));
    this.todoList.push(new TodoItem(1, 'Sleep'));
    this.todoList.push(new TodoItem(2, 'Do Todo-list'));
  }

  updateInput(event: Event) {
    if ((<HTMLInputElement>event.target).value === '') {
      this.isAllowedAdding = true;
    } else {
      this.isAllowedAdding = false;
    }
  }

  addNewTodoItem(newTodoLabel) {
    this.todoList.push(new TodoItem(this.todoList.length, newTodoLabel));
    this.newTodoItem = '';
  }

  changeDoneStatus(id: number) {
    this.todoList.forEach((el) => {
      if (el.id === id ) {
      el.isDone = !el.isDone;
      }
    });
  }

  deleteTodo(id: number) {
    this.todoList = this.todoList.filter(el => el.id !== id);
  }

  editTodo(id: number, newMessage: string) {
    this.todoList.forEach((el) => {
      if (el.id === id ) {
        el.label = newMessage;
      }
    });
  }
}
