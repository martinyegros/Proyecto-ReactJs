import { ItemCard } from "../ItemCard/ItemCard";
import ImagProd from "../../assets/productos.jpeg";

export const ItemList = ({productos}) => {

    return (
        <div className="catalogo-container">
            <div className="dprod">
                <h1>PRODUCTOS</h1>
                <img src={ImagProd} alt="Imagen de productos" />
            </div>

            <div className="row">
            {
                productos.map((prod) => <ItemCard key={prod.id} item={prod}/>)
            }
            </div>
        </div>
    )
}


