import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() public inputValue: string;
  @Output() inputEvent = new EventEmitter<string>();
  onTaskAdd(value: string) {
    this.inputEvent.emit(value);
  }

  ngOnInit() {
    this.inputValue = '';
  }

}
