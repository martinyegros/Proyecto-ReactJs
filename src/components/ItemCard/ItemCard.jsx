import { Link } from "react-router-dom"

export const ItemCard = ({item}) => {

    return (
        <div className="card">
            <div className="image-wrapper">
                <img src={item.img} alt={item.nombre} className="card-img-top"/>
            </div>
            <div className="card-body">
                <h3 className="card-title">{item.nombre}</h3>
                <p className="card-precio">Precio: ${item.precio}</p>
                {item.stock < 10 && <p className="tit-unid">Quedan sólo {item.stock} unidades</p>}
                <div className="btndd">
                    <Link to={`/detail/${item.id}`} className="btn-dark">Ver más</Link>
                </div>
            </div>
        </div>
    )
}
