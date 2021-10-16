import React, { useState } from 'react'
import './itemCount.scss'

function ItemCount({stock, initial, onAdd}) {
    const [contador, setContador] = useState(initial);

    const handleRemove = () => {
        if(contador <= stock && contador > 1){
            setContador(contador - 1);
        }
    }

    const handleAdd = () => {
        if(contador < stock){
            setContador(contador + 1);
        }
    }

    const handleOnAdd = () => {
        if(stock !== 0){
            onAdd(contador);
        }
    }

    return (
        <div className="item-counter">
            <div className="moreLess-btns">
                <button onClick={(handleRemove)} className="less-btn">-</button>
                <span className="counter">{contador}</span>
                <button onClick={(handleAdd)} className="more-btn">+</button>
            </div>
            <button onClick={(handleOnAdd)} className="add-btn">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
