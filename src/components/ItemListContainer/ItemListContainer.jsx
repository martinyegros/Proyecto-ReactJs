import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import { ItemList } from "../ItemList.jsx/ItemList";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        pedirDatos()
            .then(r => setProductos(r))
            .catch(e => console.log(error))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div>
            {
                loading
                ? <h2>Cargando...</h2>
                : <ItemList productos={productos}/>
            }    
        </div>
    )
};

export default ItemListContainer

