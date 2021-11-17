import React from 'react'
import { Link } from 'react-router-dom';
import Cart from '../cart/Cart';
import { useCart } from '../context/cartContext';

function CartContainer() {
    const { cart } = useCart();

    return (
        <div className="cart-container">
          {
              !(cart.length === 0)
                ? <Cart />
                :   <div>
                        <h3>No hay productos en el carrito</h3>
                        <Link exact to="/" className="btn-return">Volver</Link>
                    </div>
          }  
        </div>
    )
}

export default CartContainer
