import { CartWidget } from "../CartWidget/CartWidget.jsx";
import logoMarca from "../../assets/Marveg.jpg";
import { Menu } from "../Menu/Menu.jsx";
import { Link } from 'react-router-dom';

export const NavBar = () => {

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-logo">
                    <img src={logoMarca} alt="Logo de la marca" />
                </div>

                <nav className="navbar">
                    <Link className="navbar-link" to="/">INICIO</Link>
                    <Menu />
                    <Link className="navbar-link" to="/información">INFORMACIÓN</Link>
                    <Link className="navbar-link" to="/contacto">CONTACTO</Link>
                </nav>

                <div>
                    <CartWidget />
                </div>
            </div>    
        </header>
    )
};