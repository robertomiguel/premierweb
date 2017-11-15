import React, {Component} from 'react'

class Preguntas extends Component {

    constructor(props) {

        super(props)
        this.state = {
            preguntas: [
                {
                    "pre":	"¿Que necesito para que me financien un vehículo?",
                    "res":	<pres>"Ser mayor de 21 años, constancia de residencia en argentina,
                            comprobantes de ingresos lícitos.
                            </pres>
                },
                {
                    "pre":	"¿Que garantías se requiere?",
                    "res":	<pre>Ninguna, el vehículo se entrega con garantía prendaria,
                            hasta abonar la última cuota.
                            </pre>
                },
                {
                    "pre":	"¿En que zona trabajan?",
                    "res":	<pre>En todo el territorio argentino.</pre>
                },
                {
                    "pre":	"¿Que forma de pago aceptan?",
                    "res":	<pre>Cheques propios o de terceros, previa verificación crediticia.
                            Deposito bancario o por trasferencia con CBU a cuenta de la empresa.
                            </pre>
                },
                {
                    "pre":	"¿Que marcas trabajan?",
                    "res":	<pre>Premier es intermediario entre el cliente y la concesionaria, por tal motivo,
                            trabajamos con todas las marcas, tanto en automotores como en maquinaria agrícola y vial.
                            </pre>
                },
                {
                    "pre":	"¿Cuando me entregan el vehículo?",
                    "res":	<pre>Actualmente ofrecemos tres formas de adjudicación:
                            Adjudicación en cuota número 12
                            Requiere la permanencia en el plan durante un año,
                            no se pueden cancelar de forma anticipada las 12 primeras cuotas.
                            Adjudicación Inmediata
                            Requiere abonar el 50% de la unidad para la entrega y el resto en 42
                            cuotas fijas.
                            Entrega pactada dentro de 10 días hábiles, según disponibilidad
                            en concesionaria.

                        Máquinas agrícolas, viales o camiones grandes
                            La adjudicación y entrega es en la primera cuota semestral pactada.
                            (En caso de ser beneficiario por sorteo puede adjudicar en 6 meses u obtener
                            su vehículo de forma inmediata abonando un anticipo del 50%)
                            </pre>
                 },
                 {
                    "pre":	"No puedo seguir pagando. ¿Que sucede?",
                    "res":	<pre>
                            La empresa en estos casos, acuerda con el cliente una refinanciación a una
                            cuota más accesible para ayudar al suscriptor a conseguir su vehículo.
                            También puede vender su plan, o simplemente puede pedir un reintegro.
                            </pre>
                 },
                 {
                    "pre":	"¿Aparte de las cuotas hay otros gastos?",
                    "res":	<pre>
                            Si, se debe abonar gastos de patentamiento, flete (según zona),
                            gastos administrativos y prendarios.
                            </pre>
                 },
                 {
                    "pre":	"Ya tuve problemas con otra empresa similar, ¿por que confiar en Premier?",
                    "res":  <pre>
                            Nuestros clientes satisfechos y que hoy en día gozan de sus vehículos
                            nos avalan.
                            No es un plan de ahorro, ni es por sorteo la adjudicación, en Premier,
                            usted paga su vehículo de la mejor manera y se lo lleva.
                            Así de simple y transparente.
                            </pre>
                 },
                 {
                    "pre":	"¿Como hago para que me financien un vehículo?",
                    "res":	<pre>
                            Siguiendo estos simples pasos"+
                            * Entrevista con un asesor comercial"+
                            (telefónicamente, en su domicilio o en la empresa)

                            * Presentar DNI, impuesto a su nombre, comprobar medios de vida lícito

                            * Abonar el costo de suscripción correspondiente según el plan adquirido.
                            Usted recibe su vehículo en su localidad, o su máquina en su campo.
                            </pre>
                 },
               ]
        }
    }

    render() {
        return(
            <div>
                {this.state.preguntas.map((pr, i)=>(
                    <div>
                        {pr.pre}
                        <br/>
                        {pr.res}
                    </div>
                ))
                    }
            </div>
        )
    }


    }

export default Preguntas