export default class TodoItem {
    id: number;
    label: string;
    done: boolean;
    editing: boolean;
  
    constructor(id: number, label: string) {
      this.id = id;
      this.label = label;
      this.done = false;
      this.editing = false;
    }
  }