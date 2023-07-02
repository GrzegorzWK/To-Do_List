import Todo from "../models/todo";
import ToDoItem from "./ToDoItem";

const ToDos: React.FC<{ itemList: Todo[] }> = (props) => {
  return (
    <ul>
      {props.itemList.map((item) => (
        <ToDoItem key={item.id} text={item.text} dateAdded={item.dateAdded}/>
      ))}
    </ul>
  );
};

export default ToDos;
