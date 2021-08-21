import React from "react";
import { BiTrash, BiEdit } from "react-icons/bi";

function Todo(props) {
  const { todo = {}, toggleTodo, removeTodo, editing } = props;
  const { id, name, isComplete = false } = todo;

  return (
    <div className={isComplete ? "todo-row complete" : "todo-row"}>
      <div key={id} onClick={() => toggleTodo && toggleTodo(id)}>
        {name}
      </div>
      <div className={"todo-icons"}>
        <BiTrash onClick={() => removeTodo && removeTodo(id)} />
        <BiEdit onClick={() => editing && editing(todo)} />
      </div>
    </div>
  );
}

export default Todo;
