import React from 'react';
import { useCart } from "../context/cartContext";
import { Link } from 'react-router-dom';
import './cart.scss';

function Cart() {
    const { cart, subPrice, totalPrice, removeFromCart } = useCart();
    return (
        <div className="cart">
            <div className="cart-item-wrapper">
                {
                    cart.map(product => (
                        <div className="cart-content">
                            <div className="cart-items">
                                <table className="product-table">
                                    <thead className="table-head">
                                        <th className="first-title">Producto</th>
                                        <th className="second-title">Precio por unidad</th>
                                        <th className="third-title">Cantidad</th>
                                        <th className="fourth-title">Precio final</th>
                                    </thead>
                                    <tbody className="table-body">
                                        <tr className="product-detail" key={product.id}>
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
                                                <button className="remove-btn" onClick={() => removeFromCart(product.id)}>X</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        ))             
                }
            </div>
            <div className="cart-resume">
                <h3 className="resume-title">Resumen de tu carrito</h3>
                <div className="resume-end">
                    <span className="subtotal-price">Subtotal: $ {subPrice}</span>
                    <span className="total-price">Total: $ {totalPrice}</span>
                </div>
                <Link to="/checkout">terminar compra</Link>
            </div>
    </div>
    )
}

export default Cart
