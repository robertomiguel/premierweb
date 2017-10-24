import React, {Component} from 'react'

import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table'
import TextField from 'material-ui/TextField'

class Lista extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listaAutos: [],
            cargado: '0'
        }
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     return true
    // }

    // componentWillUpdate(nextProps, nextState){
    //
    // }

    componentWillReceiveProps(nextProps) {
        this.setState({listaAutos: nextProps, cargado: '1'})
        console.log('nuevo prop')
    }

    inputText = (editText, nuevoTexto) => {
        let nameTextField = editText.target.name
        if (nameTextField === 'filtroBuscar') {
            this.setState({
                listaAutos: {lista: this.state.listaAutos.lista.filter(
                    f => f.modelo.toLowerCase().search(nuevoTexto.toLowerCase()) > -1)
            }})
            console.log(nuevoTexto)
        } else {
            console.log("inputText: name?: $nameTextField")
        }
    }

    render() {
        return (
            <div>
                <Table
                    height='500px'>
                    <TableHeader displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn colSpan="2">FIAT</TableHeaderColumn>
                            <TableHeaderColumn>
                                <TextField
                                    floatingLabelText="Buscar..."
                                    onChange={this.inputText}
                                    name="filtroBuscar"/>
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn>Modelo</TableHeaderColumn>
                            <TableHeaderColumn>Cuota</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>

                    <TableBody
                        displayRowCheckbox={false}
                        showRowHover={true}>
                        {this.state.cargado==='1' && this.state.listaAutos.lista.map((dato, indice) => (
                            <TableRow key={indice}>
                                <TableRowColumn>{dato.modelo}</TableRowColumn>
                                <TableRowColumn>{dato.cuota}</TableRowColumn>
                            </TableRow>
                        ))
                        }
                    </TableBody>

                    <TableFooter>
                        <TableRow>
                            <TableRowColumn>Servicios Premier</TableRowColumn>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        )
    }
}

export default Lista