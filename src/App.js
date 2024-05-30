import React from 'react';
import Booklist from './components/Booklist'; // Adjust the path if your folder structure is different
import './App.css'; // If you have any styles specific to App.js
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1 className='app-header'>Welcome to Bibliotech</h1> */}
      </header>
      <main>
        <Header />
        <Booklist />
        <Footer />
      </main>
    </div>
  );
}

export default App;
