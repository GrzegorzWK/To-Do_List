import { PropsWithChildren } from "react";
import React, { useState } from "react";
import ToDo from "../models/todo";

type ToDosContextObj = {
  items: ToDo[];
  addToDo: (text: string, deadline: string) => void;
  removeToDo: (id: string) => void;
};

export const ToDosContext = React.createContext<ToDosContextObj>({
  items: [],
  addToDo: (text: string, deadline: string) => {},
  removeToDo: (id: string) => {},
});

const ToDosContextProvider: React.FC<PropsWithChildren> = (props) => {
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const addToDoHandler = (toDoText: string, toDoDeadline: string) => {
    const newToDo = new ToDo(toDoText, toDoDeadline);

    // push to local storage
    setToDos((prevToDos) => {
      return prevToDos.concat(newToDo);
    });
  };

  //filter from local storage
  const removerToDoHandler = (toDoId: string) => {
    setToDos((prevToDos) => {
      return prevToDos.filter((toDo) => toDo.id !== toDoId);
    });
  };

  //toDos from local storage
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
