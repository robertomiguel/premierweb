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
        let listaId = marca.target.id.toString()
        let json = {}
        switch (listaId) {
            case '1':
                json = this.state.autos[ listaId - 1 ].lista
                break
            case '2':
                json = this.state.autos[ listaId - 1 ].lista
                break
            case '3':
                json = this.state.autos[ listaId - 1 ].lista
                break
            case '4':
                json = this.state.autos[ listaId - 1 ].lista
                break
            case '5':
                json = this.state.autos[ listaId - 1 ].lista
                break
            case '6':
                json = this.state.autos[ listaId - 1 ].lista
                break
            case '7':
                json = this.state.autos[ listaId - 1 ].lista
                break
            default:
                console.log('no hay coincidencia en lista menu autos')
                return
        }

        this.props.seleccionar(json)
    }
    
    render() {
        return(
            <div>
                <ul>
                    {this.state.autos.map(marca=>
                        <li id={marca.id} key={marca.id} onClick={this.seleccion.bind(this)}>{marca.marca}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default autoMenu