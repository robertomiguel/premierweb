import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import MenuPlegable from '../menuPlegable'
import './index.css'

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
                    title={(<img src="/img/serviciospremier1.png" alt="premier" className="img-responsive centro"/>)}
                    onRightIconButtonTouchTap={this.abrirCerrarMenu}
                    onLeftIconButtonTouchTap={this.abrirCerrarMenu}
                    className="appBar"
                />
                <MenuPlegable open={this.state.openMenu} accion={this.accion}/>
            </div>
        )
    }
}

export default Titulo