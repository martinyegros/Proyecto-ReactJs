import logoMerPag from "../../assets/mercadopago.png";
import logoMasterc from "../../assets/master.png";
import logoVisa from "../../assets/visa.png";
import logoAmerican from "../../assets/american.png";
import logoNaranja from "../../assets/naranja.png";
import logoCabal from "../../assets/cabal.png";
import logoMaestro from "../../assets/maestro.png";
import logoPagof from "../../assets/pagofacil.png";
import logoRapi from "../../assets/rapipago.png";
import logoInstagram from "../../assets/instagram.png";
import logoFacebook from "../../assets/facebook.png";

export const Footer = () => {

    return (
        <footer className="foot">
            <div className="footp">
                <div className="foot-1">
                    <h4 className="titf1">Medios de Pago</h4>
                    <div className="logos1">
                        <img src={logoMerPag} alt="Logo de la Mercado pago" />
                        <img src={logoMasterc} alt="Logo de la Mastercard" />
                        <img src={logoVisa} alt="Logo de Visa" />
                        <img src={logoAmerican} alt="Logo de American" />
                        <img src={logoNaranja} alt="Logo de Naranja" />
                        <img src={logoCabal} alt="Logo de Cabal" />
                        <img src={logoMaestro} alt="Logo de Maestro" />
                        <img src={logoPagof} alt="Logo de Pago fácil" />
                        <img src={logoRapi} alt="Logo de Rapi pago" />
                    </div>
                </div>
                <div className="foot-2">
                    <h4 className="titf3">Contacto</h4>
                    <p>marveg@mail.com</p>
                    <p>4444-4444</p>
                </div>
            </div>
            <div className="foot-3">
                <div className="logos4">
                    <a href="https://instagram.com/" target="_blank">
                        <img src={logoInstagram} alt="Logo de Instagram" />
                    </a>
                    <a href="http://es-la.facebook.com/" target="_blank">
                        <img src={logoFacebook} alt="Logo de Facebook" />
                    </a>
                </div>
                <div className="creado">
                    <p>Copyright © 2023</p>
                    <p>Creado por Martin Yegros</p>
                </div>
            </div>
        </footer>
    )
}