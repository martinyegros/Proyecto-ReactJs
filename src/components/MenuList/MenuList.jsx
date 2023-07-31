import { Link } from 'react-router-dom';

export const MenuList = ( {close} ) => {

    return (
        <div className="menu-back">
            <nav className='navbar2'>
                <Link onClick={close} className="navbar-link2" to="/productos">TODOS</Link>
                <Link onClick={close} className="navbar-link2" to="/productos/Pastas">PASTAS</Link>
                <Link onClick={close} className="navbar-link2" to="/productos/Snacks">SNACKS</Link>
                <Link onClick={close} className="navbar-link2" to="/productos/Aderezos">ADEREZOS</Link>
                <Link onClick={close} className="navbar-link2" to="/productos/Harinas">HARINAS</Link>
                <Link onClick={close} className="navbar-link2" to="/productos/Congelados">CONGELADOS</Link>
                <Link onClick={close} className="navbar-link2" to="/productos/Almacen">ALMACÉN</Link>
            </nav>
        </div>
    )
}