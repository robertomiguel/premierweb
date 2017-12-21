import React, { Component } from 'react'
import './index.css'

class Principal extends Component {
	render(){
		return (
			<div className="principal">
				<img src="/img/cabezapremier.jpg" 		alt="premier" className="img-responsive"/><br/>
				<img src="/img/lamejorfinanciacion.png" alt="premier" className="img-responsive"/><br/>
				<img src="/img/promo.jpg" 				alt="premier" className="img-responsive"/><br/>
				<img src="/img/iveco_promo.jpg" 		alt="premier" className="img-responsive"/><br/>
				<img src="/img/promo_agro.jpg" 			alt="premier" className="img-responsive"/><br/>
			</div>
		)
	}
}

export default Principal