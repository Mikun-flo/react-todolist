import React from "react";
export default function TodoItem({
  todo,
  index,
  toggleComplete,
  deleteTodo,
  draggedIndex,
  handleDragStart,
  handleDragOver,
  handleDragEnd,
}) {
  const isDragging = draggedIndex === index;
  return (
    <div
      className={`todo-item ${todo.completed ? "completed" : ""} ${isDragging ? "dragging" : ""}`}
      draggable
      onDragStart={(e) => handleDragStart(e, index)}
      onDragOver={(e) => handleDragOver(e, index)}
      onDragEnd={handleDragEnd}
    >
      <label className="checkbox-container">
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        <span className="checkbox-circle">
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
            <path
              fill="none"
              stroke="#FFF"
              strokeWidth="2"
              d="M1 4.304L3.696 7l6-6"
            />
          </svg>
        </span>
      </label>
      <span className="todo-text">{todo.text}</span>
      <button
        className="delete-btn"
        onClick={() => deleteTodo(todo.id)}
        aria-label="Delete todo item"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fill="#494C6B"
            fillRule="evenodd"
            d="M16.97 0l.708.707L10.414 8.05l7.264 7.263-.707.708-7.264-7.264-7.263 7.264-.708-.708 7.264-7.263L.707.707.1414 0l7.263 7.264L16.97 0z"
          />
        </svg>
      </button>
    </div>
  );
}
