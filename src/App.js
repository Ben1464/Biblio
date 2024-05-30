// src/App.js
import React, { useContext, useEffect } from 'react';
import Booklist from './components/Booklist'; // Adjust the path if your folder structure is different
import './App.css'; // If you have any styles specific to App.js
import Footer from './components/Footer';
import Header from './components/Header';
import { ThemeProvider, ThemeContext } from './context/ThemeContext'; // Adjust the path if necessary

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <Header />
      <main>
        <Booklist />
      </main>
      <Footer />
    </div>
  );
}

export default function AppWithProvider() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
