import React from "react";
import ToDos from "./components/ToDos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  const items = [
    new Todo("Learn React", "15-7-2023"),
    new Todo("Learn TypeScript", "15-7-2023"),
  ];

  return (
    <div className="App">
      <NewTodo />
      <ToDos itemList={items} />
    </div>
  );
}

export default App;
