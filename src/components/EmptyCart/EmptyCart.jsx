import { Link } from "react-router-dom"
import iconoCerrar from "../../assets/cierre.png"

export const EmptyCart = ({closes}) => {

    return(
        <div onClick={(e) => e.stopPropagation()} className="carrito-container">
            <div className="icon-cerr">
                <img onClick={closes} className="iconc" src={iconoCerrar} alt="Icono de cerrar" />
            </div>
            <h2>Carrito vacío</h2>
            <hr />
            <div className="btnsegc">
                <Link className="btn-segc" onClick={closes} to="/productos">Ir a comprar</Link>
            </div>
        </div>
    )
}