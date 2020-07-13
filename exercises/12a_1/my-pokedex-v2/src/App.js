import React from 'react';
import data from './data';
import Pokedex from './components/Pokedex/Pokedex';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>My Ultimate Pokedex</h1>
      <Pokedex pokemons={data} />
    </div>
  );
}

export default App;
