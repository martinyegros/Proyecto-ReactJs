import { useEffect, useRef, useState } from "react";
import { ItemList } from "../ItemList.jsx/ItemList";
import { useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import ImagProd from "../../assets/productos.jpeg";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    const ref = useRef();

    const scrollear = () => {
        ref.current.scrollIntoView(false);
    }

    useEffect(() => {
        scrollear()
    }, [categoryId])

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, "productos")
        const q = categoryId
                    ? query(productosRef, where('category', '==', categoryId))
                    : productosRef

        getDocs(q)
            .then((resp) => {
                const docs = resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setProductos(docs)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    }, [categoryId])
    
    return (
        <div ref={ref}>
            {
                loading
                ? <Loader/>
                : <>
                <div className="dprod1">
                    <h1>PRODUCTOS</h1>
                    <img src={ImagProd} alt="Imagen de productos" />

                    <div className="catalogo-container">
                        <ItemList productos={productos}/>
                    </div>
                </div>
                </>
            }    
        </div>
    )
};

export default ItemListContainer

