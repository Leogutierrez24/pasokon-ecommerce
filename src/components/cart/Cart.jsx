import React from 'react';
import { useCart } from "../context/cartContext";
import { Link } from 'react-router-dom';
import './cart.scss';

function Cart() {
    const { cart, subPrice, totalPrice, removeFromCart } = useCart();
    return (
        <div className="cart">
            <div className="cart-item-wrapper">
                        <div className="cart-content">
                            <div className="cart-items">
                                <table className="product-table">
                                    <thead className="table-head">
                                        <tr>
                                            <th className="first-title">Producto</th>
                                            <th className="second-title">Precio por unidad</th>
                                            <th className="third-title">Cantidad</th>
                                            <th className="fourth-title">Precio final</th>
                                        </tr>
                                    </thead>
                                    {
                                        cart.map(product => (
                                            <tbody className="table-body" key={product.id}>
                                                <tr className="product-detail">
                                                    <td className="product-title">
                                                        <img className="product-img" src={product.imgUrl} alt="imagen del producto" />
                                                        <span className="product-name">{product.name}</span>
                                                    </td>
                                                    <td className="product-price">
                                                        <span>$ {product.price}</span>
                                                    </td>
                                                    <td className="product-quantity">
                                                        <span>{product.cantidad}</span>
                                                    </td>
                                                    <td className="final-price">
                                                        <span>$ {product.finalPrice}</span>
                                                    </td>
                                                    <td className="revome-product">
                                                        <button className="remove-btn" onClick={() => removeFromCart(product.id)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                                        </svg>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        ))
                                    }
                                </table>
                            </div>
                        </div>
            </div>
            <div className="cart-resume">
                <h3 className="resume-title">Resumen de tu carrito</h3>
                <div className="resume-totals">
                    <span className="subtotal-price">Subtotal: $ {subPrice}</span>
                    <span className="total-price">Total: $ {totalPrice}</span>
                </div>
                <div className="resume-end">
                    <Link to="/checkout" className="checkOut-btn">Terminar compra</Link>
                    <Link to="/all" className="keepBuying-btn">Seguir comprando</Link>
                </div>
            </div>
    </div>
    )
}

export default Cart
