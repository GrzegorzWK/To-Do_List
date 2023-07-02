import Todo from "../models/todo";

const ToDos: React.FC<{ itemList: Todo[] }> = (props) => {
  return (
    <ul>
      {props.itemList.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default ToDos;
