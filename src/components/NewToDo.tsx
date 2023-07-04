import { useContext, useRef } from "react";
import { ToDosContext } from "../store/toDos-context";

import classes from "./NewTodo.module.css";

const NewToDo: React.FC = () => {
  const toDosCtx = useContext(ToDosContext);

  const toDoTextInputRef = useRef<HTMLInputElement>(null);
  const toDoDeadlineInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = toDoTextInputRef.current!.value;
    const enteredDeadline = toDoDeadlineInputRef.current!.value;

    if (
      enteredText.trim().length === 0 ||
      enteredDeadline.trim().length === 0
    ) {
      //throw an error
      return alert("To Do Text and To Do Deadline cannot be blank");
    }

    toDosCtx.addToDo(enteredText, enteredDeadline);

    toDoTextInputRef.current!.value = "";
    toDoDeadlineInputRef.current!.value = "";
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">To Do Text</label>
      <input type="text" id="text" ref={toDoTextInputRef} />
      <label htmlFor="deadline">To Do Deadline</label>
      <input type="date" id="deadline" ref={toDoDeadlineInputRef} />
      <button>Add To Do</button>
    </form>
  );
};

export default NewToDo;
