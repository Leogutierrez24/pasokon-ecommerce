import React from 'react'
import ItemCount from '../itemCount/ItemCount';
import './itemListContainer.scss'

function ItemListContainer(props) {

    const { saludo } = props;
    const handleCount = (contador) => {
        alert(`Agregaste: ${contador}`);
    }

    return (
        <div className="items-container">
            <h3 className="hero-title">{saludo}</h3>
            <ItemCount stock={3} initial={1} onAdd={handleCount} />
        </div>
    )
}

export default ItemListContainer
