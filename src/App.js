import React, { Component } from 'react'

import Titulo   from './componentes/cabeza'
import Lista    from './componentes/lista'
import AutoMenu from './componentes/autoMenu'

class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            lista: {}
        }
    }

    listaSeleccion = (lista) => {
       this.setState({lista: lista})
       //console.log(lista)
    }

     render() {
       return (
          <div>
            <Titulo/>
            <AutoMenu seleccionar={this.listaSeleccion}/>
            <Lista lista={this.state.lista}/>
          </div>
       )
     }
}

export default App;
