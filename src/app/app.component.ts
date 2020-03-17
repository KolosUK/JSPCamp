import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks = [];
  taskName: string;

  onCreateButtonClick() {
    // this.tasks.push('this.taskName');
    this.tasks.push(this.taskName);
  }
}
