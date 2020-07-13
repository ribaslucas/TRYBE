import React, { Component } from 'react';
import MyList from './MyList';

class App extends Component {
  render() {
    return (
      <div className='main'>
        <h1>Minha Lista de Componentes</h1>
        <MyList>
          <li>SUPIMPA</li>
          SUPIMPA 2.0 - Melhor palavra!
          <button type="button" onClick={() => console.log('show')}>SHOW</button>
        </MyList>
      </div>
    )
  }
}
export default App;
