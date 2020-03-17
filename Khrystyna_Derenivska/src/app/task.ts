export default class Task {
  id: number;
  name: string;
  isDone: boolean;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.isDone = false;
  }
}
