import React, { Component } from 'react'

import Titulo   from './componentes/cabeza'
import MenuTab  from './componentes/menuTab'

class App extends Component {

   render() {
     return (
        <div>
          <Titulo/>
          <MenuTab/>
        </div>
     )
   }
}

export default App;