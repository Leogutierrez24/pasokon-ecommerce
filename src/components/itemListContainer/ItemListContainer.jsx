import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import products from '../data/products';
import ItemList from '../itemList/ItemList';
import Banner from '../banner/Banner';
import Loader from '../loader/Loader';
import './itemListContainer.scss';


function ItemListContainer(props) {
    const [itemList, setItemList] = useState([]);
    const [loading, setLoading] = useState(false);
    const { categoryId } = useParams();
    const { saludo } = props;
    
    useEffect( () => {
        const printItems = new Promise ((resolve, reject) => {
            let i = true;
            if(i){
                setLoading(true);
                setTimeout(() => {
                    resolve(products);
                    setLoading(false);
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
            <Banner saludo={saludo} />
            {
                (loading === false)
                    ? <ItemList items={itemList} />
                    : <Loader />
            }
        </div>
    )
}

export default ItemListContainer
