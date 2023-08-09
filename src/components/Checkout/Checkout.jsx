import { useContext } from "react"
import { useState } from "react"
import { CartContext } from "../../context/CartContext"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Link } from "react-router-dom"

export const Checkout = () => {
    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

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

    const handleSubmit = (e) => {
        e.preventDefault()

        /* if (values.nombre !== '' && values.direccion !== '' && values.email !== '') {
            console.log(values)
        } else {
            alert('Hay algún campo incompleto')
        } */

        const orden = {
            cliente: values,
            items: cart.map(item => ({id: item.id, precio: item.precio, cantidad: item.cantidad, nombre: item.nombre})),
            total: totalCompra(),
            fyh: new Date()
        }
        
        orden.items.forEach(item => {
            const docRef = doc(db, "productos", item.id)
            getDoc(docRef)
                .then((doc) => {
                    const stock = doc.data().stock

                    if (stock >= item.cantidad) {
                        updateDoc(docRef, {
                            stock: stock - item.cantidad
                        })
                    } else {
                        alert("No hay stock de " + item.nombre)
                    }
                }) 
        });

        /* const ordenesRef = collection(db, "ordenes")

        addDoc(ordenesRef, orden)
            .then((doc) => {
                console.log(doc.id)
                vaciarCarrito()
                setOrderId(doc.id)
            }) */
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
                <button>Enviar</button>
            </form>
        </div>
    )
}