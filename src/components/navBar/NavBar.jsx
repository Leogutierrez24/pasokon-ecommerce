import './navBar.scss'
import React from 'react'
import CartWidget from '../cartWidget/CartWidget'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png';
function NavBar() {
    return (
        <div className="navBar">
            <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
            <nav>
                <ul className="navBar-list">
                    <li className="navBar-items">
                        <Link to="/category/componentes">Componentes</Link>
                        <div className="components">
                            <div className="content-padding"></div>
                            <ul className="components-content">
                                <li className="components-item">Mouse</li>
                                <li className="components-item">Placas de video</li>
                                <li className="components-item">Procesadores</li>
                            </ul>
                        </div>
                    </li>
                    <li className="navBar-items">
                        <Link to="/category/pc-armadas">PC armadas</Link>
                        <div className="components">
                            <div className="content-padding"></div>
                            <ul className="components-content">
                                <li className="components-item">PC Work</li>
                                <li className="components-item">PC Gaming</li>
                                <li className="components-item">PC Ultra</li>
                            </ul>
                        </div>
                    </li>
                    <li className="navBar-items"><Link to="/#">Mi Cuenta</Link></li>
                </ul>
            </nav>
            <CartWidget />
        </div>
    )
}

export default NavBar
