import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { EmptyCart } from "../EmptyCart/EmptyCart"
import iconoCerrar from "../../assets/cierre.png"
import iconoBasura from "../../assets/basura.png"

export const CartView = ({close}) => {
    const { cart, totalCompra, vaciarCarrito, removerDelCarrito } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            < EmptyCart closes={close}/>
        )
    }

    return(
        <div onClick={(e) => e.stopPropagation()} className="carrito-container">
            <div className="icon-cerr">
                <img className="iconc" onClick={close} src={iconoCerrar} alt="Icono de cerrar" />
            </div>
            <h2 className="titcarr">Mi carrito</h2>
            <hr />

            {
                cart.map((item) => (
                    <div key={item.id} className="carrito">
                        <div className="carrbody">
                            <div className="imgprod">
                                <img src={item.img} alt={item.nombre} className="img-prod"/>
                            </div>
                            <div className="carrinfo">
                                <h3 className="carr-tit">{item.nombre}</h3>
                                <p className="carrcant">Cantidad: {item.cantidad}</p>
                            </div>
                        </div>
                        <div className="carrpr">
                            <p className="carr-pr">Total ${item.precio * item.cantidad}</p>
                            <img className="imgbas" onClick={() => removerDelCarrito(item.id)} src={iconoBasura} alt="Icono de basura" />
                        </div>
                    </div>
                ) )
            }

            <hr />
            <div className="totpr">
                <h4 className="tot1">Total ${totalCompra()}</h4>
            </div>
            <hr />
            <div className="botvac">
                <button className="btnvac" onClick={vaciarCarrito}>Vaciar Carrito</button>
            </div>
        </div>
    )
}