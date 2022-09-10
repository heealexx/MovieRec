import './App.css';
import './Autocomplete.js';
import React from 'react';
import ComboBox from './Autocomplete.js';
import {ParallaxProvider, Parallax} from 'react-scroll-parallax';
import headerPic from './download1.png';

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

    <div>
      <header>
        <img src={headerPic} alt="computer pixel"/>
        <p>ah.</p>
      </header>
    
      <section>

      </section>
    </div>

  );
}

export default App;
