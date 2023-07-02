const ToDoItem: React.FC<{
  id: string;
  text: string;
  dateAdded: string;
  deadline: string;
}> = (props) => {
  return (
    <li>
      <p>{props.id}</p>
      <p>{props.text}</p>
      <p>Date Added: {props.dateAdded}</p>
      <p>Deadline: {props.deadline}</p>
    </li>
  );
};

export default ToDoItem;
