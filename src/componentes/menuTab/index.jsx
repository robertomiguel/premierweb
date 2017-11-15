import React, {Component} from 'react';
import { Tabs, Tab }from 'material-ui/Tabs';
import { connect } 	from 'react-redux'
import acciones 	from '../../acciones'

import Lista    from '../lista'
import AutoMenu from '../autoMenu'

import './index.css'

import Preguntas from './prx.jsx'

class MenuTab extends Component {
	constructor(props){
		super(props)
		this.state = {
			seleccionado : this.props.selMenu.selMenu,
			lista: {},
            marca: {},
		}
	}

	componentWillReceiveProps(a) {
	    this.setState({
	      seleccionado: a.selMenu.selMenu,
	    })
  	}

	handleChange = (seleccionado) => {
		this.props.dispatch(
            acciones.selMenu({
                menu: seleccionado,
                })
        );
	}

    listaSeleccion = (lista, marca) => {
       this.setState({lista: lista, marca: marca})
    }

	render(){

		let contenido = (menu) => {
            return {
                "principal": "Principal",
                "vehiculos":    <div>
                                    <AutoMenu seleccionar={this.listaSeleccion}/>
                                    <Lista  lista={this.state.lista}
                                            marca={this.state.marca}/>
                                </div>,
                "maquinas": "Maquinaria",
                "laempresa": "La empresa",
                "promo": "Promociones",
                "preguntas": <Preguntas/>,
            }[menu];
        }

		return(
			<div>
				<Tabs
		        	value={this.state.seleccionado}
		        	onChange={this.handleChange}
		        	style={{boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'}}
		        	className="menuTab">
			        <Tab label="Inicio" 	 		  value="principal" />
			        <Tab label="Vehículos" 	 		  value="vehiculos" />
			        <Tab label="Maquinaria"  		  value="maquinas" 	/>
			        <Tab label="La Empresa"  		  value="laempresa" />
			        <Tab label="Promociones" 		  value="promo" 	/>
			        <Tab label="Preguntas Frecuentes" value="preguntas" />
			    </Tabs>
			    <div class="contenido">
			      	{contenido(this.state.seleccionado)}
			    </div>
			</div>
			)
	}
}

function mapStateToProps(estado) {
  return {
    selMenu: estado
  }
}

export default connect(mapStateToProps)(MenuTab)