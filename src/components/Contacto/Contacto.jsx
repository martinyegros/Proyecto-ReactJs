import { useState } from "react"
import logoTecla from "../../assets/teclado.png"
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
                    .min(10000000, "El número es demasiado corto")
                    .required("Éste campo es obligatorio"),
    email: Yup.string()
                .required("Éste campo es obligatorio")
                .email("El email es inválido"),
    mensaje: Yup.string()
                .min(20, "El mensaje es demasiado corto")
})

export const Contacto = () => {
    const [contactoId, setContactoId] = useState(null)

    const [loading, setLoading ] = useState(false)

    const handleSubmit = async (values) => {
        setLoading(true)

        const contactos = {
            cliente: values,
            fyh: new Date()
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
                <div className="ticoo2">
                    <h2 className="tico">Tú mensaje se envió exitosamente!</h2>
                        <div className="tecimg">
                    <img src={logoTecla} alt="logo de dos manos con un teclado" />
                    </div>
                    <p className="cods1">Gracias por comunicarte con nosotros</p>
                    <p className="cods1">Tu código de mensaje es: <strong>{contactoId}</strong></p>

                    <div className="volvc">
                        <Link className="btnvol1" to="/">Volver</Link>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="contact">
            <div className="ticoo">
                <h2 className="tico1">CONTACTO</h2>
            

            
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
                        <div className="forms1">
                            <Form className="form2">
                                <Field className="f3" placeholder="Nombre" type="text" name="nombre"/>
                                <ErrorMessage className="f4" name="nombre" component="p"/>
                                <Field className="f3" placeholder="Teléfono" type="number" name="telefono"/>
                                <ErrorMessage className="f4" name="telefono" component="p"/>
                                <Field className="f3" placeholder="Email" type="email" name="email"/>
                                <ErrorMessage className="f4" name="email" component="p"/>
                                <Field className="f5" placeholder="Mensaje" type="text" name="mensaje" component="textarea"/>
                                <ErrorMessage className="f4" name="mensaje" component="p"/>
                                <button className="btnform1" disabled={loading} type="submit">Enviar</button>
                            </Form>
                        </div>
                    )}
                </Formik>
            </div>
        </div>
    )
}