import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
// import products from '../data/products';
import ItemList from '../itemList/ItemList';
import Banner from '../banner/Banner';
import Loader from '../loader/Loader';
import { getFirestore } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import './itemListContainer.scss';


function ItemListContainer(props) {
    const [itemList, setItemList] = useState([]);
    const [loading, setLoading] = useState(false);
    const { categoryId } = useParams();
    const { saludo } = props;
    
    useEffect( () => {
        // const printItems = new Promise ((resolve, reject) => {
        //     let i = true;
        //     if(i){
        //         setLoading(true);
        //         setTimeout(() => {
        //             resolve(products);
        //             setLoading(false);
        //         }, 2000);
        //     } else {
        //         reject(console.log('algo salio mal'));
        //     }
        // });
        const db = getFirestore();
        const q = categoryId ? query(collection(db, 'items'), where('category', '==', categoryId)) : collection(db, 'items');
        getDocs(q).then((snapshot) => {
            setLoading(true);
            setTimeout(() => {
                setItemList(snapshot.docs.map((doc) => doc.data()));
                setLoading(false);
            }, 2000)
        });

        // getDocs(collection(db, 'items'))
        // .then((snapshot) => {
        //     setLoading(true);
        //     setTimeout(() => {
        //         setItemList(snapshot.docs.map((doc) => doc.data()));
        //         setLoading(false);
        //     }, 2000)
        // });

    }, [categoryId]);

    // console.log(itemList)

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
