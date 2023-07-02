import LogoMarca from '../assets/Marveg.jpg';
import { CartWidget } from "./CartWidget";

export const NavBar = () => {

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-logo">
                    <img src={LogoMarca} alt="Logo de la marca" />
                </div>

                <nav className="navbar">
                    <a className="navbar-link" href="">INICIO</a>
                    <a className="navbar-link" href="">PRODUCTOS</a>
                    <a className="navbar-link" href="">RECETAS</a>
                    <a className="navbar-link" href="">NOSOTROS</a>
                </nav>

                <div>
                    <CartWidget />
                </div>
            </div>    
        </header>
    )
};