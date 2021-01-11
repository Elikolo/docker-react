import React from 'react';
import logo from './logo.svg';
import aime from '../public/images/aime2';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi there
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src={aime} alt="aime" />
      </header>
    </div>
  );
}

export default App;
