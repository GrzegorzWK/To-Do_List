const ToDoItem: React.FC<{ text: string; dateAdded: string }> = (props) => {
  return (
    <li>
      <p>{props.text}</p>
      <p>Date Added: {props.dateAdded}</p>
    </li>
  );
};

export default ToDoItem;
