import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";
import TodoFooter from "./components/TodoFooter.jsx";
import TodoFilters from "./components/TodoFilters.jsx";

const DEFAULT_TODOS = [
  { id: 1, text: "Complete online JavaScript course", completed: true },
  { id: 2, text: "Jog around the park 3x", completed: false },
  { id: 3, text: "10 minutes meditation", completed: false },
  { id: 4, text: "Read for 1 hour", completed: false },
  { id: 5, text: "Pick up groceries", completed: false },
  { id: 6, text: "Complete Todo App on Frontend Mentor", completed: false },
];
export default function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : DEFAULT_TODOS;
  });
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });
  const [filter, setFilter] = useState("all");
  const [draggedIndex, setDraggedIndex] = useState(null);
  // Sync todos to LocalStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  // Sync theme class on document.body
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  // Theme Toggle
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  // Add Todo
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };
  // Toggle Complete
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };
  // Delete Todo
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  // Clear Completed
  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };
  // Filter Todos
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // 'all'
  });
  const activeCount = todos.filter((todo) => !todo.completed).length;
  // Drag and Drop event handlers
  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
  };
  const handleDragOver = (e, overIndex) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === overIndex) return;
    const dragItem = filteredTodos[draggedIndex];
    // Find actual index locations in the master todos list
    const masterDragIndex = todos.findIndex((t) => t.id === dragItem.id);
    const targetItem = filteredTodos[overIndex];
    const masterTargetIndex = todos.findIndex((t) => t.id === targetItem.id);
    // Reorder master array
    const reordered = [...todos];
    reordered.splice(masterDragIndex, 1);
    reordered.splice(masterTargetIndex, 0, dragItem);
    setTodos(reordered);
    setDraggedIndex(overIndex);
  };
  const handleDragEnd = () => {
    setDraggedIndex(null);
  };
  return (
    <>
      <div className="header-bg" id="header-bg"></div>

      <main className="container">
        <Header theme={theme} toggleTheme={toggleTheme} />

        <TodoInput addTodo={addTodo} />

        <section className="todo-card">
          <TodoList
            filteredTodos={filteredTodos}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            draggedIndex={draggedIndex}
            handleDragStart={handleDragStart}
            handleDragOver={handleDragOver}
            handleDragEnd={handleDragEnd}
          />

          <TodoFooter
            activeCount={activeCount}
            filter={filter}
            setFilter={setFilter}
            clearCompleted={clearCompleted}
          />
        </section>
        {/* Mobile-only filters card */}
        <section className="mobile-filters-card mobile-only">
          <TodoFilters filter={filter} setFilter={setFilter} />
        </section>
        <p className="drag-hint">Drag and drop to reorder list</p>
      </main>
    </>
  );
}
