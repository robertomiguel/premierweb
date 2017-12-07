import React, { Component } from 'react'
import './index.css'

class LaEmpresa extends Component {
	render(){
		return (
			<div style={{"paddingTop":"10px"}}>
				<div className="text-center sombra redondear centro laempresa">
					<br />
					<h3>La empresa</h3>
					<p>
						  Empresa de Tercerización de Servicios de Compra, es la compañía más sólida y confiable de referencia,
						en la intermediación para la adquisición de una amplia y variada gama de productos y servicios del mercado,
						de la forma más honesta, accesible, fácil y ágil.
					</p>
					<p>
						  Con amplia experiencia, cumplimiento y trayectoria, sumados a nuestros equipos de profesionales de primera línea,
						y el soporte de una red comercial con todas las marcas, asumimos el compromiso de apoyar a las familias argentinas
						y al desarrollo de país.
					</p>	
					<p>
					  	Somos la empresa número Uno del rubro en cuanto a Tercerización de Servicios de Compra y Venta en todo el territorio argentino.
					</p>
					<p>
					  	Seguimos creciendo día a día, satisfaciendo las necesidades de nuestros adherentes, simplificando la obtención de bienes.
					</p>
					<br />
				</div>
				<br/>
					<img src="/img/lamejorfinanciacion.png" alt="Premier" className="lamejor sombra redondear" />

			</div>
		)
	}
}

export default LaEmpresa