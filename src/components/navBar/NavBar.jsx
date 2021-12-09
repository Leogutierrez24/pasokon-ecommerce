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
                        <span className="main-links">Componentes</span>
                        <div className="submenu">
                            <div className="content-padding"></div>
                            <ul className="submenu-list">
                                <li className="submenu-item"><Link to="/category/mouses" className="sub-links">Mouse</Link></li>
                                <li className="submenu-item"><Link to="/category/gpus" className="sub-links">Placas de video</Link></li>
                                <li className="submenu-item"><Link to="/category/procesadores" className="sub-links">Procesadores</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className="navBar-items">
                        <Link to="/category/pc-armadas" className="main-links">PC armadas</Link>
                    </li>
                    <li className="navBar-items"><Link to="/all" className="main-links">Ver todo</Link></li>
                </ul>
            </nav>
            <CartWidget />
        </div>
    )
}

export default NavBar
