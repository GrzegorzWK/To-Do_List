import classes from "./ToDoItem.module.css";

const ToDoItem: React.FC<{
  id: string;
  text: string;
  dateAdded: string;
  deadline: string;
  onRemoveToDo: () => void;
}> = (props) => {
  const timeRemainingCalculation = (dateAdded: string, deadline: string) => {
    return (
      (new Date(deadline).getTime() - new Date(dateAdded).getTime()) /
      (1000 * 3600 * 24)
    );
  };

  const timeRemaining: number = timeRemainingCalculation(
    props.dateAdded,
    props.deadline
  );

  return (
    <li onClick={props.onRemoveToDo} className={classes.item}>
      <p>Task title:</p>
      <p>
        <span className={classes.value}>{props.text}</span>
      </p>
      <p>
        Date Added: <span className={classes.value}>{props.dateAdded}</span>
      </p>
      <p>
        Days remaining:{" "}
        <span
          className={timeRemaining > 0 ? classes.value : classes.negativeValue}
        >
          {timeRemaining}
        </span>
      </p>
      <p>
        Deadline: <span className={classes.value}>{props.deadline}</span>
      </p>
    </li>
  );
};

export default ToDoItem;
