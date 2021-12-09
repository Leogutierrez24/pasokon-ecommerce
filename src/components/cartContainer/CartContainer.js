import React from 'react'
import { Link } from 'react-router-dom';
import Cart from '../cart/Cart';
import { useCart } from '../context/cartContext';
import oops from '../assets/images/cart-empty.svg';

function CartContainer() {
    const { cart } = useCart();

    return (
        <div className="cart-container">
          {
              !(cart.length === 0)
                ? <Cart />
                :   <div className="cart-empty">
                        <img src={oops} alt="carro vacío" className="oops-icon" />
                        <h3 className="empty-text">Oops! parece que tu carrito esta vacío</h3>
                        <Link to="/all" className="btn-return">Volver</Link>
                    </div>
          }  
        </div>
    )
}

export default CartContainer
