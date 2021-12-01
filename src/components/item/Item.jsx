import React from 'react'
import { Link } from 'react-router-dom'
import './item.scss'

function Item({productos}) {
    return (
        <div key={productos.name} className="item-container">
            <Link to={`/item/${productos.id}`} className="item-img-link"><img src={productos.imgUrl} alt="" className="item-img" /></Link>
            <div className="item-data">
                <Link to={`/item/${productos.id}`} className="item-title">{productos.name}</Link>
                <div className="item-price-container">
                    <p className="item-price"><span>Precio</span> $ {productos.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Item

