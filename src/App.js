import './App.css';
import './Autocomplete.js';
import React from 'react';
import ComboBox from './Autocomplete.js';
import {ParallaxProvider, Parallax} from 'react-scroll-parallax';

import headerPic from './download1.png';
import songPic from './gemini-rights.webp';

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
        <p>a.h</p>
      </header>
    
      <section className='song'>
        <h1>
          song of the day
        </h1>
        <img src={songPic} alt="gemini rights album cover"/>
        <p>
          buttons - steve lacy
        </p>
      </section>
    </div>

  );
}

export default App;
