import React from 'react'
import './itemDetail.scss'

function ItemDetail({ detail }) {
    return (
        <div className="itemDetail-container">
            <img src={detail.pictureUrl} alt="imagen del producto" />
            <h3>{detail.title}</h3>
            <span>Descripcion:</span>
            <p>{detail.description}</p>
            <p>Precio: {detail.price}</p>
        </div>
    )
}

export default ItemDetail
