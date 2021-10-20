import React, { useState, useEffect } from 'react';
// import ItemCount from '../itemCount/ItemCount';
import products from '../data/products';
import ItemList from '../itemList/ItemList';
import './itemListContainer.scss';

function ItemListContainer(props) {
    const [itemList, setItemList] = useState([]);
    const { saludo } = props;
    // const handleCount = (contador) => {
    //     alert(`Agregaste: ${contador}`);
    // }
    
    useEffect( () => {
        // mock visual que "carga" los productos y cuando resuelve devuelve el array con la data
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

        // como resolvió el mock, se setean el array de los productos en el useState de itemList
        printItems.then((resp) => setItemList(resp));
        // por si da error
        printItems.catch((err) => {console.log('algo salio mal' + err);});
    }, []);

    return (
        <div className="items-container">
            <h3 className="hero-title">{saludo}</h3>
            {/* <ItemCount stock={3} initial={1} onAdd={handleCount} /> */}
            <ItemList items={itemList} />
        </div>
    )
}

export default ItemListContainer
