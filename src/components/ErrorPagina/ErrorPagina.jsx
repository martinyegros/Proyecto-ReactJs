import logoDanger from "../../assets/danger.png";
import { Link } from "react-router-dom";

export const ErrorPagina = () => {
    
    return(
        <div className="contdang">
            <div className="imgdang">
                <img src={logoDanger} alt="Logo de la marca" />
            </div>
            <div className="titdang">
                <h2>UPS! No se ha podido encontrar ésta página</h2>
            </div>
            <div className="btndang">
                <Link className="btn-dang" to="/">Ir a Inicio</Link>
            </div>
        </div>
    )
}