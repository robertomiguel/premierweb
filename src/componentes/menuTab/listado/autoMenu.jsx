import React, {Component}   from 'react'
import DropDownMenu         from 'material-ui/DropDownMenu'
import MenuItem             from 'material-ui/MenuItem'

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
                    {id: 1, marca: "Fiat",         lista : Fiat},
                    {id: 2, marca: "Chevrolet",    lista : Chevrolet},
                    {id: 3, marca: "Ford",         lista : Ford},
                    {id: 4, marca: "Peugeot",      lista : Peugeot},
                    {id: 5, marca: "Renault",      lista : Renault},
                    {id: 6, marca: "Toyota",       lista : Toyota},
                    {id: 7, marca: "Volkswagen",   lista : Volkswagen},
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
                <DropDownMenu value={this.state.value}
                              onChange={this.seleccion}
                              className="dropDown">
                    {this.state.autos.map((marca, indice)=>
                        <MenuItem value={indice+1} key={indice} primaryText={marca.marca}/>
                    )}
                </DropDownMenu>
            </div>
        )
    }
}

export default AutoMenu