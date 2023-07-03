
export const CartWidget = () => {

    return (
        <div className="icon-container">
            <img className='icon-cart' src="/vegetales.png" alt="Logo del carrito" />
            <div className="count-products">
                <span className="contador-productos">0</span>
            </div>
        </div>
    )
};