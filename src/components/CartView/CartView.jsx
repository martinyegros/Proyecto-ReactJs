import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export const CartView = () => {
    const { cart, totalCompra, vaciarCarrito, removerDelCarrito } = useContext(CartContext)

    return(
        <div className="carrito-container">
            <h2 className="titcarr">Mi carrito</h2>
            <hr />

            {
                cart.map((item) => (
                    <div key={item.id} className="carrito">
                        <div className="prodcarr">
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
                                <button onClick={() => removerDelCarrito(item.id)} >Eliminar</button>
                            </div>
                        </div>
                    </div>
                ) )
            }

            <hr />
            <div>
                <div>
                    <h4>Total</h4>
                </div>
                <div>
                    <h4>${totalCompra()}</h4>
                </div>
            </div>
            <hr />
            <div>
                <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            </div>
            
        </div>
    )
}