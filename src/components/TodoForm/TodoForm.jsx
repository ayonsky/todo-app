import React, { useState, useEffect, useRef } from "react";
import { Button, Form, Input } from "./TodoForm.style";

function TodoForm(props) {
  const { editing } = props;

  const [task, setTask] = useState(editing ? editing.name : "");
  const taskInputRef = useRef(null);

  // every time the component renders, it will set the focus to the input
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
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
      }}
    >
      <Input
        ref={taskInputRef}
        type={"text"}
        placeholder={"Add a task!"}
        value={task}
        onChange={handleChange}
        editing={editing}
      />
      <Button editing={editing}>
        {editing ? "Save" : "Add task"}
      </Button>
    </Form>
  );
}

export default TodoForm;
