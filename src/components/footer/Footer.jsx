import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="contact-info">
                        <p>Contactanos</p>
                        <ul className="contact-list">
                            <li className="contact-item"><span>Teléfono: </span>KL5-3226</li>
                            <li className="contact-item"><span>Mail: </span>info@pasokon.com.ar</li>
                            <li className="contact-item"><span>Soporte: </span>ayuda@pasokon.com.ar</li>
                            <li className="contact-item"><span>Horario de atención: </span>lunes a viernes de 10 a 19 hrs / sabados de 10 a 16 hrs</li>
                        </ul>
                    </div>
                    <div className="menu-links">
                        <p>Menu:</p>
                        <ul className="menu-list">
                            <li className="menu-items"><Link to="/">Inicio</Link></li>
                            <li className="menu-items"><Link to="/category/componentes">Componentes</Link></li>
                            <li className="menu-items"><Link to="/category/pc-armadas">PC Armadas</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
