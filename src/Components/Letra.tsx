import useLetras from "../hooks/useLetras"

const Letra = () => {
    const { letra, cargando } = useLetras()
    return (
        cargando ? <span>Cargando...</span> : <div className="letra">{letra}</div>
    )
}

export default Letra