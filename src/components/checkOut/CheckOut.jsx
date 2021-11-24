import React, { useState } from 'react';
import { useCart } from '../context/cartContext';
import { Link } from 'react-router-dom';
import { getFirestore } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import './checkOut.scss';

function CheckOut() {
    const { cart, totalPrice, clearCart } = useCart();
    const [inputName, setInputName] = useState();
    const [inputSurname, setInputSurname] = useState();
    const [inputTel, setInputTel] = useState();
    const [inputEmail, setInputEmail] = useState();
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
        console.log(order);
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
                                    <button onClick={(e) => handleSubmit(e)} id="purchase-btn">Realizar Pedido</button>
                                </form>
                            </div>
                            <div className="cart-resume">
                                {
                                    cart.map((item) => <div key={item.id}>
                                        <span>{item.name} x {item.cantidad} ${item.price}</span>
                                    </div>)
                                }
                                <span>Total: ${totalPrice}</span>
                            </div>
                        </div>
                    : <div>
                        <h3>¡Compra realizada con existo!</h3>
                        <p>El código de tu compra es: {orderComplete}</p>
                        <Link to="/" onClick={clearCart} >Pagar</Link>
                    </div>
            }
        </div>
    )
}

export default CheckOut;
