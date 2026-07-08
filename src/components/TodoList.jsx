import React from "react";
import TodoItem from "./TodoItem";
export default function TodoList({
  filteredTodos,
  toggleComplete,
  deleteTodo,
  draggedIndex,
  handleDragStart,
  handleDragOver,
  handleDragEnd,
}) {
  return (
    <div className="todo-list" role="list">
      {filteredTodos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          index={index}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          draggedIndex={draggedIndex}
          handleDragStart={handleDragStart}
          handleDragOver={handleDragOver}
          handleDragEnd={handleDragEnd}
        />
      ))}
    </div>
  );
}
