import { useState, useEffect } from "react";

import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? {...todo, completed: !todo.completed}: todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id)
  );
  }
  return (
    <div className="app-container">
      <Header />
      <TodoForm setTodos={setTodos}/>
      <TodoList 
      todos={todos}
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;