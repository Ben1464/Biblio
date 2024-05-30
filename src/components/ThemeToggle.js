// src/components/ThemeToggle.js
import '../styles/ThemeToggle.css';
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'; // Adjust the path if necessary
import '../styles/ThemeToggle.css'; // Ensure you create this CSS file for styles
import lightModeIcon from '../assets/icons/brightness.png';
import darkModeIcon from '../assets/icons/dark-mode.png';
const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  
    return (
      <button onClick={toggleTheme} className="theme-toggle">
        <img
          src={theme === 'light' ? darkModeIcon : lightModeIcon}
          alt="Toggle theme"
          className="theme-toggle-icon"
        />
      </button>
    );
  };
  
  export default ThemeToggle;
