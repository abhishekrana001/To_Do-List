import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

import "./App.css";

function App() {

  const [input, setInput] = useState("");

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    return savedTodos ? JSON.parse(savedTodos) : [];
  });


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  const addTask = () => {

    if (input.trim() === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };


  const deleteTask = (id) => {

    setTodos(
      todos.filter((todo) => todo.id !== id)
    );

  };


  const toggleTask = (id) => {

    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );

  };


  return (
    <div className="app">

      <div className="main-layout">

        {/* LEFT SIDE */}
        <Navbar />


        {/* RIGHT SIDE */}
        <main className="todo-container">

          <TodoForm
            input={input}
            setInput={setInput}
            addTask={addTask}
          />

          <TodoList
            todos={todos}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
          />

        </main>

      </div>

      <Footer />

    </div>
  );
}

export default App;