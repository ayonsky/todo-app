import React from "react";
import Todo from "../Todo/Todo";

function TodoList(props) {
  const { todos = [], toggleTodo, removeTodo, editing } = props;

  return todos.map((todo, index) => (
    <Todo
      key={index}
      todo={todo}
      toggleTodo={toggleTodo}
      removeTodo={removeTodo}
      editing={editing}
    />
  ));
}

export default TodoList;
