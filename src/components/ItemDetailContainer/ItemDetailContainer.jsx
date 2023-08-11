import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Loader } from "../Loader/Loader";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { ProductoNoEncontrado } from "../ProductoNoEncontrado/ProductoNoEncontrado";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const itemRef = doc(db, "productos", itemId)

        getDoc(itemRef)
            .then((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    }, [])

    if (item) {
        if (item.descripcion == undefined){
            return (
                <ProductoNoEncontrado />
            )
        }
    }

    return (
        <div>
            {
                loading
                    ? <Loader/>
                    : <ItemDetail item={item}/>
            }  
        </div>
    )
}