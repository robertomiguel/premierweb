import React, { Component } from 'react'

import Titulo   from './componentes/cabeza'
import Lista    from './componentes/lista'
import AutoMenu from './componentes/autoMenu'

class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            lista: {},
            marca: {}
        }
    }

    listaSeleccion = (lista, marca) => {
       this.setState({lista: lista, marca: marca})
       //console.log(lista)
    }

     render() {
       return (
          <div>
            <Titulo/>
            <AutoMenu seleccionar={this.listaSeleccion}/>
            <Lista  lista={this.state.lista}
                    marca={this.state.marca}/>
          </div>
       )
     }
}

export default App;
