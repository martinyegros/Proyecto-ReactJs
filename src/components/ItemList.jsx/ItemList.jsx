import { ItemCard } from "../ItemCard/ItemCard";

export const ItemList = ({productos}) => {

    return (
        <div className="catalogo-container">
            <div className="row">
            {
                productos.map((prod) => <ItemCard key={prod.id} item={prod}/>)
            }
            </div>
        </div>
    )
}


