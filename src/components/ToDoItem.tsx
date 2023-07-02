const ToDoItem: React.FC<{
  id: string;
  text: string;
  dateAdded: string;
  deadline: string;
  onRemoveToDo: () => void;
}> = (props) => {
  return (
    <li onClick={props.onRemoveToDo}>
      <p>{props.id}</p>
      <p>{props.text}</p>
      <p>Date Added: {props.dateAdded}</p>
      <p>Deadline: {props.deadline}</p>
    </li>
  );
};

export default ToDoItem;
