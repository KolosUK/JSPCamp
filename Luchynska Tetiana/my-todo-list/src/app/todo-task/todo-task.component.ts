import { Component, Input, Output, EventEmitter} from '@angular/core';
import TodoItem from '../todo-list/todoItem';


@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent {
    @Input() todoItem: TodoItem;
    @Output() isEditedTodo = new EventEmitter<string>();
    @Output() isChangedDone = new EventEmitter<void>();
    @Output() isDeletedTodo = new EventEmitter<void>();

    editTodo() {
      this.todoItem.isEditing = true;
    }

    finishEditing(event: Event) {
      this.isEditedTodo.emit((event.target as HTMLInputElement).value);
      this.todoItem.isEditing = false;
    }

    changeDoneStatus() {
       this.isChangedDone.emit();
    }

    deleteTodo() {
      this.isDeletedTodo.emit();
    }
}
