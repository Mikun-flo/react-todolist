import React from "react";
import sunIcon from "../assets/icon-sun.svg";
import moonIcon from "../assets/icon-moon.svg";

export default function Header({ theme, toggleTheme }) {
  return (
    <header className="app-header">
      <h1 className="logo">TODO</h1>
      <button id="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme"> 
        <img
          src={theme === "dark" ? sunIcon : moonIcon}
          alt={theme === "dark" ? "Sun icon" : "Moon icon"}
          width="26"
          height="26"
        />
      </button>
    </header>
  );
}
