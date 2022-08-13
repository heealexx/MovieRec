import logo from './icons8-popcorn-100.png';
import './App.css';
import './Autocomplete.js';
import React from 'react';
import ComboBox from './Autocomplete.js';

function App() {

  const [movies, setMovies] = React.useState([{}])

  React.useEffect(() => {
    fetch("/", {method:'GET'}).then(
      res => {
        res.json()
        console.log(res)
      }
    ).then(
      data => {
        setMovies(data)
        console.log(data)
      }
    )
  }, [])

  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Got a favorite movie?
          <ComboBox/>
        </p>
      </header>
    </div>
    
  );
}

export default App;
