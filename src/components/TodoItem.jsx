function TodoItem({ todo, deleteTask, toggleTask }) {
  return (
    <li className={todo.completed ? "checked" : ""}>

      <span onClick={() => toggleTask(todo.id)}>
        {todo.text}
      </span>

      <button onClick={() => deleteTask(todo.id)}>
        ×
      </button>

    </li>
  );
}

export default TodoItem;