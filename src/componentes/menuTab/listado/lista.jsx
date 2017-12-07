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

/*
const estilo = {
    header : {
        color         : "black",
        fontSize      : 16,
        TextTransform : "uppercase"
    },
    headerColumn: {
        color     : "black",
        fontSize  : 14
    },
    contenedor: {
        maxWidth     : 500
    }
}
*/

class Lista extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listaAutos: [],
            cargado: '0',
            marca: 'Seleccionar...'
        }

    }

   // componentDidMount() {
   //     this.textInput.focus()
   // }

    componentWillReceiveProps(nextProps) {
        this.setState({listaAutos: nextProps.lista, cargado: '1', marca: nextProps.marca})
        //this.textInput.focus()
        //ref={(input)=>{this.textInput = input}} // en el componente con input
        console.log('nuevo prop')
    }

    inputText = (editText, nuevoTexto) => {
        let nameTextField = editText.target.name
        if (nameTextField === 'filtroBuscar') {
            this.setState({
                listaAutos: this.state.listaAutos.filter(
                    f => f.modelo.toLowerCase().search(nuevoTexto.toLowerCase()) > -1)
            })
            console.log(nuevoTexto)
        } else {
            console.log("inputText: name?: $nameTextField")
        }
    }

    render() {
        return (
            <div className="contenedor">
                <Table  height="500px">
                    <TableHeader displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn colSpan="2" className="header">
                                {this.state.marca}
                                <span> : </span>
                                <TextField
                                    floatingLabelText="Buscar..."
                                    onChange={this.inputText}
                                    name="filtroBuscar"
                                    />
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn className="headerModelo">Modelo</TableHeaderColumn>
                            <TableHeaderColumn className="headerCuota">Cuota</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>

                    <TableBody
                        displayRowCheckbox={false}
                        showRowHover={true}>
                        {this.state.cargado==='1' && this.state.listaAutos.map((dato, indice) => (
                            <TableRow key={indice}>
                                <TableRowColumn>{dato.modelo}</TableRowColumn>
                                <TableRowColumn>{(dato.cuota*1).toLocaleString()}</TableRowColumn>
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