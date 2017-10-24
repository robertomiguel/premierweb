import React, {Component} from 'react'

import Fiat         from '../../autos/fiat.json'
import Chevrolet    from '../../autos/chevrolet.json'
import Ford         from '../../autos/ford.json'
import Peugeot      from '../../autos/peugeot.json'
import Renault      from '../../autos/renault.json'
import Toyota       from '../../autos/toyota.json'
import Volkswagen   from '../../autos/volkswagen.json'

class autoMenu extends Component{
    constructor(props){
        super(props)
            this.state = {
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

    seleccion = (marca) => {
        let json = this.state.autos.filter(f=>f.marca===marca)
        this.props.seleccionar(json)
    }
    
    render() {
        return(
            <div>
                <ul>
                    {this.state.autos.map(marca=>
                        <li key={marca.id} onClick={this.seleccion(marca.marca)}>{marca.marca}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default autoMenu