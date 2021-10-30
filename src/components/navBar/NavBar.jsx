import './navBar.scss'
import React from 'react'
import CartWidget from '../cartWidget/CartWidget'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png';
function NavBar() {
    return (
        <div className="navBar">
            <Link exact to="/"><img src={logo} alt="logo" className="logo" /></Link>
            <nav>
                <ul>
                    <li><Link to="/category/componentes">Componentes</Link></li>
                    <li><Link to="/category/pc-armadas">PC armadas</Link></li>
                    <li><Link to="/#">Mi Cuenta</Link></li>
                </ul>
            </nav>
            <CartWidget />
        </div>
    )
}

export default NavBar
