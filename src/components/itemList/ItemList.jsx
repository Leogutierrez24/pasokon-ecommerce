import React from 'react'
import Item from '../item/Item'
import './itemList.scss'

function ItemList( {items} ) {
    console.log(items)
    return (
        <div className="item-list">
            {items.map((item) => (
                <Item productos={item} key={item.id}/>
            ))}
        </div>
    )
}

export default ItemList
