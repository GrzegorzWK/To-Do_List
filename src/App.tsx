import NewToDo from "./components/NewToDo";
import ToDos from "./components/ToDos";

import ToDosContextProvider from "./store/toDos-context";

function App() {
  return (
    <ToDosContextProvider>
      <NewToDo />
      <ToDos />
    </ToDosContextProvider>
  );
}

export default App;
