import React, { useState } from "react";

const TodoForm = () => {
    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
console.log(value);
    }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is task to day?"
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">Add task</button>
    </form>
  );
};

export default TodoForm;
