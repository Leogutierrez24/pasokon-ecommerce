import './navBar.scss'
import React from 'react'

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
        </div>
    )
}

export default NavBar
