import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import { ItemList } from "../ItemList.jsx/ItemList";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    console.log(productos)

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProductos(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    )
};

export default ItemListContainer

