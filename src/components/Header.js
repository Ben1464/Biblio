// src/components/Header.js
import React from 'react';
import '../styles/Header.css'; // Make sure to create this file for styles
import ThemeToggle from './ThemeToggle'; // Import ThemeToggle

function Header() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Bibliotech</h1>
        <ThemeToggle /> {/* Add the ThemeToggle button */}
        <nav className="header-nav">
          <ul className="nav-list">
            {/* <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#books" className="nav-link">Books</a></li>
            <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li> */}
            <li className="nav-item">
              <button onClick={scrollToTop} className="nav-link back-to-top-button">Back to Top</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
