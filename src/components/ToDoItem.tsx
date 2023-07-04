import classes from "./ToDoItem.module.css";

const ToDoItem: React.FC<{
  id: string;
  text: string;
  dateAdded: string;
  deadline: string;
  onRemoveToDo: () => void;
}> = (props) => {
  return (
    <li onClick={props.onRemoveToDo} className={classes.item}>
      <p>Task title:</p>
      <p>{props.text}</p>
      <p>Date Added: {props.dateAdded}</p>
      <p>Deadline: {props.deadline}</p>
    </li>
  );
};

export default ToDoItem;
