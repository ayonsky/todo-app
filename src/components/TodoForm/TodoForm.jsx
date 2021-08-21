import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const { editing } = props;

  const [task, setTask] = useState(editing ? editing.name : "");
  const taskInputRef = useRef(null);

  useEffect(() => {
    taskInputRef.current.focus();
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setTask(value);
  };

  const handleSubmit = () => {
    const { onSubmit } = props;

    onSubmit &&
      onSubmit({
        id: new Date().getTime(),
        name: task,
        isComplete: false,
      });

    setTask("");
  };

  return (
    <form
      className={"todo-form"}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
      }}
    >
      <input
        ref={taskInputRef}
        className={"todo-input"}
        type={"text"}
        placeholder={"Add a task!"}
        value={task}
        onChange={handleChange}
      />
      <button className={"todo-button"}> Add task</button>
    </form>
  );
}

export default TodoForm;
