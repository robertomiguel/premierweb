import {combineReducers} from "redux"

const estadoInicial = {
    selMenu: 'principal',
}

function selMenuReducer(estado = estadoInicial.selMenu, accion = {}) {

    switch (accion.type) {
        case 'SEL_MENU':
    		//console.log(accion.menu.menu)
            return accion.menu.menu

        default:
            return estado;
    }
}


const reducer = combineReducers({
    selMenu: selMenuReducer,
})

export default reducer