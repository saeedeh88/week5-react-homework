import React from 'react';
import './App.css';
import Weather from "./Weather"
export default function App() {
  return (
    <div className="App">
    <div className="container">
      
      <Weather defaultCity="Tehran"/>
      <footer>
        This project was coded by Saeedeh Safaei and is{" "}
        <a
          href="https://github.com/saeedeh88/week5-react-homework"
          rel="noreferrer"
          target="_blank"
        >
          open-sourced on GitHub.
        </a>
      </footer>
      </div>
    </div>
  );
}

