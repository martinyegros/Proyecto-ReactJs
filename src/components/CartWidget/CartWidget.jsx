import { useContext } from "react";
import logoCarrito from "../../assets/vegetales.png";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)

    return (
        <Link to="/cart" className="icon-container">
            <img className='icon-cart' src={logoCarrito} alt="Logo del carrito" />
            <div className="count-products">
                <span className="contador-productos">{totalCantidad()}</span>
            </div>
        </Link>
    )   
};