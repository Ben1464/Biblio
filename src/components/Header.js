import React, { useEffect, useState } from 'react';
import '../styles/Header.css';
import ThemeToggle from './ThemeToggle';

const images = [
  'url("/assets/images/book reading 1.avif")',
  'url("/assets/images/book reading 2.avif")',
  'url("/assets/images/book reading 3.avif")',
  'url("/assets/images/book reading 4.avif")',
  'url("/assets/images/book reading 5.avif")',
  // Add more image URLs here
];

function Header() {
  const [backgroundImage, setBackgroundImage] = useState(images[0]);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      setBackgroundImage(images[currentIndex]);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header" style={{ backgroundImage: backgroundImage }}>
      <div className="header-container">
        <h1 className="header-title">Biblio</h1>
        <ThemeToggle />
        <nav className="header-nav">
          <ul className="nav-list">
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
