import { useRef } from "react";

const NewToDo: React.FC = () => {
  const toDoTextInputRef = useRef<HTMLInputElement>(null);
  const toDoDeadlineInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = toDoTextInputRef.current!.value;
    const enteredDeadline = toDoDeadlineInputRef.current!.value;

    console.log(enteredText, enteredDeadline);

    toDoTextInputRef.current!.value = "";
    toDoDeadlineInputRef.current!.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">To Do Text</label>
      <input type="text" id="text" ref={toDoTextInputRef} />
      <label htmlFor="deadline">To Do Deadline</label>
      <input type="date" id="deadline" ref={toDoDeadlineInputRef} />
      <button>Add To Do</button>
    </form>
  );
};

export default NewToDo;
