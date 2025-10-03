import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import "../styles/Header.css";

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="app-header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">🧠</span>
          <h1>SmartPlanner</h1>
        </div>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {isDarkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
};

export default Header;
