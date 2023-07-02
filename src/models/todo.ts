class Todo {
  id: string;
  text: string;
  dateAdded: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();

    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    this.dateAdded = day + "-" + month + "-" + year;
  }
}

export default Todo;
