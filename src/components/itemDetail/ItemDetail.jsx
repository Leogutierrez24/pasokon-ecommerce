import React, { useState } from 'react';
import './itemDetail.scss'
import payments from '../assets/images/payments-img.jpg'
import ItemCount from '../itemCount/ItemCount';
import { AddModal } from '../addModal/AddModal';

function ItemDetail({ detail }) {
    const [toAdd, setToAdd] = useState(0);
    const [modal, setModal] = useState(false);

    const handleCount = (contador) => {
        setToAdd(toAdd + contador);
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
    }

    // useEffect(() => {
    // }, []);

    console.log(toAdd);

    return (
        <div className="itemDetail-container">
            <div className="image-container">
                <div className="primary-img">
                    <img src={detail.pictureUrl} alt="producto" />
                </div>
                <ul className="images-container">
                    <li className="secondary-img"></li>
                    <li className="secondary-img"></li>
                </ul>
            </div>
            <div className="detail-container">
                <div className="title-container">
                    <h3 className="detail-title">{detail.title}</h3>
                </div>
                <div className="pay-container">
                    <span className="detail-price">{detail.price}</span>
                    <div className="payments-container">
                        <img src={payments} alt="tarjetas" className="payments" />
                        <span className="cuotas">¡Hasta 12 cuotas!</span>
                    </div>
                    <ItemCount stock={3} initial={1} onAdd={handleCount} />
                </div>
            </div>
            <div className="description">
                <div className="detail-descriptionContainer">
                    <span className="detail-descriptionTitle">Descripcion</span>
                    <p className="detail-description">{detail.description}</p>
                </div>                
            </div>
            {(modal)
                ? <AddModal closeModal={closeModal} title={"¡Agregado al carrito con éxito!"} /> : null}
            
        </div>
    )
}

export default ItemDetail
