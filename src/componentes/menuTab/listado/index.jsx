import React, {Component} from 'react'
import Lista    from './lista2'
import AutoMenu from './autoMenu'
import './index.css'

class Listado extends Component {
	render() {
		return (
			<div className="listado" >
                <AutoMenu seleccionar={this.props.seleccion}/>
                <Lista  lista={this.props.lista}
                        marca={this.props.marca}/>
            </div>
		)
	}
}

export default Listado