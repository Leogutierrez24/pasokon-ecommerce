import React from 'react';
import { Link } from "react-router-dom";
import './cartWidget.scss'
import cart from '../assets/images/cart.svg'

function CartWidget() {
    return (
        <div className="cart-container">
            <Link exact to="/cart"><img src={cart} alt="carrito" className="cart-logo"/></Link>
        </div>
    )
}

export default CartWidget
