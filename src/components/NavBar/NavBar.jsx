import { CartWidget } from "../CartWidget/CartWidget.jsx";
import logoMarca from "../../assets/Marveg.jpg";
import { Link } from 'react-router-dom';

export const NavBar = () => {

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-logo">
                    <img src={logoMarca} alt="Logo de la marca" />
                </div>

                <nav className="navbar">
                    {/* <a className="navbar-link" href="/">INICIO</a>
                    <a className="navbar-link" href="">PRODUCTOS</a>
                    <a className="navbar-link" href="">RECETAS</a>
                    <a className="navbar-link" href="">NOSOTROS</a> */}
                    <Link className="navbar-link" to="/">INICIO</Link>
                    <Link className="navbar-link" to="/productos/Pastas">PASTAS</Link>
                    <Link className="navbar-link" to="/productos/Snacks">SNACKS</Link>
                    <Link className="navbar-link" to="/productos/Aderezos">ADEREZOS</Link>
                    <Link className="navbar-link" to="/productos/Harinas">HARINAS</Link>
                    <Link className="navbar-link" to="/productos/Congelados">CONGELADOS</Link>
                    <Link className="navbar-link" to="/productos/Almacen">ALMACÉN</Link>
                </nav>

                <div>
                    <CartWidget />
                </div>
            </div>    
        </header>
    )
};