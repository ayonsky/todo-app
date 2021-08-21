import React from "react";
import { BiTrash, BiEdit } from "react-icons/bi";

function Todo(props) {
  const { todo = {}, toggleTodo, removeTodo, editing } = props;
  const { id, name, isComplete = false } = todo;

  return (
    <div
      className={isComplete ? "todo-row complete" : "todo-row"}
      onClick={() => toggleTodo && toggleTodo(id)}
    >
      <div key={id}>{name}</div>
      <div className={"todo-icons"}>
        <BiTrash
          onClick={(e) => {
            e.stopPropagation();
            removeTodo && removeTodo(id);
          }}
        />
        <BiEdit
          onClick={(e) => {
            e.stopPropagation();
            editing && editing(todo);
          }}
        />
      </div>
    </div>
  );
}

export default Todo;
