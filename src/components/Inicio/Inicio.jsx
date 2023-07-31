import ImagInic from "../../assets/inicio.jpg";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

export const Inicio = () => {

    return(
        <div className="conti">
            <h1>INICIO</h1>
            <img src={ImagInic} alt="Imagen de productos" />
            <div className="cont-titi">
                <h2>Bienvenidos</h2>
                <p>Aquí vas a encontrar los mejores productos veggies</p>
            </div>
            <div>
                <ItemListContainer />
            </div>
        </div>
    )
}