export const ItemCard = ({item}) => {

    return (
        <div className="card">
            <div className="image-wrapper">
                <img src={item.img} alt={item.nombre} className="card-img-top"/>
            </div>
            <div className="card-body">
                <h3 className="card-title">{item.nombre}</h3>
                <p className="card-precio">Precio: {item.precio}</p>
                <button className="btn btn-dark">Ver más</button>
            </div>
        </div>
    )
}
