import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import products from '../data/products';
import ItemDetail from '../itemDetail/ItemDetail';

function ItemDetailContainer() {
    const [getDetails, setGetDetails] = useState([]);
    const { itemId } = useParams();
    
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

        if(itemId === undefined){
            productDetails
            .then((resp) => {setGetDetails(resp);});
        } else {
            productDetails
            .then((resp) => setGetDetails(resp.filter(i => i.id === itemId)));
        }
}, [itemId]);

    

    return (
        <>
            {getDetails.map((product) => (
                <ItemDetail detail={product} key={product.id}/>
            ))}
        </>
    )
}

export default ItemDetailContainer
