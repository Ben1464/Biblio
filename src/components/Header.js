import React from 'react';
import '../styles/Header.css'; // Make sure to create this file for styles

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Bibliotech</h1>
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
            {/* <li className="nav-item"><a href="#books" className="nav-link">Books</a></li> */}
            <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
