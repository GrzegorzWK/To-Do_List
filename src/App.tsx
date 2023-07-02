import React from "react";
import ToDos from "./components/ToDos";
import Todo from "./models/todo";

function App() {
  const items = [new Todo("Learn React"), new Todo("Learn TypeScript")];

  return (
    <div className="App">
      <ToDos itemList={items} />
    </div>
  );
}

export default App;
