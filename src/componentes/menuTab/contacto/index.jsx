import React, { Component } from 'react'
import './index.css'

class Contacto extends Component {
	render(){
		return (
			<div style={{"paddingTop":"15px"}}>
				<img src="/img/consultas.jpg" 
				className="img-responsive sombra centro redondear" 
				alt="contacto"
				 />
				 <br/>
				<div className="horario sombra redondear">Horario de Atención Lunes a Viernes de 9 a 15 horas</div>
				
			</div>
		)
	}
}

export default Contacto