import './navBar.scss'
import React from 'react'
import CartWidget from '../cartWidget/CartWidget'

function NavBar() {
    return (
        <div className="navBar">
            <a href="/#" className="logo">Pasokon</a>
            <nav>
                <ul>
                    <li><a href="/#">Componentes</a></li>
                    <li><a href="/#">PC armadas</a></li>
                    <li><a href="/#">Mi Cuenta</a></li>
                </ul>
            </nav>
            <CartWidget />
        </div>
    )
}

export default NavBar
