const NewTodo: React.FC = () => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <label>To Do Text</label>
      <input type="text" id="text" />
      <label>To Do Deadline</label>
      <input type="date" />
      <button>Add To Do</button>
    </form>
  );
};

export default NewTodo;
