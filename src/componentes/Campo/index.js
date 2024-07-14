import { useState } from "react"
import "./Campo.css"

const Campo = (props) => {
    const placeholderModificado = `${props.placeholder}...`

    //Destructuracion: crear una constante | quiero que me digas la informacion de props
    //const {type} = props es la misma idea que console.log(props.type)
    const {type = "text"} = props

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo