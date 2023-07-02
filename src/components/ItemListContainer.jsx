
const ItemListContainer = ({productos}) => {

    return (
        <div className="catalogo-container">
            <h1>Lista de productos</h1>
            <hr />

            <p>{productos}</p>
        </div>
    )
};

export default ItemListContainer

