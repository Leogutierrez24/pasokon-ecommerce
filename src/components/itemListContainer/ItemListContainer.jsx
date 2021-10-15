import React from 'react'
import './itemListContainer.scss'

function ItemListContainer(props) {

    const { saludo } = props;

    return (
        <div className="items-container">
            <h3 className="hero-title">{saludo}</h3>
        </div>
    )
}

export default ItemListContainer
