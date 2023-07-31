import ImagProd from "../../assets/productos.jpeg";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

export const Producto = () => {

    return(
        <div className="dprod1">
                <h1>PRODUCTOS</h1>
                <img src={ImagProd} alt="Imagen de productos" />

                <div>
                    <ItemListContainer />
                </div>
        </div>
    )
}