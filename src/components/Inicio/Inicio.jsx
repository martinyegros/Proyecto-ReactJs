import ImagInic from "../../assets/veggie.jpg";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

export const Inicio = () => {

    return(
        <div className="conti">
            <div className="cont-img">
                <img src={ImagInic} alt="Imagen de productos" />
            </div>
            <div className="cont-titi">
                <h1>Bienvenidos</h1>
                <p>Aquí vas a encontrar los mejores productos veggies</p>
            </div>
            <div>
                <ItemListContainer />
            </div>
        </div>
    )
}