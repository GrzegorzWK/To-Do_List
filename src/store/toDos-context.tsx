import React, { useState } from "react";
import ToDo from "../models/todo";

type ToDosContextObj = {
  items: ToDo[];
  addToDo: (text: string, deadline: string) => void;
  removeToDo: (id: string) => void;
};

export const ToDosContext = React.createContext<ToDosContextObj>({
  items: [],
  addToDo: () => {},
  removeToDo: (id: string) => {},
});

const ToDosContextProvider: React.FC = (props) => {
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const addToDoHandler = (toDoText: string, toDoDeadline: string) => {
    const newToDo = new ToDo(toDoText, toDoDeadline);

    setToDos((prevToDos) => {
      return prevToDos.concat(newToDo);
    });
  };

  const removerToDoHandler = (toDoId: string) => {
    setToDos((prevToDos) => {
      return prevToDos.filter((toDo) => toDo.id !== toDoId);
    });
  };

  const contextValue: ToDosContextObj = {
    items: toDos,
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
