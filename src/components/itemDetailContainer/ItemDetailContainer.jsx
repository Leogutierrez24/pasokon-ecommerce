import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import products from '../data/products';
import ItemDetail from '../itemDetail/ItemDetail';
import Loader from '../loader/Loader';

function ItemDetailContainer() {
    const [getDetails, setGetDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const { itemId } = useParams();
    
    useEffect(() => {
        const productDetails = new Promise((resolve, reject) => {
            let i = true;
        if(i){
            setLoading(true);
            setTimeout(() => {
                resolve(products);
                setLoading(false);
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
        <div className="itemDetail">
            {
                (loading === false)
                    ? getDetails.map((product) => (
                        <ItemDetail detail={product} key={product.id}/>
                        )): <Loader /> 
            }
            
        </div>
    )
}

export default ItemDetailContainer
