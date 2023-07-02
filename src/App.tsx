import React from "react";
import ToDos from "./components/ToDos";
import ToDo from "./models/todo";
import NewToDo from "./components/NewToDo";

function App() {
  const items = [
    new ToDo("Learn React", "15-7-2023"),
    new ToDo("Learn TypeScript", "15-7-2023"),
  ];

  return (
    <div className="App">
      <NewToDo />
      <ToDos itemList={items} />
    </div>
  );
}

export default App;
