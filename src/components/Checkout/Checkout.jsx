import { useContext, useState } from "react"
import logoCheck from "../../assets/comprav.png"
import { CartContext } from "../../context/CartContext"
import { collection, addDoc, writeBatch, query, where, documentId, getDocs } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Link } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup' 

const schema = Yup.object().shape({
    nombre: Yup.string()
                .min(3, "El Nombre es demasiado corto")
                .max(20, "Máximo 20 caracteres")
                .required("Éste campo es obligatorio"),
    direccion: Yup.string()
                    .min(8, "La Dirección es demasiado corta")
                    .max(20, "Máximo 20 caracteres")
                    .required("Éste campo es obligatorio"),
    email: Yup.string()
                .required("Éste campo es obligatorio")
                .email("El email es inválido")
})

export const Checkout = () => {
    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const [loading, setLoading ] = useState(false)

    const handleSubmit = async (values) => {
        setLoading(true)

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
        
        setLoading(false)
    } 

    if (orderId) {
        return(
            <div className="cont-check" >
                <h2 className="tich">Tú compra se registró exitosamente!</h2>
                <div className="checkimg">
                    <img src={logoCheck} alt="logo de frutas" />
                </div>
                <p className="cods">Gracias!</p>
                <p className="cods">Tu código de orden de compra es: <strong>{orderId}</strong></p>

                <div className="volvf">
                    <Link className="btnvol" to="/">Volver</Link>
                </div>
            </div>
        )
    }

    return(
        <div className="cont-check">
            <h2 className="tich1">CHECKOUT</h2>

            <Formik
                initialValues={{
                    nombre: '',
                    direccion: '',
                    email: ''
                }}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                {() => (
                    <div className="forms">
                        <Form className="form1">
                            <Field className="f1" placeholder="Nombre" type="text" name="nombre"/>
                            <ErrorMessage className="f2" name="nombre" component="p"/>
                            <Field className="f1" placeholder="Dirección" type="text" name="direccion"/>
                            <ErrorMessage className="f2" name="direccion" component="p"/>
                            <Field className="f1" placeholder="Email" type="email" name="email"/>
                            <ErrorMessage className="f2" name="email" component="p"/>
                            <button className="btnform" disabled={loading}>Enviar</button>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    )
}