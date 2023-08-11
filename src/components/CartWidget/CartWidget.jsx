import { useContext, useState } from "react";
import logoCarrito from "../../assets/vegetales.png";
import { CartContext } from "../../context/CartContext";
import { CartView } from "../CartView/CartView";

export const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)

    const [showCarr, setShowCarr] = useState(false)

    const handleOpen = () => {
        setShowCarr(true)
    }

    const handleClose = () => {
        setShowCarr(false)
    }

    return (
        <div className={showCarr ? "carr-act" : ""}>
            <div className="icon-container">
                <img onClick={handleOpen} className='icon-cart' src={logoCarrito} alt="Logo del carrito" />
                <div className="count-products">
                    <span className="contador-productos">{totalCantidad()}</span>
                </div>
            </div>
            <div className="menu-backd" onClick={handleClose}>
                <CartView close={handleClose}/>
            </div>
        </div>
        
    )   
};