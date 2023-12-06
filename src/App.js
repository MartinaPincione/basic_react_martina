import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Jokes from './components/Jokes'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        </p>
        <Jokes /> {}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
