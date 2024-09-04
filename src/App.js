import React, { useContext, useEffect } from 'react';
import Booklist from './components/Booklist'; 
import './App.css'; 
import Footer from './components/Footer';
import Header from './components/Header';
import { ThemeProvider, ThemeContext } from './context/ThemeContext'; 
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <SignedOut>
          <div className="login-prompt">
            {/* <h2>Please sign in to access free e-books.</h2> */}
            <SignInButton />
          </div>
        </SignedOut>
        <SignedIn>
          <Booklist />
          <Footer />
        </SignedIn>
      </main>
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
