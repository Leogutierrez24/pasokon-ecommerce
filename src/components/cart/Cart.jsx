import React from 'react';
import { useCart } from "../context/cartContext";

function Cart() {
    const { cart } = useCart();
    console.log(cart)
    return (
        <div>
            {
                !(cart.length === 0)
                    ? cart.map(product => (
                        <div key={product.id}>
                            <p>{product.title}</p>
                            <small>{product.price}</small>
                            <span> x {product.cantidad}</span>
                        </div>
                    )) 
                    : <h1>El carrito esta vacío</h1>                
            }
        </div>
    )
}

export default Cart
