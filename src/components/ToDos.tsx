import { useContext } from "react";
import ToDoItem from "./ToDoItem";
import { ToDosContext } from "../store/toDos-context";

const ToDos: React.FC = () => {
  const toDosCtx = useContext(ToDosContext);
  
  return (
    <ul>
      {toDosCtx.items.map((item) => (
        <ToDoItem
          key={item.id}
          id={item.id}
          text={item.text}
          dateAdded={item.dateAdded}
          deadline={item.deadline}
          onRemoveToDo={toDosCtx.removeToDo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default ToDos;
