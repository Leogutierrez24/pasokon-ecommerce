import React from 'react'
import './cartWidget.scss'
import cart from '../assets/images/cart.svg'

function CartWidget() {
    return (
        <div className="cart-container">
            <a href="/#"><img src={cart} alt="carrito" /></a>
        </div>
    )
}

export default CartWidget
