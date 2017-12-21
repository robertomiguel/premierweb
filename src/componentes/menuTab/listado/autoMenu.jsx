import React, {Component}   from 'react'
import DropDownMenu         from 'material-ui/DropDownMenu'
import MenuItem             from 'material-ui/MenuItem'
import {Glyphicon}          from 'react-bootstrap'

import Fiat         from './autos/fiat.json'
import Chevrolet    from './autos/chevrolet.json'
import Ford         from './autos/ford.json'
import Peugeot      from './autos/peugeot.json'
import Renault      from './autos/renault.json'
import Toyota       from './autos/toyota.json'
import Volkswagen   from './autos/volkswagen.json'

class AutoMenu extends Component{
    constructor(props){
        super(props)
            this.state = {
                value: 1,
                autos: [
                    {id: 1, marca: <img src="/img/fiat.png" alt="Premier"/>,         lista : Fiat},
                    {id: 2, marca: <img src="/img/chevrolet.png" alt="Premier"/>,    lista : Chevrolet},
                    {id: 3, marca: <img src="/img/ford.png" alt="Premier"/>,         lista : Ford},
                    {id: 4, marca: <img src="/img/peugeot.png" alt="Premier"/>,      lista : Peugeot},
                    {id: 5, marca: <img src="/img/renault.png" alt="Premier"/>,      lista : Renault},
                    {id: 6, marca: <img src="/img/toyota.png" alt="Premier"/>,       lista : Toyota},
                    {id: 7, marca: <img src="/img/volkswagen.png" alt="Premier"/>,   lista : Volkswagen},
                    ]
            }
    }

    componentDidMount(){
        this.seleccion(null, 0, 1)
    }

    seleccion = (obj, key, value) => {
        this.setState({value})
        let json = this.state.autos[key].lista
        let marca = this.state.autos[key].marca
        this.props.seleccionar(json, marca)
    }
    
    render() {
        return (
            <div>
                <div className="marcaSel">Seleccionar<br/>Marca: </div>
                <DropDownMenu value={this.state.value}
                              onChange={this.seleccion}
                              className="dropDown"
                              iconButton={<Glyphicon glyph="menu-down"/>}>
                    {this.state.autos.map((marca, indice)=>
                        <MenuItem className="listaAutos" value={indice+1} key={indice} primaryText={marca.marca}/>
                    )}
                </DropDownMenu>
            </div>
        )
    }
}

export default AutoMenu