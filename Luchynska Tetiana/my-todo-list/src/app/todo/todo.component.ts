import { Component, OnInit } from '@angular/core';
import TodoItem from './todoItem'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  allowAddingItem = true;
  
 // todo = [{id: 0, label: "Drink coffee", done: false, editing: false},{id: 1, label: "Sleep", done: false, editing: false}, {id: 2, label: "Do TODO list", done: false, editing: false}];
  todo: TodoItem[] = new Array();
  nextId = 3;
  constructor() { 
    this.todo.push(new TodoItem(0, "Drink coffee"));
    this.todo.push(new TodoItem(1, "Sleep"));
    this.todo.push(new TodoItem(2, "Do Todo-list"));
  }

  ngOnInit(): void {

  }

  onUpdateInput(event: Event){
    if((<HTMLInputElement>event.target).value==='') {
      this.allowAddingItem = true;
    }else {
      this.allowAddingItem = false;
    }
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
    this.todo.push(new TodoItem(this.nextId, newTodoLabel));
    this.nextId++;
  }
}
