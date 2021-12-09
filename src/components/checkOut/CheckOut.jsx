import React, { useState } from 'react';
import { useCart } from '../context/cartContext';
import { Link } from 'react-router-dom';
import { getFirestore } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import './checkOut.scss';

function CheckOut() {
    const { cart, totalPrice, clearCart } = useCart();
    const [inputName, setInputName] = useState('');
    const [inputSurname, setInputSurname] = useState('');
    const [inputTel, setInputTel] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [orderComplete, setOrderComplete] = useState();

    const handleInputName = (e) => {
        setInputName(e.target.value);
    }

    const handleInputSurname = (e) => {
        setInputSurname(e.target.value);
    }

    const handleInputTel = (e) => {
        setInputTel(e.target.value);
    }

    const handleInputEmail = (e) => {
        setInputEmail(e.target.value);
    }

    const buttonDisabled = () => {
        if(inputName === "" || inputSurname === "" || inputEmail === "" || inputTel === ""){
            return true;
        } else {
            return false;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const buyer = {
            name: `${inputName}`,
            surname: `${inputSurname}`,
            tel: `${inputTel}`,
            email: `${inputEmail}`
        }
        const items = cart;
        const total = totalPrice;
        const order = {buyer, items, total};

        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');

        addDoc(ordersCollection, order)
        .then(({ id }) => setOrderComplete(id))
        .catch(console.log('ocurrio un error'));
    }

    return (
        <div className="checkout">
            {
                (!(orderComplete)) 
                    ?  <div className="checkout-container">
                            <div className="user-info">
                                <form action="" className="user-form">
                                    <input 
                                        type="text"
                                        placeholder="Nombre"
                                        id="user-name"
                                        value={inputName}
                                        onChange={handleInputName}
                                    />
                                    <input 
                                        type="text"
                                        placeholder="Apellido"
                                        id="user-surname"
                                        value={inputSurname}
                                        onChange={handleInputSurname}
                                    />
                                    <input
                                        type="text" 
                                        placeholder="Teléfono"
                                        id="user-tel"
                                        value={inputTel}
                                        onChange={handleInputTel}
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        id="user-mail"
                                        value={inputEmail}
                                        onChange={handleInputEmail}
                                    />
                                    <button disabled={buttonDisabled()} onClick={(e) => handleSubmit(e)} id="purchase-btn">Realizar Pedido</button>
                                </form>
                            </div>
                            <div className="cart-resume">
                                {
                                    cart.map((item) => <div key={item.id} className="final-item">
                                        <span>{item.name} x {item.cantidad} ${item.price}</span>
                                    </div>)
                                }
                                <span className="total-price">Total: ${totalPrice}</span>
                                <Link to="/cart" className="back-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                                    </svg>
                                    <span>Volver</span>
                                </Link>
                            </div>
                        </div>
                    : <div className="successfull">
                        <h3>¡Compra realizada con exito!</h3>
                        <p>El código de tu compra es: {orderComplete}</p>
                        <Link to="/" onClick={clearCart}>Pagar</Link>
                    </div>
            }
        </div>
    )
}

export default CheckOut;
