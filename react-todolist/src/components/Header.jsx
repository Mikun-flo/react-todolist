import React from "react";

export default function Header({ theme, toggleTheme }) {
  return (
    <header className="app-header">
      <h1 className="logo">TODO</h1>
      <button id="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === "dark" ? (
          /* Sun Icon (shown in dark theme to switch to light) */
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            id="sun-icon"
            viewBox="0 0 26 26"
          >
            <path
              fill="#FFF"
              fillRule="evenodd"
              d="M13 21a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1zm-5.657-2.343a1 1 0 0 1 0 1.414l-2.121 2.121a1 1 0 0 1-1.414-1.414l2.12-2.121a1 1 0 0 1 1.415 0zm12.728 0a1 1 0 0 1 1.414 0l2.121 2.121a1 1 0 0 1-1.414 1.414l-2.121-2.12a1 1 0 0 1 0-1.415zM13 8a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm12 4a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2h3zM4 12a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2h3zm18.364-5.657a1 1 0 0 1 0 1.414l-2.12 2.121a1 1 0 0 1-1.415-1.414l2.121-2.121a1 1 0 0 1 1.414 0zM7.343 6.343a1 1 0 0 1 1.414 0l2.121 2.121a1 1 0 0 1-1.414 1.414l-2.121-2.12a1 1 0 0 1 0-1.415zM13 0a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1z"
            />
          </svg>
        ) : (
          /* Moon Icon (shown in light theme to switch to dark) */
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            id="moon-icon"
            viewBox="0 0 26 26"
          >
            <path
              fill="#FFF"
              fillRule="evenodd"
              d="M13 0c.81 0 1.603.074 2.373.216a1 1 0 0 1 .593 1.632 9.005 9.005 0 0 0 12.162 12.162 1 1 0 0 1 1.63 1.627A12.992 12.992 0 0 1 13 26a13 13 0 1 1 0-26z"
            />
          </svg>
        )}
      </button>
    </header>
  );
}
