import React, { Component } from 'react'
import Drawer   from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Menu     from 'material-ui/Menu'
import {Glyphicon} from 'react-bootstrap'
import { connect }  from 'react-redux'
import acciones     from '../../acciones'

class menuPlegable extends Component {
    constructor(props) {
        super(props)
            this.state = {
                open : false,
            }
    }

    componentWillReceiveProps(a) {
        this.setState({open: a.open})
    }

    accion = (open, menuSel = '') => {
        if (open) {
            this.props.accion(true, menuSel)
        } else {
            this.props.accion(false, menuSel)
        }
    }

    seleccion = (x, v) => {
        this.accion(false, v.props.value)
        //console.log(v.props.value)
        this.props.dispatch(
            acciones.selMenu({
                menu: v.props.value,
                })
        );
    }

    render() {
        return (
            <Drawer open={this.state.open}
                    docked={false}
                    width={350}
                    onRequestChange={(open) => this.accion(open)}>
                <Menu onItemTouchTap={this.seleccion}>
                    <MenuItem value="principal" primaryText="Inicio" leftIcon={<Glyphicon glyph='leaf'/>} />
                    <MenuItem value="vehiculos" primaryText="Vehículos" leftIcon={<Glyphicon glyph='usd'/>} />
                    <MenuItem value="maquinas" primaryText="Maquinaria" leftIcon={<Glyphicon glyph='grain'/>} />
                    <MenuItem value="laempresa" primaryText="La Empresa" leftIcon={<Glyphicon glyph='exclamation-sign'/>} />
                    <MenuItem value="promo" primaryText="Promociones" leftIcon={<Glyphicon glyph='gift'/>} />
                    <MenuItem value="preguntas" primaryText="Preguntas Fecuentes" leftIcon={<Glyphicon glyph='question-sign'/>} />
                </Menu>
            </Drawer>
        )
    }
}

function mapStateToProps(estado) {
  return {
    selMenu: estado
  }
}

export default connect(mapStateToProps)(menuPlegable)