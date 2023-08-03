import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import { ItemList } from "../ItemList.jsx/ItemList";
import { useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import ImagProd from "../../assets/productos.jpeg";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

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
        <div>
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

