import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
// import ItemCount from '../itemCount/ItemCount';
import products from '../data/products';
import ItemList from '../itemList/ItemList';
import './itemListContainer.scss';

function ItemListContainer(props) {
    const [itemList, setItemList] = useState([]);
    const { categoryId } = useParams();
    const { saludo } = props;
    // const handleCount = (contador) => {
    //     alert(`Agregaste: ${contador}`);
    // }
    
    useEffect( () => {
        const printItems = new Promise ((resolve, reject) => {
            let i = true;
            if(i){
                setTimeout(() => {
                    resolve(products);
                }, 2000);
            } else {
                reject(console.log('algo salio mal'));
            }
        });

        if(categoryId === undefined){
            printItems.then((resp) => setItemList(resp));
        } else {
            printItems.then(resp => setItemList(resp.filter(i => i.category === categoryId)));
        }
    }, [categoryId]);

    return (
        <div className="items-container">
            <h3 className="hero-title">{saludo}</h3>
            {/* <ItemCount stock={3} initial={1} onAdd={handleCount} /> */}
            <ItemList items={itemList} />
        </div>
    )
}

export default ItemListContainer
