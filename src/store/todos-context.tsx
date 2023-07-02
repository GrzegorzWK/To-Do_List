import React, { useState } from "react";
import ToDo from "../models/todo";

type ToDosContextObj = {
  item: ToDo[];
  addToDo: (text: string, deadline: string) => void;
  removeToDo: (id: string) => void;
};

export const ToDosContext = React.createContext<ToDosContextObj>({
  item: [],
  addToDo: () => {},
  removeToDo: (id: string) => {},
});

const ToDosContextProvider: React.FC = (props) => {
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const addToDoHandler = () => {};
  const removerToDoHandler = () => {};

  const contextValue: ToDosContextObj = {
    item: toDos,
    addToDo: addToDoHandler,
    removeToDo: removerToDoHandler,
  };

  return (
    <ToDosContext.Provider value={contextValue}>
      {props.children}
    </ToDosContext.Provider>
  );
};

export default ToDosContextProvider;
