import { useEffect, useRef, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import { ItemList } from "../ItemList.jsx/ItemList";
import { useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import ImagProd from "../../assets/productos.jpeg";

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

        pedirDatos()
            .then(r => {
                if (categoryId) {
                    setProductos( r.filter(prod => prod.category === categoryId) )
                } else {
                    setProductos(r)
                }
            })
            .catch(e => console.log(e))
            .finally(() => {
                setLoading(false)
            })
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

