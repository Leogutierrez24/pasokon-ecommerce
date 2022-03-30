import './navBar.scss'
import React from 'react'
import CartWidget from '../cartWidget/CartWidget'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png';

const NavBar = () => {
    return (
        <>
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
                <div className="userLog">
                    <Link to="/account" className="user-logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>
                    </Link>
                </div>
                <CartWidget />
            </div>
            <div className="mobile-menu">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>
            </div>
        </>
    );
};

export default NavBar;