import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import "./Header.css";

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="app-header">
      <div className="header-content">
        <div className="logo-section">
          <div className="logo">
            <span className="logo-icon">🧠</span>
            <h1>AI SmartPlanner</h1>
          </div>
          <p className="tagline">Your intelligent task manager</p>
        </div>

        <div className="header-actions">
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <span className="theme-icon">{isDarkMode ? "☀️" : "🌙"}</span>
            <span className="theme-text">
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
