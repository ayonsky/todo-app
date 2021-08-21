import React from "react";
import { BiTrash, BiEdit } from "react-icons/bi";
import { IconsDiv, TodoRow } from "./Todo.style";

function Todo(props) {
  const { todo = {}, toggleTodo, removeTodo, editing } = props;
  const { id, name, isComplete = false } = todo;

  return (
    <TodoRow
      onClick={() => toggleTodo && toggleTodo(id)}
      isComplete={isComplete}
    >
      <div key={id}>{name}</div>
      <IconsDiv>
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
      </IconsDiv>
    </TodoRow>
  );
}

export default Todo;
