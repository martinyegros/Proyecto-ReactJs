import { Link } from "react-router-dom"

export const EmptyCart = () => {

    return(
        <div className="carrito-container">
            <h2>Carrito vacío</h2>
            <hr />
            <Link to="/">Ir a comprar</Link>
        </div>
    )
}