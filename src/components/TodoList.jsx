import TodoItem from "../components/TodoItem.jsx";

function TodoList({ todos, deleteTask, toggleTask }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;