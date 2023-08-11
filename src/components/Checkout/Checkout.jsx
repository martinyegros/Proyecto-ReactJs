import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { collection, addDoc, writeBatch, query, where, documentId, getDocs } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Link } from "react-router-dom"

export const Checkout = () => {
    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const [loading, setLoading ] = useState(false)

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        if (values.nombre !== '' && values.direccion !== '' && values.email !== '') {
            const orden = {
                cliente: values,
                items: cart.map(item => ({id: item.id, precio: item.precio, cantidad: item.cantidad, nombre: item.nombre})),
                total: totalCompra(),
                fyh: new Date()
            }
    
            const batch = writeBatch(db)
            const ordenesRef = collection(db, "ordenes")
            const productosRef = collection(db, "productos")
            const q = query(productosRef, where(documentId(), "in", cart.map(item => item.id)))
            
            const productos = await getDocs(q)
            const sinStock = []
    
            productos.docs.forEach((doc) => {
                const item = cart.find(prod => prod.id === doc.id)
                const stock = doc.data().stock
    
                if (stock >= item.cantidad) {
                    batch.update(doc.ref, {
                        stock: stock - item.cantidad
                    })
                } else {
                    sinStock.push(item)
                }
            })
    
            if (sinStock.length === 0) {
                await batch.commit()
                const doc = await addDoc(ordenesRef, orden)
    
                vaciarCarrito()
                setOrderId(doc.id)
            } else {
                alert("No hay stock")
            }
        } else {
            alert('Hay algún campo incompleto')
        }
        setLoading(false)
    }

    if (orderId) {
        return(
            <div className="cont-check" >
                <h2>Tú compra se registró exitosamente!</h2>
                <hr />
                <p>Tu número de órden de compra es: <strong>{orderId}</strong></p>

                <Link to="/">Volver</Link>
            </div>
        )
    }

    return(
        <div className="cont-check">
            <h2>Checkout</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <input onChange={handleInputChange} value={values.nombre} type="text" placeholder="Nombre" name="nombre"/>
                <input onChange={handleInputChange} value={values.direccion} type="text" placeholder="Dirección" name="direccion"/>
                <input onChange={handleInputChange} value={values.email} type="email" placeholder="Tú email" name="email"/>
                <button disabled={loading}>Enviar</button>
            </form>
        </div>
    )
}