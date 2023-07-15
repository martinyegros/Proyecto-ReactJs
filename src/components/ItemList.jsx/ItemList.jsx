import { ItemCard } from "../ItemCard/ItemCard"

export const ItemList = ({productos}) => {

    return (
        <div className="catalogo-container">
            <h1>Lista de productos</h1>
            <hr />

            <div className="row">
            {
                productos.map((prod) => <ItemCard key={prod.id} item={prod}/>)
            }
            </div>
        </div>
    )
}


