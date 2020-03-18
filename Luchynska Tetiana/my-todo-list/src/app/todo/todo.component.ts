import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  allowAddingItem = false;
  todo = [{id: 0, label: "Drink coffee", done: false, editing: false},{id: 1, label: "Sleep", done: false, editing: false}, {id: 2, label: "Do TODO list", done: false, editing: false}];
  nextId = 3;
  constructor() { }

  ngOnInit(): void {

  }

  onUpdateInput(event: Event){
    if((<HTMLInputElement>event.target).value==='') this.allowAddingItem = false;
    else this.allowAddingItem = true;
  }

  onDone(id: number){
    this.todo.forEach((el)=>{
      if(el.id ==id ){ 
      el.done = !el.done;
      }
    });
  }

  deleteTodo(id: number){
    this.todo = this.todo.filter(el=> el.id !== id);
  }

  editTodo(id: number){
    this.todo.forEach((el)=>{
      if(el.id ==id ) 
      el.editing = true;
    });
  }

  doneEdit(id: number, event: Event){
    this.todo.forEach((el)=>{
      if(el.id ==id ) {
        el.label= (<HTMLInputElement>event.target).value;
        el.editing = false;
      }
    });
    
  }

  addTodo(newTodoLabel){

    let newTodoItem = {
      id:this.nextId,
      label: newTodoLabel,
      done: false, 
      editing: false
    };
    this.todo.push(newTodoItem);
    this.nextId++;
  }
}
