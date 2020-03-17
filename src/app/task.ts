export default class Task {
  id: number;
  name: string;
  isDone: boolean;

  constructor(name: string) {
    this.name = name;
    this.id = new Date().getTime();
    this.isDone = false;
  }
}
