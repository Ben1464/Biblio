import React from 'react';
import '../styles/Header.css'; // Ensure this file exists for styles
import ThemeToggle from './ThemeToggle'; // Import ThemeToggle
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function Header() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Biblio</h1>
        <ThemeToggle /> {/* Theme toggle button */}
        <nav className="header-nav">
          <ul className="nav-list">
            {/* <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#books" className="nav-link">Books</a></li>
            <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li> */}
            <li className="nav-item">
              <button onClick={scrollToTop} className="nav-link back-to-top-button">Back to Top</button>
            </li>
            <li className="nav-item">
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
