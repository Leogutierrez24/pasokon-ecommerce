import React from 'react'
import './item.scss'

function Item({productos}) {
    console.log(productos)
    return (
        <div key={productos.id} className="item-container">
            <a href="/#" className="product-img-link"><img src={productos.pictureUrl} alt="" className="product-img" /></a>
            <div className="product-data">
                <a href="/#" className="product-title">{productos.title}</a>
                <p><span>Precio</span>{productos.price}</p>
                <button className="add-btn2"><span>Agregar al carrito</span></button>
            </div>
        </div>
    )
}

export default Item

