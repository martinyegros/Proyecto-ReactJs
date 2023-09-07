import { Link } from 'react-router-dom';

export const MenuInfoList = ( {close} ) => {

    return (
        <div className="menu-back1">
            <nav className='navbar3'>
                <Link onClick={close} className="navbar-link3" to="/mediosdepago">MEDIOS DE PAGO</Link>
                <Link onClick={close} className="navbar-link3" to="/entrega-envios">ENTREGA/ENVÍOS</Link>
            </nav>
        </div>
    )
}