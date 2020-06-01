import React from 'react';
import './style.css'

const Pokedex = (props) => {
  return (
    <div className='pokedex-container'>
      <h1>The Ultimate Pokedex</h1>
      {props.children}
    </div>
  )
};

export default Pokedex;