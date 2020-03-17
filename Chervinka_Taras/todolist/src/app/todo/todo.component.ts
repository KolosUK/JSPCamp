import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
disabled:boolean;
tasks:Task[];
taskName:string;
index:number;
idForTask:number;

@Output() edited = new EventEmitter();
isEdited(){
  this.edited.emit()
}
onEdit(){
this.taskName
}
  constructor() {
    // setTimeout(()=>{
    //   this.disabled = false;
    // },2000);
   }
  
  ngOnInit() {
    this.idForTask = 2;
    this.taskName = '';
    this.tasks = []
  }

  addTask(): void {
  if(this.taskName.trim().length===0) {
    this.disabled = false
  return;
  }
    this.tasks.push({
      id:this.idForTask,
      name:this.taskName,
      completed:false,
      editing:false
    })
    this.idForTask++;
    this.taskName = '';
  }
  editTask(task:Task){
    task.editing=true;
  }

  doneEdit(task:Task){
    task.editing = false;
  }

  deleteTask(id:number):void{
  this.tasks = this.tasks.filter(task=>task.id !== id);
  }

}
interface Task {
  id:number,
  name:string,
  completed:boolean,
  editing:boolean
}
