import logoDanger from "../../assets/danger.png";
import { Link } from "react-router-dom";

export const ProductoNoEncontrado = () => {
    
    return(
        <div className="contdang">
            <div className="imgdang">
                <img src={logoDanger} alt="Logo de la marca" />
            </div>
            <div className="titdang">
                <h2>UPS! No se ha podido encontrar el producto</h2>
            </div>
            <div className="btndang">
                <Link className="btn-dang" to="/productos">Ir a Productos</Link>
            </div>
        </div>
    )
}