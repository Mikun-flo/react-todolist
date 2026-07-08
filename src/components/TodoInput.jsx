import React, { useState } from "react";
export default function TodoInput({ addTodo }) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (trimmed) {
      addTodo(trimmed);
      setText("");
    }
  };
  return (
    <section className="input-section">
      <form onSubmit={handleSubmit} className="new-todo-form">
        <div className="checkbox-container">
          <button
            type="submit"
            className="hidden"
            aria-label="Submit todo"
          ></button>
          <div className="checkbox-circle-static"></div>
        </div>
        <input
          type="text"
          id="new-todo-input"
          placeholder="Create a new todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          aria-label="Create a new todo"
        />
      </form>
    </section>
  );
}
