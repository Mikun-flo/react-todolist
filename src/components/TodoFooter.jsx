import React from "react";
import TodoFilters from "./TodoFilters";
export default function TodoFooter({
  activeCount,
  filter,
  setFilter,
  clearCompleted,
}) {
  return (
    <div className="list-footer">
      <span id="items-left">
        {activeCount} item{activeCount !== 1 ? "s" : ""} left
      </span>
      <div className="desktop-only">
        <TodoFilters filter={filter} setFilter={setFilter} />
      </div>
      <button className="action-btn" onClick={clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
}
