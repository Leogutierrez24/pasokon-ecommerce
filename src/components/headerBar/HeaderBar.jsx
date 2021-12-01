import React from 'react';
import NavBar from '../navBar/NavBar';
import './headerBar.scss';

function HeaderBar() {
    return (
        <div className="headerBar">
            <header className="headerBar-content">
                <NavBar />
            </header>
        </div>
    )
}

export default HeaderBar
