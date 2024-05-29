import React from 'react';
import Booklist from './components/Booklist'; // Adjust the path if your folder structure is different
import './App.css'; // If you have any styles specific to App.js

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Bibliotech</h1>
      </header>
      <main>
        <Booklist />
      </main>
    </div>
  );
}

export default App;
