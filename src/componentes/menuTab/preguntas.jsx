import React, {Component} from 'react'
import {preguntas} from './pr'


class Preguntas extends Component {
	render() {
		return(
		<div>
            {preguntas.map((pr, i) =>
                <div>
                    <p>{pr.pre}</p>
                    <p>{pr.res}</p>
                </div>
            )}
		</div>
		)
	}
}

export default Preguntas
