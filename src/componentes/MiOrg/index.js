import { useState } from "react"
import "./MiOrg.css"

const MiOrg = () => {
    //Estado - hooks
    //useState = useState()
    //const [nombreVariable,funcionQueActualiza] = useState(valorInicial) | como definir un estado

    const [mostrar, actualizarMostrar] = useState(true)

    const manejarClick = () => {
        console.log("Mostrar elemento", !mostrar)
        actualizarMostrar(!mostrar)
    }

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={manejarClick} />
    </section>
}

export default MiOrg