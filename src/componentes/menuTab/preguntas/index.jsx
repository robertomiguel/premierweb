import React, {Component} from 'react'

import './preguntas.css'

class Preguntas extends Component {

    constructor(props) {

        super(props)
        this.state = {
            preguntas: [
                {
                    "pre":	"¿Que necesito para que me financien un vehículo?",
                    "res":	<div>Ser mayor de 21 años, constancia de residencia en argentina,<br/>
                            comprobantes de ingresos lícitos.
                            </div>
                },
                {
                    "pre":	"¿Que garantías se requiere?",
                    "res":	<div>Ninguna, el vehículo se entrega con garantía prendaria,<br/>
                            hasta abonar la última cuota.
                            </div>
                },
                {
                    "pre":	"¿En que zona trabajan?",
                    "res":	<div>En todo el territorio argentino.</div>
                },
                {
                    "pre":	"¿Que forma de pago aceptan?",
                    "res":	<div>Cheques propios o de terceros, previa verificación crediticia. <br/>
                            Deposito bancario o por trasferencia con CBU a cuenta de la empresa.
                            </div>
                },
                {
                    "pre":	"¿Que marcas trabajan?",
                    "res":	<div>Premier es intermediario entre el cliente y la concesionaria, por tal motivo,<br/>
                            trabajamos con todas las marcas, tanto en automotores como en maquinaria agrícola y vial.
                            </div>
                },
                {
                    "pre":	"¿Cuando me entregan el vehículo?",
                    "res":	<div>Actualmente ofrecemos tres formas de adjudicación:<br/>
                            Adjudicación en cuota número 12 <br/>
                            Requiere la permanencia en el plan durante un año, <br/>
                            no se pueden cancelar de forma anticipada las 12 primeras cuotas. <br/>
                            Adjudicación Inmediata <br/>
                            Requiere abonar el 50% de la unidad para la entrega y el resto en 42 <br/>
                            cuotas fijas. <br/>
                            Entrega pactada dentro de 10 días hábiles, según disponibilidad <br/>
                            en concesionaria. <br/>
                        <br/>
                        Máquinas agrícolas, viales o camiones grandes <br/>
                            La adjudicación y entrega es en la primera cuota semestral pactada. <br/>
                            (En caso de ser beneficiario por sorteo puede adjudicar en 6 meses u obtener <br/>
                            su vehículo de forma inmediata abonando un anticipo del 50%) <br/>
                            </div>
                 },
                 {
                    "pre":	"No puedo seguir pagando. ¿Que sucede?",
                    "res":	<div>
                            La empresa en estos casos, acuerda con el cliente una refinanciación a una <br/>
                            cuota más accesible para ayudar al suscriptor a conseguir su vehículo. <br/>
                            También puede vender su plan, o simplemente puede pedir un reintegro.
                            </div>
                 },
                 {
                    "pre":	"¿Aparte de las cuotas hay otros gastos?",
                    "res":	<div>
                            Si, se debe abonar gastos de patentamiento, flete (según zona), <br/>
                            gastos administrativos y prendarios.
                            </div>
                 },
                 {
                    "pre":	"Ya tuve problemas con otra empresa similar, ¿por que confiar en Premier?",
                    "res":  <div>
                            Nuestros clientes satisfechos y que hoy en día gozan de sus vehículos <br/>
                            nos avalan. <br/>
                            No es un plan de ahorro, ni es por sorteo la adjudicación, en Premier, <br/>
                            usted paga su vehículo de la mejor manera y se lo lleva. <br/>
                            Así de simple y transparente.
                            </div>
                 },
                 {
                    "pre":	"¿Como hago para que me financien un vehículo?",
                    "res":	<div>
                            Siguiendo estos simples pasos <br/>
                            <br/>
                            * Entrevista con un asesor comercial <br/>
                            (telefónicamente, en su domicilio o en la empresa) <br/>
                            <br/>
                            * Presentar DNI, impuesto a su nombre, comprobar medios de vida lícito <br/>
                            <br/>
                            * Abonar el costo de suscripción correspondiente según el plan adquirido. <br/>
                            Usted recibe su vehículo en su localidad, o su máquina en su campo.
                            </div>
                 },
               ]
        }
    }

    render() {
        return(
            <div>
                {this.state.preguntas.map((pr, i)=>(
                    <div key={i}>
                        <div className="pregunta">
                            <div className="titulo">{pr.pre}</div>
                            <br/>
                            {pr.res}
                            <br/>
                        </div>
                    </div>
                ))
                    }
                <br/>
                <br/>
            </div>
        )
    }


    }

export default Preguntas