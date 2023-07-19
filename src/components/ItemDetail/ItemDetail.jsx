

export const ItemDetail = ({item}) => {

    return (
        <div className="catalogo2">
            <div className="card2">
                <div className="image-wrapper2">
                    <img src={item.img} alt={item.nombre} className="card-img-top2"/>
                </div>
                <div className="card-body2">
                    <h3 className="card-title2">{item.nombre}</h3>
                    <p className="card-desc">{item.descripcion}</p>
                    <p className="card-precio2">Precio: ${item.precio}</p>
                    <button className="btn btn-dark2">Agregar al carrito</button>
                </div>
            </div>
        </div>
        
    )
}