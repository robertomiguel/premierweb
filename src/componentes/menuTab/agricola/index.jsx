import React, { Component } from 'react'
import './index.css'

class Agricola extends Component {
	render() {
		return (
				<div className="agricola">
					<div>
						<div align="center">
							<img className="img-responsive" src="/img/agricola/sinriesgo.png" alt="" />
						</div>
						<hr />
						<div align="center">
							<img src="/img/maquinaagricola.png" className="img-responsive" alt="agrícola" />
						</div>
						<div className="row maquina-agricola">
							<div className="col-md-6">
								<img className="img-responsive" src="/img/agricola/deco/tractor1.png" alt="" />
								<p>TRACTORES • COSECHADORAS • SEMBRADORAS • 
								ACOPLADOS Y SEMIRREMOLQUES • 
								PULVERIZADORAS • FERTILIZADORAS</p>
							</div>
							<div className="col-md-6">
								<img className="img-responsive" src="/img/agricola/deco/cosecha1.png" alt="" />
								<p>FRUTIHORTÍCOLA • 
								TANQUES ATMOSFÉRICOS • DESMALEZADORAS • 
								EMBOLSADORAS • NIVELADORAS • MOLEDORAS</p>
							</div>
						</div>
						<br />
						<div className="promo-agricola centro">
							<table className="sombra redondear">
								<tbody>
									<tr>
										<td>PAGOS SEMESTRALES FIJOS Y EN PESOS</td>
									</tr>	
									<tr>
										<td>ADJUDICACIÓN INMEDIATA</td>
									</tr>	
									<tr>
										<td>LAS MEJORES MARCAS - NUEVOS Y USADOS</td>
									</tr>	
									<tr>
										<td>PLANES ESPECIALES PARA REEMPLAZAR SU MAQUINARIA</td>
									</tr>	
									<tr>
										<td>SERVICIO DE ASESORAMIENTO</td>
									</tr>
									<tr>
										<td>Consulte ya mismo por nuestros planes promocionales</td>
									</tr>
									<tr>
										<td>SERVICIOS PREMIER -	GARANTÍA Y CONFIANZA</td>
									</tr>
								</tbody>
							</table>
						</div>
						<hr />
					    <div align="center">
					        <img className="img-responsive" src="/img/maquinavial.png" alt="" />
						</div>

						<div className="row maquina-agricola">
							<div className="col-md-6">
								<img className="img-responsive" src="/img/agricola/deco/retro.png" alt="" />
								<p>
									Balde Procesador • Triturador • Barredoras • 
									Bateas Regadoras de Asfalto • Cargadoras • Tuneleras •
									Compactadores • Cordonera • Cuneteadoras • 
									Excavadoras • Fresadoras para Excavadoras • 
									Manipuladores telescopicos • Martillo • Zanjadoras
								</p>
							</div>
							<div className="col-md-6">
								<img className="img-responsive" src="/img/agricola/deco/excavadora.png" alt="" />
								<p>
									Minicargadoras • Miniexcavadoras • Motocompresores • 
									Motoniveladoras • Palas Cargadoras • Palas con Retro • 
									Perfiladores de Suelos • Perforadoras • Piloteras • 
									Plantas • Plataformas elevadoras • Retroexcavadoras • 
									Rodillos • Terminadoras • Topadoras • Trompo Hormigonero
								</p>
							</div>
						</div>
						<hr />
					</div>
				</div>
		)
	}
}

export default Agricola