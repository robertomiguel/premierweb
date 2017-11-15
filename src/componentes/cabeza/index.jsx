import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import MenuPlegable from '../menuPlegable'

class Titulo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openMenu: false,
        }
    }

    abrirCerrarMenu = () => {
        this.setState({openMenu: !this.state.openMenu})
    }

    accion = (estado, menuSel) => {
        this.setState({openMenu: estado})
        if (menuSel!=='') {
            this.setState({})
        }
    }

    render() {
        return (
            <div>
                <AppBar
                    title='Servicios Premier'
                    onRightIconButtonTouchTap={this.abrirCerrarMenu}
                    onLeftIconButtonTouchTap={this.abrirCerrarMenu}
                />
                <MenuPlegable open={this.state.openMenu} accion={this.accion}/>
            </div>
        )
    }
}

export default Titulo