export const ItemCount = ({max, cantidad, setCantidad, agregar}) => {

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    return(
        <div className="btnscard">
            <button onClick={handleRestar} className="btn-dark1">-</button>
            <span className="cantc">{cantidad}</span>
            <button onClick={handleSumar} className="btn-dark1">+</button>
            <button onClick={agregar} className="btn-dark2">Agregar al carrito</button>
        </div>
    )
}