import React, { Component } from 'react';
import Titulo from './componentes/cabeza'
import Lista from './componentes/lista'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Titulo/>
          <Lista/>
        </header>
      </div>
    );
  }
}

export default App;
