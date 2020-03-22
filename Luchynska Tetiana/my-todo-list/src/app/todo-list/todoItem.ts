export default class TodoItem {
    id: number;
    label: string;
    isDone: boolean;
    isEditing: boolean;
  
    constructor(id: number, label: string) {
      this.id = id;
      this.label = label;
      this.isDone = false;
      this.isEditing = false;
    }
  }