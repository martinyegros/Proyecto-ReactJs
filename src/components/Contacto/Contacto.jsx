import { useState } from "react"
import { collection, addDoc, writeBatch } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Link } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup' 

const schema = Yup.object().shape({
    nombre: Yup.string()
                .min(3, "El Nombre es demasiado corto")
                .max(20, "Máximo 20 caracteres")
                .required("Éste campo es obligatorio"),
    telefono: Yup.number()
                    .min(8, "El número es demasiado corto")
                    .required("Éste campo es obligatorio"),
    email: Yup.string()
                .required("Éste campo es obligatorio")
                .email("El email es inválido"),
    mensaje: Yup.string()
                .min(10, "El mensaje es demasiado corto")
})

export const Contacto = () => {
    const [contactoId, setContactoId] = useState(null)

    const [loading, setLoading ] = useState(false)

    const handleSubmit = async (values) => {
        setLoading(true)

        const contactos = {
            cliente: values
        }

        const batch = writeBatch(db)

        const contactosRef = collection(db, "contactos")

        const sinMensaje = []

        if (sinMensaje.length === 0) {
            await batch.commit()
            const doc = await addDoc(contactosRef, contactos)
    
            setContactoId(doc.id)
        } else {
            alert("No hay Mensaje")
        }
        
        setLoading(false)
    }

    if (contactoId) {
        return(
            <div className="contact" >
                <h2>Tú mensaje se envió exitosamente!</h2>
                <hr />
                <p>Gracias por comunicarte con nosotros</p>
                <hr />
                <p>Tu código de mensaje es: <strong>{contactoId}</strong></p>

                <Link to="/">Volver</Link>
            </div>
        )
    }

    return(
        <div className="contact">
            <h2>Contacto</h2>
            <hr />

            <Formik
                initialValues={{
                    nombre: '',
                    telefono: '',
                    email: '',
                    mensaje:''
                }}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                {() => (
                    <Form>
                        <Field placeholder="Nombre" type="text" name="nombre"/>
                        <ErrorMessage name="nombre" component="p"/>
                        <Field placeholder="Teléfono" type="number" name="telefono"/>
                        <ErrorMessage name="telefono" component="p"/>
                        <Field placeholder="Email" type="email" name="email"/>
                        <ErrorMessage name="email" component="p"/>
                        <Field placeholder="Mensaje" type="text" name="mensaje"/>
                        <ErrorMessage name="mensaje" component="p"/>
                        <button disabled={loading} type="submit">Enviar</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}