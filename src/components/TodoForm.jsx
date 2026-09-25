function TodoForm({ input, setInput, addTask }) {

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="todo-form">

      <input
        type="text"
        placeholder="Add your text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button onClick={addTask}>
        Add
      </button>

    </div>
  );
}

export default TodoForm;