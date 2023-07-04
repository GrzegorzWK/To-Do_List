class ToDo {
  id: string;
  text: string;
  dateAdded: string;
  deadline: string;

  constructor(todoText: string, toDoDeadline: string) {
    this.text = todoText;
    this.deadline = toDoDeadline;

    this.id = new Date().toISOString() + Math.random();

    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    this.dateAdded =
      year +
      "-" +
      (month < 10 ? "0" : "") +
      month +
      "-" +
      (day < 10 ? "0" : "") +
      day;
  }
}

export default ToDo;
