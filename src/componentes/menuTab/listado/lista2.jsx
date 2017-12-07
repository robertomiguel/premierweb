import React, {Component} from 'react'

class Lista extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listaAutos: [],
            cargado: '0',
            marca:   'Seleccionar...',
            filtro:  '',
        }

    }

   // componentDidMount() {
   //     this.textInput.focus()
   // }

    componentWillReceiveProps(nextProps) {
        this.setState({listaAutos: nextProps.lista, cargado: '1', marca: nextProps.marca, filtro: ''})
        //this.textInput.focus()
        //ref={(input)=>{this.textInput = input}} // en el componente con input
        console.log('nuevo prop')
    }

    inputText = (a) => {
            this.setState({
                filtro: a.target.value,
            })
    }

    borrarFiltro = () => {
        this.setState({filtro:''})
    }

    render() {
        return (
            <div className="contenedor">
                                <input
                                    placeholder="Buscar..."
                                    onChange={this.inputText}
                                    name="filtroBuscar"
                                    className="buscarTexto redondear"
                                    value={this.state.filtro}/>

                                {this.state.filtro !== '' && (
                                    <button onClick={this.borrarFiltro}>X</button>
                                )}

                        {this.state.cargado==='1' && this.state.listaAutos
                        .filter( f => f.modelo.toLowerCase().search(this.state.filtro.toLowerCase()) > -1)
                        .map((dato, indice) => (
                            <div key={indice} className="casilla sombra redondear">
                                <div className="columModelo">{dato.modelo}</div>
                                <div className="columCuota">desde $ {(dato.cuota*1).toLocaleString()}</div>
                            </div>
                        ))
                        }
            </div>
        )
    }
}

export default Lista