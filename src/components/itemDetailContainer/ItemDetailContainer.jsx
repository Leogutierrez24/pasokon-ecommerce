import React, { useEffect, useState } from 'react';
import products from '../data/products';
import ItemDetail from '../itemDetail/ItemDetail';

function ItemDetailContainer() {
    const [getDetails, setGetDetails] = useState([]);
    useEffect(() => {
        const productDetails = new Promise((resolve, reject) => {
            let i = true;
        if(i){
            setTimeout(() => {
                resolve(products);
            }, 2000);
        } else {
            reject(console.log('ups algo salio mal'));
        }
        });

        productDetails
        .then((resp) => {setGetDetails(resp);})
        .catch(err => {console.log('ups algo salio mal' + err);});
}, []);

    

    return (
        <>
            {getDetails.map((product) => (
                <ItemDetail detail={product} key={product.id}/>
            ))}
        </>
    )
}

export default ItemDetailContainer
