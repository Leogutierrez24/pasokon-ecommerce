import React from 'react'
import { Link } from 'react-router-dom'
import './item.scss'

function Item({productos}) {
    console.log(productos)
    return (
        <div key={productos.id} className="item-container">
            <Link to={productos.adress} className="item-img-link"><img src={productos.pictureUrl} alt="" className="item-img" /></Link>
            <div className="item-data">
                <Link to={productos.adress} className="item-title">{productos.title}</Link>
                <div className="item-price-container">
                    <p className="item-price"><span>Precio</span>{productos.price}</p>
                    <button className="add-btn2"><span>Agregar al carrito</span></button>
                </div>
            </div>
        </div>
    )
}

export default Item

