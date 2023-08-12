import { Link } from 'react-router-dom';

export const MenuInfoList = ( {close} ) => {

    return (
        <div className="menu-back">
            <nav className='navbar2'>
                <Link onClick={close} className="navbar-link2" to="/mediosdepago">MEDIOS DE PAGO</Link>
                <Link onClick={close} className="navbar-link2" to="/entrega-envios">ENTREGA/EVIOS</Link>
            </nav>
        </div>
    )
}