import React from 'react'
import { Link } from 'react-router-dom'
import './item.scss'

function Item({productos}) {
    return (
        <div key={productos.name} className="item-container">
            <Link to={`/item/${productos.id}`} className="item-link">
            <div className="item-image">
                <img src={productos.imgUrl} alt="" className="item-img" />
            </div>
            <div className="item-data">
                <p className="item-title">{productos.name}</p>
                <div className="item-price-container">
                    <p className="item-price"><span>Precio</span> ${productos.price}</p>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default Item

