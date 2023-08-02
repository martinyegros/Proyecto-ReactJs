import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { ItemCount } from "../ItemCount/ItemCount"
import { useContext, useState } from "react"

export const ItemDetail = ({item}) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)
    
    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const newItem = {...item, cantidad}

        agregarAlCarrito(newItem)
    }

    return (
        <div className="catalogo2">
            <div className="titcardet">
                <h2 className="titdet">DETALLES DEL PRODUCTO</h2>
            </div>
            <div className="card2">
                <div className="image-wrapper2">
                    <img src={item.img} alt={item.nombre} className="card-img-top2"/>
                </div>
                <div className="card-body2">
                    <h3 className="card-title2">{item.nombre}</h3>
                    <p className="card-desc">{item.descripcion}</p>
                    <p className="card-precio2">Precio: ${item.precio}</p>

                    {
                        isInCart(item.id)
                            ? <div className="btnscard"><Link className="btnterm" to="/cart">Terminar mi compra</Link></div>
                            : <div className="btnscard"><ItemCount max={item.stock} cantidad={cantidad} setCantidad={setCantidad} agregar={handleAgregar}/></div>
                    }
                </div>
            </div>
        </div>
        
    )
}