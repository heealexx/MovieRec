import logo from './logo.svg';
import './App.css';
import movies from './movies.csv';
import React from 'react';
import Papa from 'papaparse';

function App() {

  const [movies, setMovies] = React.useState([]);

  const papaConfig = {
    complete : (results, file) => {
      console.log("Done", results, file);
    },
    download : true,
    error : (error, file) => {
      console.log("error")
    },
  };

  Papa.parse(movies, papaConfig);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Got a favorite movie?
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
