import React, { useState, useEffect } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import { Title } from "./TodoApp.style";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [editing, setEditing] = useState(false);

  // Logs every time the todo list is updated
  useEffect(() => {
    console.log("Todo list have been updated!");
  }, [todos]);

  const addTodo = (todo) => {
    if (!todo.id || !todo.name) return;

    const updatedTodoList = [todo, ...todos];
    setTodos(updatedTodoList);
  };

  const editTodo = (newTodo) => {
    if (!newTodo.id || !newTodo.name) return;

    const updatedTodoList = todos.map((todo) =>
      todo.id === editing.id ? newTodo : todo
    );
    setTodos(updatedTodoList);
    setEditing(false);
  };

  const toggleTodo = (id) => {
    if (!id) return;

    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    if (!id) return;

    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <Title>What's the plan for today</Title>
      <TodoForm onSubmit={addTodo} />
      {editing ? (
        <TodoForm editing={editing} onSubmit={editTodo} />
      ) : (
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          editing={setEditing}
        />
      )}
    </div>
  );
}

export default TodoApp;
